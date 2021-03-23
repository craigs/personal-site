import React, { FC } from 'react'
import { Podcast as PodcastInterface } from '~typings'
import { Podcast } from '../Podcast'

import Styles from './index.module.scss'

interface PodcastsProps {
  collection: PodcastInterface[]
}

export const Podcasts: FC<PodcastsProps> = ({ collection }) => (
  <div className={Styles.podcasts}>
    {collection.map(podcast => (
      <Podcast key={podcast.id} {...podcast} />
    ))}
  </div>
)
