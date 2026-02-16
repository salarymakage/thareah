'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Button from './Button';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Handle Navbar background
            setIsScrolled(window.scrollY > 50);

            // Handle Scroll Spy
            const sections = navLinks.map(link => link.href.substring(1));

            // Check if we are at the bottom of the page
            const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

            if (isAtBottom) {
                setActiveSection('contact');
                return;
            }

            let current = 'home';
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Using a more robust threshold
                    if (rect.top <= 200) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 80; // Offset for fixed header
            window.scrollTo({ top: y, behavior: 'smooth' });
            window.history.pushState(null, '', href);
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md h-16 shadow-sm' : 'bg-transparent h-20'}`}>
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                <Link href="#home" onClick={(e) => handleClick(e, '#home')} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div className="relative h-10 w-10">
                        <Image
                            src="/images/tmor.svg"
                            alt="Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-2xl font-bold tracking-tight">thareah<span className="text-accent">.</span></span>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                            className={`text-sm font-medium transition-all duration-300 relative py-2 
                    ${activeSection === link.href.substring(1)
                                    ? 'text-accent'
                                    : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            {link.name}
                            {activeSection === link.href.substring(1) && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full opacity-100 transition-all duration-300" />
                            )}
                            {activeSection !== link.href.substring(1) && (
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent rounded-full transition-all duration-300" />
                            )}
                        </a>
                    ))}
                </div>

                <div className="flex items-center space-x-4">
                    <a href="#contact" onClick={(e) => handleClick(e, '#contact')}>
                        <Button variant={activeSection === 'contact' ? 'primary' : 'outline'} size="sm">Let's Talk</Button>
                    </a>
                </div>
            </div>
        </nav>
    );
}
