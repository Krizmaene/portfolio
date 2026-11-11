function Hero() {
  return (
    <section id="home" className="bg-hero flex min-h-screen items-center pb-12 pt-28">
      <div className="container-x flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between">
        {/* Text side */}
        <div className="text-center md:text-left">
          <p className="text-base text-accent md:text-xl xl:text-2xl">
            Aspiring UI/UX Designer and Front-End Developer
          </p>

          <h1 className="mt-3 text-4xl font-bold uppercase leading-tight sm:text-5xl xl:text-7xl">
            <span className="text-accent">Krizmaene</span> Airizh A. Magbojos
          </h1>

          <p className="mt-4 text-lg md:text-2xl xl:text-3xl">
            4th-year BS Computer Science student | De La Salle Lipa
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start xl:gap-8">
            {/* Resume PDF goes in public/resume.pdf */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-brand px-6 py-3
                         text-base font-medium transition-colors hover:bg-brand/80
                         xl:px-9 xl:py-5 xl:text-2xl"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"
                   className="h-5 w-5 xl:h-8 xl:w-8">
                <path d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2z" />
              </svg>
              View Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border-2 border-brand
                         px-6 py-3 text-base font-medium transition-colors hover:bg-brand/30
                         xl:px-9 xl:py-5 xl:text-2xl"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"
                   className="h-5 w-5 xl:h-8 xl:w-8">
                <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1l-2.22 2.2z" />
              </svg>
              Contact Me
            </a>
          </div>
        </div>

        {/* Photo side: the exported PNG already includes the dotted halo */}
        <img
          src="/profile-2.png"
          alt="Portrait of Krizmaene Airizh A. Magbojos"
          className="w-64 shrink-0 sm:w-80 xl:w-[32rem]"
        />
      </div>
    </section>
  )
}

export default Hero