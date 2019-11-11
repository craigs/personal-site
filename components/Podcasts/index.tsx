import { Podcast } from '../Podcast'

import Styles from './index.css'

export const Podcasts = ({ collection }) => (
  <div className={Styles.podcasts}>
    {collection.map(podcast => (
      <Podcast key={podcast.id} {...podcast} />
    ))}
  </div>
)
