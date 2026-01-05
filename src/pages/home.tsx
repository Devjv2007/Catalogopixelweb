import LandingPages from '../components/landingpages'
import Ecommerces from '../components/ecommerces'
import Sistemas from '../components/sistemas'
import Header from '../components/header'
import Footer from '../components/footer'

export function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <section className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1 mb-4 text-xs font-medium border rounded-full border-white/10 bg-white/5 text-white/80 backdrop-blur">
          PixelWeb
        </span>

        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
          Soluções digitais para{' '}
          <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text">
            impulsionar
          </span>{' '}
          seu negócio
        </h1>

        <p className="max-w-2xl mt-6 text-base text-white/70 md:text-lg">
          Landing pages, e-commerces e sistemas sob medida com foco em
          conversão, performance e design moderno.
        </p>
      </section>

      <section id="pages" className="scroll-mt-28">
        <LandingPages />
      </section>

      <section id="ecommerces" className="scroll-mt-28">
        <Ecommerces />
      </section>

      <section id="sistemas" className="scroll-mt-28">
        <Sistemas />
      </section>

      <Footer />
    </main>
  )
}
