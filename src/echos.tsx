import styles from './echos.module.sass'

export type Echos =
  | 'protos'
  | 'pl-protou'
  | 'pl-protou-ke'
  | 'deuteros'
  | 'deuteroprotos'
  | 'tritos'
  | 'tetartos'
  | 'pl-tetartou'
  | 'pl-tetartou-ga'

export default function Component({ echos }: { echos: Echos }) {
  return (
    <span className={styles.echos}>
      {echos.startsWith('pl-') && <x-mode-plagal />}
      {
        {
          protos: (
            <>
              <x-mode-first />
              <x-mode-pa />
            </>
          ),
          'pl-protou': <x-mode-plagal-first />,
          'pl-protou-ke': (
            <>
              <x-mode-plagal-first />
              <x-mode-ke></x-mode-ke>
              <x-mode-oligon-ypsili></x-mode-oligon-ypsili>
            </>
          ),
          deuteros: (
            <>
              <x-mode-second />
              <x-mode-di />
              <x-f-sc-di className="byz--f" />
            </>
          ),
          deuteroprotos: (
            <>
              <x-mode-second />
              <x-mode-di />
              <x-f-sc-di className="byz--f" />
              (<x-ea />
              <x-f-d-pa-b />)
            </>
          ),
          tritos: (
            <>
              <x-mode-third-nana />
              <x-mode-ga />
            </>
          ),
          tetartos: (
            <>
              <x-mode-fourth />
              <x-mode-di />
              <x-f-sc-di className="byz--f" />
            </>
          ),
          'pl-tetartou': (
            <>
              <x-mode-plagal-fourth />
              <x-mode-ni />
            </>
          ),
          'pl-tetartou-ga': (
            <>
              <x-mode-plagal-fourth />
              <x-o3 />
              <x-f-d-ni-low />
            </>
          ),
        }[echos]
      }
    </span>
  )
}
