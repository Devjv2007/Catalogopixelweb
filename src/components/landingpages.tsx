import { forwardRef } from 'react'

type Item = {
  n: string
  live: string
  thumb: string
}

const items: Item[] = [
  { n: 'Serralheria Alfa', live: 'https://serralheriaalfa.vercel.app/', thumb: '1.png' },
  { n: 'Coach Performance', live: 'https://personaltrainer-five.vercel.app/', thumb: '2.png' },
  { n: 'Marmoraria Real', live: 'https://marmorariareal.vercel.app/', thumb: '3.png' },
  { n: 'Aurum Joias', live: 'https://aurumjoias.vercel.app/', thumb: '4.png' },
  { n: 'BellaDerme', live: 'https://clinicadeest-tica.vercel.app/', thumb: '5.png' },
  { n: 'AutoPrime', live: 'https://autoprime-sigma.vercel.app/', thumb: '6.png' },
]

const LandingPages = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="pages" className="py-32 bg-slate-950 scroll-mt-28">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white">
            Landing Pages
          </h2>
          <p className="mt-4 text-slate-400">
            Projetos focados em conversão e presença digital
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.n}
              className="overflow-hidden border rounded-2xl border-white/10 bg-slate-900"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={item.thumb}
                  alt={item.n}
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Content fixo */}
              <div className="flex items-center justify-between gap-4 p-6">
                <h3 className="text-lg font-semibold text-white">
                  {item.n}
                </h3>

                <a
                  href={item.live}
                  target="_blank"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-500 hover:opacity-90"
                >
                  Ver ao vivo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
})

export default LandingPages
