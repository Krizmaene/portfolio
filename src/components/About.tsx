function About() {
    return (
        <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
            <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-50">
                About
            </h2>

            {/* TODO: replace [COURSE] and rewrite this in your own words */}
            <div className="mt-6 max-w-2xl space-y-4 text-stone-600 dark:text-stone-300">
                <p>
                    I am a graduating Computer Science student at De La Salle Lipa. I enjoy exploring web development, software development, and UI/UX design, where I can enhance my skills in technology and creativity.
                </p>
                <p>
                    I’ve built web and mobile apps with React and React Native, and gained experience working on different projects that have strengthened my technical skills, creativity, and ability to collaborate with others.
                    I am always eager to learn new technologies, improve my skills, and take on challenges that help me grow both personally and professionally. 
                </p>
                <p>
                     aspire to become a UI/UX Designer or Front-end Developer, and continue creating digital solutions that are accessible and enjoyable to use.
                </p>
            </div>
        </section>
    )
}

export default About