import { useState } from 'react'
import { Menu, X, Phone, Instagram, Languages } from 'lucide-react'
import { INSTAGRAM_URL, WHATSAPP_URL } from '../data/hospital'

const links = [
  ['Home', '#home'], ['About', '#about'], ['Leadership', '#leadership'], ['Doctors', '#doctors'],
  ['Dialysis', '#dialysis'], ['Services', '#services'], ['Reviews', '#reviews'], ['Admin Portal', '#admin'], ['Contact', '#contact'],
]

export default function Header({ language, setLanguage, t }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:px-6">
          <span className="font-semibold tracking-wide">24/7 EMERGENCY SUPPORT</span>
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <a className="inline-flex items-center gap-1.5 hover:text-teal" href="tel:9355410932"><Phone size={13}/> Emergency: 9355410932</a>
            <a className="inline-flex items-center gap-1.5 hover:text-teal" href="tel:9756017861"><Phone size={13}/> Reception: 9756017861</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-teal"><Instagram size={16}/></a>
            <button onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')} className="inline-flex items-center gap-1 rounded-full border border-white/25 px-2.5 py-1 font-bold"><Languages size={14}/>{language === 'en' ? 'हिंदी' : 'English'}</button>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#home" className="flex items-center gap-3">
            <img src="/images/al-mannat-logo.jpg" alt="Al Mannat Hospital logo" className="h-14 w-14 rounded-xl object-contain" />
            <span><span className="block text-lg font-black leading-5 tracking-tight text-navy">AL MANNAT</span><span className="text-[10px] font-extrabold tracking-[.25em] text-teal">HOSPITAL</span></span>
          </a>
          <nav className="hidden items-center gap-5 xl:flex">
            {links.map(([label, href]) => <a key={href} href={href} className="text-xs font-bold text-slate-600 transition hover:text-teal">{label}</a>)}
          </nav>
          <div className="hidden lg:block"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-full bg-teal px-5 py-3 text-xs font-extrabold text-white shadow-lg shadow-teal/20 transition hover:-translate-y-0.5 hover:bg-[#008f81]">{t('Book WhatsApp Appointment','WhatsApp पर अपॉइंटमेंट बुक करें')}</a></div>
          <button className="rounded-xl border border-slate-200 p-2 text-navy xl:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
        </div>
        {open && <nav className="grid grid-cols-2 gap-1 border-t border-slate-100 bg-white p-4 sm:grid-cols-3 xl:hidden">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-semibold text-navy hover:bg-teal/10">{label}</a>)}<a href={WHATSAPP_URL} className="col-span-2 rounded-lg bg-teal px-3 py-2 text-center text-sm font-bold text-white sm:col-span-3">Book WhatsApp Appointment</a></nav>}
      </header>
    </>
  )
}
