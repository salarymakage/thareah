export interface Project {
    id: number;
    title: string;
    category: string;
    slug: string;
    image: string;
}

export const projects: Project[] = [
    // Logos
    { id: 1, title: 'Romdul Brand Identity', category: 'Logo', slug: 'romdul-branding', image: '/images/logo/romdul_v2.png' },
    { id: 2, title: 'Arcwave Identity System', category: 'Logo', slug: 'arcwave-branding', image: '/images/logo/arcware.png' },
    { id: 3, title: 'Cafe Hamony Branding', category: 'Logo', slug: 'cafe-hamony-branding', image: '/images/logo/cafehamony_v2.png' },
    { id: 4, title: 'Bespire Brand Identity', category: 'Logo', slug: 'bespire-branding', image: '/images/logo/bespire.png' },
    { id: 20, title: 'Cafe Solace', category: 'Logo', slug: 'cafe-solace', image: '/images/logo/cafesolace.png' },
    { id: 21, title: 'CamAI Identity', category: 'Logo', slug: 'camai-identity', image: '/images/logo/camai.png' },
    { id: 22, title: 'Loan Advisor', category: 'Logo', slug: 'loan-advisor', image: '/images/logo/loanadvisor.png' },

    // Posters
    { id: 24, title: 'Creative Art Poster', category: 'Poster', slug: 'creative-art-poster', image: '/images/poster/creative-poster.png' },
    { id: 25, title: 'Summer Drink Promotion', category: 'Poster', slug: 'summer-drink', image: '/images/poster/summerdrink.png' },
    { id: 5, title: 'Coffee Adobe Poster', category: 'Poster', slug: 'coffee-adobe', image: '/images/poster/cofeadobe.png' },
    { id: 8, title: 'Queen Visuals', category: 'Poster', slug: 'queen-poster', image: '/images/poster/queen.png' },
    { id: 9, title: 'Victory Genodice', category: 'Poster', slug: 'victory-genodice', image: '/images/poster/victorygenodice.png' },
    { id: 10, title: 'Pchum Ben Special', category: 'Poster', slug: 'pchum-ben', image: '/images/poster/pchomben.png' },

    // Web Applications
    { id: 11, title: 'Staff Evaluation System', category: 'Web Application', slug: 'staff-evaluation', image: '/images/web/staffeva.png' },
    { id: 26, title: 'Loan Advisor', category: 'Web Application', slug: 'loan-advisor-web', image: '/images/web/loadadvisor_v2.png' },

    // Mobile Applications
    { id: 14, title: 'OTP Verification', category: 'Mobile Application', slug: 'otp-verification', image: '/images/mobile/otp.png' },
    { id: 23, title: 'Community Forums', category: 'Mobile Application', slug: 'community-forums', image: '/images/mobile/forums.png' },

    // Data Science
    { id: 27, title: 'Book Recommendation System', category: 'Data Science', slug: 'book-recommendation', image: '/images/ds/bookrecommendation_v2.png' },
    { id: 28, title: 'Face Recognition System', category: 'Data Science', slug: 'face-recognition', image: '/images/ds/facerecognition_v2.png' },
    { id: 29, title: 'Load Prediction Model', category: 'Data Science', slug: 'load-prediction', image: '/images/ds/loadprediction_v2.png' },
    { id: 30, title: 'Storm Prediction Analysis', category: 'Data Science', slug: 'storm-prediction', image: '/images/ds/stormprediciton_v2.png' },
    { id: 31, title: 'Traffic Accident Analysis', category: 'Data Science', slug: 'traffic-accident', image: '/images/ds/traffic_accident_v2.png' },
];
