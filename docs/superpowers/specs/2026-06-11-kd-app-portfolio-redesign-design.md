# KD-App Portfolio Redesign — Design Spec

**Date:** 2026-06-11
**Status:** Approved direction, pending spec review
**Project:** personal-website-v2

## Summary

Replace the current two-column bento-grid portfolio with a portfolio that looks and behaves like the "KD" desktop AI app (a Claude-desktop-style interface, rebranded). The visitor's projects and experiences become **chats** in a left sidebar. Opening a chat shows that project/experience's content rendered as a **KD answer** to a question. The composer is permanently disabled with an **"Out of tokens"** state — a full red usage ring, disabled send button, and "Plan mode" indicator — so visitors understand they should browse the chats rather than type.

This is a full replacement of the v2 site, reusing all existing written content, images, and videos.

## Hard Branding Rule

**Never display the word "Claude" anywhere user-facing.** This includes visible text, the page `<title>`, meta tags, `alt` text, ARIA labels, and code comments that could surface.

- The assistant/brand is **"KD"**.
- The model name is **"KD Mythos 8.8"**.
- Message author label for answers is **"KD"** (with the ✳ sunburst badge).

## Design Language (PostHog-inspired warmth + KD-app shell)

- **Canvas:** warm cream `#FAF9F5`; sidebar `#F0EEE6`.
- **Ink:** `#1F1E1D` (headlines), `#3D3A35` (body), `#8B8782` (muted).
- **Hairlines:** `#E3E0D8` / `#D8D4CB`, 1px borders, small radii (6–16px).
- **Accent:** pine green `#1E6F52`, soft `#DCEDE3`, ink `#155F45`. Carries the active sidebar item, primary buttons, links, KD answer badge, and project tags. (Claude coral `#C96442` is the fallback alternative if we flip later.)
- **Token-gag red:** `#D2433A`, soft `#F8E0DE` (usage ring only).
- **Type:** Open Runde / Inter / system sans for UI; monospace (`ui-monospace`) for labels, metadata, status chips, and the "operator" accents.
- **No gradients, no drop-shadows, no glow, no floating blobs.**

## Layout & Components

App shell: `grid-template-columns: 260px 1fr`, full viewport height.

### 1. Sidebar (`Sidebar.jsx`)
- **Brand row:** ✳ sunburst + "Khalid Dakak" + a collapse chevron.
- **Top action (replaces "New chat"):** **"Get in touch"** with a contact/mail icon → opens the Contact view.
- **Search box** (visual only for v1; non-functional or simple client filter — see Open Questions).
- **Chat list grouped by section:**
  - **Projects:** Autonomous AI Development Pipeline · Single-Streamer Minecraft Server · Multi-Streamer Minecraft Server · Personal Website
  - **Experience:** Lineleader · Kadince · Access My Research
  - Active item uses the green pill background; icons: message-square for projects, briefcase for experience.
- **Footer:** avatar (headshot) + "Khalid Dakak" / "Portfolio · v2".
- **Mobile:** sidebar collapses to an off-canvas drawer toggled by a hamburger in the top bar.

### 2. Main panel (`ChatView.jsx`)
- **Top bar:** active chat title (with icon) + model pill **"KD Mythos 8.8"** with chevron.
- **Conversation body:** rendered as a chat thread:
  - A **You** turn (gray badge "K"): a natural-language question, e.g. *"Tell me about the Autonomous AI Development Pipeline."*
  - A **KD** turn (green ✳ badge): the project/experience content (reused write-up), including inline **videos** and the tech tags.
- Content is **data-driven**: a `chats` array defines each chat's `id`, `group`, `title`, `subtitle`, `icon`, `meta`, `question`, and `content` (a React node). Existing modal-content components are refactored into chat-answer content with the new palette.

### 3. Welcome screen (`WelcomeScreen.jsx`)
- Default landing state: centered **"✳ Good evening"** greeting, one-line intro, and **suggestion chips** linking to top chats (e.g. the AI Pipeline, Lineleader, the headline Minecraft project).
- The composer is shown below in its disabled state.

### 4. Contact view (`ContactView.jsx`)
- Opened from "Get in touch". Styled like a chat answer: email, LinkedIn, GitHub, and résumé download, with KD framing (e.g. a You turn "How do I reach Khalid?" + KD answer listing the channels).

### 5. Composer (`Composer.jsx`) — disabled "Out of tokens" state
- **Mode chip above box:** "Plan mode".
- **Box:** placeholder text **"Out of tokens"**; non-editable.
- **Left tools:** "+" round button (decorative), a "⏸ Plan mode" pill.
- **Right tools:** **full red usage ring** + "Out of tokens" label; **disabled gray send button**.
- **Hover tooltip** on the usage area / send: "You're out of tokens — browse the chats instead."
- A small mono helper line under the box reinforcing the same.

## Content Mapping (reuse everything)

| Chat | Source content | Media |
|------|----------------|-------|
| Autonomous AI Development Pipeline | `AutonomousAIPipelineModalContent` | none (no media yet) |
| Single-Streamer Minecraft Server | `MinecraftServerModalContent` | `InChatExample`, `InGameExample`, `LoginExample`, `example_one`.mp4 (+ `example_two`, `example_three` spare) |
| Multi-Streamer Minecraft Server | existing card copy | none currently |
| Personal Website | new short copy ("you're looking at it") | none |
| Lineleader | existing card copy | none |
| Kadince | existing card copy | none |
| Access My Research | `AccessMyResearchModalContent` | none |

All existing videos in `src/assets/` are retained and embedded inline in the relevant KD answer (autoplay, loop, muted, playsInline — as today).

## Tech & Structure

- Keep the existing stack: **React 18 + Vite + Tailwind v3**.
- New structure under `src/`:
  - `App.jsx` — app shell + selected-chat state (`'welcome' | 'contact' | <chatId>`).
  - `src/app/Sidebar.jsx`, `ChatView.jsx`, `Composer.jsx`, `WelcomeScreen.jsx`, `ContactView.jsx`.
  - `src/app/chats.jsx` — the data-driven chat registry (imports content components).
  - `src/app/content/` — refactored content components (from current `components/`), restyled to the new palette.
- Remove the old `LeftSide.jsx`, `RightSide.jsx`, `ProjectModal.jsx` (modal pattern no longer used).
- Update `index.html` `<title>` and meta to KD branding (no "Claude").
- Tailwind config: extend theme with the cream/ink/green tokens for reuse (or use inline style tokens consistent with the mockup).

## Testing

Per project test bar (component tests for non-trivial logic):
- `Sidebar.test.tsx` — renders groups, selecting a chat updates active state, "Get in touch" routes to Contact.
- `Composer.test.tsx` — renders the disabled "Out of tokens" state; send button is disabled; textarea is non-editable.
- `chats` registry — a pure-data test asserting every chat has required fields and unique ids.
- Extract any pure helpers (e.g. greeting-by-time-of-day) and unit-test them.

## Non-Goals (YAGNI)

- No real chat/LLM functionality. The composer is permanently inert by design.
- No backend, no routing library (single-page state switch is enough); optional hash routing only if cheap.
- No new illustrations/mascot.
- Search is visual-only in v1 unless trivially a client-side filter.

## Open Questions (defaults chosen; confirm on review)

1. **Accent** — pine green (default) vs Claude-accurate coral. *Default: green.*
2. **Landing** — welcome screen (default) vs land directly in the featured AI Pipeline chat.
3. **Token gag loudness** — subtle + tooltip (default) vs more overt banner.
4. **Search box** — visual-only (default) vs working client-side filter.
5. **URL deep-linking** — none (default) vs hash routes per chat (`#/lineleader`) for shareable links.
