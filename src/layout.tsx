import { NavLink, Outlet } from 'react-router-dom'
import './layout.sass'

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Служебник</NavLink>
            </li>
            <li>
              <NavLink to="orthros">Утренна</NavLink>
            </li>
            <li>
              <NavLink to="leitourgia">Литургия</NavLink>
            </li>
            <li>
              <NavLink to="bibliotheke">Библиотека</NavLink>
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
