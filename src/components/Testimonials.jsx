import { testimonials } from '../data/mockData'
import TestimonialCard from './TestimonialCard'

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 sm:py-24">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-title">O que nossos clientes dizem</h2>
          <p className="section-subtitle mx-auto">
            Prova social de quem já confiou na Refrigeração Edir — de residências a
            empresas que participam de licitações.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
