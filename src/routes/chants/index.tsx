import React from 'react'
import type { Echos } from '../echos'
import C1 from './1'
import C2 from './2'
import C3 from './3'
import C4 from './4'
import C5 from './5'

type Chant = {
  author: string
  title: string
  type: 'apolytikion' | 'kontakion' | 'litany' | 'trisagion'
  echos: Echos
  ousynodos?: true
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
    echos: { mode: 2, base: 'di' },
    content: C2,
  },
  {
    author: 'Прингос',
    title: 'От висотите слезе',
    type: 'apolytikion',
    echos: { mode: 4, plagal: true, base: 'ga' },
    ousynodos: true,
    content: C3,
  },
  {
    author: 'Прингос',
    title: 'С камък запечатан',
    type: 'apolytikion',
    echos: { mode: 1, base: 'pa' },
    ousynodos: true,
    content: C4,
  },
  {
    author: 'Прингос',
    title: 'Предстоятелство на християните',
    type: 'kontakion',
    echos: { mode: 4, base: 'di' },
    ousynodos: true,
    content: C5,
  },
]

export default chants
