import nock from 'nock'

import subscribe from '../../../pages/api/subscribe'

const mockResponse = () => {
  const res = { status: null, json: null, text: null }
  res.status = jest.fn().mockReturnValue(res)
  res.text = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  return res
}
describe('subscribe', () => {
  const originalEnv = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...originalEnv }

    const env = {
      CM_API: 'ABC',
      CM_LISTID: '123'
    }

    process.env = { ...originalEnv, ...env }
  })

  afterEach(() => {
    process.env = originalEnv
  })

  it('calls campaign monitor', async done => {
    const email = 'hi@craigs.io'
    const req = { body: JSON.stringify({ email }) }
    const res = mockResponse()

    nock('https://api.createsend.com')
      .post(`/api/v3.1/subscribers/${process.env.CM_LISTID}.json`)
      .reply(200, 'hi@craigs.io')

    await subscribe(req, res)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ msg: 'OK' })

    done()
  })

  it('displays campaign monitor errors', async done => {
    const email = 'hi@craigs.io'
    const req = { body: JSON.stringify({ email }) }
    const res = mockResponse()

    const scope = nock('https://api.createsend.com')
      .post(`/api/v3.1/subscribers/${process.env.CM_LISTID}.json`)
      .reply(400, { Code: 204, Message: 'In Suppression List' })

    await subscribe(req, res)

    expect(res.status).toHaveBeenCalledWith(406)
    expect(res.json).toHaveBeenCalledWith({ msg: 'In Suppression List' })

    done()
  })
})
