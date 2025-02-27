import { NavLink, Outlet } from 'react-router-dom'
import orthodoxCrossUrl from '../assets/orthodox-cross.svg?no-inline'
import './layout.sass'

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">
                <img src={orthodoxCrossUrl} />
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
      <main>
        <Outlet />
      </main>
    </>
  )
}
