import { Section, Container } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Instagram } from "lucide-react";

export default function ContactPage() {
    return (
        <>
            <section className="bg-primary text-white py-20">
                <Container className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Contact Us</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Have questions or need guidance? We'd love to hear from you.
                    </p>
                </Container>
            </section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold font-serif text-primary mb-4">Get in Touch</h2>
                            <p className="text-gray-600">
                                Whether you have a query about a legal concept, want to suggest a topic, or just want to say hi,
                                feel free to reach out.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary shrink-0">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-primary">Email</h3>
                                    <a href="mailto:contact@legalemade.in" className="text-gray-600 hover:text-primary transition-colors">
                                        contact@legalemade.in
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary shrink-0">
                                    <Instagram className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-primary">Instagram</h3>
                                    <div className="flex flex-col">
                                        <a href="https://instagram.com/legalemade" className="text-gray-600 hover:text-primary transition-colors">@legalemade</a>
                                        <a href="https://instagram.com/aarambh_aequitas_lawfoundation" className="text-gray-600 hover:text-primary transition-colors">@aarambh_aequitas_lawfoundation</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center text-primary shrink-0">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-primary">Location</h3>
                                    <p className="text-gray-600">
                                        Kolkata, West Bengal, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="What is this about?"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="Type your message here..."
                                ></textarea>
                            </div>

                            <Button type="submit" className="w-full">Send Message</Button>
                        </form>
                    </div>
                </div>
            </Section>
        </>
    );
}
