function Hero() {
    return (
        <section
            id="home"
            className="mx-auto flex min-h-[80vh] max-w-5xl flex-col justify-center px-6 py-20"
        >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-amber-700 dark:text-amber-400">
                Hello, I'm
            </p>

            {/* TODO: your full name */}
            <h1 className="text-4xl font-bold text-stone-900 sm:text-6xl dark:text-stone-50">
                Your full name
            </h1>

            {/* TODO: replace [COURSE] with your course */}
            <p className="mt-4 max-w-2xl text-lg text-stone-600 dark:text-stone-300">
                Graduating [COURSE] student interested in UI/UX and front-end development.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
                {/* Put your resume PDF in the public folder and name it resume.pdf */}
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-amber-700 px-5 py-2.5 font-medium text-white hover:bg-amber-800 dark:bg-amber-500 dark:text-stone-950 dark:hover:bg-amber-400"
                >
                    View Resume
                </a>
                <a
                    href="#contact"
                    className="rounded-lg border border-stone-300 px-5 py-2.5 font-medium text-stone-800 hover:bg-stone-100 dark:border-stone-600 dark:text-stone-100 dark:hover:bg-stone-800"
                >
                    Contact Me
                </a>
            </div>
        </section>
    )
}

export default Hero