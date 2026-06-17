import { useState, useEffect } from 'react'
import orbinspireLanding from '../../assets/orbinspire-landing.jpg'
import orbinspireCalendar from '../../assets/orbinspire-calendar.jpg'
import orbinspireEventDetails from '../../assets/orbinspire-event-details.jpg'
import orbinspireDashboard from '../../assets/orbinspire-dashboard.jpg'
import orbinspireCredit from '../../assets/orbinspire-credit.jpg'
import orbinspireEventsAdmin from '../../assets/orbinspire-events-admin.jpg'
import orbinspireStoreHours from '../../assets/orbinspire-store-hours.jpg'
import orbinspireUsers from '../../assets/orbinspire-users.jpg'

function Shot({ src, alt, onOpen, children }) {
  return (
    <button type="button" className="media shot" onClick={() => onOpen({ src, alt, caption: children })}>
      <img src={src} alt={alt} loading="lazy" />
      <p>{children}</p>
    </button>
  )
}

function Lightbox({ shot, onClose }) {
  useEffect(() => {
    if (!shot) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [shot, onClose])

  if (!shot) return null
  return (
    <div className="lightbox" onClick={onClose}>
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close">
        ×
      </button>
      <figure className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <img src={shot.src} alt={shot.alt} />
        <figcaption>{shot.caption}</figcaption>
      </figure>
    </div>
  )
}

export default function OrbinspireGamesAnswer() {
  const [active, setActive] = useState(null)

  return (
    <div className="answer">
      <p className="meta">// react · typescript · convex · tailwind · vercel</p>

      <p>
        I built a <strong>full-stack web app</strong> for a local tabletop game shop in{' '}
        <strong>Fort Worth</strong>. The shop needed a way to track customer{' '}
        <strong>store credit balances</strong>, schedule tournaments (MTG, Pokémon, Yu-Gi-Oh!), and
        show upcoming events on a public page. Staff used the admin panel to look up customers, log
        transactions, and manage events.
      </p>

      <p>
        I used <strong>Claude Code</strong> as a coding partner throughout the project. The shop
        ended up going a different direction, but I'm still proud of how it turned out and wanted to
        share the work.
      </p>

      <p>
        <a
          className="inline"
          href="https://github.com/KhalidD98/orbinspiregames"
          target="_blank"
          rel="noreferrer"
        >
          github.com/KhalidD98/orbinspiregames
        </a>
      </p>

      <h4>Public site</h4>
      <div className="media-grid">
        <Shot src={orbinspireLanding} alt="OrbInspire Games landing page" onOpen={setActive}>
          The <span className="accent">landing page</span> — store branding, game logos, and a quick
          overview of what the shop carries.
        </Shot>
        <Shot src={orbinspireCalendar} alt="Events calendar" onOpen={setActive}>
          The <span className="accent">events calendar</span> — a monthly view of upcoming
          tournaments and game nights for customers to browse.
        </Shot>
        <Shot src={orbinspireEventDetails} alt="Event details popup" onOpen={setActive}>
          <span className="accent">Event details</span> — clicking an event pulls up the game type,
          format, entry fee, and time.
        </Shot>
      </div>

      <h4>Admin panel</h4>
      <div className="media-grid">
        <Shot src={orbinspireDashboard} alt="Admin dashboard" onOpen={setActive}>
          The <span className="accent">dashboard</span> — the staff home screen, with upcoming events
          and a quick customer lookup by name or phone number.
        </Shot>
        <Shot src={orbinspireCredit} alt="Customer store credit page" onOpen={setActive}>
          <span className="accent">Customer credit</span> — a running balance and full transaction
          history; staff add new transactions from here.
        </Shot>
        <Shot src={orbinspireEventsAdmin} alt="Events management" onOpen={setActive}>
          <span className="accent">Events management</span> — where managers create, edit, and delete
          events.
        </Shot>
        <Shot src={orbinspireStoreHours} alt="Store hours management" onOpen={setActive}>
          <span className="accent">Store hours</span> — set and reorder the operating hours that
          display on the public site.
        </Shot>
        <Shot src={orbinspireUsers} alt="User management" onOpen={setActive}>
          <span className="accent">User management</span> — an owner view for inviting staff,
          assigning roles, and managing team access.
        </Shot>
      </div>

      <div className="tags">
        {['React', 'TypeScript', 'Convex', 'Tailwind', 'Vercel'].map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>

      <Lightbox shot={active} onClose={() => setActive(null)} />
    </div>
  )
}
