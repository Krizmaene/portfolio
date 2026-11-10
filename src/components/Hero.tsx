function Hero() {
    return (
        <section
            id="home"
            className="mx-auto max-w-6xl scroll-mt-20 px-6 py-12 md:py-20"
        >
            <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between">
                <div className="text-center md:text-left">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
                        Aspiring UI/UX Designer and Front-End Developer
                    </p>

                    <h1 className="text-3xl font-bold uppercase leading-tight sm:text-5xl">
                        <span className="text-accent">Krizmaene</span> Airizh A. Magbojos
                    </h1>

                    <p className="mt-3 text-lg text-white/90">
                        4th-year BS Computer Science | De La Salle Lipa
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand/80">
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2z" />
                                </svg>
                                View Resume
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-full border border-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand/30"
                        >
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-4 w-4"
                            >
                                <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1l-2.22 2.2z" />
                            </svg>
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="relative shrink-0">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-brand opacity-70 blur-2xl"
                    />
                    <img
                        src="/profile.png"
                        alt="Portrait of Krizmaene Airizh A. Magbojos"
                        className="relative h-56 w-56 rounded-full object-cover ring-4 ring-brand sm:h-72 sm:w-72"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero