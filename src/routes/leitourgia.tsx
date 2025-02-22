import chants from './chants'

export default function Component() {
  return (
    <>
      <h2>Божествена Литургия</h2>

      <ul>
        <li>
          <h4>{chants[0].title}</h4>
          {chants[0].content()}
        </li>
      </ul>
    </>
  )
}
