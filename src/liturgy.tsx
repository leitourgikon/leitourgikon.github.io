import Litany from './litany'

export default function Liturgy() {
  return (
    <div>
      <h2>Божествена Литургия</h2>

      <ul>
        <li>
          <h4>Велика ектения</h4>
          <Litany.Pringos />
        </li>
      </ul>
    </div>
  )
}
