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
                    <div className="aspect-[4/5] md:aspect-square bg-gray-100 rounded-2xl overflow-hidden relative shadow-xl">
                        <Image
                            src="/founder.jpg"
                            alt="Kalyan Biswas"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                    </div>
                </div>

                {/* Content */}
                <div className="order-1 lg:order-2 space-y-6">
                    <div className="inline-flex items-center gap-2 text-secondary font-medium uppercase tracking-wider text-sm">
                        <User className="h-4 w-4" />
                        <span>Meet the Founder</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary">
                        Kalyan Biswas
                    </h2>
                    <h3 className="text-xl text-gray-600 font-medium">
                        LLB Final Year, Surendranath Law College
                    </h3>

                    <div className="space-y-4 text-gray-600 leading-relaxed">
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
                        <div className="bg-gray-50 border border-gray-100 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                                    <BookOpen className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary text-sm">Legal Intern</h4>
                                    <p className="text-xs text-secondary font-medium">P. Nath & Associates • Jun 2025</p>
                                    <p className="text-xs text-gray-600 mt-1 leading-relaxed line-clamp-2">
                                        Legal research, drafting, and article writing.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Publication */}
                        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                            <div className="flex items-start gap-3">
                                <div className="mt-1 bg-secondary/10 p-2 rounded-full">
                                    <FileText className="h-4 w-4 text-secondary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary text-sm">Research Publication</h4>
                                    <p className="text-xs text-gray-900 font-bold mt-1 line-clamp-1">Mind Over Machine: Who is Controlling Whom?</p>
                                    <p className="text-xs text-gray-500 mt-0.5">Journal of Legal Research and Polity (2025)</p>
                                    <div className="flex gap-2 mt-2">
                                        <a href="/Mind+Over+Machine+-+Who+is+Controlling+Whom.pdf" target="_blank" className="text-[10px] font-bold text-primary hover:text-secondary underline decoration-dotted">
                                            Read PDF
                                        </a>
                                        <span className="text-gray-300">|</span>
                                        <a href="https://doi.org/10.64322/JLRP.2025.1104" target="_blank" className="text-[10px] font-bold text-primary hover:text-secondary underline decoration-dotted">
                                            DOI Link
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-4">
                        <Link href="/about">
                            <Button variant="outline" className="border-primary text-primary hover:!bg-primary hover:!text-white">
                                Read Full Story
                            </Button>
                        </Link>
                        <Link href="https://www.linkedin.com/in/kalyan-biswas-521194365/" target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" className="gap-2 text-primary border border-gray-200 hover:!bg-[#0077b5] hover:!text-white hover:!border-[#0077b5] transition-all">
                                <Linkedin className="h-4 w-4" />
                                Connect on LinkedIn
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    );
}
