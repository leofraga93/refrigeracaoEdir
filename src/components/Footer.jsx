import { companyInfo, WHATSAPP_NUMBER } from '../data/mockData'

export default function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="section-container py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-white">{companyInfo.name}</p>
            <p className="mt-3 text-sm leading-relaxed">{companyInfo.tagline}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">
              Contato
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={whatsappUrl} className="transition hover:text-white">
                  WhatsApp: {companyInfo.phone}
                </a>
              </li>
              <li>{companyInfo.email}</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">
              Regiões Atendidas
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {companyInfo.regions.map((region) => (
                <li key={region}>{region}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {companyInfo.name}. Todos os direitos
            reservados.
          </p>
          <p className="mt-1">Projeto inicial — dados fictícios para apresentação.</p>
        </div>
      </div>
    </footer>
  )
}
