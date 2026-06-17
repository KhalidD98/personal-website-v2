import { useState } from 'react'
import './app/kdapp.css'
import Sidebar from './app/Sidebar'
import ChatView from './app/ChatView'
import WelcomeScreen from './app/WelcomeScreen'
import ContactView from './app/ContactView'
import Composer from './app/Composer'
import { getChat } from './app/chats'
import { Chat, Briefcase, Mail, Star, Menu } from './app/icons'

function HeaderIcon({ view, chat }) {
  if (view === 'contact') return <Mail className="ic" />
  if (chat?.icon === 'briefcase') return <Briefcase className="ic" />
  if (chat) return <Chat className="ic" />
  return <Star className="ic" />
}

export default function App() {
  // selected: 'welcome' | 'contact' | <chatId>
  const [selected, setSelected] = useState('welcome')
  const [drawerOpen, setDrawerOpen] = useState(false)

  const chat = getChat(selected)
  const title =
    selected === 'contact' ? 'Get in touch' : chat ? chat.title : 'Khalid Dakak'

  const select = (id) => {
    setSelected(id)
    setDrawerOpen(false)
  }

  return (
    <div className={`app${drawerOpen ? ' drawer-open' : ''}`}>
      <Sidebar selected={selected} onSelect={select} />
      <div className="scrim" onClick={() => setDrawerOpen(false)} />

      <section className="main">
        <div className="topbar">
          <div className="title">
            <button
              className="iconbtn hamburger"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open sidebar"
            >
              <Menu style={{ width: 20, height: 20 }} />
            </button>
            <HeaderIcon view={selected} chat={chat} />
            <span className="t">{title}</span>
          </div>
        </div>

        {selected === 'welcome' && <WelcomeScreen onSelect={select} />}
        {selected === 'contact' && <ContactView />}
        {chat && <ChatView chat={chat} />}

        <Composer />
      </section>
    </div>
  )
}
