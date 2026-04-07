import ServiceCard from '../ServiceCard';

const services = [
    {
        title: 'Visual & Brand Design',
        description: 'I craft clear, modern brand visuals including logos, posters, and social media assets that strengthen recognition and trust.',
        covers: ['Logo Design', 'Brand Identity', 'Poster Design', 'Social Media Graphics']
    },
    {
        title: 'UI/UX Design',
        description: 'I design intuitive web and mobile interfaces with strong visual hierarchy, smooth user flows, and practical usability.',
        covers: ['Wireframes & Prototypes', 'Web & Mobile UI Design', 'Design Systems', 'User Flow Strategy']
    },
];

export default function ServicesSection() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Services</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Comprehensive design and development solutions tailored to your needs.
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
