import styles from './echos.module.sass'

export type Echos = {
  mode: 2 | 4
  plagal: boolean
  base: 'di' | 'ni'
}

export default function Component({ mode, plagal, base }: Echos) {
  return (
    <span className={styles.echos}>
      {plagal && <x-mode-plagal />}
      {
        {
          2: plagal ? null : <x-mode-second />,
          4: plagal ? <x-mode-plagal-fourth /> : null,
        }[mode]
      }
      {
        {
          di: (
            <>
              <x-mode-di />
              <x-f-sc-di className="byz--f" />
            </>
          ),
          ni: <x-mode-ni />,
        }[base]
      }
    </span>
  )
}
