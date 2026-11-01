export default function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className={`mx-auto mb-10 max-w-3xl text-center ${light ? 'text-white' : 'text-navy'}`}>
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[.24em] text-teal">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className={`mt-4 text-base leading-7 ${light ? 'text-slate-300' : 'text-slate-600'}`}>{description}</p>}
    </div>
  )
}
