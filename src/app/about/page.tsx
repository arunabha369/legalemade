import { Section, Container } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Target, Heart, FileText, Download, Briefcase } from "lucide-react";

export default function AboutPage() {
    return (
        <>
            {/* Header */}
            <section className="py-20 text-white relative overflow-hidden">
                <div className="watermark-text top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">ABOUT</div>
                <Container className="text-center relative z-10">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="w-8 h-[2px] bg-secondary rounded-full" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Our Story</span>
                        <span className="w-8 h-[2px] bg-secondary rounded-full" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">About LegalE Made</h1>
                    <p className="text-xl text-white/40 max-w-2xl mx-auto">
                        Where passion for teaching meets the mission of simplifying justice.
                    </p>
                </Container>
            </section>

            {/* Founder's Story */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-secondary rounded-full" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">The Journey</span>
                        </div>
                        <h2 className="text-3xl font-bold font-serif text-white">Kalyan Biswas</h2>
                        <h3 className="text-lg text-white/40 font-medium">Founder & Legal Educator</h3>

                        <div className="text-white/40 space-y-4 leading-relaxed">
                            <p>
                                Kalyan Biswas, a final year BA.LLB student at Surendranath Law College under Calcutta University, founded LegalEmade with a clear mission to spread legal knowledge among the common people. His journey is driven by a unique blend of academic rigor, practical advocacy, and a deep-seated passion for teaching.
                            </p>
                            <p>
                                His practical experience includes serving as a Legal Intern at Daslegal Advocates and P. Nath & Associates, where he honed his skills in comprehensive article writing, in-depth legal research, and drafting crucial legal documents.
                            </p>
                            <p>
                                A forward-thinking researcher, Kalyan has also contributed to contemporary legal discourse. His publication, &quot;Mind Over Machine: Who is Controlling Whom?&quot; (Journal of Legal Research and Polity, 2025), critically examines the intersection of Artificial Intelligence and Human Rights.
                            </p>
                        </div>
                    </div>
                    <div className="glass-card aspect-[4/5] relative overflow-hidden">
                        <Image src="/founder.jpg" alt="Kalyan Biswas" fill className="object-cover" />
                    </div>
                </div>
            </Section>

            {/* Experience & Publications */}
            <Section>
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold font-serif text-white mb-4">Professional Profile</h2>
                        <p className="text-white/40 text-lg">Academic achievements and legal contributions.</p>
                    </div>

                    <div className="space-y-6">
                        <div className="glass-card p-8">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="bg-white/[0.06] p-4 rounded-xl shrink-0 border border-white/[0.06]">
                                    <Briefcase className="h-8 w-8 text-secondary" />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex flex-wrap justify-between items-start gap-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-white font-serif">Legal Intern</h3>
                                            <p className="text-secondary font-medium">P. Nath & Associates</p>
                                        </div>
                                        <span className="badge-pill text-xs">Jun 2025 (1 mo)</span>
                                    </div>
                                    <p className="text-white/40 leading-relaxed">Active contribution to legal proceedings with a primary focus on:</p>
                                    <ul className="list-disc list-inside text-white/40 ml-2 space-y-1">
                                        <li>Comprehensive Article Writing</li>
                                        <li>In-depth Legal Research</li>
                                        <li>Drafting Legal Documents</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card-gold p-8">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="bg-secondary/10 p-4 rounded-xl shrink-0 border border-secondary/15">
                                    <FileText className="h-8 w-8 text-secondary" />
                                </div>
                                <div className="space-y-4 flex-grow">
                                    <div>
                                        <h3 className="text-xl font-bold text-white font-serif leading-tight">Mind Over Machine: Who is Controlling Whom?</h3>
                                        <p className="text-white/40 text-sm mt-1 font-medium">
                                            Published in <span className="text-secondary font-semibold">Journal of Legal Research and Polity</span> • Vol. 1 No. 1 (2025)
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {["Artificial Intelligence", "Human Rights", "Algorithmic Control"].map((tag, i) => (
                                            <span key={i} className="badge-pill text-xs">{tag}</span>
                                        ))}
                                    </div>
                                    <p className="text-white/40 text-sm leading-relaxed border-l-4 border-secondary/20 pl-4 italic">
                                        &quot;In the contemporary period AI is becoming more potent that can even influence the human mind... This study has tried to uphold the influence of Artificial Intelligence (AI) on human society.&quot;
                                    </p>
                                    <div className="flex flex-wrap gap-3 pt-2">
                                        <a href="/Mind-Over-Machine.pdf" target="_blank" className="gold-button px-4 py-2 text-sm font-bold inline-flex items-center gap-2">
                                            <Download className="h-4 w-4" /> Download PDF
                                        </a>
                                        <a href="https://doi.org/10.64322/JLRP.2025.1104" target="_blank" rel="noopener noreferrer" className="glass-button px-4 py-2 text-sm font-bold">
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
            <Section>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold font-serif text-white mb-4">Our Mission</h2>
                    <p className="text-white/40 text-lg">
                        To democratize legal education by making it accessible, understandable, and affordable for every student and citizen in India.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { icon: Target, title: "Simplicity First", desc: "We prioritize clarity over complexity in every explanation." },
                        { icon: BookOpen, title: "Academic Excellence", desc: "Rigorous research ensures our content is accurate and reliable." },
                        { icon: Heart, title: "Passion for Justice", desc: "Inspiring the next generation of lawyers to serve with integrity." },
                    ].map((item, i) => (
                        <div key={i} className="glass-card p-8 text-center hover:border-secondary/20 transition-all duration-300">
                            <div className="w-12 h-12 bg-white/[0.06] rounded-xl flex items-center justify-center mx-auto mb-4 text-secondary border border-white/[0.06]">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
                            <p className="text-white/40 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section className="text-center">
                <div className="glass-card-gold p-12 md:p-16 max-w-4xl mx-auto relative overflow-hidden">
                    <div className="watermark-text top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem]">JOIN</div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-serif font-bold mb-6 text-white">Join Our Growing Community</h2>
                        <p className="text-white/40 mb-8 max-w-2xl mx-auto">Whether you are a law student or a curious citizen, there is a place for you here.</p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <Link href="/contact"><button className="gold-button h-12 px-8 text-base font-bold">Get in Touch</button></Link>
                            <Link href="/learn"><button className="glass-button h-12 px-8 text-base font-medium">Start Learning</button></Link>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
