import { useEffect, useMemo, useState } from 'react'
import { Activity, ArrowUpRight, Baby, BadgeCheck, Bone, Building2, CheckCircle2, ChevronRight, Clock3, HeartPulse, MapPin, Menu, Phone, ShieldPlus, Stethoscope, Users, Wind, Instagram, Droplets, Search, Star, Sparkles, Ambulance } from 'lucide-react'
import Header from './components/Header'
import SectionHeading from './components/SectionHeading'
import DoctorCard from './components/DoctorCard'
import Feedback from './components/Feedback'
import AdminPortal from './components/AdminPortal'
import { ADDRESS, doctors, INSTAGRAM_URL, leadership, MAPS_BUSINESS_URL, MAPS_LOCATION_URL, MAPS_REVIEW_URL, services, WHATSAPP_URL } from './data/hospital'

const Icon = ({ name, size=25 }) => {
  const icons = { stethoscope: Stethoscope, activity: Activity, sparkles: Sparkles, bone: Bone, baby: Baby, wind: Wind }
  const Component = icons[name] || HeartPulse
  return <Component size={size}/>
}

function App() {
  const [language, setLanguage] = useState('en')
  const [query, setQuery] = useState('')
  const [leads, setLeads] = useState(() => {
    try { return JSON.parse(localStorage.getItem('almannat-negative-feedback') || '[]') } catch { return [] }
  })
  const t = (en, hi) => language === 'en' ? en : hi
  useEffect(() => { localStorage.setItem('almannat-negative-feedback', JSON.stringify(leads)) }, [leads])
  const filteredDoctors = useMemo(() => doctors.filter(d => `${d.name} ${d.specialty} ${d.credentials}`.toLowerCase().includes(query.toLowerCase().trim())), [query])
  const addLead = lead => setLeads(current => [lead, ...current])
  const resolveLead = id => setLeads(current => current.map(item => item.id === id ? { ...item, resolved: true } : item))

  return <div className="min-h-screen overflow-hidden bg-[#f5f9fb] text-slate-800">
    <Header language={language} setLanguage={setLanguage} t={t}/>
    <main>
      <section id="home" className="hero-pattern relative scroll-mt-28 overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,168,150,.28),transparent_32%),radial-gradient(circle_at_10%_100%,rgba(212,175,55,.14),transparent_28%)]"/>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-4 py-2 text-xs font-bold text-teal-100"><span className="h-2 w-2 animate-pulse rounded-full bg-teal"/> 24/7 Medical Services · Shaheen Bagh</div>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-6xl">{t('Your Health.','आपका स्वास्थ्य।')}<br/><span className="text-teal">{t('Our Priority.','हमारी प्राथमिकता।')}</span></h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">{t('Compassionate healthcare, experienced doctors and round-the-clock support for you and your family.','आपके और आपके परिवार के लिए संवेदनशील स्वास्थ्य सेवाएं, अनुभवी डॉक्टर और चौबीसों घंटे सहायता।')}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-4 text-sm font-extrabold text-white shadow-xl shadow-teal/20 transition hover:-translate-y-1"><Phone size={17}/> {t('Book WhatsApp Appointment','WhatsApp अपॉइंटमेंट बुक करें')}<ArrowUpRight size={16}/></a>
              <a href="tel:9355410932" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-4 text-sm font-extrabold text-white backdrop-blur hover:bg-white/10"><Ambulance size={18}/> Emergency 24/7</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-xs font-semibold text-slate-300"><span className="flex items-center gap-2"><BadgeCheck className="text-teal" size={17}/> Patient-first care</span><span className="flex items-center gap-2"><Clock3 className="text-teal" size={17}/> 24/7 emergency support</span><span className="flex items-center gap-2"><ShieldPlus className="text-teal" size={17}/> Multiple specialties</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[3rem] bg-teal/15 blur-2xl"/>
            <div className="relative rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-teal">Al Mannat Hospital</p><h2 className="mt-1 text-2xl font-black">Care around the clock</h2></div><div className="rounded-2xl bg-gold/15 p-3 text-gold"><HeartPulse size={30}/></div></div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[['Emergency support','24 / 7',Ambulance],['Doctor consultations','Daily',Stethoscope],['Dialysis facility','24 / 7',Droplets],['Patient care','Every day',HeartPulse]].map(([label,value,Item])=><div key={label} className="rounded-2xl border border-white/10 bg-navy/30 p-4"><Item size={22} className="mb-4 text-teal"/><p className="text-xs text-slate-300">{label}</p><p className="mt-1 text-lg font-black text-white">{value}</p></div>)}
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-2xl bg-teal px-4 py-4"><MapPin size={22}/><div><p className="text-xs font-bold text-white/80">Visit our hospital</p><p className="text-sm font-extrabold">Shaheen Bagh, New Delhi</p></div><a href={MAPS_LOCATION_URL} target="_blank" rel="noreferrer" className="ml-auto rounded-full bg-white/20 p-2 hover:bg-white/30" aria-label="Open map"><ArrowUpRight size={18}/></a></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 h-1.5 w-full bg-gradient-to-r from-teal via-gold to-teal"/>
      </section>

      <section id="about" className="scroll-mt-28 px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full bg-teal/10 blur-2xl"/>
            <div className="relative rounded-[2rem] bg-gradient-to-br from-navy to-[#174b68] p-8 text-white shadow-soft sm:p-10">
              <p className="text-xs font-extrabold uppercase tracking-[.22em] text-teal">Welcome to Al Mannat</p>
              <h2 className="mt-4 text-3xl font-black leading-tight">Healthcare with compassion, dignity and trust.</h2>
              <p className="mt-5 text-sm leading-7 text-slate-300">A community-focused hospital serving Shaheen Bagh and nearby areas with accessible consultations and patient-centred support.</p>
              <div className="mt-8 grid grid-cols-2 gap-4"><div className="rounded-2xl bg-white/10 p-4"><HeartPulse className="mb-3 text-teal"/><p className="font-extrabold">Patient first</p><p className="mt-1 text-xs text-slate-300">Care with empathy</p></div><div className="rounded-2xl bg-white/10 p-4"><Users className="mb-3 text-gold"/><p className="font-extrabold">Family care</p><p className="mt-1 text-xs text-slate-300">Across life stages</p></div></div>
            </div>
          </div>
          <div><SectionHeading eyebrow="About the hospital" title="Your neighbourhood healthcare partner" description="We bring together medical consultations, specialist services and essential care facilities in one accessible location."/>
            <div className="grid gap-4 sm:grid-cols-2">{[['Accessible location','Conveniently located in Shaheen Bagh, Jamia Nagar.',MapPin],['Experienced team','Consultants across a range of medical specialties.',Stethoscope],['Round-the-clock support','Emergency contact support available 24/7.',Clock3],['Modern care facilities','A focus on safety, comfort and coordinated care.',Building2]].map(([title,desc,Item])=><div key={title} className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal/10 text-teal"><Item size={22}/></span><div><h3 className="font-extrabold text-navy">{title}</h3><p className="mt-1 text-xs leading-5 text-slate-500">{desc}</p></div></div>)}</div>
          </div>
        </div>
      </section>

      <section id="leadership" className="scroll-mt-28 bg-white px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Our leadership" title="Meet the people behind Al Mannat" description="Hospital leadership and medical direction, presented in the requested order."/>
          <div className="grid gap-6 md:grid-cols-3">{leadership.map((person,index)=><article key={person.name} className="group overflow-hidden rounded-[2rem] border border-slate-100 bg-[#f8fbfc] shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-72 overflow-hidden bg-gradient-to-br from-slate-100 to-teal/10"><img src={person.image} alt={person.name} className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"/><span className="absolute left-4 top-4 rounded-full bg-navy px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-white">{index===0?'Founder & Chairman':'Medical Director'}</span></div>
            <div className="p-6"><p className="text-xs font-extrabold uppercase tracking-widest text-teal">{person.tag}</p><h3 className="mt-2 text-xl font-black text-navy">{person.name}</h3><p className="mt-2 text-sm font-bold text-slate-700">{person.role}</p><p className="mt-1 text-xs text-slate-500">{person.detail}</p></div>
          </article>)}</div>
        </div>
      </section>

      <section id="doctors" className="scroll-mt-28 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Find a specialist" title="Our doctors & consultants" description="Search by doctor name, qualification or medical specialty. Timings are displayed as supplied by the hospital."/>
          <div className="mx-auto mb-8 max-w-xl"><div className="relative"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={19}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search doctor or specialty..." className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-sm shadow-sm outline-none transition focus:border-teal focus:ring-4 focus:ring-teal/10"/></div><p className="mt-2 text-center text-xs text-slate-500">{filteredDoctors.length} doctor{filteredDoctors.length===1?'':'s'} found</p></div>
          {filteredDoctors.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filteredDoctors.map(doctor=><DoctorCard key={doctor.name} doctor={doctor}/>)}</div> : <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center text-sm text-slate-500">No doctors match your search. Try another name or specialty.</div>}
        </div>
      </section>

      <section id="dialysis" className="scroll-mt-28 bg-navy px-4 py-20 text-white sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div><p className="text-xs font-extrabold uppercase tracking-[.22em] text-teal">Advanced facility</p><h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">24/7 Dialysis Facility & Critical Care Support</h2><p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">Dedicated renal-care support with access to specialist consultation and essential critical-care facilities. Contact the hospital to confirm current availability and appointments.</p>
            <a href="tel:9355410932" className="mt-7 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3.5 text-sm font-extrabold text-white hover:bg-[#008f81]"><Phone size={17}/> Call emergency desk</a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">{[['24/7 Dialysis Service','Modern dialysis support and nephrology team',Droplets],['AV Fistula Surgery','Vascular access procedure support',Activity],['CTVS Surgeon Visits','Specialist visit coordination',Stethoscope],['Oxygen & ICU Support','24/7 oxygen and critical-care support',Wind]].map(([title,desc,Item])=><div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"><span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-teal/15 text-teal"><Item size={25}/></span><h3 className="font-extrabold">{title}</h3><p className="mt-2 text-xs leading-5 text-slate-300">{desc}</p></div>)}</div>
        </div>
      </section>

      <section id="services" className="scroll-mt-28 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Care under one roof" title="Our medical services" description="Visual service categories to help patients find the right care pathway."/>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map(service=><article key={service.title} className="rounded-3xl border border-slate-100 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-xl"><div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-teal/10 text-teal"><Icon name={service.icon} size={29}/></div><h3 className="text-lg font-extrabold text-navy">{service.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{service.desc}</p><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold text-teal">Enquire now <ChevronRight size={15}/></a></article>)}</div>
        </div>
      </section>

      <section id="reviews" className="scroll-mt-28 bg-gradient-to-br from-[#0a2038] via-navy to-[#123f55] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl"><SectionHeading light eyebrow="Patient experience" title="Your feedback matters" description="Share your experience with our team or visit our Google listing."/>
          <Feedback onSubmit={addLead}/>
          <div className="mt-6 flex flex-wrap justify-center gap-3"><a href={MAPS_BUSINESS_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-bold text-white hover:bg-white/10"><Star size={15}/> See Google reviews</a><a href={MAPS_REVIEW_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-bold text-white hover:bg-white/10"><ArrowUpRight size={15}/> Write a review</a></div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Find us" title="Visit Al Mannat Hospital" description="For appointments, directions and service information, contact our team."/>
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] bg-white p-8 shadow-soft sm:p-10"><div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-teal/10 text-teal"><MapPin size={28}/></div><h3 className="text-2xl font-black text-navy">Hospital address</h3><p className="mt-3 text-sm leading-7 text-slate-600">{ADDRESS}</p><a href={MAPS_LOCATION_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-extrabold text-white hover:bg-teal">Open in Google Maps <ArrowUpRight size={16}/></a></div>
            <div className="rounded-[2rem] bg-gradient-to-br from-teal to-[#087d83] p-8 text-white shadow-soft sm:p-10"><h3 className="text-2xl font-black">Contact & appointments</h3><p className="mt-2 text-sm text-white/80">Our team is here to help you.</p><div className="mt-7 space-y-4">{[['Emergency 24/7','9355410932'],['Reception','9756017861'],['Additional helpline','9650428292']].map(([label,number])=><a key={number} href={`tel:${number}`} className="flex items-center justify-between rounded-2xl bg-white/15 px-5 py-4 transition hover:bg-white/25"><span><span className="block text-xs text-white/70">{label}</span><span className="mt-1 block font-extrabold">{number}</span></span><Phone size={19}/></a>)}</div><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-bold hover:underline"><Instagram size={18}/> Follow us on Instagram</a></div>
          </div>
        </div>
      </section>

      <section className="bg-[#edf5f7] px-4 py-14 sm:px-6"><div className="mx-auto max-w-7xl"><AdminPortal leads={leads} onResolve={resolveLead}/></div></section>
    </main>
    <footer className="bg-[#071d32] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1.25fr_0.8fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src="/images/al-mannat-logo.jpg" alt="Al Mannat Hospital logo" className="h-16 w-16 rounded-xl bg-white object-contain p-1"/>
            <div><p className="text-lg font-black tracking-tight">AL MANNAT</p><p className="text-xs font-bold tracking-[.2em] text-teal">HOSPITAL</p></div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-300">Your health is our priority. Compassionate care and medical support for the Shaheen Bagh community.</p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-teal"><Instagram size={17}/> Follow @almannat_hospital</a>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">Contact us</h3>
          <div className="mt-5 space-y-4 text-sm">
            <a href="tel:9355410932" className="flex items-start gap-3 text-slate-300 hover:text-teal"><Phone size={16} className="mt-0.5 text-gold"/> <span><b className="block text-white">Emergency 24/7</b>9355410932</span></a>
            <a href="tel:9756017861" className="flex items-start gap-3 text-slate-300 hover:text-teal"><Phone size={16} className="mt-0.5 text-gold"/> <span><b className="block text-white">Reception</b>9756017861</span></a>
            <a href="tel:9650428292" className="flex items-start gap-3 text-slate-300 hover:text-teal"><Phone size={16} className="mt-0.5 text-gold"/> <span><b className="block text-white">Helpline</b>9650428292</span></a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">Our services</h3>
          <ul className="mt-5 grid grid-cols-1 gap-3 text-sm text-slate-300 sm:grid-cols-2">
            {['24/7 Dialysis & Nephrology','General Medicine','Gastroenterology & Liver Care','Gynaecology & Women’s Health','Dermatology & Skin Care','Physiotherapy & Rehabilitation','AV Fistula Surgery','Oxygen & Critical Care'].map(item=><li key={item} className="flex items-start gap-2"><CheckCircle2 size={14} className="mt-0.5 shrink-0 text-teal"/>{item}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">Quick links</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {['Home','About','Leadership','Doctors','Services','Reviews','Contact'].map((item,i)=><li key={item}><a href={['#home','#about','#leadership','#doctors','#services','#reviews','#contact'][i]} className="hover:text-teal">{item}</a></li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">Our location</h3>
          <p className="mt-5 flex gap-3 text-sm leading-6 text-slate-300"><MapPin size={18} className="mt-1 shrink-0 text-gold"/>{ADDRESS}</p>
          <a href={MAPS_LOCATION_URL} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-extrabold text-navy transition hover:bg-teal hover:text-white"><MapPin size={15}/> Open in Google Maps <ArrowUpRight size={14}/></a>
          <a href={MAPS_REVIEW_URL} target="_blank" rel="noreferrer" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-xs font-extrabold text-white transition hover:bg-white/10"><Star size={15} className="text-gold"/> Write a Google Review</a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-center text-[11px] text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between md:text-left">
          <p>© {new Date().getFullYear()} Al Mannat Hospital. All rights reserved.</p>
          <p>Ground Floor, F166, Shaheen Bagh, New Delhi 110025</p>
          <div className="flex justify-center gap-5"><a href="#contact" className="hover:text-white">Privacy & Patient Care</a><a href="#contact" className="hover:text-white">Contact</a></div>
        </div>
      </div>
    </footer>
  </div>
}

export default App
