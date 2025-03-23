import React from 'react'
import EchosComponent, { type Echos } from './echos'

export type Chant = {
  author?: string
  title: string
  type?: 'antifonon' | 'apolytikion' | 'axion-estin' | 'kontakion' | 'litany' | 'trisagion'
  echos: Echos
  ousynodos?: true
  content: React.LazyExoticComponent<() => React.JSX.Element>
}

export function Preview({ author, title, echos }: Chant) {
  return (
    <>
      {title}, <EchosComponent echos={echos} />
      {author && <>, {author}</>}
    </>
  )
}

export default function Component({ title, content }: Chant) {
  return (
    <>
      <h3>{title}</h3>
      <React.Suspense fallback={<div>Зареждане...</div>}>
        {React.createElement(content, {})}
      </React.Suspense>
    </>
  )
}
