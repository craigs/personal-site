import React, {useState} from 'react'

import Styles from './index.css'

export const Subscribe = () => {
  const [data, setData] = useState({msg: null})
  const [loading, setLoading] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState(null)

  const onChange = event => setEmail(event.target.value)

  const subscribe = async event => {
    event.preventDefault()
    setLoading(true)

    const response = await fetch('/api/subscribe', {
      body: JSON.stringify({email}),
      method: 'POST'
    })

    const json = await response.json()

    setData(json)
    setLoading(false)

    if (json.msg === 'OK') setSubscribed(true)
  }

  return (
    <div className={Styles.subscribe}>
      {subscribed && (
        <>
          <h1>You have been subscribed</h1>

          <p className={Styles.description}>
            When an article is posted, we will sent out an announcement to{' '}
            {email}
          </p>
        </>
      )}

      {!subscribed && (
        <>
          <h1>Subscribe to announcements</h1>

          <p className={Styles.description}>
            If you would like to be notified when a new article is published,
            add yourself to the mailing list.
          </p>

          <input
            onChange={onChange}
            placeholder="your@email.address"
            type="text"
          />

          <button onClick={subscribe} disabled={loading}>
            {!loading && <>Subscribe</>}
            {loading && <>Subscribing</>}
          </button>

          {data.msg && <p>{data.msg}</p>}
        </>
      )}
    </div>
  )
}
