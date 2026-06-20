import ImmigrationAssistantAnswer from './content/ImmigrationAssistantAnswer'
import AutonomousAIPipelineAnswer from './content/AutonomousAIPipelineAnswer'
import OrbinspireGamesAnswer from './content/OrbinspireGamesAnswer'
import MinecraftSingleAnswer from './content/MinecraftSingleAnswer'
import MinecraftMultiAnswer from './content/MinecraftMultiAnswer'
import PersonalWebsiteAnswer from './content/PersonalWebsiteAnswer'
import TorqAnswer from './content/TorqAnswer'
import LineleaderAnswer from './content/LineleaderAnswer'
import KadinceAnswer from './content/KadinceAnswer'
import AccessMyResearchAnswer from './content/AccessMyResearchAnswer'
import AmologAnswer from './content/AmologAnswer'

// The chat registry. Each entry becomes a sidebar item and a conversation view.
// `question` is the "You" turn; `Content` renders the "KD" answer.
export const CHATS = [
  // ---- Projects ----
  {
    id: 'amolog',
    group: 'Projects',
    icon: 'chat',
    title: 'Amolog - Gelato Operations Platform',
    question: 'Tell me about Amolog.',
    Content: AmologAnswer,
  },
  {
    id: 'immigration-assistant',
    group: 'Projects',
    icon: 'chat',
    title: 'Claude Code Immigration Assistant',
    question: 'Tell me about the Claude Code immigration assistant.',
    Content: ImmigrationAssistantAnswer,
  },
  {
    id: 'ai-pipeline',
    group: 'Projects',
    icon: 'chat',
    title: 'Autonomous AI Development Pipeline',
    question: 'Tell me about the Autonomous AI Development Pipeline.',
    Content: AutonomousAIPipelineAnswer,
  },
  {
    id: 'orbinspire-games',
    group: 'Projects',
    icon: 'chat',
    title: 'OrbInspire Games — Game Shop Web App',
    question: 'Tell me about the OrbInspire Games project.',
    Content: OrbinspireGamesAnswer,
  },
  {
    id: 'minecraft-single',
    group: 'Projects',
    icon: 'chat',
    title: 'Single-Streamer Minecraft Server',
    question: 'How does the single-streamer Twitch Minecraft server work?',
    Content: MinecraftSingleAnswer,
  },
  {
    id: 'minecraft-multi',
    group: 'Projects',
    icon: 'chat',
    title: 'Multi-Streamer Minecraft Server',
    question: 'What about the multi-streamer Minecraft server?',
    Content: MinecraftMultiAnswer,
  },
  {
    id: 'personal-website',
    group: 'Projects',
    icon: 'chat',
    title: 'Personal Website',
    question: 'What is this website?',
    Content: PersonalWebsiteAnswer,
  },
  // ---- Experience ----
  {
    id: 'torq',
    group: 'Experience',
    icon: 'briefcase',
    title: 'Torq — Software Engineering Consultant',
    question: 'What do you do at Torq?',
    Content: TorqAnswer,
  },
  {
    id: 'lineleader',
    group: 'Experience',
    icon: 'briefcase',
    title: 'Lineleader — Full Stack Dev',
    question: 'What did you do at Lineleader?',
    Content: LineleaderAnswer,
  },
  {
    id: 'kadince',
    group: 'Experience',
    icon: 'briefcase',
    title: 'Kadince — Full Stack Dev',
    question: 'What did you do at Kadince?',
    Content: KadinceAnswer,
  },
  {
    id: 'access-my-research',
    group: 'Experience',
    icon: 'briefcase',
    title: 'Access My Research — Intern',
    question: 'What did you build at Access My Research?',
    Content: AccessMyResearchAnswer,
  },
]

export const GROUPS = ['Projects', 'Experience']

export function getChat(id) {
  return CHATS.find((c) => c.id === id)
}
