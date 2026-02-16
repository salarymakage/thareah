'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Button from '../Button';
import { projects } from '../../data/projects';

export default function HeroSection() {
    // Select a few projects for the collage (excluding Logos)
    const showcaseProjects = projects.filter(p => p.category !== 'Logo').slice(0, 4);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
            window.history.pushState(null, '', href);
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 lg:pt-0 lg:pb-0">
            {/* Background Elements */}
            <div className="fixed inset-0 -z-10 h-full w-full pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] opacity-60 animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] opacity-50" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full flex items-center min-h-[calc(100vh-80px)]">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 max-w-3xl"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        Available for freelance work
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                        Designer, <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">Developer</span> <br />
                        & Data Enthusiast
                    </h1>

                    <div className="mb-8 max-w-2xl">
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                            I create modern visual identities, build responsive web experiences, and develop data-driven solutions.
                        </p>
                        <p className="text-sm md:text-base text-muted-foreground/80 font-medium">
                            Branding • Web Development • Data Science
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <a href="#portfolio" onClick={(e) => handleScroll(e, '#portfolio')}>
                            <Button size="lg" className="min-w-[170px] group">
                                View My Work
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </a>
                        <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>
                            <Button variant="outline" size="lg" className="min-w-[170px] group">
                                Let's Work Together
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
