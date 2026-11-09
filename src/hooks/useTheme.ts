import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
const STORAGE_KEY = 'theme'

function getInitialTheme(): Theme {
    try {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved === 'light' || saved === 'dark') return saved
    } catch {
        /* storage unavailable: fall back to the device setting */
    }
    return window.matchMedia('(prefers-color-scheme: dark').matches
        ? 'dark'
        : 'light'
}

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(getInitialTheme)

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark')
        try {
            localStorage.setItem(STORAGE_KEY, theme)
        } catch {
            /* ignore storage errors */
        }
    }, [theme])

    const toggleTheme = () =>
        setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

    return { theme, toggleTheme }
}