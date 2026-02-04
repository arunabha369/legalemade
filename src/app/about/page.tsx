import { Section, Container } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Target, Heart, FileText, Download, Briefcase } from "lucide-react";

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
                    <div className="bg-gray-100 rounded-2xl aspect-[4/5] relative overflow-hidden shadow-lg border-4 border-white">
                        <Image
                            src="/founder.jpg"
                            alt="Kalyan Biswas"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </Section>

            {/* Experience & Publications */}
            <Section className="bg-gray-50 border-y border-gray-200">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold font-serif text-primary mb-4">Professional Profile</h2>
                        <p className="text-gray-600 text-lg">
                            Academic achievements and legal contributions.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Experience Card */}
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="bg-primary/5 p-4 rounded-xl shrink-0">
                                    <Briefcase className="h-8 w-8 text-primary" />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex flex-wrap justify-between items-start gap-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-primary font-serif">Legal Intern</h3>
                                            <p className="text-secondary font-medium">P. Nath & Associates</p>
                                        </div>
                                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                            Jun 2025 (1 mo)
                                        </span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Active contribution to legal proceedings with a primary focus on:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-600 ml-2 space-y-1">
                                        <li>Comprehensive Article Writing</li>
                                        <li>In-depth Legal Research</li>
                                        <li>Drafting Legal Documents</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Publication Card */}
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="bg-secondary/10 p-4 rounded-xl shrink-0">
                                    <FileText className="h-8 w-8 text-secondary" />
                                </div>
                                <div className="space-y-4 flex-grow">
                                    <div>
                                        <h3 className="text-xl font-bold text-primary font-serif leading-tight">
                                            Mind Over Machine: Who is Controlling Whom?
                                        </h3>
                                        <p className="text-gray-500 text-sm mt-1 font-medium">
                                            Published in <span className="text-primary font-semibold">Journal of Legal Research and Polity</span> • Vol. 1 No. 1 (2025)
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {["Artificial Intelligence", "Human Rights", "Algorithmic Control"].map((tag, i) => (
                                            <span key={i} className="text-xs font-medium bg-gray-50 border border-gray-200 text-gray-600 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-gray-600 text-sm leading-relaxed border-l-4 border-secondary/30 pl-4 italic">
                                        "In the contemporary period AI is becoming more potent that can even influence the human mind... This study has tried to uphold the influence of Artificial Intelligence (AI) on human society and at present how the mind of people has been controlled by machine."
                                    </p>

                                    <div className="flex flex-wrap gap-4 pt-2">
                                        <a
                                            href="/Mind+Over+Machine+-+Who+is+Controlling+Whom.pdf"
                                            target="_blank"
                                            className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors"
                                        >
                                            <Download className="h-4 w-4" />
                                            Download PDF
                                        </a>
                                        <a
                                            href="https://doi.org/10.64322/JLRP.2025.1104"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-white text-primary border border-primary px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/5 transition-colors"
                                        >
                                            DOI Link
                                        </a>
                                    </div>
                                </div>
                            </div>
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
            <Section className="!bg-primary text-white text-center">
                <h2 className="text-3xl font-serif font-bold mb-6">Join Our Growing Community</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    Whether you are a law student or a curious citizen, there is a place for you here.
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="/contact">
                        <Button size="lg" variant="secondary" className="font-bold">Get in Touch</Button>
                    </Link>
                    <Link href="/learn">
                        <Button size="lg" variant="outline" className="border-white text-white !bg-transparent hover:!bg-white hover:!text-primary">Start Learning</Button>
                    </Link>
                </div>
            </Section>
        </>
    );
}
