import InChatExample from '../assets/InChatExample.mp4'
import InGameExample from '../assets/InGameExample.mp4'
import LoginExample from '../assets/LoginExample.mp4'
import exampleOne from '../assets/example_one.mp4'

function MinecraftServerModalContent() {
  return (
    <>
      {/* Overview */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Created a custom Minecraft Server running on a DigitalOcean Droplet that viewers on Twitch.tv could control through donations and subscriptions using the Twitch API and Node.js. Viewers could spawn monsters and apply potion effects to the streamer in-game.
        </p>
        <p className="text-gray-700 leading-relaxed">
          During the 3 months this server was active on the streamer's channel, the monthly subscriber average rose from <span className="font-bold">148 to 401 subscribers/month</span>, and the donation amount increased from <span className="font-bold">$423 to $1,219/month</span>.
        </p>
      </div>

      {/* Examples Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Example 1 */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="rounded-xl overflow-hidden mb-4 bg-black">
              <video
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={InChatExample} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              The streamer and moderators can <span className="font-bold text-green-600">use Twitch Chat commands</span> to create, delete, and refresh API tokens for Minecraft Redemptions as a failsafe in case anything goes wrong.
            </p>
          </div>

          {/* Example 2 */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="rounded-xl overflow-hidden mb-4 bg-black">
              <video
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={InGameExample} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              The streamer and moderators can <span className="font-bold text-green-600">use in-game commands</span> to create, delete, and refresh API tokens for Minecraft Redemptions.
            </p>
          </div>

          {/* Example 3 */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="rounded-xl overflow-hidden mb-4 bg-black">
              <video
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={LoginExample} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              When the streamer <span className="font-bold text-green-600">logs into</span> the server, Minecraft Redemptions are <span className="font-bold text-green-600">created</span> for viewers to use. When the streamer <span className="font-bold text-green-600">leaves</span> the server, redemptions are deleted and commands are <span className="font-bold text-green-600">disabled</span>.
            </p>
          </div>

          {/* Example 4 */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="rounded-xl overflow-hidden mb-4 bg-black">
              <video
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={exampleOne} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Viewers in chat could use <span className="font-bold text-green-600">Channel Points</span> to spawn mobs, allowing viewers who didn't want to spend money to participate in the fun.
            </p>
          </div>

        </div>
      </div>

      {/* Impact Section */}
      <div className="rounded-2xl p-8 mb-8" style={{ background: 'linear-gradient(to right, #f0fdf4, #eff6ff)' }}>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact & Achievements</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          This Minecraft Server, along with a few small robots we created, helped raise over <span className="font-bold text-green-600 text-lg">$18,000</span> alongside other streamers for <span className="font-bold text-green-600">Make-A-Wish</span>.
        </p>
        <p className="text-gray-700 leading-relaxed">
          It also helped raise <span className="font-bold text-blue-600 text-lg">$5,000</span> alongside other streamers for the <span className="font-bold text-blue-600">Australian Wildfires</span>.
        </p>
      </div>

      {/* Technical Details */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Implementation</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          This project was an almost 2-year process. It started simply where a $1 donation would spawn a random mob or potion effect. This later evolved to include subscriptions triggering 5 random mob spawns.
        </p>
        <p className="text-gray-700 leading-relaxed">
          I learned to read Channel Point Redemptions through the Twitch API, allowing viewers to spawn mobs and apply potion effects individually. I implemented automatic creation and deletion of channel point redemptions through in-game commands and when the streamer logged on and off the server to better automate the process.
        </p>
      </div>

      {/* Dependencies */}
      <div className="bg-gray-900 text-gray-100 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4 text-green-400">Dependencies Used:</h3>
        <div className="font-mono text-sm space-y-1">
          <p>{"{"}</p>
          <div className="pl-4 space-y-1">
            <p>"<span className="text-green-400">animejs</span>": "^3.1.0",</p>
            <p>"<span className="text-green-400">axios</span>": "^0.21.1",</p>
            <p>"<span className="text-green-400">json-query</span>": "^2.2.2",</p>
            <p>"<span className="text-green-400">node-fetch</span>": "^2.6.1",</p>
            <p>"<span className="text-green-400">scriptserver</span>": "^1.2.0",</p>
            <p>"<span className="text-green-400">scriptserver-event</span>": "^1.1.1",</p>
            <p>"<span className="text-green-400">socket.io</span>": "^2.3.0",</p>
            <p>"<span className="text-green-400">socket.io-client</span>": "^2.3.0",</p>
            <p>"<span className="text-green-400">twitch-bot</span>": "^1.3.5"</p>
          </div>
          <p>{"}"}</p>
        </div>
      </div>
    </>
  )
}

export default MinecraftServerModalContent

