import React from 'react'
import type { Chant } from '../chant'

const chants: Chant[] = [
  {
    author: 'Прингос',
    title: 'Велика ектения',
    type: 'litany',
    echos: { mode: 4, plagal: true, base: 'ni' },
    content: React.lazy(() => import('./1')),
  },
  {
    author: 'Прингос',
    title: 'Трисвято и Сила',
    type: 'trisagion',
    echos: { mode: 2, base: 'di' },
    content: React.lazy(() => import('./2')),
  },
  {
    author: 'Прингос',
    title: 'От висотите слезе',
    type: 'apolytikion',
    echos: { mode: 4, plagal: true, base: 'ga' },
    ousynodos: true,
    content: React.lazy(() => import('./3')),
  },
  {
    author: 'Прингос',
    title: 'С камък запечатан',
    type: 'apolytikion',
    echos: { mode: 1, base: 'pa' },
    ousynodos: true,
    content: React.lazy(() => import('./4')),
  },
  {
    author: 'Прингос',
    title: 'Предстоятелство на християните',
    type: 'kontakion',
    echos: { mode: 4, base: 'di' },
    ousynodos: true,
    content: React.lazy(() => import('./5')),
  },
  {
    author: 'Станицас',
    title: 'Достойно е',
    type: 'axion-estin',
    echos: { mode: 21, base: 'di' },
    ousynodos: true,
    content: React.lazy(() => import('./6')),
  },
  {
    author: 'Прингос',
    title: 'Със светиите упокой',
    type: 'kontakion',
    echos: { mode: 4, plagal: true, base: 'ga' },
    ousynodos: true,
    content: React.lazy(() => import('./7')),
  },
  {
    author: 'Прингос',
    title: 'Христос възкръсна',
    type: 'apolytikion',
    echos: { mode: 1, plagal: true, base: 'pa' },
    ousynodos: true,
    content: React.lazy(() => import('./8')),
  },
  {
    author: 'Петрос Ламбадариос',
    title: 'Благославяй, душо моя, Господа',
    type: 'antifonon',
    echos: { mode: 4, plagal: true, base: 'ni' },
    ousynodos: true,
    content: React.lazy(() => import('./9')),
  },
  {
    author: 'Прингос',
    title: 'Когато слезе',
    type: 'apolytikion',
    echos: { mode: 2, base: 'di' },
    ousynodos: true,
    content: React.lazy(() => import('./10')),
  },
]

export default chants
