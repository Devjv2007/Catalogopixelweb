const Footer = () => {
  return (
    <footer className="relative mt-32 overflow-hidden bg-white">
      {/* Glow de fundo */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute left-[-200px] bottom-[-200px] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[180px]" />
        <div className="absolute right-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[180px]" />
      </div>

      {/* Linha superior em degradê */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="px-6 py-20 mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src="pixelweb.png-Photoroom.png" alt="Pixelweb" className="h-10" />
            </div>

            <p className="max-w-md mt-4 text-sm text-black">
              Desenvolvemos soluções digitais focadas em performance,
              conversão e experiência do usuário. Sites, e-commerces e
              sistemas sob medida para empresas que querem crescer.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-black">
              Serviços
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#pages" className="text-black hover:text-white">
                  Landing Pages
                </a>
              </li>
              <li>
                <a href="#ecommerces" className="text-black/70 hover:text-white">
                  E-commerces
                </a>
              </li>
              <li>
                <a href="#sistemas" className="text-black/70 hover:text-white">
                  Sistemas
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-black">
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-black/70">
              <li>Instagram: pixelwebbrasil</li>
              <li>WhatsApp: (18) 98118-5292</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px my-10 bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-black/50">
            © {new Date().getFullYear()} PixelWeb. Todos os direitos reservados.
          </p>

          <div className="flex gap-6 text-xs text-black/60">
            <a href="#" className="hover:text-black">Privacidade</a>
            <a href="#" className="hover:text-black">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
