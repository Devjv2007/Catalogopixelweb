import { useEffect, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "backdrop-blur-md bg-slate-950/70 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
          : "bg-transparent"
      ].join(" ")}
    >

      <div
        className={[
          "absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300",
          scrolled
            ? "opacity-100 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"
            : "opacity-0"
        ].join(" ")}
      />

      <div className="container h-20 px-6 mx-auto">
        <div className="relative flex items-center h-full">

          <div className="flex items-center gap-3">
            <img
              src="pixelweb.png"
              alt="Pixelweb"
              className="select-none h-14"
            />
          </div>

          <div className="flex-1" />

          <nav className="items-center hidden gap-8 md:flex">
            {[
              { label: "Landing Pages", href: "#pages" },
              { label: "Ecommerce", href: "#ecommerces" },
              { label: "Sistemas", href: "#sistemas" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium transition text-white/80 hover:text-white"
              >
                {item.label}
                <span className="absolute left-0 w-0 h-px transition-all duration-300 -bottom-1 bg-gradient-to-r from-cyan-400 to-indigo-500 hover:w-full" />
              </a>
            ))}
          </nav>

          <button
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="inline-flex items-center justify-center w-10 h-10 ml-3 text-white border rounded-lg border-white/10 md:hidden"
          >
            {open ? (
              <svg className="w-6 h-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Mobile overlay */}
          {open && (
            <button
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            />
          )}

          {/* Mobile menu */}
          <div
            className={[
              "fixed left-5 right-5 top-16 z-50 md:hidden",
              "transition-all duration-300",
              open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
            ].join(" ")}
          >
            <nav className="border rounded-2xl border-white/10 bg-slate-900/90 backdrop-blur">
              <ul className="flex flex-col divide-y divide-white/10">
                {[
                  { label: "Landing Pages", href: "#pages" },
                  { label: "Ecommerce", href: "#ecommerces" },
                  { label: "Sistemas", href: "#sistemas" },
                ].map((item) => (
                  <li key={item.href}>
                 <a
                    href={item.href}
                        onClick={() => {
                          setOpen(false)
                        }}
                        className="block px-6 py-4 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                      >
                     {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
