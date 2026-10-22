import { areas } from '../config.js'

export default function Areas() {
  return (
    <section id="atuacao" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 className="max-w-2xl text-3xl text-ink sm:text-4xl">Áreas de atuação</h2>
      <p className="mt-3 max-w-xl text-muted">Do cuidado de rotina ao acompanhamento da gestação e do nascimento.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {areas.map((a, i) => (
          <article key={a.title} className="rounded-3xl border border-clay/10 bg-cream p-7">
            <span className="font-serif text-sm text-sage">0{i + 1}</span>
            <h3 className="mt-3 text-2xl text-clay">{a.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{a.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
