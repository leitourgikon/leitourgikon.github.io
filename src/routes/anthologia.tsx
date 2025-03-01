import React from 'react'
import ReactDOM from 'react-dom'
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

  const [draggedItemIndex, setDraggedItemIndex] = React.useState<number>()
  const draggedItemRef = React.useRef<HTMLLIElement>(null)

  return ReactDOM.createPortal(
    <div
      className={styles['collection-menu']}
      onPointerLeave={() => setDraggedItemIndex(undefined)}
      onPointerUp={() => setDraggedItemIndex(undefined)}
    >
      <h4>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
      </h4>
      <ul className={listStyles.list}>
        {content.map((index, i) => (
          <li
            ref={draggedItemIndex === i ? draggedItemRef : undefined}
            key={`${index}-${i}`}
            aria-pressed={draggedItemIndex === i}
            onPointerDown={() => setDraggedItemIndex(i)}
            onPointerMove={(e) => {
              if (draggedItemIndex === undefined) return
              const li = draggedItemRef.current
              if (li === null) return
              const y = e.clientY

              // same element
              const offset = e.pointerType === 'touch' ? 4 : e.pointerType === 'pen' ? 2 : 0
              if (li.offsetTop <= y + offset && y - offset <= li.offsetTop + li.clientHeight) return

              // next element
              if (li.offsetTop + li.clientHeight < y) {
                const next = li.nextElementSibling
                if (next === null) return
                if (y < li.offsetTop + next.clientHeight) return
                setDraggedItemIndex(draggedItemIndex + 1)

                setContent([
                  ...content.slice(0, draggedItemIndex),
                  content[draggedItemIndex + 1],
                  content[draggedItemIndex],
                  ...content.slice(draggedItemIndex + 2),
                ])
              }

              // previous element
              if (y < li.offsetTop) {
                const previous = li.previousElementSibling
                if (previous === null) return
                if (li.offsetTop - previous.clientHeight + li.clientHeight < y) return
                setDraggedItemIndex(draggedItemIndex - 1)

                setContent([
                  ...content.slice(0, draggedItemIndex - 1),
                  content[draggedItemIndex],
                  content[draggedItemIndex - 1],
                  ...content.slice(draggedItemIndex + 1),
                ])
              }
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
    </div>,
    document.getElementById('root')!
  )
}

function ChantsMenu({ onAdd, onClose }: { onAdd: (index: number) => void; onClose: () => void }) {
  return ReactDOM.createPortal(
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
    </div>,
    document.getElementById('root')!
  )
}
