function ProjectCard({ project, index, onOpen }) {
  const { title, description, images } = project

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View ${title} project`}
      className="group min-w-0 shrink-0 basis-full snap-start rounded-4xl border-[3px]
                 border-brand p-5 text-left transition hover:-translate-y-1
                 hover:border-accent sm:basis-[calc(50%-0.75rem)]
                 lg:basis-[calc(33.333%-1rem)]"
    >
      {images.length > 0 ? (
        <img
          src={images[0]}
          alt={`Cover screenshot of ${title}`}
          className="h-44 w-full rounded-2xl bg-black/30 object-cover object-top"
        />
      ) : (
        <div className="flex h-44 w-full items-center justify-center rounded-2xl
                        bg-black/30 text-sm text-white/60">
          Screenshots coming soon
        </div>
      )}

      <p className="mt-6 text-sm font-semibold text-accent">
        {String(index + 1).padStart(2, '0')}
      </p>
      <h3 className="mt-1 text-xl font-medium">{title}</h3>
      <p className="mt-2 line-clamp-3 text-sm">{description}</p>
      <p className="mt-4 text-sm font-semibold text-accent group-hover:underline">
        View Project →
      </p>
    </button>
  )
}

export default ProjectCard