import '@testing-library/jest-dom/vitest'
import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import ChatView from './ChatView'

const chat = {
  question: 'What did you build?',
  Content: () => <div>Answer is ready.</div>,
}

describe('ChatView', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('shows KD thinking before revealing the selected chat answer', async () => {
    vi.useFakeTimers()

    render(<ChatView chat={chat} />)

    expect(screen.getByText('What did you build?')).toBeInTheDocument()
    expect(screen.getByText('KD is thinking')).toBeInTheDocument()
    expect(document.querySelector('.response-slot')).toBeInTheDocument()
    expect(screen.queryByText('Answer is ready.')).not.toBeInTheDocument()

    await act(async () => {
      vi.advanceTimersByTime(900)
    })

    expect(screen.queryByText('KD is thinking')).not.toBeInTheDocument()
    expect(document.querySelector('.answer-reveal')).toBeInTheDocument()
    expect(screen.getByText('Answer is ready.')).toBeInTheDocument()
  })
})
