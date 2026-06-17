import { Star, Chat, Briefcase } from './icons'

function ChatIcon({ kind }) {
  return kind === 'briefcase' ? <Briefcase className="ic" /> : <Chat className="ic" />
}

// Renders a chat as a conversation: a "You" question turn + a "KD" answer turn.
export default function ChatView({ chat }) {
  const { Content } = chat
  return (
    <div className="convo">
      <div className="turn">
        <div className="who">
          <span className="badge u">K</span>You
        </div>
        <div className="userbubble">{chat.question}</div>
      </div>

      <div className="turn">
        <div className="who">
          <span className="badge c">
            <Star className="" style={{ width: 13, height: 13 }} />
          </span>
          KD
        </div>
        <Content />
      </div>
    </div>
  )
}

export { ChatIcon }
