import { useState } from 'react'
import ProjectModal from './components/ProjectModal'
import MinecraftServerModalContent from './components/MinecraftServerModalContent'

function RightSide() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const minecraftProject = {
    title: 'Single Streamer Twitch Minecraft Server',
    subtitle: 'Node.js Project',
    content: <MinecraftServerModalContent />
  }

  return (
    <div className="w-2/3 h-full overflow-y-auto bg-white">
      <div className="py-16 px-8">

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-2 gap-6 auto-rows-auto">

          {/* Card 1 - Lineleader - Large (spans 2 columns) */}
          <div className="col-span-2">
            <div className="bg-white rounded-3xl shadow-lg border-2 border-blue-200 hover:shadow-xl transition-all duration-300 h-full">
              <div className="p-10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Full Stack Web Developer</h3>
                    <h4 className="text-xl font-semibold text-gray-700 mt-1">Lineleader</h4>
                  </div>
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Experience</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">June 2023 - Current</p>
                <p className="text-gray-600 mb-5 leading-relaxed text-base">Software platform that simplifies marketing, registration, payment processing, and operations for early education.</p>
                <ul className="space-y-2 text-gray-700 leading-relaxed text-base">
                  <li className="flex"><span className="mr-2 text-blue-500">•</span><span><span className="font-bold">Led the successful refactoring of a critical reporting feature</span>, eliminating recurring weekly bugs and significantly improving performance, resulting in <span className="font-bold">zero bug reports post-implementation</span></span></li>
                  <li className="flex"><span className="mr-2 text-blue-500">•</span><span>Collaborated with a cross-functional team to <span className="font-bold">implement data segregation for the nation's largest after school childcare organization</span>, creating a secure isolated environment within AWS that enhanced data privacy, improved system performance, and provided customized infrastructure to support their specific scale requirements</span></li>
                  <li className="flex"><span className="mr-2 text-blue-500">•</span><span>Develop and implement new features while maintaining existing functionality using <span className="font-bold">Meteor JS, Vue JS, and automated testing with Cypress and Jest</span></span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2 - Kadince - Medium (1 column) */}
          <div className="col-span-1">
            <div className="bg-white rounded-3xl shadow-lg border-2 border-blue-200 hover:shadow-xl transition-all duration-300 h-full">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Full Stack Web Developer</h3>
                    <h4 className="text-lg font-semibold text-gray-700 mt-1">Kadince</h4>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">Experience</span>
                </div>
                <p className="text-xs text-gray-500 mb-3">February 2022 - December 2022</p>
                <p className="text-gray-600 mb-4 leading-relaxed text-base">Web application designed to help banks organize and manage community involvement efforts including events, donations, loans, investments, and more.</p>
                <ul className="space-y-2 text-gray-700 leading-relaxed text-sm">
                  <li className="flex"><span className="mr-2 text-blue-500">•</span><span><span className="font-bold">Developed new functionality and features</span> in line with functional specifications and business requirements</span></li>
                  <li className="flex"><span className="mr-2 text-blue-500">•</span><span><span className="font-bold">Interacted with the sales team to resolve customer issues</span> including teaching new features or solving bugs</span></li>
                  <li className="flex"><span className="mr-2 text-blue-500">•</span><span>Used <span className="font-bold">Ruby on Rails, GraphQL, and PostgreSQL</span> to organize customer data in the back end. <span className="font-bold">React JS, Redux, and Material UI</span> for UI on the front end.</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3 - Access My Research - Medium (1 column) */}
          <div className="col-span-1">
            <div className="bg-white rounded-3xl shadow-lg border-2 border-blue-200 hover:shadow-xl transition-all duration-300 h-full">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Intern Software Developer</h3>
                    <h4 className="text-lg font-semibold text-gray-700 mt-1">Access My Research</h4>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">Experience</span>
                </div>
                <p className="text-xs text-gray-500 mb-3">January 2020 - June 2020</p>
                <p className="text-gray-600 mb-4 leading-relaxed text-base">Web application designed to connect users with researchers, increase access to publications, and act as a space for teams to work on research-related projects</p>
                <ul className="space-y-2 text-gray-700 leading-relaxed text-sm">
                  <li className="flex"><span className="mr-2 text-blue-500">•</span><span><span className="font-bold">Implemented construction of the chat system from initial design to completion</span>, allowing users to have one-on-one or group chats. Messages were stored and retrieved with <span className="font-bold">Firestore from Firebase</span>, users names were obtained from <span className="font-bold">Amazon's AWS Cognito</span>, and everything was displayed using <span className="font-bold">VueJS</span></span></li>
                  <li className="flex"><span className="mr-2 text-blue-500">•</span><span>Collaborated with other developers to <span className="font-bold">identify and alleviate bugs</span> in the software both front and backend</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 4 - Single Streamer Minecraft - Medium (1 column) */}
          <div className="col-span-1">
            <div className="bg-white rounded-3xl shadow-lg border-2 border-green-200 hover:shadow-xl transition-all duration-300 h-full relative">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">Single Streamer Twitch Minecraft Server</h3>
                    <h4 className="text-lg font-semibold text-gray-700 mt-1">Node.js Project</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Project</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-green-600 transition-colors text-sm font-medium underline"
                >
                  View Details →
                </button>
                <p className="text-gray-700 mb-3 leading-relaxed text-base"><span className="font-bold">Created custom Minecraft Server</span> ran on a DigitalOcean Droplet that viewers on Twitch.tv can control through donations and subscriptions using the <span className="font-bold">Twitch API and Node.js</span>. Viewers could spawn monsters and use potion effects on the streamer in-game.</p>
                <p className="text-gray-700 leading-relaxed text-sm">The 3 months this server was implemented on the streamers channel, monthly subscriber average rose from <span className="font-bold">148 to 401 subscribers/month</span>, and the donation amount increased from <span className="font-bold">$423 to $1,219/month</span>.</p>
              </div>
            </div>
          </div>

          {/* Card 5 - Multi-streamer Minecraft - Medium (1 column) */}
          <div className="col-span-1">
            <div className="bg-white rounded-3xl shadow-lg border-2 border-green-200 hover:shadow-xl transition-all duration-300 h-full">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Multi-streamer Twitch Minecraft Server</h3>
                    <h4 className="text-lg font-semibold text-gray-700 mt-1">React.js Project</h4>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Project</span>
                </div>
                <p className="text-gray-700 mb-3 leading-relaxed text-base"><span className="font-bold">Created a custom Minecraft Server that controls multiple streamers' donations and redemptions separately</span> through the <span className="font-bold">Twitch Pub/Sub</span> allowing viewers to spawn mobs (monsters) on each streamer individually.</p>
                <p className="text-gray-700 leading-relaxed text-sm">Implemented <span className="font-bold">Firebase authentication and Twitch API connections</span> on a web app created with <span className="font-bold">React.js</span> to allow the controlling of settings for donation pricing for each individual streamer</p>
              </div>
            </div>
          </div>

          {/* Card 6 - Personal Website - Small (1 column) */}
          <div className="col-span-1">
            <div className="bg-white rounded-3xl shadow-lg border-2 border-green-200 hover:shadow-xl transition-all duration-300 h-full">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Personal Website</h3>
                    <h4 className="text-lg font-semibold text-gray-700 mt-1">www.khaliddakak.com</h4>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Project</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={minecraftProject}
      />
    </div>
  )
}

export default RightSide

