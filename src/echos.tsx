import styles from './echos.module.sass'

export type Echos = {
  mode: 1 | 2 | 21 | 4
  plagal?: true
  base: 'pa' | 'ga' | 'di' | 'ni'
}

export default function Component({ mode, plagal, base }: Echos) {
  return (
    <span className={styles.echos}>
      {plagal && <x-mode-plagal />}
      {
        {
          1: plagal ? <x-mode-plagal-first /> : <x-mode-first />,
          21: plagal ? null : <x-mode-second />,
          2: plagal ? null : <x-mode-second />,
          4: plagal ? <x-mode-plagal-fourth /> : <x-mode-fourth />,
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
      {mode === 21 && (
        <>
          (<x-ea></x-ea>
          <x-f-d-pa-b></x-f-d-pa-b>)
        </>
      )}
    </span>
  )
}
