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
            'React (Vite)',
            'React Native (Expo)',
            'Tailwind CSS',
            'Bootstrap',
        ],
    },
    {
        title: 'Databases and Tools',
        items: [
            'MongoDB',
            'AsyncStorage',
            'Git and GitHub',
        ],
    },
    {
        title: 'Design',
        items: ['Figma', 'Wireframing', 'Prototyping', 'Basic Layout and Typography'],
    },
]