import React from 'react'
import { OUSYNODOS_WARNING } from './constants'
import type { Echos } from './echos'
import styles from './chant.module.sass'

export type Chant = {
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
  content: React.LazyExoticComponent<() => React.JSX.Element>
}

export default function Component({ title, ousynodos, content }: Chant) {
  return (
    <>
      {ousynodos && <div className={styles.ousynodos}>{OUSYNODOS_WARNING}</div>}
      <h3>{title}</h3>
      <React.Suspense fallback={<div>Зареждане...</div>}>
        {React.createElement(content, {})}
      </React.Suspense>
    </>
  )
}
