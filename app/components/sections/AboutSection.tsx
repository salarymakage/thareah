import Image from 'next/image';
import { Palette, Code, Brain } from 'lucide-react';

export default function AboutSection() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    I’m a multidisciplinary designer and AI-focused developer building intelligent and meaningful digital systems.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
                <div className="aspect-square bg-muted rounded-2xl overflow-hidden relative">
                    <Image
                        src="/images/profile.png"
                        alt="Profile Picture"
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4">My Story</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                        I’m a Data Science and Engineering student at the Royal University of Phnom Penh with a strong foundation in graphic design and web development.
                    </p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                        My journey started in visual design — creating logos, posters, and brand systems — but over time, I became deeply interested in how systems work behind the interface.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        Today, I focus on building AI-powered solutions, especially in computer vision, OCR, and machine learning. I enjoy combining design thinking with technical problem-solving to create systems that are not only visually clean but structurally intelligent.
                    </p>
                </div>
            </div>

            <div className="mb-20">
                <h3 className="text-2xl font-bold mb-8 text-center">Skills & Expertise</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Design */}
                    <div className="bg-muted/30 p-6 rounded-xl border border-border/50 transition-colors hover:border-accent/50 group">
                        <div className="mb-4 text-accent">
                            <Palette size={32} />
                        </div>
                        <h4 className="text-xl font-bold mb-4">Design</h4>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>Visual Identity & Logo Design</li>
                            <li>UI/UX Design</li>
                            <li>Design Systems</li>
                            <li>Branding & Digital Graphics</li>
                        </ul>
                    </div>

                    {/* Development */}
                    <div className="bg-muted/30 p-6 rounded-xl border border-border/50 transition-colors hover:border-accent/50 group">
                        <div className="mb-4 text-accent">
                            <Code size={32} />
                        </div>
                        <h4 className="text-xl font-bold mb-4">Development</h4>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>React / Next.js</li>
                            <li>Frontend Architecture</li>
                            <li>API Integration</li>
                            <li>System Design</li>
                        </ul>
                    </div>

                    {/* Data & AI */}
                    <div className="bg-muted/30 p-6 rounded-xl border border-border/50 transition-colors hover:border-accent/50 group">
                        <div className="mb-4 text-accent">
                            <Brain size={32} />
                        </div>
                        <h4 className="text-xl font-bold mb-4">Data & AI</h4>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>Machine Learning</li>
                            <li>Computer Vision</li>
                            <li>OCR Systems</li>
                            <li>Deep Learning (CNN, Transformers)</li>
                            <li>Data Analysis & Model Training</li>
                        </ul>
                    </div>
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
