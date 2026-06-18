import Zoomable from '../Zoomable'

// left-to-right pipeline; agent stages are green, my-call stages are plain
const STAGES = [
  { label: 'Interview', sub: 'intake-interviewer', agent: true },
  { label: 'Fill forms', sub: 'form-filler · Chrome', agent: true },
  { label: 'Organize', sub: 'document-organizer', agent: true },
  { label: 'Pre-flight', sub: 'submission-readiness', agent: false },
  { label: 'Submit', sub: 'I click — never the agent', agent: false },
]

const X0 = 40
const STEP = 230
const BOX_W = 190
const BOX_H = 58
const BOX_Y = 150
const x = (i) => X0 + i * STEP
const cx = (i) => x(i) + BOX_W / 2

function ImmigrationDiagram() {
  return (
    <svg viewBox="0 0 1200 392" style={{ fontFamily: 'var(--sans)' }} role="img"
      aria-label="Immigration pipeline: an interview agent gathers answers into a single source-of-truth file set, a form-filler agent types them into the IRCC portal, a document-organizer audits consistency, a pre-flight gate decides go/no-go, and only then do I submit. Four skills run between steps.">
      <defs>
        <marker id="im-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#8B8782" />
        </marker>
      </defs>

      {/* legend */}
      <rect x="40" y="18" width="13" height="13" rx="3" fill="var(--greensoft)" stroke="var(--greenline)" />
      <text x="59" y="29" fontSize="12" fill="var(--ink2)">agent does the work</text>
      <rect x="208" y="18" width="13" height="13" rx="3" fill="var(--card)" stroke="var(--hair)" />
      <text x="227" y="29" fontSize="12" fill="var(--ink2)">my call / review gate</text>

      {/* arrows between stages */}
      {STAGES.slice(0, -1).map((_, i) => (
        <line key={`arr-${i}`} x1={x(i) + BOX_W + 3} y1={BOX_Y + BOX_H / 2} x2={x(i + 1) - 5} y2={BOX_Y + BOX_H / 2}
          stroke="#8B8782" strokeWidth="1.6" markerEnd="url(#im-arrow)" />
      ))}

      {/* branch down from Interview to the single-source-of-truth store */}
      <line x1={cx(0)} y1={BOX_Y + BOX_H} x2={cx(0)} y2="248" stroke="#8B8782" strokeWidth="1.6" markerEnd="url(#im-arrow)" />
      <rect x={cx(0) - 120} y="252" width="300" height="62" rx="10" fill="var(--card)" stroke="var(--hair)" strokeWidth="1.5" />
      <text x={cx(0) + 30} y="276" textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--ink)">
        answer-data files
      </text>
      <text x={cx(0) + 30} y="297" textAnchor="middle" fontSize="11.5" fill="var(--greenink)">
        single source of truth · read by every agent
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

      {/* skills band */}
      <rect x="40" y="344" width="1120" height="36" rx="9" fill="var(--sidebar)" stroke="var(--hair)"
        strokeDasharray="4 4" />
      <text x="600" y="366" textAnchor="middle" fontSize="12" fill="var(--ink2)">
        Skills I run between steps:  progress-report · consistency-check · checklist-audit · submission-readiness
      </text>
    </svg>
  )
}

export default function ImmigrationAssistantAnswer() {
  return (
    <div className="answer">
      <p className="meta">// jun 2026 · open-source on GitHub</p>

      <p>
        Full source &amp; case study:{' '}
        <a
          className="inline"
          href="https://github.com/KhalidD98/claude-code-immigration-assistant"
          target="_blank"
          rel="noreferrer"
        >
          github.com/KhalidD98/claude-code-immigration-assistant
        </a>
      </p>

      <p>
        I used <strong>Claude Code</strong> to run a real, high-stakes paperwork process end to end:
        a <strong>Canadian spousal-sponsorship immigration application</strong>. It's 8+ interlocking
        government forms where the same fact — a name, a date, a number — gets re-entered a dozen
        times, and a single mismatch between two forms can delay or sink the case. So I built a system
        of <strong>3 agents and 4 skills</strong> to make it reliable.
      </p>
      <p>
        The agents do the heavy lifting; the skills are the checks I run between steps. Everything is
        wired around a <strong>single source of truth</strong> — answers live in files, and every
        agent reads from and writes to those files, so there's exactly one place a fact can be wrong.
      </p>

      <Zoomable caption="Interview → fill → organize, with a hard pre-flight gate before I ever click Submit. Green steps run on their own; the rest are where I step in. Click to expand.">
        <div className="diagram">
          <ImmigrationDiagram />
        </div>
      </Zoomable>

      <h4>The three agents</h4>
      <ul>
        <li>
          <span className="accent">intake-interviewer</span> — walks each form section-by-section,
          asks one question at a time, validates every answer against IRCC rules, and writes clean
          answer files. It never guesses; anything unknown is flagged <code>UNCONFIRMED</code>.
        </li>
        <li>
          <span className="accent">form-filler</span> — drives the <strong>Claude-in-Chrome</strong>{' '}
          extension to type those answers into the live IRCC portal and PDFs, re-reading each field to
          confirm it matches the source. It fills drafts but <strong>never clicks Submit</strong>.
        </li>
        <li>
          <span className="accent">document-organizer</span> — builds a canonical fact table (one
          authoritative value per fact, with every form that must match it) and diffs every
          occurrence to catch contradictions before an officer ever could.
        </li>
      </ul>

      <h4>The four skills</h4>
      <ul>
        <li><span className="accent">progress-report</span> — where am I, what's blocking, what's next.</li>
        <li><span className="accent">consistency-check</span> — is what I just entered both correct and consistent everywhere? PASS/FAIL.</li>
        <li><span className="accent">checklist-audit</span> — which required documents am I still missing?</li>
        <li><span className="accent">submission-readiness</span> — a 7-point go/no-go gate that defaults to NO-GO before the irreversible click.</li>
      </ul>

      <div className="callout">
        <h4>Design choices worth showing</h4>
        <p style={{ margin: 0 }}>
          <strong>Intake ≠ entry:</strong> the agent that gathers a fact isn't the one that types it,
          so a missing value halts the pipeline instead of being invented.{' '}
          <strong>Verification is first-class:</strong> entries are re-read character-for-character
          against the source. <strong>Privacy-aware by design:</strong> the repo publishes only the
          tooling — every piece of personal data is git-ignored and never leaves my machine.
        </p>
      </div>

      <div className="tags">
        {['Claude Code', 'AI agents', 'Skills', 'Claude-in-Chrome', 'Prompt design', 'Automation', 'Markdown'].map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>
    </div>
  )
}
