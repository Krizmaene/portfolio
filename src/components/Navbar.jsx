import { useState } from 'react'

// Each link points to a section id on the page
const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

function Navbar() {
    // Controls the mobile menu (hidden on larger screens)
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-navy/90 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
                <a href="#home" className="text-xl font-bold text-white">
                    Hi! I'm Krizmaene
                </a>

                {/* Desktop links */}
                <ul className="hidden item-center gap-8 md:flex">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-sm font-semibold text-white transition-colors hover:text-accent">
                                    {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile menu button */}
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-label="Toggle menu"
                    className="rounded-lg border border-brand px-3 py-1 text-sm font-medium text-white md:hidden"
                >
                    {open ? 'Close' : 'Menu'}
                </button>
            </nav>

            {/* Mobile links */}
            {open && (
                <ul className="flex flex-col gap-4 border-t border-brand px-6 py-5 md:hidden">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="font-semibold text-white"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    )
}

export default Navbar