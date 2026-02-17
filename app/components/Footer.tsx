'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            window.scrollTo({
                top: element.getBoundingClientRect().top + window.scrollY - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <footer className="bg-muted/30 border-t border-border mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <a href="#home" onClick={(e) => handleClick(e, '#home')} className="flex items-center gap-2 text-2xl font-bold tracking-tight">
                            <span>thareah<span className="text-accent">.</span></span>
                        </a>
                        <p className="text-muted-foreground text-sm">
                            Specializing in timeless logo design and strategic brand identity systems.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#home" onClick={(e) => handleClick(e, '#home')} className="hover:text-accent transition-colors">Home</a></li>
                            <li><a href="#portfolio" onClick={(e) => handleClick(e, '#portfolio')} className="hover:text-accent transition-colors">Portfolio</a></li>
                            <li><a href="#services" onClick={(e) => handleClick(e, '#services')} className="hover:text-accent transition-colors">Services</a></li>
                            <li><a href="#about" onClick={(e) => handleClick(e, '#about')} className="hover:text-accent transition-colors">About</a></li>
                        </ul>
                    </div>

                    {/* ... Rest of the footer remains mostly the same, minor link updates if needed ... */}
                    <div>
                        <h3 className="font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="mailto:chesthareahtan@gmail.com" className="hover:text-accent transition-colors">chesthareahtan@gmail.com</a></li>
                            <li><a href="tel:+85569260405" className="hover:text-accent transition-colors">+855 69 260 405</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Thareah. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
