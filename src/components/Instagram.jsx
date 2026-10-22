import { doctor } from '../config.js'
import { InstagramIcon } from './Icons.jsx'

export default function Instagram() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-clay p-8 text-cream md:flex-row md:items-center md:p-10">
        <div>
          <h2 className="text-2xl sm:text-3xl">Informação de qualidade no Instagram</h2>
          <p className="mt-2 max-w-lg text-cream/80">
            Conteúdo educativo sobre gestação, parto e saúde da mulher. Acompanhe {doctor.instagramHandle}.
          </p>
        </div>
        <a
          href={doctor.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 text-[15px] font-medium text-clay hover:bg-sand"
        >
          <InstagramIcon /> Seguir no Instagram
        </a>
      </div>
    </section>
  )
}
