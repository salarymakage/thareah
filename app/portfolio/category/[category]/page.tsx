'use client';

import { use } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ProjectCard from '@/app/components/ProjectCard'; // Adjust path if needed
import { projects } from '@/app/data/projects';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
    params: Promise<{ category: string }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
    const { category } = use(params);

    // Decode the category slug to match the project category format
    // e.g., 'logo' -> 'Logo', 'web-application' -> 'Web Application'
    const decodedCategory = decodeURIComponent(category)
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    // Normalize category names for comparison (handle singular/plural if needed, or exact match)
    // The previous implementation used exact strings like 'Logo', 'Poster', 'Web Application'
    // Let's try to match loosely or use a map if necessary.
    // Ideally, we should have a map of slug -> Category Name.

    const categoryMap: Record<string, string> = {
        'logo': 'Logo',
        'branding': 'Logo', // fallback/alias
        'poster': 'Poster',
        'web-application': 'Web Application',
        'mobile-application': 'Mobile Application',
        'data-science': 'Data Science'
    };

    const targetCategory = categoryMap[category.toLowerCase()] || decodedCategory;

    const categoryProjects = projects.filter(
        p => p.category === targetCategory || p.category.toLowerCase() === targetCategory.toLowerCase()
    );

    if (categoryProjects.length === 0) {
        // Option: return notFound() or show empty state
        // notFound();
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="mb-12">
                <Link href="/#portfolio" className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors mb-6 group">
                    <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                    Back to Portfolio
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{targetCategory} Projects</h1>
                <p className="text-muted-foreground">
                    Showing all {categoryProjects.length} projects in {targetCategory}.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryProjects.map((project) => (
                    <div key={project.id} className="animate-fade-in-up">
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>

            {categoryProjects.length === 0 && (
                <div className="text-center py-20 bg-muted/30 rounded-xl">
                    <p className="text-xl text-muted-foreground">No projects found in this category.</p>
                </div>
            )}
        </div>
    );
}
