import { steps } from '../config.js'
import WhatsAppButton from './WhatsAppButton.jsx'

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-sage-soft">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl text-ink sm:text-4xl">Como funciona o atendimento</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n}>
              <span className="font-serif text-4xl text-clay/60">{s.n}</span>
              <h3 className="mt-2 text-xl text-ink">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <WhatsAppButton>Começar pelo WhatsApp</WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
