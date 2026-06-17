import { useState } from 'react'
import { CHATS, GROUPS } from './chats'
import { Chat, Briefcase, Mail, Search } from './icons'
import profilePicture from '../assets/profilePicture.png'

function ChatIcon({ kind }) {
  return kind === 'briefcase' ? <Briefcase className="ic" /> : <Chat className="ic" />
}

export default function Sidebar({ selected, onSelect }) {
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()

  return (
    <aside className="sb">
      <div className="sb-top">
        <div className="brand">
          Khalid Dakak
        </div>
      </div>

      <button
        className={`newchat${selected === 'contact' ? ' active' : ''}`}
        onClick={() => onSelect('contact')}
      >
        <Mail className="" style={{ width: 16, height: 16 }} />
        Get in touch
      </button>

      <div className="sb-search">
        <Search className="" style={{ width: 14, height: 14 }} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search chats…"
          aria-label="Search chats"
        />
      </div>

      <div className="sb-scroll">
        {GROUPS.map((group) => {
          const items = CHATS.filter(
            (c) => c.group === group && (!q || c.title.toLowerCase().includes(q))
          )
          if (items.length === 0) return null
          return (
            <div key={group}>
              <div className="sb-group">{group}</div>
              {items.map((c) => (
                <button
                  key={c.id}
                  className={`chat${selected === c.id ? ' active' : ''}`}
                  onClick={() => onSelect(c.id)}
                >
                  <ChatIcon kind={c.icon} />
                  <span className="label">{c.title}</span>
                </button>
              ))}
            </div>
          )
        })}
      </div>

      <div className="sb-foot">
        <img className="ava" src={profilePicture} alt="Khalid Dakak" />
        <div>
          <div className="nm">Khalid Dakak</div>
          <div className="pl">Portfolio</div>
        </div>
      </div>
    </aside>
  )
}
