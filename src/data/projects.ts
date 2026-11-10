export type Project = {
    title: string
    description: string
    image?: string
    github?: string
}

export const projects: Project[] = [
    {
        title: 'Pinoy Recipe Finder',
        description: 'A web app for browsing Filipino recipes, with search, a favorites list, and a details page showing ingredients and instructions.',
        image: '/projects/pinoy-recipe-finder.png',
        github: 'https://github.com/Krizmaene/pinoy-recipe-finder.git',
    },
    {
        title: 'StudySpot PH',
        description: 'A booking platform for co-working spaces and study hubs where users can discover spaces, view details, and manage their bookings through a personal dashboard.',
        image: '/projects/studyspot-ph.png',
        github: 'https://github.com/Krizmaene/midterm-project.git',
    },
    {
        title: 'Barangay Reporting System',
        description: 'A web-based system where residents report community concerns and barangay officials track them. I worked on the MongoDB backend and part of the front-end.',
        image: '/projects/barangay-reporting-system.png',
        github: 'https://github.com/Krizmaene/barangay-report-frontend.git',
    },
    {
        title: 'Job Finder',
        description: 'A mobile app that fetches job listings from an API, lets users search, save jobs without duplicates, and send an application through a form.',
        image: '/projects/job-finder.jpg',
        github: 'https://github.com/Krizmaene/midterm-project-react-native.git',
    },
    {
        title: 'ShopCart PH',
        description: 'A shopping app with home, cart, and checkout screens connected through React Navigation.',
        image: '/projects/shopcart-ph.jpg',
        github: 'https://github.com/Krizmaene/magbojos-krizmaene-react-native-navigation.git',
    },
    {
        title: 'Mobile Portfolio',
        description: 'A personal portfolio app using React Native (Expo), featuring a profile picture, short bio, skills list, and contact and social links.',
        image: '/projects/mobile-portfolio.jpg',
        github: 'https://github.com/Krizmaene/magbojos-krizmaene-mobile-portfolio.git',
    },
    {
        title: 'Travel Diary App',
        description: 'A mobile app for saving travel entries with photos. It uses the camera, location with automatic address lookup, notifications, and on-device storage.',
        image: '/projects/travel-diary.jpg',
        github: 'https://github.com/Krizmaene/device-features-react-native.git',
    },
]