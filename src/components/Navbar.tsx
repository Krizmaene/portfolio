import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

type Props = {
    theme: 'light' | 'dark'
    onToggleTheme: () => void
}

// Each link points to a section id on the page
const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

function Navbar({ theme, onToggleTheme }: Props) {
    // Controls the mobile menu (hidden on larger screens)
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur dark:border-stone-800 dark:bg-stone-950/90">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
                <a href="#home" className="font-bold text-stone-900 dark:text-stone-50">
                    {/* TODO: your name or initials */}
                    Your Name
                </a>

                {/* Desktop links */}
                <ul className="hidden item-center gap-6 md:flex">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-sm text-stone-600 hover:text-amber-700 dark:text-stone-300 dark:hover:text-amber-400">
                                    {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
                    </li>
                </ul>

                {/* Mobile menu button */}
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-label="Toggle menu"
                    className="rounded-md px-3 py-1 text-sm text-stone-700 md:hidden dark:text-stone-200"
                >
                    {open ? 'Close' : 'Menu'}
                </button>
            </nav>

            {/* Mobile links */}
            {open && (
                <ul className="flex flex-col gap-3 border-t border-stone-200 px-6 py-4 md:hidden dark:border-stone-800">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="text-stone-700 dark:text-stone-200"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
                    </li>
                </ul>
            )}
        </header>
    )
}

export default Navbar