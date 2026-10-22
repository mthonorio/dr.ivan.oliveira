import { whatsappUrl } from '../config.js'
import { WhatsAppIcon } from './Icons.jsx'

export default function WhatsAppButton({ children = 'Agendar pelo WhatsApp', variant = 'solid', className = '' }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2'
  const styles =
    variant === 'solid'
      ? 'bg-clay text-cream hover:bg-clay-dark'
      : 'border border-clay/40 text-clay hover:bg-clay hover:text-cream'
  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
      <WhatsAppIcon />
      {children}
    </a>
  )
}
