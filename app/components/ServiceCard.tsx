interface ServiceCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
    return (
        <div className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                {icon || <div className="w-6 h-6 bg-current rounded-full opacity-50" />}
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
    );
}
