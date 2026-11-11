// The whole card is one button, so it works with the keyboard too.
// "basis" sets how many cards fit per row: 1 on phones, 2 on tablets, 3 on desktop.
function ProjectCard({ project, index, onOpen }) {
  const { title, description, images } = project

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View ${title} project`}
      className="group min-w-0 shrink-0 basis-full snap-start rounded-[2rem] border-[3px]
                 border-brand p-5 text-left transition hover:-translate-y-1
                 hover:border-accent sm:basis-[calc(50%_-_0.75rem)]
                 lg:basis-[calc(33.333%_-_1rem)] xl:rounded-[2.75rem] xl:p-8"
    >
      {images.length > 0 ? (
        <img
          src={images[0]}
          alt={`Cover screenshot of ${title}`}
          className="h-44 w-full rounded-2xl bg-black/30 object-cover object-top xl:h-56"
        />
      ) : (
        <div className="flex h-44 w-full items-center justify-center rounded-2xl
                        bg-black/30 text-sm text-white/60 xl:h-56">
          Screenshots coming soon
        </div>
      )}

      <p className="mt-6 text-sm font-semibold text-accent xl:text-2xl">
        {String(index + 1).padStart(2, '0')}
      </p>
      <h3 className="mt-1 text-xl font-medium xl:text-4xl">{title}</h3>
      <p className="mt-2 line-clamp-3 text-sm xl:mt-3 xl:text-2xl">{description}</p>
      <p className="mt-4 text-sm font-semibold text-accent group-hover:underline xl:text-2xl">
        View Project →
      </p>
    </button>
  )
}

export default ProjectCard