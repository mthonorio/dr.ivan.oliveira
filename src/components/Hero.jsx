import { doctor } from '../config.js'
import WhatsAppButton from './WhatsAppButton.jsx'

export default function Hero() {
  const initials = 'IO'
  return (
    <section id="topo" className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:pb-24 md:pt-20">
      <div>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-sage">
          Ginecologia · Pré-natal · Parto
        </p>
        <h1 className="text-4xl font-medium leading-[1.1] text-ink sm:text-5xl md:text-6xl">
          Cuidado atento para cada fase da sua vida e da sua gestação.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Sou {doctor.name}, {doctor.title}, parteiro e cristão. Acompanho mulheres e famílias com escuta, informação clara e respeito às suas escolhas.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <WhatsAppButton>Agendar consulta</WhatsAppButton>
          <a href="#atuacao" className="px-2 py-3 text-center text-[15px] font-medium text-clay hover:underline">
            Conhecer áreas de atuação
          </a>
        </div>
        <p className="mt-6 text-sm text-muted">
          {doctor.crm} · {doctor.rqe}
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-sm">
        <div className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-sage-soft" aria-hidden="true" />
        <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-sand-deep">
          {doctor.photo ? (
            <img src={doctor.photo} alt={`${doctor.name}, ginecologista e obstetra`} className="h-full w-full object-cover object-top" />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center">
              <span className="font-serif text-7xl text-clay/70">{initials}</span>
              <span className="px-8 text-xs uppercase tracking-widest text-muted">
                [PLACEHOLDER] foto do Dr. Ivan
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
