export default function PmocHighlight() {
  const scrollToQuote = () => {
    document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pmoc" className="bg-slate-50 py-20 sm:py-24">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-500">
              Foco B2B
            </span>
            <h2 className="mt-3 section-title">
              PMOC para Licitações e Conformidade Legal
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              O Plano de Manutenção, Operação e Controle é exigência legal para empresas
              e órgãos públicos. A Refrigeração Edir entrega documentação técnica completa,
              relatórios periódicos e respaldo profissional para sua participação em
              licitações.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                'Laudos e relatórios conforme normas vigentes',
                'Manutenção preventiva programada',
                'Equipe técnica qualificada e certificada',
                'Atendimento dedicado para empresas e governo',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <button type="button" onClick={scrollToQuote} className="btn-primary mt-10">
              Solicitar Proposta PMOC
            </button>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
              alt="Documentação técnica PMOC"
              className="rounded-2xl shadow-2xl ring-1 ring-slate-200"
            />
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-100">
              <p className="text-3xl font-bold text-brand-600">100%</p>
              <p className="text-sm text-slate-600">Conformidade documental</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
