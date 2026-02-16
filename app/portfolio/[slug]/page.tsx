import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../../data/projects';
import { notFound } from 'next/navigation';

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-20 animate-fade-in-up">
            <Link
                href="/#portfolio"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors mb-12 group"
            >
                <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                Back to Projects
            </Link>

            <div className="mb-12">
                <span className="text-accent font-medium text-sm uppercase tracking-wider">{project.category} Case Study</span>
                <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6">{project.title}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    A comprehensive look at the branding and design process for {project.title}.
                    We focused on creating a visual language that communicates the core values and mission of the brand.
                </p>
            </div>

            <div className="relative aspect-video bg-white rounded-3xl overflow-hidden mb-16 shadow-xl border border-border/50 flex items-center justify-center p-8">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain transition-transform duration-700 hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        No image available
                    </div>
                )}
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-10">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Developing a brand identity that stands out in a crowded market while remaining timeless and adaptable.
                            The goal was to balance modern aesthetics with functional clarity, ensuring the mark is recognizable across all touchpoints.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We crafted a bespoke visual system centered around a signature mark that embodies {project.title}&apos;s vision.
                            The resulting identity system is flexible, scalable, and provides a cohesive experience across print and digital platforms.
                        </p>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="bg-muted/30 p-8 rounded-2xl border border-border/50">
                        <h3 className="font-semibold text-lg mb-6">Project Metadata</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex flex-col gap-1">
                                <span className="text-muted-foreground uppercase text-[10px] font-bold tracking-widest">Client</span>
                                <span className="font-medium text-base">{project.title.split(' ')[0]} Systems</span>
                            </li>
                            <li className="flex flex-col gap-1">
                                <span className="text-muted-foreground uppercase text-[10px] font-bold tracking-widest">Year</span>
                                <span className="font-medium text-base">2024</span>
                            </li>
                            <li className="flex flex-col gap-1">
                                <span className="text-muted-foreground uppercase text-[10px] font-bold tracking-widest">Services</span>
                                <span className="font-medium text-base">{project.category} Identity</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
