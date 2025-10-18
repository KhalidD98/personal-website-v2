function MinecraftServerModalContent() {
  return (
    <>
      {/* Overview */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Created custom Minecraft Server ran on a DigitalOcean Droplet that viewers on Twitch.tv can control through donations and subscriptions using the Twitch API and Node.js. Viewers could spawn monsters and use potion effects on the streamer in-game.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The 3 months this server was implemented on the streamers channel, monthly subscriber average rose from <span className="font-bold">148 to 401 subscribers/month</span>, and the donation amount increased from <span className="font-bold">$423 to $1,219/month</span>.
        </p>
      </div>

      {/* Examples Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Example 1 */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="bg-gray-300 rounded-xl h-48 mb-4 flex items-center justify-center text-gray-600">
              {/* Placeholder for video/image */}
              <span className="text-sm">Video: In-Chat Control</span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              The streamer and moderators have the ability <span className="font-bold text-green-600">in the Twitch Chat</span> to create, delete, and refresh API tokens of Minecraft Redemptions as a fail safe in case anything goes wrong.
            </p>
          </div>

          {/* Example 2 */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="bg-gray-300 rounded-xl h-48 mb-4 flex items-center justify-center text-gray-600">
              {/* Placeholder for video/image */}
              <span className="text-sm">Video: In-Game Control</span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              The streamer and moderators have the ability <span className="font-bold text-green-600">in the Minecraft Server</span> to control the creation and deletion, as well as refresh API tokens of Minecraft Redemptions.
            </p>
          </div>

          {/* Example 3 */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="bg-gray-300 rounded-xl h-48 mb-4 flex items-center justify-center text-gray-600">
              {/* Placeholder for video/image */}
              <span className="text-sm">Video: Auto Login/Logout</span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              When the streamer <span className="font-bold text-green-600">logs into</span> the server, Minecraft Redemptions are <span className="font-bold text-green-600">created</span> for viewers to use. When the streamer <span className="font-bold text-green-600">leaves</span> the server, redemptions are deleted and commands are <span className="font-bold text-green-600">disabled</span>.
            </p>
          </div>

          {/* Example 4 */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="bg-gray-300 rounded-xl h-48 mb-4 flex items-center justify-center text-gray-600">
              {/* Placeholder for video/image */}
              <span className="text-sm">Video: Channel Points</span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Viewer in chat used <span className="font-bold text-green-600">Channel Points</span> to spawn in mobs, allowing viewers who don't want to spend money to participate in the fun.
            </p>
          </div>

        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact & Achievements</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          This Minecraft Server as well as a few small robots we created helped raise over <span className="font-bold text-green-600 text-lg">$18,000</span> alongside a few other streamers for <span className="font-bold text-green-600">Make a Wish</span>.
        </p>
        <p className="text-gray-700 leading-relaxed">
          As well as <span className="font-bold text-blue-600 text-lg">$5,000</span> alongside a few other streamers for the <span className="font-bold text-blue-600">Australian Wildfires</span>.
        </p>
      </div>

      {/* Technical Details */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Implementation</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          This project has been an almost 2 year process. It started out simply where a $1 donation would spawn a random mob or potion effect. This then lead to the implementation of subscriptions triggering 5 random mob spawns.
        </p>
        <p className="text-gray-700 leading-relaxed">
          I learned to read Channel Point Redemptions through the Twitch API, allowing viewers to spawn mobs and potion effects individually. I implemented the creation and deletion of channel point redemptions automatically with an in-game command and when the streamer logged on and off the server to better automate the process.
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

