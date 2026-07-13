import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { User, BookOpen, Linkedin, FileText } from "lucide-react";

export function FounderIntro() {
    return (
        <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="relative order-2 lg:order-1">
                    <div className="aspect-[4/5] md:aspect-square glass-card overflow-hidden relative">
                        <Image
                            src="/founder.jpg"
                            alt="Kalyan Biswas"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Decorative glow */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/10 rounded-full blur-3xl"></div>
                    </div>
                </div>

                {/* Content */}
                <div className="order-1 lg:order-2 space-y-6">
                    <div className="flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-secondary rounded-full" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Meet the Founder</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">
                        Kalyan Biswas
                    </h2>
                    <h3 className="text-lg text-white/40 font-medium">
                        LLB Final Year, Surendranath Law College
                    </h3>

                    <div className="space-y-4 text-white/40 leading-relaxed">
                        <p>
                            Driven by a passion for teaching and a mission to democratize legal knowledge,
                            Kalyan founded LegalE Made to bridge the gap between complex legal statutes and
                            common understanding.
                        </p>
                        <p>
                            As a law student and educator, he believes that justice can only be served when
                            technalities are removed and the law is explained in a language that everyone speaks.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        {/* Experience */}
                        <div className="glass-card p-4">
                            <div className="flex items-start gap-3">
                                <div className="mt-1 bg-white/[0.06] p-2 rounded-full border border-white/[0.06]">
                                    <BookOpen className="h-4 w-4 text-secondary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">Legal Intern</h4>
                                    <p className="text-xs text-secondary font-medium">P. Nath & Associates • Jun 2025</p>
                                    <p className="text-xs text-white/35 mt-1 leading-relaxed line-clamp-2">
                                        Legal research, drafting, and article writing.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Publication */}
                        <div className="glass-card-gold p-4">
                            <div className="flex items-start gap-3">
                                <div className="mt-1 bg-secondary/10 p-2 rounded-full border border-secondary/15">
                                    <FileText className="h-4 w-4 text-secondary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">Research Publication</h4>
                                    <p className="text-xs text-white/70 font-bold mt-1 line-clamp-1">Mind Over Machine: Who is Controlling Whom?</p>
                                    <p className="text-xs text-white/35 mt-0.5">Journal of Legal Research and Polity (2025)</p>
                                    <div className="flex gap-2 mt-2">
                                        <a href="/Mind-Over-Machine.pdf" target="_blank" className="text-[10px] font-bold text-secondary hover:text-white underline decoration-dotted transition-colors">
                                            Read PDF
                                        </a>
                                        <span className="text-white/15">|</span>
                                        <a href="https://doi.org/10.64322/JLRP.2025.1104" target="_blank" className="text-[10px] font-bold text-secondary hover:text-white underline decoration-dotted transition-colors">
                                            DOI Link
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-3">
                        <Link href="/about">
                            <button className="glass-button h-10 px-6 text-sm font-medium">
                                Read Full Story
                            </button>
                        </Link>
                        <Link href="https://www.linkedin.com/in/kalyan-biswas-521194365/" target="_blank" rel="noopener noreferrer">
                            <button className="glass-button h-10 px-6 text-sm font-medium flex items-center gap-2 hover:!bg-[#0077b5]/20 hover:!border-[#0077b5]/40 hover:!text-[#0077b5] transition-all">
                                <Linkedin className="h-4 w-4" />
                                LinkedIn
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    );
}
