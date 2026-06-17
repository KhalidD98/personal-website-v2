import { useState, useEffect } from 'react'

// Wraps a single piece of media (image, video, or diagram) in a clickable
// card that opens an enlarged view in a lightbox. Close with the ×, the
// backdrop, or Escape. The same children render in both the card and the
// lightbox, so sizing is handled by CSS (.media / .lightbox-inner).
export default function Zoomable({ children, caption }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <button type="button" className="media shot" onClick={() => setOpen(true)}>
        {children}
        {caption && <p>{caption}</p>}
      </button>
      {open && (
        <div className="lightbox" onClick={() => setOpen(false)}>
          <button type="button" className="lightbox-close" onClick={() => setOpen(false)} aria-label="Close">
            ×
          </button>
          <figure className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            {children}
            {caption && <figcaption>{caption}</figcaption>}
          </figure>
        </div>
      )}
    </>
  )
}
