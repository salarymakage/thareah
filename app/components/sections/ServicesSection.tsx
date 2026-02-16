import ServiceCard from '../ServiceCard';

const services = [
    {
        title: 'Visual & Brand Design',
        description: 'Creating modern visual identities, logos, posters, and social media graphics that communicate clearly and professionally.',
        covers: ['Logo Design', 'Brand Identity', 'Poster & Social Media Design', 'Marketing Graphics']
    },
    {
        title: 'UI/UX Design',
        description: 'Designing clean, user-focused interfaces for web and mobile with strong visual hierarchy and usability principles.',
        covers: ['Wireframes & Prototypes', 'App & Website UI Design', 'Design Systems', 'User Flow & Experience Strategy']
    },
    {
        title: 'Web Development',
        description: 'Building responsive and modern websites using clean code and scalable architecture.',
        covers: ['Portfolio Websites', 'Business Websites', 'React / Next.js Interfaces', 'Dashboard Systems', 'Frontend + API Integration']
    },
    {
        title: 'Data Science & AI Solutions',
        description: 'Developing intelligent systems using machine learning and data analysis to solve real-world problems.',
        covers: ['Machine Learning Models', 'OCR & Computer Vision', 'Deep Learning Projects', 'Data Analysis & Visualization', 'AI System Development']
    },
];

export default function ServicesSection() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Services</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Comprehensive design, development, and data solutions tailored to your needs.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
                {services.map((service) => (
                    <div key={service.title} className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            {service.description}
                        </p>
                        <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Covers:</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {service.covers.map((item) => (
                                    <li key={item} className="flex items-center text-sm text-gray-600">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mr-2"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
}
