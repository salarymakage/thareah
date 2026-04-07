import Image from 'next/image';
import { Palette } from 'lucide-react';

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
                        I’m an engineering student at the Royal University of Phnom Penh with a strong foundation in graphic design and visual communication.
                    </p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                        My journey started in visual design, creating logos, posters, and brand systems that help businesses communicate clearly and consistently.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        Today, I focus on crafting thoughtful design experiences that are visually clean, strategically aligned, and meaningful for real users.
                    </p>
                </div>
            </div>

            <div className="mb-20">
                <h3 className="text-2xl font-bold mb-8 text-center">Skills & Expertise</h3>
                <div className="max-w-xl mx-auto">
                    {/* Design */}
                    <div className="bg-muted/30 p-7 rounded-2xl border border-border/50 transition-colors hover:border-accent/50 group">
                        <div className="mb-5 text-accent">
                            <Palette size={32} />
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                            <h4 className="text-xl font-bold">Design</h4>
                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent">
                                Core Focus
                            </span>
                        </div>

                        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-muted-foreground mb-6">
                            <li>Visual Identity & Logo Design</li>
                            <li>UI/UX Design</li>
                            <li>Design Systems</li>
                            <li>Branding & Digital Graphics</li>
                            <li>Poster & Campaign Design</li>
                            <li>Social Media Content Design</li>
                            <li>Typography & Layout</li>
                            <li>Color Direction & Style Guides</li>
                        </ul>

                        <div className="flex flex-wrap gap-2">
                            {['Brand Strategy', 'Creative Direction', 'Prototyping', 'Content Design'].map((item) => (
                                <span
                                    key={item}
                                    className="text-xs font-medium px-3 py-1.5 rounded-full border border-border/70 bg-background/70 text-muted-foreground"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold mb-8 text-center">Tools I Use</h3>
                <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {['Adobe Photoshop', 'Adobe Illustrator', 'After Effects', 'DaVinci Resolve', 'Kdenlive', 'Figma', 'Canva', 'CapCut', 'Alight Motion'].map((tool) => (
                        <div key={tool} className="text-lg font-semibold">{tool}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}
