import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Chant from '../chant'
import chants from '../chants'
import { OUSYNODOS_WARNING } from '../constants'
import Echos from '../echos'
import styles from './bibliotheke.module.sass'
import listStyles from '../list.module.sass'

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
        <ul className={listStyles.list}>
          {chants
            .map((chant, index) => ({ chant, index }))
            .sort((a, b) => a.chant.title.localeCompare(b.chant.title))
            .map(({ chant, index }) => (
              <li key={index}>
                <NavLink to={index.toString()}>
                  {chant.title}, <Echos echos={chant.echos} />, {chant.author}
                </NavLink>
                {chant.ousynodos && (
                  <span className={styles.ousynodos} title={OUSYNODOS_WARNING}>
                    не-СП
                  </span>
                )}
              </li>
            ))}
        </ul>
      ) : (
        <Chant {...chants[index]} />
      )}
    </>
  )
}
