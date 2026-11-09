type Props = {
    theme: 'light' | 'dark'
    onToggle: () => void
}

function ThemeToggle({ theme, onToggle }: Props) {
    return (
        <button
            type="button"
            onClick={onToggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="rounded-full border border-stone-300 px-3 py-1 text-sm font-medium text-stone-700 hover:bg-stone-100 dark:border-stone-600 dark:text-stone-200 dark:hover:bg-stone-800"
        >
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </button>
    )
}

export default ThemeToggle