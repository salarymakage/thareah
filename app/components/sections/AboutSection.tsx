export default function AboutSection() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    I'm a multidisciplinary designer and developer with a passion for creating meaningful digital experiences.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
                <div className="aspect-square bg-muted rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                        [Profile Image Placeholder]
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4">My Story</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                        With over 5 years of experience in the creative industry, I've had the privilege of working with startups and established brands alike. My approach combines strategic thinking with pixel-perfect execution.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        I believe that good design is not just about how things look, but how they work. I strive to build systems that are scalable, accessible, and delightful to use.
                    </p>
                </div>
            </div>

            <div className="mb-20">
                <h3 className="text-2xl font-bold mb-8 text-center">Skills & Expertise</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Logo Design', 'Brand Identity', 'Typography', 'Color Theory', 'Vector Illustration', 'Iconography', 'Brand Strategy', 'Print Design'].map((skill) => (
                        <div key={skill} className="p-4 bg-muted/30 rounded-lg text-center font-medium hover:bg-accent/5 hover:text-accent transition-colors cursor-default">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold mb-8 text-center">Tools I Use</h3>
                <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {['Figma', 'Adobe Illustrator', 'Photoshop', 'React', 'Next.js', 'Tailwind', 'Python', 'FastAPI'].map((tool) => (
                        <div key={tool} className="text-lg font-semibold">{tool}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}
