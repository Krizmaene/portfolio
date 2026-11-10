function ProjectCard({ project, index, onOpen }) {
  const { title, description, images } = project

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View ${title} project`}
      className="group w-72 shrink-0 snap-start overflow-hidden rounded-2xl border
                 border-brand bg-brand/20 text-left transition
                 hover:-translate-y-1 hover:border-accent sm:w-80"
    >
      {/* Cover image (first screenshot), or a placeholder */}
      {images.length > 0 ? (
        <img
          src={images[0]}
          alt={`Cover screenshot of ${title}`}
          className="h-48 w-full bg-black/30 object-cover object-top"
        />
      ) : (
        <div className="flex h-48 w-full items-center justify-center bg-black/30
                        text-sm text-white/60">
          Screenshots coming soon
        </div>
      )}

      <div className="p-5">
        <p className="text-xs font-semibold tracking-widest text-accent">
          {String(index + 1).padStart(2, '0')}
        </p>
        <h3 className="mt-1 text-lg font-semibold">{title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-white/75">{description}</p>
        <p className="mt-4 text-sm font-semibold text-accent group-hover:underline">
          View Project →
        </p>
      </div>
    </button>
  )
}

export default ProjectCard