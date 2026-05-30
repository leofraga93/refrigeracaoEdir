import { companyInfo, stats } from '../data/mockData'

export default function Hero() {
  const scrollToQuote = () => {
    document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 to-brand-800/80" />

      <div className="section-container relative py-20 sm:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-100 ring-1 ring-white/20">
            Salvador & Feira de Santana
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {companyInfo.name}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-brand-100 sm:text-xl">
            {companyInfo.tagline}. Atendemos residências, comércios e órgãos públicos com
            soluções completas em climatização e conformidade técnica.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={scrollToQuote} className="btn-primary bg-white text-brand-700 shadow-white/20 hover:bg-brand-50">
              Pedir Orçamento Grátis
            </button>
            <a
              href="#pmoc"
              className="btn-secondary border-white/20 bg-white/10 text-white hover:bg-white/20"
            >
              Conhecer PMOC para Empresas
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white/10 px-4 py-5 text-center ring-1 ring-white/20 backdrop-blur-sm"
            >
              <p className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs text-brand-100 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
