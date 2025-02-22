import React from 'react'
import type { Echos } from '../echos'
import C1 from './1'
import C2 from './2'
import C3 from './3'
import C4 from './4'

type Chant = {
  author: string
  title: string
  type: 'apolytikion' | 'litany' | 'trisagion'
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
  {
    author: 'Прингос',
    title: 'От висотите слезе',
    type: 'apolytikion',
    echos: { mode: 4, plagal: true, base: 'ga' },
    content: C3,
  },
  {
    author: 'Прингос',
    title: 'С камък запечатан',
    type: 'apolytikion',
    echos: { mode: 1, plagal: false, base: 'pa' },
    content: C4,
  },
]

export default chants
