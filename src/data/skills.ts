export type SkillGroup = {
    title: string
    items: string[]
}

export const skillGroups: SkillGroup[] = [
    {
        title: 'Programming and Web',
        items: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Java', 'Python', 'C++', 'R'],
    },
    {
        title: 'Frameworks and Libraries',
        items: [
            'React (Hooks, Context API, Router)',
            'React Native (Expo)',
            'React Navigation',
            'Tailwind CSS',
            'Bootstrap',
        ],
    },
    {
        title: 'Databases and Tools',
        items: [
            'MongoDB',
            'AsyncStorage',
            'REST API Integration (Axios)',
            'Git and GitHub',
            'Vite',
        ],
    },
    {
        title: 'Design',
        items: ['Figma', 'Basic Layout and Typography', 'Dark and Light Mode Theming'],
    },
]