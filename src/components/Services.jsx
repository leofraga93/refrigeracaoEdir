import { services } from '../data/mockData'
import ServiceCard from './ServiceCard'

export default function Services() {
  return (
    <section id="servicos" className="py-20 sm:py-24">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle mx-auto">
            Soluções completas para quem busca conforto em casa ou credibilidade técnica
            para licitações e contratos corporativos.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
