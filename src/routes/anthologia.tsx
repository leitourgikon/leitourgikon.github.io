import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Chant from '../chant'
import chants from '../chants'
import Echos from '../echos'
import styles from './anthologia.module.sass'
import listStyles from '../list.module.sass'

type Collection = {
  title: string
  content: number[]
}

export default function Component() {
  const { collection } = useParams()
  const index = React.useMemo(
    () =>
      collection && !isNaN(Number(collection)) ? Number(collection) : null,
    [collection]
  )
  const [collections, setCollections] = React.useState<Collection[]>([])

  const [collectionMenu, setCollectionMenu] = React.useState(false)

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
        <li>
          <span role="button" onClick={() => setCollectionMenu(true)}>
            + Нов сборник
          </span>
        </li>
      </ul>
      {collectionMenu && (
        <CollectionMenu
          onClose={() => setCollectionMenu(false)}
          onSave={(collection) => setCollections([...collections, collection])}
        />
      )}
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

function CollectionMenu({
  onClose,
  onSave,
}: {
  onClose: () => void
  onSave: (collection: Collection) => void
}) {
  const [title, setTitle] = React.useState('Нов сборник')
  const [collection, setCollection] = React.useState<number[]>([])
  const [chantsMenu, setChantsMenu] = React.useState(false)

  return (
    <div className={styles.collection}>
      <h4>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
      </h4>
      <ul className={listStyles.list}>
        {collection.map((index, order) => (
          <li key={`${index}-${order}`}>
            {chants[index].title}, <Echos {...chants[index].echos} />,{' '}
            {chants[index].author}
            <span
              role="button"
              onClick={() =>
                setCollection(collection.filter((_, i) => i !== order))
              }
            >
              -
            </span>
          </li>
        ))}
        <li>
          <span role="button" onClick={() => setChantsMenu(true)}>
            + Добави
          </span>
        </li>
      </ul>
      <div className={styles.actions}>
        <span role="button" onClick={onClose}>
          Затвори
        </span>
        <span
          role="button"
          onClick={() => {
            onSave({ title, content: collection })
            onClose()
          }}
        >
          Запази
        </span>
      </div>
      {chantsMenu && (
        <ChantsMenu
          onAdd={(index) => setCollection([...collection, index])}
          onClose={() => setChantsMenu(false)}
        />
      )}
    </div>
  )
}

function ChantsMenu({
  onAdd,
  onClose,
}: {
  onAdd: (index: number) => void
  onClose: () => void
}) {
  return (
    <div className={styles.chants}>
      <ul className={listStyles.list}>
        {chants
          .map((chant, index) => ({ chant, index }))
          .sort((a, b) => a.chant.title.localeCompare(b.chant.title))
          .map(({ chant, index }) => (
            <li key={index}>
              <span
                role="button"
                onClick={() => {
                  onAdd(index)
                  onClose()
                }}
              >
                {chant.title}, <Echos {...chant.echos} />, {chant.author}
              </span>
            </li>
          ))}
      </ul>
      <div className={styles.actions}>
        <span role="button" onClick={onClose}>
          Затвори
        </span>
      </div>
    </div>
  )
}
