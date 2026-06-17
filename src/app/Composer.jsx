import { Plus, Plan, Mic, ChevDown, Return } from './icons'

// Permanently-disabled composer, laid out like the Claude Code composer bar:
// the send arrow lives inside the box; below it sit the mode/tools (left) and
// model · level · usage (right). The "Out of tokens" state tells visitors to
// browse the chats instead of typing.
export default function Composer() {
  return (
    <div className="composer">
      <div className="composer-inner">
        <div className="box">
          <div className="boxline">
            <span className="placeholder">Out of tokens</span>
            <button className="sendbtn" disabled aria-label="Send (out of tokens)">
              <Return style={{ width: 18, height: 18 }} />
            </button>
          </div>
        </div>

        <div className="toolbar">
          <div className="left-tools">
            <span className="modechip">
              <Plan style={{ width: 13, height: 13 }} />
              Plan mode
            </span>
            <button className="toolicon" disabled aria-label="Add attachment (disabled)">
              <Plus style={{ width: 17, height: 17 }} />
            </button>
            <button className="toolicon" disabled aria-label="Dictate (disabled)">
              <Mic style={{ width: 17, height: 17 }} />
            </button>
            <button className="toolicon" disabled aria-label="More (disabled)">
              <ChevDown style={{ width: 15, height: 15 }} />
            </button>
          </div>

          <div className="right-tools">
            <span className="model">KD Mythos 8.8</span>
            <span className="level">Medium</span>
            <div className="usage tip">
              <svg className="usagering" viewBox="0 0 16 16" aria-hidden="true">
                <circle className="bg" cx="8" cy="8" r="5.5" />
                <circle
                  className="fg"
                  cx="8"
                  cy="8"
                  r="5.5"
                  strokeDasharray="34.56 34.56"
                  strokeDashoffset="0"
                />
              </svg>
              <span className="tiptext">You're out of tokens — browse the chats instead.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
