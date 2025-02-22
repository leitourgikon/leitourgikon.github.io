import React from 'react'
import type { Echos } from '../echos'
import C1 from './1'

type Chant = {
  author: string
  title: string
  type: 'litany'
  echos: Echos
  content: () => React.JSX.Element
}

const chants: Chant[] = [
  {
    author: 'Прингос',
    title: 'Велика ектения',
    type: 'litany',
    echos: { mode: 4, plagal: true, base: 'ni' },
    content: C1,
  },
]

export default chants
