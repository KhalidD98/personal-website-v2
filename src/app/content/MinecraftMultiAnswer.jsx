import exampleTwo from '../../assets/example_two.mp4'
import exampleThree from '../../assets/example_three.mp4'

function Clip({ src, children }) {
  return (
    <div className="media">
      <video autoPlay loop muted playsInline>
        <source src={src} type="video/mp4" />
      </video>
      <p>{children}</p>
    </div>
  )
}

export default function MinecraftMultiAnswer() {
  return (
    <div className="answer">
      <p className="meta">// react.js project · twitch pub/sub</p>

      <p>
        I created a custom Minecraft server that controls <strong>multiple streamers' donations and
        redemptions separately</strong> through <strong>Twitch Pub/Sub</strong>, letting viewers
        spawn mobs on each streamer individually.
      </p>
      <p>
        I implemented <strong>Firebase authentication and Twitch API connections</strong> on a web
        app built with <strong>React.js</strong> so each streamer could control their own donation
        pricing and settings.
      </p>

      <div className="media-grid">
        <Clip src={exampleTwo}>
          Viewers' redemptions are routed to the correct streamer in real time via Twitch Pub/Sub.
        </Clip>
        <Clip src={exampleThree}>
          Each streamer manages their own donation pricing and spawn settings from the React
          dashboard.
        </Clip>
      </div>

      <div className="tags">
        {['React.js', 'Firebase Auth', 'Twitch Pub/Sub', 'Node.js'].map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>
    </div>
  )
}
