import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Chant from '../chant'
import chants from '../chants'
import styles from './anthologia.module.sass'
import listStyles from '../list.module.sass'

type Collection = {
  title: string
  content: number[]
}

const COLLECTIONS = [
  {
    title: 'Литургия',
    content: [0, 8, 1, 5],
  },
]

export default function Component() {
  const { collection } = useParams()
  const index = React.useMemo(
    () =>
      collection && !isNaN(Number(collection)) ? Number(collection) : null,
    [collection]
  )
  const [collections] = React.useState<Collection[]>(COLLECTIONS)

  return index === null ? (
    <>
      <h2>Сборници</h2>
      <ul className={listStyles.list}>
        {collections
          .map((collection, index) => ({ collection, index }))
          .sort((a, b) => a.collection.title.localeCompare(b.collection.title))
          .map(({ collection, index }) => (
            <li key={index}>
              <NavLink to={index.toString()}>{collection.title}</NavLink>
            </li>
          ))}
      </ul>
    </>
  ) : (
    <>
      <h2>{collections[index].title}</h2>
      <ul className={styles.anthologion}>
        {collections[index].content.map((index) => (
          <li key={index}>
            <Chant {...chants[index]} />
          </li>
        ))}
      </ul>
    </>
  )
}
