import { useState } from 'react'
import { doctor } from '../config.js'
import WhatsAppButton from './WhatsAppButton.jsx'

const links = [
  ['Atuação', '#atuacao'],
  ['Como funciona', '#como-funciona'],
  ['Sobre', '#sobre'],
  ['Dúvidas', '#duvidas'],
  ['Contato', '#contato'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-clay/10 bg-sand/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#topo" className="font-serif text-lg font-semibold text-clay">{doctor.name}</a>
        <nav className="hidden items-center gap-7 text-sm text-muted md:flex" aria-label="Principal">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="hover:text-clay">{l}</a>
          ))}
          <WhatsAppButton className="!px-5 !py-2.5 !text-sm">Agendar</WhatsAppButton>
        </nav>
        <button
          className="rounded-md p-2 text-clay md:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="border-t border-clay/10 bg-sand px-4 pb-5 pt-2 md:hidden" aria-label="Mobile">
          {links.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="block py-3 text-muted">{l}</a>
          ))}
          <WhatsAppButton className="mt-2 w-full">Agendar pelo WhatsApp</WhatsAppButton>
        </nav>
      )}
    </header>
  )
}
