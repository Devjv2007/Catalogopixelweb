import { forwardRef } from 'react'

type Item = {
  n: string
  desc: string
  features: string[]
  live: string
  thumb: string
}

const items: Item[] = [
  {
    n: 'Power BI',
    desc: 'Controle total da operação com dados centralizados e decisões mais rápidas.',
    features: [
      'Gestão financeira',
      'Controle de estoque',
      'Relatórios personalizados',
      'Multiusuários',
    ],
    live: '#',
    thumb: 'powerbi.png',
  },
  {
    n: 'Sistema Personalizado',
    desc: 'Desenvolvimento sob medida para atender exatamente às necessidades do seu negócio.',
    features: [
      'Sistemas para todo tipo de negócio',
      'Desenvolvimento exclusivo',
      'Facilidade de Uso',
      'Suporte e manutenção',
    ],
    live: '#',
    thumb: 'gestão.jpg',
  },
  {
    n: 'Automação de Processos',
    desc: 'Automatize tarefas repetitivas e aumente a eficiência operacional.',
    features: [
      'Automação de fluxos',
      'Integração de sistemas',
      'Redução de erros',
      'Escalabilidade',
    ],
    live: '#',
    thumb: 'n8n.jpg',
  },
]

const Sistemas = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="sistemas" className="py-32 bg-slate-950 scroll-mt-28">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white">Sistemas</h2>
          <p className="mt-4 text-slate-400">
            Sistemas personalizados para automatizar, integrar e escalar seu negócio.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.n}
              className="overflow-hidden transition border rounded-2xl border-white/10 bg-slate-900 hover:border-blue-500/40"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={item.thumb}
                  alt={item.n}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {item.n}
                </h3>

                <p className="mb-4 text-sm text-slate-400">
                  {item.desc}
                </p>

                <ul className="mb-6 space-y-2 text-sm text-slate-300">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Sistemas
