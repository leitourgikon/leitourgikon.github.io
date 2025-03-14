import styles from './echos.module.sass'

export type Echos =
  | 'protos'
  | 'pl-protou'
  | 'pl-protou-ke'
  | 'deuteros'
  | 'deuteroprotos'
  | 'tritos'
  | 'tetartos'
  | 'agia'
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
              <x-n>
                <x-mode-ke />
                <x-mode-oligon-ypsili />
              </x-n>
            </>
          ),
          deuteros: (
            <>
              <x-mode-second />
              <x-n>
                <x-mode-di />
                <x-f-sc-di className="byz--f" />
              </x-n>
            </>
          ),
          deuteroprotos: (
            <>
              <x-mode-second />
              <x-n>
                <x-mode-di />
                <x-f-sc-di className="byz--f" />
              </x-n>
              (
              <x-n>
                <x-ea />
                <x-f-d-pa-b />
              </x-n>
              )
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
              <x-n>
                <x-mode-di />
                <x-f-sc-di className="byz--f" />
              </x-n>
            </>
          ),
          agia: (
            <>
              <x-mode-fourth />
              <x-n>
                <x-mode-di />
                <x-f-d-di />
              </x-n>
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
              <x-n>
                <x-o3 />
                <x-f-d-ni-low />
              </x-n>
            </>
          ),
        }[echos]
      }
    </span>
  )
}
