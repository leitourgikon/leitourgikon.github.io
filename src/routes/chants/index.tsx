import React from 'react'
import type { Echos } from '../echos'
import C1 from './1'
import C2 from './2'

type Chant = {
  author: string
  title: string
  type: 'litany' | 'trisagion'
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
  {
    author: 'Прингос',
    title: 'Трисвято и Сила',
    type: 'trisagion',
    echos: { mode: 2, plagal: false, base: 'di' },
    content: C2,
  },
]

export default chants
