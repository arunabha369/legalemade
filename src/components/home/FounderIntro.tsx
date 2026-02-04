import { Section, Container } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { User, BookOpen, Linkedin } from "lucide-react";

export function FounderIntro() {
    return (
        <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image Placeholder */}
                <div className="relative order-2 lg:order-1">
                    <div className="aspect-[4/5] md:aspect-square bg-gray-100 rounded-2xl overflow-hidden relative shadow-xl">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">
                            <span className="text-lg font-medium">[Kalyan Biswas Photo]</span>
                        </div>
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

                    <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 mt-2">
                        <div className="flex items-start gap-3">
                            <div className="mt-1 bg-primary/10 p-2 rounded-full">
                                <BookOpen className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-primary text-sm">Legal Intern</h4>
                                <p className="text-xs text-secondary font-medium">P. Nath & Associates • Jun 2025 (1 mo)</p>
                                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                                    Contributed to legal proceedings, focusing primarily on Article writing, Legal research, and Drafting.
                                </p>
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
                            <Button variant="ghost" className="gap-2 text-primary border border-gray-200 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all">
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
