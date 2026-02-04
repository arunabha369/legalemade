import { Section, Container } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { BookOpen, Target, Heart } from "lucide-react";

export default function AboutPage() {
    return (
        <>
            {/* Header */}
            <section className="bg-primary text-white py-20">
                <Container className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">About LegalE Made</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Where passion for teaching meets the mission of simplifying justice.
                    </p>
                </Container>
            </section>

            {/* Founder's Story */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 text-secondary font-medium uppercase tracking-wider text-sm">
                            <span>The Journey</span>
                        </div>
                        <h2 className="text-3xl font-bold font-serif text-primary">Kalyan Biswas</h2>
                        <h3 className="text-lg text-gray-500 font-medium">Founder & Legal Educator</h3>

                        <div className="prose prose-lg text-gray-600 space-y-4">
                            <p>
                                Kalyan Biswas, currently a final-year LLB student at Surendranath Law College,
                                started LegalE Made with a singular vision: to strip away the complexity of legal language
                                and reveal the simple, powerful principles underneath.
                            </p>
                            <p>
                                "I realized early on that many students struggle not with the concepts of law, but with
                                the language of law. My teaching philosophy is built on the belief that if you can't
                                explain it simply, you don't understand it well enough."
                            </p>
                            <p>
                                What started as small study groups and notes sharing has now evolved into a platform
                                dedicated to empowering law aspirants across the country.
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-100 rounded-2xl aspect-[4/5] relative overflow-hidden shadow-lg">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                            [Founder Image Placeholder]
                        </div>
                    </div>
                </div>
            </Section>

            {/* Mission & Values */}
            <Section variant="alternate">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold font-serif text-primary mb-4">Our Mission</h2>
                    <p className="text-gray-600 text-lg">
                        To democratize legal education by making it accessible, understandable, and affordable
                        for every student and citizen in India.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                            <Target className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-primary">Simplicity First</h3>
                        <p className="text-gray-600 text-sm">We prioritize clarity over complexity in every explanation.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                            <BookOpen className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-primary">Academic Excellence</h3>
                        <p className="text-gray-600 text-sm">Rigorous research ensures our content is accurate and reliable.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                            <Heart className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-primary">Passion for Justice</h3>
                        <p className="text-gray-600 text-sm">inspiring the next generation of lawyers to serve with integrity.</p>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section className="bg-primary text-white text-center">
                <h2 className="text-3xl font-serif font-bold mb-6">Join Our Growing Community</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    Whether you are a law student or a curious citizen, there is a place for you here.
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="/contact">
                        <Button size="lg" variant="secondary" className="font-bold">Get in Touch</Button>
                    </Link>
                    <Link href="/learn">
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">Start Learning</Button>
                    </Link>
                </div>
            </Section>
        </>
    );
}
