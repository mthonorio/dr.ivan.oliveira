import { doctor } from '../config.js'

export default function Footer() {
  return (
    <footer className="bg-ink text-sand/70">
      <div className="mx-auto max-w-6xl space-y-3 px-4 py-10 text-sm sm:px-6">
        <p className="font-serif text-lg text-sand">{doctor.name}</p>
        <p>{doctor.title} · {doctor.crm} - {doctor.rqe}</p>
        <p className="max-w-2xl text-xs leading-relaxed">
          Este site tem caráter meramente informativo e não substitui consulta médica. Em caso de urgência, procure um serviço de emergência.
        </p>
        <p className="text-xs">© {new Date().getFullYear()} {doctor.name}. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
