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

  const ousynodosWarning =
    'Преводът не е синодален и не е препоръчително да се използва за богослужебни цели.'

  return (
    <>
      <h2>Библиотека</h2>
      {index === null ? (
        <ul className={styles.bibliotheke}>
          {chants.map((chant, i) => (
            <li key={i}>
              <NavLink to={i.toString()}>
                {chant.title}, <Echos {...chant.echos} />, {chant.author}
              </NavLink>
              {chant.ousynodos && (
                <span className={styles.ousynodos} title={ousynodosWarning}>
                  не-СП
                </span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <>
          <h3>{chants[index].title}</h3>
          {chants[index].ousynodos && (
            <div className={styles.ousynodos}>{ousynodosWarning}</div>
          )}
          {chants[index].content()}
        </>
      )}
    </>
  )
}
