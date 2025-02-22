import styles from './echos.module.sass'

export type Echos = {
  mode: 1 | 2 | 4
  plagal: boolean
  base: 'pa' | 'ga' | 'di' | 'ni'
}

export default function Component({ mode, plagal, base }: Echos) {
  return (
    <span className={styles.echos}>
      {plagal && <x-mode-plagal />}
      {
        {
          1: plagal ? null : <x-mode-first />,
          2: plagal ? null : <x-mode-second />,
          4: plagal ? <x-mode-plagal-fourth /> : null,
        }[mode]
      }
      {
        {
          pa: <x-mode-pa />,
          di: (
            <>
              <x-mode-di />
              <x-f-sc-di className="byz--f" />
            </>
          ),
          ga: (
            <>
              <x-o3 />
              <x-f-d-ni-low />
            </>
          ),
          ni: <x-mode-ni />,
        }[base]
      }
    </span>
  )
}
