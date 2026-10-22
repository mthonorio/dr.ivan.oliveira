import { doctor } from '../config.js'

export default function Credentials() {
  const items = [
    ['Registro', doctor.crm],
    ['Especialista', doctor.rqe],
    ['Atendimento', 'Particular'],
    ['Agendamento', 'Pelo WhatsApp'],
  ]
  return (
    <section aria-label="Credenciais" className="border-y border-clay/10 bg-cream">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 text-center sm:px-6 md:grid-cols-4">
        {items.map(([k, v]) => (
          <div key={k}>
            <dt className="text-xs uppercase tracking-widest text-muted">{k}</dt>
            <dd className="mt-1 font-serif text-xl text-ink">{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
