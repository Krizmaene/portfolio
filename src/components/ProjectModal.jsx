import { useCallback, useEffect, useState } from 'react'

function ProjectModal({ project, onClose }) {
  const { title, description, images, github } = project
  const [index, setIndex] = useState(0) // which photo is showing

  // Wrap around: after the last photo comes the first, and vice versa
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  )
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length],
  )

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (images.length > 1 && e.key === 'ArrowLeft') prev()
      if (images.length > 1 && e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next, images.length])

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-60 flex items-center justify-center bg-black/80 p-4"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${title} photos`}
        onClick={(e) => e.stopPropagation()} // clicks inside shouldn't close it
        className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border
                   border-brand bg-navy"
      >
        {/* Photo area */}
        <div className="relative flex items-center justify-center bg-black/30 p-4">
          {images.length > 0 ? (
            <img
              src={images[index]}
              alt={`${title} screenshot ${index + 1} of ${images.length}`}
              className="max-h-[55vh] w-auto max-w-full rounded-lg object-contain"
            />
          ) : (
            <p className="py-24 text-white/60">Screenshots coming soon</p>
          )}

          {/* Previous / next buttons, only if there's more than one photo */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2
                           items-center justify-center rounded-full bg-navy/80 text-xl
                           text-white hover:bg-brand"
              >
                ←
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2
                           items-center justify-center rounded-full bg-navy/80 text-xl
                           text-white hover:bg-brand"
              >
                →
              </button>
              <p className="absolute bottom-6 right-6 rounded-full bg-navy/80 px-3 py-1
                            text-xs text-white">
                {index + 1} / {images.length}
              </p>
            </>
          )}

          <button
            type="button"
            onClick={onClose}
            autoFocus
            aria-label="Close"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center
                       rounded-full bg-navy/80 text-white hover:bg-brand"
          >
            ✕
          </button>
        </div>

        {/* Project info */}
        <div className="p-6">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-3 text-white/80">{description}</p>

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full border border-brand px-6 py-2.5
                         text-sm font-semibold text-white hover:bg-brand/30"
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectModal