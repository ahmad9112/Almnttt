import { Clock, CalendarDays } from 'lucide-react'

export default function DoctorCard({ doctor }) {
  return <article className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl">
    <div className="relative h-44 overflow-hidden bg-slate-50">
      <img src={doctor.image || '/illustrations/general-medicine.svg'} alt={`${doctor.specialty} medical illustration`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy"/>
      <span className="absolute right-3 top-3 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-navy shadow-sm">Specialist</span>
    </div>
    <div className="p-5">
      <h3 className="text-lg font-extrabold text-navy">{doctor.name}</h3>
      <p className="mt-1 min-h-10 text-sm font-bold text-teal">{doctor.specialty}</p>
      <p className="mt-2 min-h-8 text-xs leading-5 text-slate-500">{doctor.credentials}</p>
      <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-600"><Clock size={15} className="shrink-0 text-teal"/>{doctor.timing}</div>
      <a href={`https://wa.me/919756017861?text=${encodeURIComponent(`Hello, I would like an appointment with ${doctor.name}.`)}`} target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-teal/20 px-4 py-3 text-xs font-extrabold text-teal transition hover:bg-teal hover:text-white"><CalendarDays size={15}/> Request appointment</a>
    </div>
  </article>
