'use client';

import ProjectCard from '../ProjectCard';
import { projects } from '../../data/projects';

export default function LogoSection() {
    const logoProjects = projects.filter(p => p.category === 'Logo');

    return (
        <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Logo Design</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Brand identity and logo design projects that create memorable visual identities.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {logoProjects.map((project) => (
                    <div key={project.id} className="animate-fade-in-up">
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>
        </div>
    );
}
