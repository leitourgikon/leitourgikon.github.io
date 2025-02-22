import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import chants from './chants'
import Echos from './echos'
import styles from './bibliotheke.module.sass'

export default function Component() {
  const { chant } = useParams()
  const index = React.useMemo(
    () => (chant && !isNaN(Number(chant)) ? Number(chant) : null),
    [chant]
  )

  return (
    <>
      <h2>Библиотека</h2>
      {index === null ? (
        <ul className={styles.bibliotheke}>
          {chants.map((chant, i) => (
            <li key={i}>
              <NavLink to={i.toString()}>
                {chant.author} - {chant.title}, <Echos {...chant.echos} />
              </NavLink>
            </li>
          ))}
        </ul>
      ) : (
        <>
          <h3>{chants[index].title}</h3>
          {chants[index].content()}
        </>
      )}
    </>
  )
}
