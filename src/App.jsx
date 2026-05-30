import {
  Header,
  Hero,
  Services,
  PmocHighlight,
  Testimonials,
  QuoteSection,
  Footer,
} from './components'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <PmocHighlight />
        <Testimonials />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  )
}
