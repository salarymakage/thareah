import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
    title: string;
    category: string;
    image?: string;
    slug: string;
}

export default function ProjectCard({ title, category, image, slug }: ProjectCardProps) {
    return (
        <Link href={`/portfolio/${slug}`} className="group block">
            <div className={`relative overflow-hidden rounded-xl aspect-[4/3] mb-4 flex items-center justify-center shadow-sm transition-shadow group-hover:shadow-md ${category === 'Logo' ? 'bg-white' : 'bg-muted'}`}>
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className={`${category === 'Logo' ? 'object-contain p-4' : 'object-cover'} transition-transform duration-500 group-hover:scale-105`}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 text-muted-foreground group-hover:bg-gray-200 transition-colors">
                        <span className="text-sm">No Image</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            <div>
                <p className="text-xs font-medium text-accent mb-1 uppercase tracking-wider">{category}</p>
                <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">{title}</h3>
            </div>
        </Link>
    );
}
