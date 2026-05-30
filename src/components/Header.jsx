import { companyInfo } from '../data/mockData'

export default function Header() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="section-container flex h-16 items-center justify-between">
        <button
          type="button"
          onClick={() => scrollTo('inicio')}
          className="flex items-center gap-2 text-left"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-white">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900">{companyInfo.name}</p>
            <p className="hidden text-xs text-slate-500 sm:block">Climatização & PMOC</p>
          </div>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          <button
            type="button"
            onClick={() => scrollTo('servicos')}
            className="text-sm font-medium text-slate-600 transition hover:text-brand-600"
          >
            Serviços
          </button>
          <button
            type="button"
            onClick={() => scrollTo('pmoc')}
            className="text-sm font-medium text-slate-600 transition hover:text-brand-600"
          >
            PMOC
          </button>
          <button
            type="button"
            onClick={() => scrollTo('depoimentos')}
            className="text-sm font-medium text-slate-600 transition hover:text-brand-600"
          >
            Depoimentos
          </button>
          <button type="button" onClick={() => scrollTo('orcamento')} className="btn-primary">
            Solicitar Orçamento
          </button>
        </nav>

        <button
          type="button"
          onClick={() => scrollTo('orcamento')}
          className="btn-primary md:hidden"
        >
          Orçamento
        </button>
      </div>
    </header>
  )
}
