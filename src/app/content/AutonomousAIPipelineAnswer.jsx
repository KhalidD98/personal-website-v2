import Zoomable from '../Zoomable'

const STAGES = [
  { label: 'Ticket', sub: 'Linear', agent: false },
  { label: 'Refine', sub: 'codebase-aware spec', agent: true },
  { label: 'Ready', sub: 'I queue it', agent: false },
  { label: 'Code + PR', sub: 'branch · build · open', agent: true },
  { label: 'Review', sub: 'I comment on GitHub', agent: false },
  { label: 'Merge', sub: 'prod deploy · Done', agent: false },
]

// loops drawn above a stage: [stageIndex, label]
const LOOPS = [
  [1, 'iterate on spec'],
  [4, 'agent pushes fixes'],
]

const X0 = 40
const STEP = 190
const BOX_W = 168
const BOX_H = 58
const BOX_Y = 150
const x = (i) => X0 + i * STEP
const cx = (i) => x(i) + BOX_W / 2

function PipelineDiagram() {
  return (
    <svg viewBox="0 0 1200 392" style={{ fontFamily: 'var(--sans)' }} role="img"
      aria-label="Autonomous pipeline: a ticket flows through refine, ready, code and PR, review and merge, with spec-iteration and fix loops, a per-PR preview stack, and homelab infrastructure underneath.">
      <defs>
        <marker id="pl-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#8B8782" />
        </marker>
        <marker id="pl-loop" markerWidth="8" markerHeight="8" refX="5.5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--green)" />
        </marker>
      </defs>

      {/* legend */}
      <rect x="40" y="18" width="13" height="13" rx="3" fill="var(--greensoft)" stroke="var(--greenline)" />
      <text x="59" y="29" fontSize="12" fill="var(--ink2)">agent does the work</text>
      <rect x="208" y="18" width="13" height="13" rx="3" fill="var(--card)" stroke="var(--hair)" />
      <text x="227" y="29" fontSize="12" fill="var(--ink2)">my call / review gate</text>

      {/* feedback loops above stages */}
      {LOOPS.map(([i, label]) => (
        <g key={`loop-${i}`}>
          <path d={`M ${cx(i) + 36} ${BOX_Y} C ${cx(i) + 36} ${BOX_Y - 50}, ${cx(i) - 36} ${BOX_Y - 50}, ${cx(i) - 36} ${BOX_Y}`}
            fill="none" stroke="var(--green)" strokeWidth="1.4" markerEnd="url(#pl-loop)" />
          <text x={cx(i)} y={BOX_Y - 56} textAnchor="middle" fontSize="11" fill="var(--greenink)">{label}</text>
        </g>
      ))}

      {/* arrows between stages */}
      {STAGES.slice(0, -1).map((_, i) => (
        <line key={`arr-${i}`} x1={x(i) + BOX_W + 3} y1={BOX_Y + BOX_H / 2} x2={x(i + 1) - 5} y2={BOX_Y + BOX_H / 2}
          stroke="#8B8782" strokeWidth="1.6" markerEnd="url(#pl-arrow)" />
      ))}

      {/* branch down from Code + PR to the preview stack */}
      <line x1={cx(3)} y1={BOX_Y + BOX_H} x2={cx(3)} y2="248" stroke="#8B8782" strokeWidth="1.6" markerEnd="url(#pl-arrow)" />
      <rect x={cx(3) - 122} y="252" width="244" height="62" rx="10" fill="var(--card)" stroke="var(--hair)" strokeWidth="1.5" />
      <text x={cx(3)} y="276" textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--ink)">
        Preview environment / PR
      </text>
      <text x={cx(3)} y="297" textAnchor="middle" fontSize="11.5" fill="var(--greenink)">
        Vercel · Convex · Clerk
      </text>

      {/* stage boxes */}
      {STAGES.map((s, i) => (
        <g key={s.label}>
          <rect x={x(i)} y={BOX_Y} width={BOX_W} height={BOX_H} rx="12"
            fill={s.agent ? 'var(--greensoft)' : 'var(--card)'}
            stroke={s.agent ? 'var(--greenline)' : 'var(--hair)'} strokeWidth="1.5" />
          <text x={cx(i)} y={BOX_Y + 25} textAnchor="middle" fontSize="16.5" fontWeight="600"
            fill={s.agent ? 'var(--greenink)' : 'var(--ink)'}>
            {s.label}
          </text>
          <text x={cx(i)} y={BOX_Y + 44} textAnchor="middle" fontSize="11"
            fill={s.agent ? 'var(--green)' : 'var(--mute)'}>
            {s.sub}
          </text>
        </g>
      ))}

      {/* infrastructure band */}
      <rect x="40" y="344" width="1120" height="36" rx="9" fill="var(--sidebar)" stroke="var(--hair)"
        strokeDasharray="4 4" />
      <text x="600" y="366" textAnchor="middle" fontSize="12" fill="var(--ink2)">
        Linear + GitHub webhooks  →  5 n8n workflows in Docker, over a Cloudflare Tunnel  ·  Ubuntu homelab
      </text>
    </svg>
  )
}

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

      <Zoomable caption="The whole loop: ticket to merge, the spec-iteration and fix cycles, a fresh preview stack per PR, and the homelab infra underneath. Green steps run on their own; the rest are where I step in. Click to expand.">
        <div className="diagram">
          <PipelineDiagram />
        </div>
      </Zoomable>

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
    </div>
  )
}
