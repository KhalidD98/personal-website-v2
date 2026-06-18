export default function TorqAnswer() {
  return (
    <div className="answer">
      <p className="meta">// jan 2026 — present · software engineering consultant</p>

      <p>
        Torq is a consulting firm that places developers with clients in automotive, healthcare, and
        aerospace. I work directly in client codebases, shipping features and untangling performance
        problems across their stacks.
      </p>
      <ul>
        <li>
          Diagnosed a <strong>Blazor re-render issue</strong> that fired feature-flag API calls on
          every UI interaction. Migrated to the SDK with local caching and parallelized the calls,{' '}
          <strong>cutting load time from 3+ seconds to under 8ms</strong>.
        </li>
        <li>
          Built a <strong>case management page integrating with Dynamics 365</strong> over its REST
          API, letting users without D365 access view, filter, and create support cases — with
          attachments — directly from the platform.
        </li>
      </ul>

      <div className="tags">
        {['Blazor', '.NET', 'Dynamics 365', 'REST API', 'C#'].map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>
    </div>
  )
}
