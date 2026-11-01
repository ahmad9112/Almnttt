import { useState } from 'react'
import { LockKeyhole, LogOut, ShieldCheck, CircleCheck, AlertCircle, Eye, EyeOff } from 'lucide-react'

// Frontend demonstration only. Never use hard-coded credentials for a live patient-data system.
const DEMO_USER = 'admin'
const DEMO_PASSWORD = 'Mannat@2026'

export default function AdminPortal({ leads, onResolve }) {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  function login(e) {
    e.preventDefault()
    if (user === DEMO_USER && password === DEMO_PASSWORD) { setLoggedIn(true); setError('') }
    else setError('Invalid demo username or password.')
  }
  const pending = leads.filter(item => !item.resolved)
  return <section id="admin" className="scroll-mt-28 rounded-[2rem] bg-white p-6 shadow-soft sm:p-9">
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-teal">Management access</p><h3 className="mt-2 text-2xl font-black text-navy">Admin Lead Resolution</h3></div>
      {loggedIn && <button onClick={()=>setLoggedIn(false)} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600"><LogOut size={15}/> Sign out</button>}
    </div>
    {!loggedIn ? <div className="mx-auto mt-8 max-w-md rounded-3xl border border-slate-100 bg-slate-50 p-6">
      <div className="mb-5 flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-white"><LockKeyhole/></span><div><h4 className="font-extrabold text-navy">Authorized staff only</h4><p className="text-xs text-slate-500">Sign in to view low-rating feedback</p></div></div>
      <form onSubmit={login} className="space-y-3">
        <input value={user} onChange={e=>setUser(e.target.value)} className="form-field" placeholder="Username" autoComplete="username" required/>
        <div className="relative"><input value={password} onChange={e=>setPassword(e.target.value)} className="form-field pr-12" placeholder="Password" type={showPassword?'text':'password'} autoComplete="current-password" required/><button type="button" onClick={()=>setShowPassword(!showPassword)} className="absolute right-4 top-3.5 text-slate-400" aria-label="Toggle password visibility">{showPassword?<EyeOff size={17}/>:<Eye size={17}/>}</button></div>
        {error && <p className="flex items-center gap-2 text-xs font-semibold text-red-600"><AlertCircle size={14}/>{error}</p>}
        <button className="w-full rounded-xl bg-navy py-3 text-sm font-extrabold text-white hover:bg-teal">Secure sign in</button>
      </form>
      <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-[11px] leading-5 text-amber-800"><b>Demo credentials:</b> admin / Mannat@2026. This is client-side demo authentication, not secure production authentication.</p>
    </div> : <div className="mt-7">
      <div className="mb-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl bg-slate-50 p-4"><p className="text-xs font-bold text-slate-500">Total negative feedback</p><p className="mt-1 text-3xl font-black text-navy">{leads.length}</p></div>
        <div className="rounded-2xl bg-amber-50 p-4"><p className="text-xs font-bold text-amber-700">Needs resolution</p><p className="mt-1 text-3xl font-black text-amber-800">{pending.length}</p></div>
        <div className="rounded-2xl bg-teal/10 p-4"><p className="text-xs font-bold text-teal">Resolved</p><p className="mt-1 text-3xl font-black text-navy">{leads.length-pending.length}</p></div>
      </div>
      {leads.length===0 ? <div className="rounded-2xl border border-dashed border-slate-200 p-10 text-center text-sm text-slate-500"><ShieldCheck size={30} className="mx-auto mb-3 text-teal"/>No negative feedback has been submitted on this browser.</div> : <div className="space-y-3">{[...leads].sort((a,b)=>b.createdAt.localeCompare(a.createdAt)).map(lead=><article key={lead.id} className="rounded-2xl border border-slate-100 p-5">
        <div className="flex flex-wrap items-start justify-between gap-3"><div><h4 className="font-extrabold text-navy">{lead.name}</h4><p className="mt-1 text-xs text-slate-500">{lead.phone} · {new Date(lead.createdAt).toLocaleString()}</p></div><span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-extrabold text-rose-600">{lead.rating} / 5 stars</span></div>
        <p className="mt-4 whitespace-pre-wrap text-sm leading-6 text-slate-700">{lead.message}</p>
        <div className="mt-4">{lead.resolved ? <span className="inline-flex items-center gap-2 text-xs font-bold text-teal"><CircleCheck size={15}/> Resolved</span> : <button onClick={()=>onResolve(lead.id)} className="rounded-xl bg-teal px-4 py-2.5 text-xs font-extrabold text-white hover:bg-[#008f81]">Mark as resolved</button>}</div>
      </article>)}</div>}
    </div>}
  </section>
}
