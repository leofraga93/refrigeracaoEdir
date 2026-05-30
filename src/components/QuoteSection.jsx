import MultiStepForm from './MultiStepForm'

export default function QuoteSection() {
  return (
    <section id="orcamento" className="bg-gradient-to-b from-brand-50 to-white py-20 sm:py-24">
      <div className="section-container">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-500">
            Orçamento Rápido
          </span>
          <h2 className="mt-3 section-title">Solicite seu orçamento em 3 passos</h2>
          <p className="section-subtitle mx-auto">
            Sem formulários longos. Selecione as opções e envie tudo direto para o
            WhatsApp da Edir — rápido, simples e sem custo.
          </p>
        </div>

        <div className="mt-12">
          <MultiStepForm />
        </div>
      </div>
    </section>
  )
}
