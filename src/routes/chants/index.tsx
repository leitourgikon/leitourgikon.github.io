import React from 'react'
import C1 from './1'

type Chant = {
  author: string
  title: string
  type: 'litany'
  echos: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  content: () => React.JSX.Element
}

const chants: Chant[] = [
  {
    author: 'Прингос',
    title: 'Велика ектения',
    type: 'litany',
    echos: 8,
    content: C1,
  },
]

export default chants
