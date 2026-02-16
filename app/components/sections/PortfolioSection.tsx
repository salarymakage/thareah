'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProjectCard from '../ProjectCard';
import { projects } from '../../data/projects';

export default function PortfolioSection() {
    const logos = projects.filter(p => p.category === 'Logo');
    const posters = projects.filter(p => p.category === 'Poster');
    const webApps = projects.filter(p => p.category === 'Web Application');
    const mobileApps = projects.filter(p => p.category === 'Mobile Application');
    const dataScience = projects.filter(p => p.category === 'Data Science');

    const renderSection = (title: string, items: typeof projects, categorySlug: string) => {
        const displayedItems = items.slice(0, 6);
        const hasMore = items.length > 6;

        return (
            items.length > 0 && (
                <div className="mb-20 last:mb-0">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold border-l-4 border-accent pl-4">{title}</h3>
                        {hasMore && (
                            <Link
                                href={`/portfolio/category/${categorySlug}`}
                                className="text-sm font-medium text-muted-foreground hover:text-accent flex items-center transition-colors group"
                            >
                                View All
                                <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayedItems.map((project) => (
                            <div key={project.id} className="animate-fade-in-up">
                                <ProjectCard {...project} />
                            </div>
                        ))}
                    </div>
                </div>
            )
        );
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Selected Works</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    A showcase of creative projects ranging from brand identity to data science.
                </p>
            </div>

            {renderSection('Logo Design', logos, 'logo')}
            {renderSection('Posters', posters, 'poster')}
            {renderSection('Web Applications', webApps, 'web-application')}
            {renderSection('Mobile Applications', mobileApps, 'mobile-application')}
            {renderSection('Data Science', dataScience, 'data-science')}
        </div>
    );
}
