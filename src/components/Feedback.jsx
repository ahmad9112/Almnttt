import { useState } from 'react'
import { Star, X, CheckCircle2, MessageSquareHeart } from 'lucide-react'
import { MAPS_REVIEW_URL } from '../data/hospital'

export default function Feedback({ onSubmit }) {
  const [rating, setRating] = useState(0)
  const [modal, setModal] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function chooseRating(value) {
    setRating(value)
    setSent(false)
    setModal(true)
  }
  function submit(e) {
    e.preventDefault()
    if (!name.trim() || !phone.trim() || !message.trim()) return
    onSubmit({ id: `${Date.now()}-${Math.random().toString(16).slice(2)}`, name: name.trim(), phone: phone.trim(), rating, message: message.trim(), createdAt: new Date().toISOString(), resolved: false })
    setSent(true)
    setName(''); setPhone(''); setMessage('')
  }
  return <>
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 text-center backdrop-blur-lg sm:p-10">
      <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-gold/15 text-gold"><MessageSquareHeart size={27}/></div>
      <h3 className="text-2xl font-black text-white">How was your experience?</h3>
      <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-300">Your feedback helps us improve the care and service we provide.</p>
      <div className="mt-6 flex justify-center gap-2" aria-label="Rate your experience">
        {[1,2,3,4,5].map(n => <button key={n} onClick={() => chooseRating(n)} aria-label={`${n} star rating`} className={`rounded-xl p-2 transition hover:scale-110 ${rating >= n ? 'text-gold' : 'text-slate-500 hover:text-gold'}`}><Star size={34} fill={rating >= n ? 'currentColor' : 'none'}/></button>)}
      </div>
      <p className="mt-2 text-xs text-slate-400">Select 1–5 stars to continue</p>
    </div>
    {modal && <div className="fixed inset-0 z-[70] flex items-center justify-center bg-navy/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl">
        <button onClick={() => setModal(false)} className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100" aria-label="Close"><X size={18}/></button>
        {rating >= 4 ? <div className="text-center">
          <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-amber-50 text-gold"><Star size={28} fill="currentColor"/></div>
          <h3 className="text-xl font-black text-navy">Thank you for your rating!</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">We’re glad you had a positive experience. You can share your review on Google.</p>
          <a href={MAPS_REVIEW_URL} target="_blank" rel="noreferrer" className="mt-6 block rounded-xl bg-teal px-5 py-3 text-center text-sm font-extrabold text-white hover:bg-[#008f81]">Write a Google Review</a>
          <button onClick={() => setModal(false)} className="mt-3 text-sm font-bold text-slate-500">Close</button>
        </div> : sent ? <div className="py-5 text-center">
          <CheckCircle2 size={48} className="mx-auto text-teal"/>
          <h3 className="mt-4 text-xl font-black text-navy">Feedback received</h3>
          <p className="mt-2 text-sm text-slate-600">Thank you. The hospital team can review your feedback through the admin portal on this device.</p>
          <button onClick={() => setModal(false)} className="mt-6 rounded-xl bg-navy px-6 py-3 text-sm font-bold text-white">Done</button>
        </div> : <form onSubmit={submit}>
          <p className="text-xs font-extrabold uppercase tracking-widest text-teal">Private feedback</p>
          <h3 className="mt-2 text-xl font-black text-navy">Help us make things better</h3>
          <p className="mt-1 text-sm text-slate-500">You selected {rating} out of 5 stars. Please tell us what went wrong.</p>
          <label className="mt-5 block text-xs font-bold text-slate-600">Patient name<input required value={name} onChange={e=>setName(e.target.value)} className="form-field" placeholder="Your name"/></label>
          <label className="mt-3 block text-xs font-bold text-slate-600">Phone number<input required type="tel" value={phone} onChange={e=>setPhone(e.target.value)} className="form-field" placeholder="Your contact number"/></label>
          <label className="mt-3 block text-xs font-bold text-slate-600">Feedback<textarea required value={message} onChange={e=>setMessage(e.target.value)} rows="4" className="form-field resize-y" placeholder="Please describe your experience..."/></label>
          <button className="mt-5 w-full rounded-xl bg-navy px-5 py-3 text-sm font-extrabold text-white hover:bg-teal">Submit feedback</button>
          <p className="mt-3 text-[11px] leading-5 text-slate-400">Demo note: this version stores feedback in this browser only. Connect a protected backend before collecting real patient data.</p>
        </form>}
      </div>
    </div>}
  </>
}
