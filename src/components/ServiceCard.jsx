export default function ServiceCard({ title, subtitle, description, image, highlight, audience }) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 transition hover:shadow-xl ${
        highlight
          ? 'ring-brand-400 shadow-brand-500/10'
          : 'ring-slate-200 hover:ring-brand-200'
      }`}
    >
      {highlight && (
        <span className="absolute right-4 top-4 z-10 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          Destaque B2B
        </span>
      )}

      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute right-0 bottom-0 h-full w-full bg-gradient-to-t from-slate-900/60 to-transparent" />
        <span className="absolute bottom-3 left-4 rounded-md bg-white/90 px-2 py-0.5 text-xs font-semibold text-slate-700">
          {audience === 'B2B' ? 'Empresas & Governo' : 'Residencial & Comercial'}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
          {subtitle}
        </p>
        <h3 className="mt-2 text-xl font-bold text-slate-900">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </article>
  )
}
