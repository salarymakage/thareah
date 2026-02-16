import Button from '../Button';

export default function ContactSection() {
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
                        <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-accent transition-colors">hello@example.com</a>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Phone</h3>
                        <p className="text-muted-foreground">+1 (234) 567-890</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Socials</h3>
                        <div className="flex flex-col space-y-2">
                            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">LinkedIn</a>
                            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Twitter / X</a>
                            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Instagram</a>
                        </div>
                    </div>

                    <div className="pt-6">
                        <Button variant="outline" className="w-full justify-center">Chat on WhatsApp</Button>
                    </div>
                </div>

                {/* Form */}
                <form className="space-y-6 bg-white p-8 rounded-2xl shadow-sm">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                        <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                        <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="john@example.com" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                        <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="Tell me about your project..." />
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                </form>
            </div>
        </div>
    );
}
