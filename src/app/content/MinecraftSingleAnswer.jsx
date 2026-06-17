import InChatExample from '../../assets/InChatExample.mp4'
import InGameExample from '../../assets/InGameExample.mp4'
import LoginExample from '../../assets/LoginExample.mp4'
import exampleOne from '../../assets/example_one.mp4'

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

export default function MinecraftSingleAnswer() {
  return (
    <div className="answer">
      <p className="meta">// node.js project · twitch integration</p>

      <p>
        I created a custom Minecraft server running on a DigitalOcean Droplet that viewers on
        Twitch.tv could control through donations and subscriptions using the{' '}
        <strong>Twitch API and Node.js</strong>. Viewers could spawn monsters and apply potion
        effects to the streamer in-game.
      </p>

      <div className="callout">
        <h4>Impact</h4>
        <p style={{ margin: 0 }}>
          Over the 3 months this server was live, the streamer's monthly subscriber average rose
          from <strong>148 to 401 subscribers/month</strong>, and donations grew from{' '}
          <strong>$423 to $1,219/month</strong>. Alongside other streamers, related builds helped
          raise over <strong>$18,000 for Make-A-Wish</strong> and <strong>$5,000 for the Australian
          Wildfires</strong>.
        </p>
      </div>

      <h4>In action</h4>
      <div className="media-grid">
        <Clip src={InChatExample}>
          The streamer and moderators use <span className="accent">Twitch chat commands</span> to
          create, delete, and refresh API tokens for Minecraft redemptions — a failsafe in case
          anything goes wrong.
        </Clip>
        <Clip src={InGameExample}>
          They can also use <span className="accent">in-game commands</span> to manage those same
          redemption tokens without leaving Minecraft.
        </Clip>
        <Clip src={LoginExample}>
          When the streamer <span className="accent">logs in</span>, redemptions are created for
          viewers; when they leave, redemptions are deleted and commands disabled automatically.
        </Clip>
        <Clip src={exampleOne}>
          Viewers could spend <span className="accent">Channel Points</span> to spawn mobs, letting
          people who didn't want to spend money still join the fun.
        </Clip>
      </div>

      <h4>How it was built</h4>
      <p>
        This was an almost 2-year process. It started simply — a $1 donation spawned a random mob or
        potion effect — and grew to subscriptions triggering 5 random spawns. I learned to read
        Channel Point Redemptions through the Twitch API and automated creating and deleting those
        redemptions through in-game commands and login/logout events.
      </p>

      <div className="tags">
        {['Node.js', 'Twitch API', 'ScriptServer', 'Socket.io', 'DigitalOcean'].map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>
    </div>
  )
}
