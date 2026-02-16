"use client";

import { useState } from 'react';
import Button from '../Button';
import { Palette, Code, Brain } from 'lucide-react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `Project Inquiry from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        const mailtoLink = `mailto:chesthareahtan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Have a project in mind or just want to say hello? I'd love to hear from you.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Email</h3>
                        <a href="mailto:chesthareahtan@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">chesthareahtan@gmail.com</a>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Phone</h3>
                        <p className="text-muted-foreground">+855 69 260 405</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Socials</h3>
                        <div className="flex flex-col space-y-2">
                            <a href="https://www.linkedin.com/in/chestharas-tan-2823052a8/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">LinkedIn</a>
                            <a href="https://github.com/salarymakage" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">GitHub</a>
                        </div>
                    </div>

                    <div className="pt-6">
                        <a href="https://wa.me/qr/K4IAG3YGFHSTI1" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="w-full justify-center">Chat on WhatsApp</Button>
                        </a>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-sm">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                        <textarea
                            id="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                            placeholder="Tell me about your project..."
                        />
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                </form>
            </div>
        </div>
    );
}
