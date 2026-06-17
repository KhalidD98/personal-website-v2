export default function AutonomousAIPipelineAnswer() {
  return (
    <div className="answer">
      <p className="meta">// mar 2026 — present · self-hosted on a homelab</p>

      <p>
        I built a system that takes a rough idea in <strong>Linear</strong> all the way to a merged
        pull request without writing most of the code myself. An <strong>AI agent handles
        implementation</strong> while I focus on specs and code review. I'm using it to build{' '}
        <strong>Amolog</strong>, a personal project.
      </p>
      <p>
        The pipeline runs on a Ubuntu server in my house off a spare PC. Five{' '}
        <strong>n8n workflows in Docker</strong> listen for webhooks from Linear and GitHub,
        coordinating through a <strong>Cloudflare Tunnel</strong>.
      </p>

      <h4>How it works</h4>
      <ul>
        <li>
          I write a rough ticket and move it to <span className="accent">Refining</span>. A KD
          Mythos agent reads the full codebase and rewrites my description into a detailed spec.
          We go back and forth — "scope this down," "you're missing the auth edge case."
        </li>
        <li>
          I move it to <span className="accent">Ready</span>. An agent spins up on my server, pulls
          main, branches, writes the code, and opens a PR. <strong>Vercel</strong> deploys a preview
          automatically with its own <strong>Convex</strong> backend and <strong>Clerk</strong> dev
          instance, so I can test the feature for real.
        </li>
        <li>
          I review the PR on GitHub like normal. The agent picks up every comment, pushes fixes to
          the same branch, and resolves each thread with a commit link. When I'm happy, I merge —
          that triggers production deploy, moves the ticket to <span className="accent">Done</span>,
          and archives all temporary context.
        </li>
      </ul>

      <div className="callout">
        <h4>The hard parts</h4>
        <p style={{ margin: 0 }}>
          Bridging <strong>Docker to the host CLI</strong> through a custom Node.js proxy service,
          preventing <strong>webhook loops</strong> where bot comments re-triggered workflows, and
          managing <strong>fully separate preview environments per PR</strong> — each with their own
          Convex and Clerk instances.
        </p>
      </div>

      <p>
        The agent tracks <strong>session state</strong> too. It knows the difference between starting
        a new feature, resuming in-progress work, and applying review fixes. Different entry points
        mean different git operations and context.
      </p>

      <div className="tags">
        {['n8n', 'KD Code', 'Linear', 'GitHub', 'Vercel', 'Convex', 'Clerk', 'Cloudflare Tunnel', 'Node.js', 'Docker'].map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>

      <div className="flowline">
        pipeline:&nbsp; <span className="st">ticket</span> <b>→</b> <span className="st">refine</span>{' '}
        <b>→</b> <span className="st">ready</span> <b>→</b> <span className="st">code + PR</span>{' '}
        <b>→</b> <span className="st">review</span> <b>→</b> <span className="st">merge</span>
      </div>
    </div>
  )
}
