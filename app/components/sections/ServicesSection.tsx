import ServiceCard from '../ServiceCard';

const services = [
    {
        title: 'Logo Design',
        description: 'Creating memorable and timeless marks that form the cornerstone of your brand identity.',
    },
    {
        title: 'Brand Identity',
        description: 'Complete visual systems including typography, color palettes, and brand guidelines.',
    },
    {
        title: 'Visual Strategy',
        description: 'Strategic positioning and visual direction to ensure your brand resonates with your target audience.',
    },
    {
        title: 'Brand Collateral',
        description: 'Design for business cards, stationery, and digital assets to maintain a consistent brand presence.',
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
                    <ServiceCard key={service.title} {...service} />
                ))}
            </div>

            <div className="bg-muted/30 rounded-3xl p-12 text-center">
                <h3 className="text-3xl font-bold mb-4">Ready to start a project?</h3>
                <p className="text-muted-foreground mb-8">
                    Get in touch for a custom quote or to discuss your ideas.
                </p>
                <div className="text-xl font-bold text-accent">
                    Projects starting from $1,000
                </div>
            </div>
        </div>
    );
}
