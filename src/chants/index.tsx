import React from 'react'
import type { Chant } from '../chant'

const chants: Chant[] = [
  {
    author: 'Прингос',
    title: 'Велика ектения',
    type: 'litany',
    echos: 'pl-tetartou',
    content: React.lazy(() => import('./1')),
  },
  {
    author: 'Прингос',
    title: 'Трисвято и Сила',
    type: 'trisagion',
    echos: 'deuteros',
    content: React.lazy(() => import('./2')),
  },
  {
    author: 'Прингос',
    title: 'От висотите слезе',
    type: 'apolytikion',
    echos: 'pl-tetartou-ga',
    ousynodos: true,
    content: React.lazy(() => import('./3')),
  },
  {
    author: 'Прингос',
    title: 'С камък запечатан',
    type: 'apolytikion',
    echos: 'protos',
    ousynodos: true,
    content: React.lazy(() => import('./4')),
  },
  {
    author: 'Прингос',
    title: 'Предстоятелство на християните',
    type: 'kontakion',
    echos: 'tetartos',
    ousynodos: true,
    content: React.lazy(() => import('./5')),
  },
  {
    author: 'Станицас',
    title: 'Достойно е',
    type: 'axion-estin',
    echos: 'deuteroprotos',
    ousynodos: true,
    content: React.lazy(() => import('./6')),
  },
  {
    author: 'Прингос',
    title: 'Със светиите упокой',
    type: 'kontakion',
    echos: 'pl-tetartou-ga',
    ousynodos: true,
    content: React.lazy(() => import('./7')),
  },
  {
    author: 'Прингос',
    title: 'Христос възкръсна',
    type: 'apolytikion',
    echos: 'pl-protou',
    ousynodos: true,
    content: React.lazy(() => import('./8')),
  },
  {
    author: 'Петрос Ламбадариос',
    title: 'Благославяй, душо моя, Господа',
    type: 'antifonon',
    echos: 'pl-tetartou',
    ousynodos: true,
    content: React.lazy(() => import('./9')),
  },
  {
    author: 'Прингос',
    title: 'Когато слезе',
    type: 'apolytikion',
    echos: 'deuteros',
    ousynodos: true,
    content: React.lazy(() => import('./10')),
  },
  {
    author: 'Прингос',
    title: 'Да се радват небесата',
    type: 'apolytikion',
    echos: 'tritos',
    ousynodos: true,
    content: React.lazy(() => import('./11')),
  },
]

export default chants
