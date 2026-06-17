export default function PersonalWebsiteAnswer() {
  return (
    <div className="answer">
      <p className="meta">// react · vite · the site you're looking at</p>

      <p>
        You're looking at it. This portfolio is built to feel like the <strong>KD desktop app</strong> —
        my experience and projects are the "chats," and opening one streams back the details as a
        KD&nbsp;Mythos&nbsp;8.8 answer.
      </p>
      <p>
        It's a deliberate nod to how I work now: an <strong>agentic software engineer</strong> who
        designs and reviews systems that ship code. The composer's out of tokens on purpose — the
        story lives in the chats on the left.
      </p>

      <div className="tags">
        {['React', 'Vite', 'Tailwind', 'Hand-built'].map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>
    </div>
  )
}
