import { FaRocket } from 'react-icons/fa'
import { companyInfo, developerCredit, SHOW_DEVELOPER_CREDIT, WHATSAPP_NUMBER } from '../data/mockData'

export default function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`

  return (
    <>
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
          </div>
        </div>
      </footer>

      <div
        className={`border-t border-slate-200 bg-white py-1 text-center text-xs leading-none text-slate-600 ${
          SHOW_DEVELOPER_CREDIT ? '' : 'hidden'
        }`}
      >
        <span className="inline-flex items-center gap-1">
          Desenvolvido por{' '}
          <a
            href={developerCredit.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-slate-700 transition hover:text-brand-600"
          >
            <strong>
              Le<span className="text-red-500">0</span> Fraga
            </strong>
            <FaRocket className="h-3 w-3 shrink-0 text-brand-500" aria-hidden="true" />
          </a>
        </span>
      </div>
    </>
  )
}
