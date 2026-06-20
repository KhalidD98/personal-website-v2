import { useEffect, useState } from 'react'
import { Star, Chat, Briefcase } from './icons'

const THINKING_DELAY_MS = 900

function ChatIcon({ kind }) {
  return kind === 'briefcase' ? <Briefcase className="ic" /> : <Chat className="ic" />
}

// Renders a chat as a conversation: a "You" question turn + a "KD" answer turn.
export default function ChatView({ chat }) {
  const { Content } = chat
  const [isThinking, setIsThinking] = useState(true)

  useEffect(() => {
    setIsThinking(true)
    const timer = window.setTimeout(() => {
      setIsThinking(false)
    }, THINKING_DELAY_MS)

    return () => window.clearTimeout(timer)
  }, [chat])

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
        <div className="response-slot">
          {isThinking ? (
            <div className="thinking" role="status" aria-live="polite">
              <span>KD is thinking</span>
              <span className="dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </div>
          ) : (
            <div className="answer-reveal" key={chat.id || chat.title}>
              <Content />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export { ChatIcon }
