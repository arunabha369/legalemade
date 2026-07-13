import { Section, Container } from "@/components/ui/Section";
import { Mail, MapPin, Instagram } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
    return (
        <>
            <section className="py-20 text-white relative overflow-hidden">
                <div className="watermark-text top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">CONTACT</div>
                <Container className="text-center relative z-10">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="w-8 h-[2px] bg-secondary rounded-full" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Get In Touch</span>
                        <span className="w-8 h-[2px] bg-secondary rounded-full" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Contact Us</h1>
                    <p className="text-xl text-white/40 max-w-2xl mx-auto">
                        Have questions or need guidance? We&apos;d love to hear from you.
                    </p>
                </Container>
            </section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold font-serif text-white mb-4">Reach Out</h2>
                            <p className="text-white/40">
                                Whether you have a query about a legal concept, want to suggest a topic, or just want to say hi, feel free to reach out.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: Mail, title: "Email", content: <a href="mailto:biswaskalyan072@gmail.com" className="text-white/50 hover:text-secondary transition-colors">biswaskalyan072@gmail.com</a> },
                                { icon: Instagram, title: "Instagram", content: (
                                    <div className="flex flex-col">
                                        <a href="https://instagram.com/legalemade" className="text-white/50 hover:text-secondary transition-colors">@legalemade</a>
                                        <a href="https://instagram.com/aarambh_aequitas_lawfoundation" className="text-white/50 hover:text-secondary transition-colors">@aarambh_aequitas_lawfoundation</a>
                                    </div>
                                )},
                                { icon: MapPin, title: "Location", content: <p className="text-white/50">Kolkata, West Bengal, India</p> },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white/[0.06] rounded-full flex items-center justify-center text-secondary shrink-0 border border-white/[0.06]">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-sm">{item.title}</h3>
                                        {item.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </Section>
        </>
    );
}
