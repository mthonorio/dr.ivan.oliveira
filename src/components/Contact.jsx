import { doctor, phoneDisplay } from '../config.js'
import WhatsAppButton from './WhatsAppButton.jsx'

export default function Contact() {
  return (
    <section id="contato" className="bg-sage-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2">
        <div>
          <h2 className="text-3xl text-ink sm:text-4xl">Agende sua consulta</h2>
          <p className="mt-4 max-w-md text-muted">
            O agendamento é feito pelo WhatsApp. Atendimento particular, sem convênios.
          </p>
          <WhatsAppButton className="mt-7">Falar no WhatsApp</WhatsAppButton>
          <p className="mt-3 text-sm text-muted">{phoneDisplay}</p>
        </div>
        <dl className="space-y-5 text-muted">
          <div>
            <dt className="text-xs uppercase tracking-widest text-clay">Local</dt>
            <dd className="mt-1">{doctor.address.map((l) => (<span key={l} className="block">{l}</span>))}</dd>
          </div>
          <div>
            <div className="aspect-video overflow-hidden rounded-2xl bg-sand-deep">
              <iframe
                title="Mapa do consultório"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(doctor.mapQuery)}&output=embed`}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(doctor.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-medium text-clay hover:underline"
            >
              Abrir no Google Maps
            </a>
          </div>
        </dl>
      </div>
    </section>
  )
}
