import { Clock, CalendarDays } from 'lucide-react';

export default function DoctorCard({ doctor }) {
  if (!doctor) return null;

  const doctorName = doctor.name || 'Hospital Specialist';
  const specialty = doctor.specialty || 'Medical Specialist';
  const credentials = doctor.credentials || 'Experienced Medical Professional';
  const timing = doctor.timing || 'Contact hospital for timings';

  const appointmentMessage = encodeURIComponent(
    `Hello, I would like an appointment with ${doctorName}.`
  );

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-44 overflow-hidden bg-slate-50">
        <img
          src={doctor.image || '/illustrations/general-medicine.svg'}
          alt={`${specialty} medical illustration`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/illustrations/general-medicine.svg';
          }}
        />

        <span className="absolute right-3 top-3 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-navy shadow-sm">
          Specialist
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-extrabold text-navy">
          {doctorName}
        </h3>

        <p className="mt-1 min-h-10 text-sm font-bold text-teal">
          {specialty}
        </p>

        <p className="mt-2 min-h-8 text-xs leading-5 text-slate-500">
          {credentials}
        </p>

        <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-600">
          <Clock size={15} className="shrink-0 text-teal" />
          {timing}
        </div>

        <a
          href={`https://wa.me/919756017861?text=${appointmentMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-teal/20 px-4 py-3 text-xs font-extrabold text-teal transition hover:bg-teal hover:text-white"
        >
          <CalendarDays size={15} />
          Request Appointment
        </a>
      </div>
    </article>
  );
}
