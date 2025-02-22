import styles from './echos.module.sass'

export type Echos = {
  mode: 4
  plagal: boolean
  base: 'ni'
}

export default function Component({ mode, plagal, base }: Echos) {
  return (
    <span className={styles.echos}>
      {plagal && <x-mode-plagal />}
      {
        {
          4: plagal ? <x-mode-plagal-fourth /> : null,
        }[mode]
      }
      {
        {
          ni: <x-mode-ni />,
        }[base]
      }
    </span>
  )
}
