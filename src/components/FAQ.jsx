import { faqs } from '../config.js'

export default function FAQ() {
  return (
    <section id="duvidas" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h2 className="text-3xl text-ink sm:text-4xl">Dúvidas frequentes</h2>
      <div className="mt-8 divide-y divide-clay/15 border-y border-clay/15">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg text-ink">
              {f.q}
              <span className="text-2xl text-clay transition-transform group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
