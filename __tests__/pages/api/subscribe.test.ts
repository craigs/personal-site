import subscribe from '../../../pages/api/subscribe'

jest.mock('createsend-node', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({
    subscribers: {
      addSubscriber: jest
        .fn()
        .mockImplementation((listId, details, callback) => callback())
    }
  }))
}))

const mockResponse = () => {
  const res = { status: null, json: null }
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  return res
}

describe('subscribe', () => {
  const originalEnv = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...originalEnv }

    const env = {
      CM_API: 'sample campaign monitor api key',
      CM_LISTID: 'sample campaign monitor list id'
    }

    process.env = { ...originalEnv, ...env }
  })

  afterEach(() => {
    process.env = originalEnv
  })

  it('calls campaign monitor', async done => {
    const req = { body: JSON.stringify({ email: 'hi@craigs.io' }) }
    const res = mockResponse()

    await subscribe(req, res)

    expect(process.env.CM_API).toBe('sample campaign monitor api key')
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ msg: 'OK' })

    done()
  })
})
