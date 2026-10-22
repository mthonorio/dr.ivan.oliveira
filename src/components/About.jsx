import { doctor, about } from '../config.js'

export default function About() {
  return (
    <section id="sobre" className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:items-start">
      <div className="mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-[2rem] bg-sand-deep md:sticky md:top-24">
        {doctor.aboutPhoto ? (
          <img src={doctor.aboutPhoto} alt={`${doctor.name} acompanhando uma paciente`} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-xs uppercase tracking-widest text-muted">
            [PLACEHOLDER] foto
          </div>
        )}
      </div>
      <div>
        <h2 className="text-3xl text-ink sm:text-4xl">Quem é o {doctor.name}</h2>
        <p className="mt-4 font-serif text-xl text-clay">{about.lead}</p>
        <div className="mt-5 space-y-4 leading-relaxed text-muted">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>
        <h3 className="mt-8 text-lg text-clay">Formação e atuação</h3>
        <ul className="mt-3 space-y-2 text-muted">
          {about.formation.map((f) => (
            <li key={f}>{f}</li>
          ))}
          <li>{doctor.role}</li>
          <li>{doctor.crm} - {doctor.rqe}</li>
        </ul>
      </div>
    </section>
  )
}
