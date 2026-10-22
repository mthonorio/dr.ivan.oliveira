import { testimonials } from '../config.js'

export default function Testimonials() {
  if (!testimonials.length) return null
  return (
    <section aria-labelledby="depoimentos" className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 id="depoimentos" className="text-3xl text-ink sm:text-4xl">O que dizem as pacientes</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-3xl bg-sand p-7">
              <blockquote className="leading-relaxed text-muted">“{t.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-clay">{t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
