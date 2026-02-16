export interface Project {
    id: number;
    title: string;
    category: string;
    slug: string;
    image: string;
    galleryImages?: string[];
    challenge?: string;
    solution?: string;
}

export const projects: Project[] = [
    // Logos
    {
        id: 1,
        title: 'Romdul Brand Identity',
        category: 'Logo',
        slug: 'romdul-branding',
        image: '/images/logo/romdul_v2.png',
        galleryImages: [
            '/images/help/romdul/image.png'
        ],
        challenge: 'Creating a modern identity for Romdul that reflects its traditional roots while appealing to a contemporary audience. The challenge was to balance cultural significance with minimalist design principles.',
        solution: 'We developed a clean, versatile logo system inspired by the Romdul flower. The new identity scales perfectly across digital and print media, establishing a strong and recognizable brand presence.'
    },
    {
        id: 2,
        title: 'Arcwave Identity System',
        category: 'Logo',
        slug: 'arcwave-branding',
        image: '/images/logo/arcware.png',
        galleryImages: [
            '/images/help/archwave/image.png',
            '/images/help/archwave/image copy.png',
            '/images/help/archwave/image copy 2.png'
        ],
        challenge: 'Arcwave needed a futuristic and dynamic identity to represent its cutting-edge technology solutions. The brand had to convey speed, precision, and innovation without appearing cold or distant.',
        solution: 'The resulting visual identity features a fluid, wave-like logomark that suggests motion and connectivity. We paired this with a bold color palette to ensure the brand stands out in the tech landscape.'
    },
    {
        id: 3,
        title: 'Cafe Hamony Branding',
        category: 'Logo',
        slug: 'cafe-hamony-branding',
        image: '/images/logo/cafehamony_v2.png',
        challenge: 'Cafe Hamony required a warm and inviting brand image that would attract coffee lovers and casual diners alike. The goal was to communicate comfort and quality.',
        solution: 'We designed a friendly and approachable logo using soft typography and warm earth tones. The branding extends to packaging and interior signage, creating a cohesive and welcoming atmosphere.'
    },
    {
        id: 4,
        title: 'Bespire Brand Identity',
        category: 'Logo',
        slug: 'bespire-branding',
        image: '/images/logo/bespire.png',
        galleryImages: [
            '/images/help/bespire/image.png',
            '/images/help/bespire/image copy.png',
            '/images/help/bespire/image copy 2.png',
            '/images/help/bespire/image copy 3.png'
        ],
        challenge: 'Bespire wanted to position itself as a premium lifestyle brand. The challenge was to create an identity that felt exclusive and high-end but still accessible to its core demographic.',
        solution: 'We crafted an elegant monogram and a refined color scheme that exudes sophistication. The visual system is understated yet impactful, perfectly aligning with Bespire\'s luxury positioning.'
    },
    {
        id: 20,
        title: 'Cafe Solace',
        category: 'Logo',
        slug: 'cafe-solace',
        image: '/images/logo/cafesolace.png',
        galleryImages: [
            '/images/help/cafesolace/image.png'
        ],
        challenge: 'Cafe Solace needed a brand that reflected peace and tranquility. The visual identity had to be calming and simple, serving as a sanctuary for its customers.',
        solution: 'Our solution involved a gentle, nature-inspired logo and a muted color palette. The design creates a sense of serenity, perfectly matching the cafe\'s name and mission.'
    },
    {
        id: 21,
        title: 'CamAI Identity',
        category: 'Logo',
        slug: 'camai-identity',
        image: '/images/logo/camai.png',
        galleryImages: [
            '/images/help/camai/image.png',
            '/images/help/camai/image copy.png'
        ],
        challenge: 'For CamAI, the challenge was to humanize artificial intelligence. We needed to avoid the common tropes of sci-fi and robots, focusing instead on intelligence and partnership.',
        solution: 'We developed a symbol that represents neural connections and growth. The identity is modern and trustworthy, positioning CamAI as a leader in ethical and advanced AI solutions.'
    },
    {
        id: 22,
        title: 'Loan Advisor',
        category: 'Logo',
        slug: 'loan-advisor',
        image: '/images/logo/loanadvisor.png',
        challenge: 'Developing a brand identity that stands out in a crowded market while remaining timeless and adaptable. The goal was to balance modern aesthetics with functional clarity, ensuring the mark is recognizable across all touchpoints.',
        solution: 'We crafted a bespoke visual system centered around a signature mark that embodies Loan Advisor\'s vision. The resulting identity system is flexible, scalable, and provides a cohesive experience across print and digital platforms.'
    },

    // Posters
    {
        id: 24,
        title: 'Creative Art Poster',
        category: 'Poster',
        slug: 'creative-art-poster',
        image: '/images/poster/creative-poster_v2.png',
        challenge: 'To create a visually striking poster that captures the essence of contemporary art. The design needed to be bold, abstract, and thought-provoking.',
        solution: 'We used vibrant colors and geometric shapes to create a dynamic composition. The poster effectively grabs attention and communicates the energy of the art event.'
    },
    {
        id: 25,
        title: 'Summer Drink Promotion',
        category: 'Poster',
        slug: 'summer-drink',
        image: '/images/poster/summerdrink_v2.png',
        challenge: 'Developing a brand identity that stands out in a crowded market while remaining timeless and adaptable. The goal was to balance modern aesthetics with functional clarity, ensuring the mark is recognizable across all touchpoints.',
        solution: 'We crafted a bespoke visual system centered around a signature mark that embodies Summer Drink Promotion\'s vision. The resulting identity system is flexible, scalable, and provides a cohesive experience across print and digital platforms.'
    },
    {
        id: 5,
        title: 'Coffee Adobe Poster',
        category: 'Poster',
        slug: 'coffee-adobe',
        image: '/images/poster/cofeadobe_v2.png',
        challenge: 'Developing a brand identity that stands out in a crowded market while remaining timeless and adaptable. The goal was to balance modern aesthetics with functional clarity, ensuring the mark is recognizable across all touchpoints.',
        solution: 'We crafted a bespoke visual system centered around a signature mark that embodies Coffee Adobe Poster\'s vision. The resulting identity system is flexible, scalable, and provides a cohesive experience across print and digital platforms.'
    },
    {
        id: 8,
        title: 'Queen Visuals',
        category: 'Poster',
        slug: 'queen-poster',
        image: '/images/poster/queen_v2.png',
        challenge: 'Developing a brand identity that stands out in a crowded market while remaining timeless and adaptable. The goal was to balance modern aesthetics with functional clarity, ensuring the mark is recognizable across all touchpoints.',
        solution: 'We crafted a bespoke visual system centered around a signature mark that embodies Queen Visuals\'s vision. The resulting identity system is flexible, scalable, and provides a cohesive experience across print and digital platforms.'
    },
    {
        id: 9,
        title: 'Victory Genodice',
        category: 'Poster',
        slug: 'victory-genodice',
        image: '/images/poster/victorygenodice_v2.png',
        challenge: 'Developing a brand identity that stands out in a crowded market while remaining timeless and adaptable. The goal was to balance modern aesthetics with functional clarity, ensuring the mark is recognizable across all touchpoints.',
        solution: 'We crafted a bespoke visual system centered around a signature mark that embodies Victory Genodice\'s vision. The resulting identity system is flexible, scalable, and provides a cohesive experience across print and digital platforms.'
    },
    {
        id: 10,
        title: 'Pchum Ben Special',
        category: 'Poster',
        slug: 'pchum-ben',
        image: '/images/poster/pchomben_v2.png',
        challenge: 'Developing a brand identity that stands out in a crowded market while remaining timeless and adaptable. The goal was to balance modern aesthetics with functional clarity, ensuring the mark is recognizable across all touchpoints.',
        solution: 'We crafted a bespoke visual system centered around a signature mark that embodies Pchum Ben Special\'s vision. The resulting identity system is flexible, scalable, and provides a cohesive experience across print and digital platforms.'
    },

    // Web Applications
    {
        id: 11,
        title: 'Staff Evaluation System',
        category: 'Web Application',
        slug: 'staff-evaluation',
        image: '/images/web/staffeva.png',
        challenge: 'Developing a brand identity that stands out in a crowded market while remaining timeless and adaptable. The goal was to balance modern aesthetics with functional clarity, ensuring the mark is recognizable across all touchpoints.',
        solution: 'We crafted a bespoke visual system centered around a signature mark that embodies Staff Evaluation System\'s vision. The resulting identity system is flexible, scalable, and provides a cohesive experience across print and digital platforms.'
    },
    {
        id: 26,
        title: 'Loan Advisor',
        category: 'Web Application',
        slug: 'loan-advisor-web',
        image: '/images/web/loadadvisor_v2.png',
        challenge: 'Developing a brand identity that stands out in a crowded market while remaining timeless and adaptable. The goal was to balance modern aesthetics with functional clarity, ensuring the mark is recognizable across all touchpoints.',
        solution: 'We crafted a bespoke visual system centered around a signature mark that embodies Loan Advisor\'s vision. The resulting identity system is flexible, scalable, and provides a cohesive experience across print and digital platforms.'
    },

    // Mobile Applications
    {
        id: 14,
        title: 'OTP Verification',
        category: 'Mobile Application',
        slug: 'otp-verification',
        image: '/images/mobile/otp.png',
        challenge: 'Developing a brand identity that stands out in a crowded market while remaining timeless and adaptable. The goal was to balance modern aesthetics with functional clarity, ensuring the mark is recognizable across all touchpoints.',
        solution: 'We crafted a bespoke visual system centered around a signature mark that embodies OTP Verification\'s vision. The resulting identity system is flexible, scalable, and provides a cohesive experience across print and digital platforms.'
    },
    {
        id: 23,
        title: 'Community Forums',
        category: 'Mobile Application',
        slug: 'community-forums',
        image: '/images/mobile/forums.png',
        challenge: 'Developing a brand identity that stands out in a crowded market while remaining timeless and adaptable. The goal was to balance modern aesthetics with functional clarity, ensuring the mark is recognizable across all touchpoints.',
        solution: 'We crafted a bespoke visual system centered around a signature mark that embodies Community Forums\' vision. The resulting identity system is flexible, scalable, and provides a cohesive experience across print and digital platforms.'
    },

    // Data Science
    {
        id: 27,
        title: 'Book Recommendation System',
        category: 'Data Science',
        slug: 'book-recommendation',
        image: '/images/ds/bookrecommendation_v2.png',
        challenge: 'Developing a brand identity that stands out in a crowded market while remaining timeless and adaptable. The goal was to balance modern aesthetics with functional clarity, ensuring the mark is recognizable across all touchpoints.',
        solution: 'We crafted a bespoke visual system centered around a signature mark that embodies Book Recommendation System\'s vision. The resulting identity system is flexible, scalable, and provides a cohesive experience across print and digital platforms.'
    },
    {
        id: 28,
        title: 'Face Recognition System',
        category: 'Data Science',
        slug: 'face-recognition',
        image: '/images/ds/facerecognition_v2.png',
        challenge: 'Developing a brand identity that stands out in a crowded market while remaining timeless and adaptable. The goal was to balance modern aesthetics with functional clarity, ensuring the mark is recognizable across all touchpoints.',
        solution: 'We crafted a bespoke visual system centered around a signature mark that embodies Face Recognition System\'s vision. The resulting identity system is flexible, scalable, and provides a cohesive experience across print and digital platforms.'
    },
    {
        id: 29,
        title: 'Load Prediction Model',
        category: 'Data Science',
        slug: 'load-prediction',
        image: '/images/ds/loadprediction_v2.png',
        challenge: 'The energy sector requires accurate load forecasting to optimize grid operations. The challenge was to handle noisy data and predict peak loads with high precision.',
        solution: 'We built a machine learning model using historical consumption data and weather patterns. The model significantly improved prediction accuracy, aiding in better resource allocation.'
    },
    {
        id: 30,
        title: 'Storm Prediction Analysis',
        category: 'Data Science',
        slug: 'storm-prediction',
        image: '/images/ds/stormprediciton_v2.png',
        challenge: 'Developing a brand identity that stands out in a crowded market while remaining timeless and adaptable. The goal was to balance modern aesthetics with functional clarity, ensuring the mark is recognizable across all touchpoints.',
        solution: 'We crafted a bespoke visual system centered around a signature mark that embodies Storm Prediction Analysis\'s vision. The resulting identity system is flexible, scalable, and provides a cohesive experience across print and digital platforms.'
    },
    {
        id: 31,
        title: 'Traffic Accident Analysis',
        category: 'Data Science',
        slug: 'traffic-accident',
        image: '/images/ds/traffic_accident_v2.png',
        challenge: 'Developing a brand identity that stands out in a crowded market while remaining timeless and adaptable. The goal was to balance modern aesthetics with functional clarity, ensuring the mark is recognizable across all touchpoints.',
        solution: 'We crafted a bespoke visual system centered around a signature mark that embodies Traffic Accident Analysis\'s vision. The resulting identity system is flexible, scalable, and provides a cohesive experience across print and digital platforms.'
    },
];
