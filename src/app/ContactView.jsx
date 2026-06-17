import { Star, Mail, Github, Linkedin, Download } from './icons'
import resumePdf from '../assets/Khalid_Dakak_Resume.pdf'

const CHANNELS = [
  { icon: Mail, label: 'khaliddakak@gmail.com', href: 'mailto:khaliddakak@gmail.com' },
  { icon: Linkedin, label: 'linkedin.com/in/khaliddakak', href: 'https://www.linkedin.com/in/khaliddakak/' },
  { icon: Github, label: 'github.com/KhalidD98', href: 'https://github.com/KhalidD98' },
]

export default function ContactView() {
  return (
    <div className="convo">
      <div className="turn">
        <div className="who">
          <span className="badge u">K</span>You
        </div>
        <div className="userbubble">How do I get in touch with Khalid?</div>
      </div>

      <div className="turn">
        <div className="who">
          <span className="badge c">
            <Star className="" style={{ width: 13, height: 13 }} />
          </span>
          KD
        </div>
        <div className="answer">
          <p>Here's the best way to reach Khalid — he'll actually reply.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '4px 0 18px' }}>
            {CHANNELS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                className="suggestion"
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Icon className="ic" />
                {label}
              </a>
            ))}
          </div>

          <a
            className="suggestion"
            href={resumePdf}
            download="Khalid_Dakak_Resume.pdf"
            style={{ textDecoration: 'none', display: 'inline-flex' }}
          >
            <Download className="ic" />
            Download résumé (PDF)
          </a>
        </div>
      </div>
    </div>
  )
}
