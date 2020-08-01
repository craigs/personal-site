import React, { FC } from 'react'
import { IPodcast } from '~typings/IPodcast'
import { Podcast } from '../Podcast'

import Styles from './index.module.scss'

interface IPodcastsProps {
  collection: IPodcast[]
}

export const Podcasts: FC<IPodcastsProps> = ({ collection }) => (
  <div className={Styles.podcasts}>
    {collection.map(podcast => (
      <Podcast key={podcast.id} {...podcast} />
    ))}
  </div>
)
