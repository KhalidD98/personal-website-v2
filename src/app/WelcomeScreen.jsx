import { Star, Chat, Briefcase, Mail } from './icons'
import { currentGreeting } from './greeting'

const SUGGESTIONS = [
  { id: 'ai-pipeline', icon: 'chat', label: 'Tell me about the Autonomous AI Development Pipeline' },
  { id: 'lineleader', icon: 'briefcase', label: 'What do you do at Lineleader?' },
  { id: 'minecraft-single', icon: 'chat', label: 'Show me the Twitch Minecraft server' },
  { id: 'contact', icon: 'mail', label: 'How do I get in touch?' },
]

function SuggestionIcon({ kind }) {
  if (kind === 'briefcase') return <Briefcase className="ic" />
  if (kind === 'mail') return <Mail className="ic" />
  return <Chat className="ic" />
}

export default function WelcomeScreen({ onSelect }) {
  return (
    <div className="welcome">
      <Star className="star" />
      <h1>{currentGreeting()}, I'm Khalid</h1>
      <p className="lead">
        An agentic software engineer who designs and reviews systems that ship code. My experience
        and projects are the chats on the left — open one and KD&nbsp;Mythos&nbsp;8.8 will tell you
        about it.
      </p>
      <div className="suggestions">
        {SUGGESTIONS.map((s) => (
          <button key={s.id} className="suggestion" onClick={() => onSelect(s.id)}>
            <SuggestionIcon kind={s.icon} />
            {s.label}
          </button>
        ))}
      </div>
    </div>
  )
}
