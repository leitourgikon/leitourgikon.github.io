import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Chant, { Preview } from '../chant'
import chants from '../chants'
import styles from './anthologia.module.sass'
import listStyles from '../list.module.sass'

type Collection = {
  title: string
  content: number[]
}

export default function Component() {
  const { collection } = useParams()
  const index = React.useMemo(
    () => (collection && !isNaN(Number(collection)) ? Number(collection) : null),
    [collection]
  )
  const [collections, setCollections] = React.useState<Collection[]>(() =>
    getLocalStorageCollections()
  )

  React.useEffect(() => setLocalStorageCollections(collections), [collections])

  const [collectionMenu, setCollectionMenu] = React.useState(false)

  return index === null ? (
    <div className={styles.collections}>
      <h2>Сборници</h2>
      <ul className={listStyles.list}>
        {collections
          .map((collection, index) => ({ collection, index }))
          .sort((a, b) => a.collection.title.localeCompare(b.collection.title))
          .map(({ collection, index }) => (
            <li key={index}>
              <NavLink to={index.toString()}>{collection.title}</NavLink>
              <span
                role="button"
                title={`Изтрий сборника „${collection.title}“`}
                onClick={() => setCollections(collections.filter((_, i) => i !== index))}
              >
                -
              </span>
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
    </div>
  ) : (
    <div className={styles.collection}>
      <h2>{collections[index].title}</h2>
      <span role="button" onClick={() => setCollectionMenu(true)}>
        Редактирай
      </span>
      <ul>
        {collections[index].content.map((index) => (
          <li key={index}>
            <Chant {...chants[index]} />
          </li>
        ))}
      </ul>
      {collectionMenu && (
        <CollectionMenu
          collection={collections[index]}
          onClose={() => setCollectionMenu(false)}
          onSave={(collection) =>
            setCollections([
              ...collections.slice(0, index),
              collection,
              ...collections.slice(index + 1),
            ])
          }
        />
      )}
    </div>
  )
}

function getLocalStorageCollections() {
  const collections = localStorage.getItem('anthologia')
  if (!collections) return []

  try {
    const parsed = JSON.parse(collections)
    if (parsed?.length) return parsed
  } catch (err) {
    console.error('Error while loading anthologia:', err)
  }

  return []
}

function setLocalStorageCollections(collections: Collection[]) {
  localStorage.setItem('anthologia', JSON.stringify(collections))
}

function CollectionMenu({
  collection,
  onClose,
  onSave,
}: {
  collection?: Collection
  onClose: () => void
  onSave: (collection: Collection) => void
}) {
  const [title, setTitle] = React.useState(collection?.title ?? 'Нов сборник')
  const [content, setContent] = React.useState<number[]>(collection?.content ?? [])
  const [chantsMenu, setChantsMenu] = React.useState(false)

  const [draggedItem, setDraggedItem] = React.useState<{
    index: number
    height: number
    li: HTMLLIElement
  }>()

  return (
    <div
      className={styles['collection-menu']}
      onPointerLeave={() => setDraggedItem(undefined)}
      onPointerUp={() => setDraggedItem(undefined)}
    >
      <h4>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
      </h4>
      <ul className={listStyles.list}>
        {content.map((index, i) => (
          <li
            key={`${index}-${i}`}
            aria-pressed={draggedItem?.index === i}
            onPointerDown={(e) =>
              setDraggedItem({
                index: i,
                height: e.currentTarget.clientHeight,
                li: e.currentTarget,
              })
            }
            onPointerMove={(e) => {
              if (draggedItem === undefined || draggedItem.index === i) return
              const targetY = e.clientY - e.currentTarget.getBoundingClientRect().top
              const offset = e.currentTarget.clientHeight - draggedItem.height

              if (draggedItem.index < i && targetY < offset) return
              if (draggedItem.index > i && offset > 0 && targetY > draggedItem.height) return

              const ix = Math.min(draggedItem.index, i)
              setDraggedItem({ ...draggedItem, index: i })
              setContent([
                ...content.slice(0, ix),
                content[ix + 1],
                content[ix],
                ...content.slice(ix + 2),
              ])
            }}
          >
            <div>
              <Preview {...chants[index]} />
            </div>
            <span role="button" onClick={() => setContent(content.filter((_, j) => j !== i))}>
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
            onSave({ title, content })
            onClose()
          }}
        >
          Запази
        </span>
      </div>
      {chantsMenu && (
        <ChantsMenu
          onAdd={(index) => setContent([...content, index])}
          onClose={() => setChantsMenu(false)}
        />
      )}
    </div>
  )
}

function ChantsMenu({ onAdd, onClose }: { onAdd: (index: number) => void; onClose: () => void }) {
  return (
    <div className={styles['chants-menu']}>
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
                <Preview {...chant} />
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
