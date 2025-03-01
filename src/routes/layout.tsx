import { NavLink, Outlet } from 'react-router-dom'
import orthodoxCrossUrl from '../assets/orthodox-cross.svg?no-inline'
import styles from './layout.module.sass'

export default function Layout() {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>
              <NavLink to="/">
                <img
                  width={38}
                  height={50}
                  src={orthodoxCrossUrl}
                  alt="Служебник - заглавна страница"
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="bibliotheke">Библиотека</NavLink>
            </li>
            <li>
              <NavLink to="anthologia">Сборници</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  )
}
