import React from 'react'
import type { Echos } from '../echos'
import C1 from './1'
import C2 from './2'
import C3 from './3'
import C4 from './4'
import C5 from './5'
import C6 from './6'
import C7 from './7'
import C8 from './8'
import C9 from './9'
import C10 from './10'

type Chant = {
  author: string
  title: string
  type:
    | 'antifonon'
    | 'apolytikion'
    | 'axion-estin'
    | 'kontakion'
    | 'litany'
    | 'trisagion'
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
  {
    author: 'Станицас',
    title: 'Достойно е',
    type: 'axion-estin',
    echos: { mode: 21, base: 'di' },
    ousynodos: true,
    content: C6,
  },
  {
    author: 'Прингос',
    title: 'Със светиите упокой',
    type: 'kontakion',
    echos: { mode: 4, plagal: true, base: 'ga' },
    ousynodos: true,
    content: C7,
  },
  {
    author: 'Прингос',
    title: 'Христос възкръсна',
    type: 'apolytikion',
    echos: { mode: 1, plagal: true, base: 'pa' },
    ousynodos: true,
    content: C8,
  },
  {
    author: 'Петрос Ламбадариос',
    title: 'Благославяй, душо моя, Господа',
    type: 'antifonon',
    echos: { mode: 4, plagal: true, base: 'ni' },
    ousynodos: true,
    content: C9,
  },
  {
    author: 'Прингос',
    title: 'Когато слезе',
    type: 'apolytikion',
    echos: { mode: 2, base: 'di' },
    ousynodos: true,
    content: C10,
  },
]

export default chants
