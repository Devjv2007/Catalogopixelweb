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
    n: 'iPhone Store',
    desc: 'E-commerce focado em produtos Apple com layout moderno e alta conversão.',
    features: [
      'Checkout otimizado',
      'Design responsivo',
      'Alta performance',
      'UX focada em vendas',
    ],
    live: 'https://ecommerce-apple-ebon.vercel.app/home',
    thumb: '8.png',
  },
  {
    n: 'ImobiRápido',
    desc: 'Plataforma imobiliária completa para anúncios e captação de leads.',
    features: [
      'Busca avançada',
      'Painel administrativo',
      'SEO otimizado',
      'Integração com WhatsApp',
    ],
    live: 'https://imoveismarketplace.vercel.app/',
    thumb: '7.png',
  },
  {
    n: 'UrbanStyle Store',
    desc: 'Loja virtual de moda com foco em experiência e identidade visual forte.',
    features: [
      'Catálogo dinâmico',
      'Pagamentos integrados',
      'Layout moderno',
      'Mobile first',
    ],
    live: 'https://urbanstyle-seven.vercel.app/',
    thumb: '9.png',
  },
]

const Ecommerces = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="ecommerces" className="py-32 bg-slate-950 scroll-mt-28">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white">E-commerces</h2>
          <p className="mt-4 text-slate-400">
            Lojas virtuais focadas em conversão, performance e experiência do usuário.
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

                <a
                  href={item.live}
                  target="_blank"
                  className="inline-flex items-center justify-center w-full py-2 text-sm font-medium text-white transition bg-blue-600 rounded-lg hover:bg-blue-500"
                >
                  Ver loja →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Ecommerces
