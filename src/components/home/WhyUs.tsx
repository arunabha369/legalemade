import { Section } from "@/components/ui/Section";
import { CheckCircle2 } from "lucide-react";

const reasons = [
    {
        title: "Simple Language",
        description: "No complex legalese. We break down statutes into everyday language."
    },
    {
        title: "Practical Examples",
        description: "Real-world scenarios to help you understand how laws apply in daily life."
    },
    {
        title: "Student-Centric Approach",
        description: "Content curated specifically for LLB students and competitive aspirants."
    },
    {
        title: "Regular Updates",
        description: "Daily doses of legal news and amendments to keep you ahead."
    }
];

export function WhyUs() {
    return (
        <Section>
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-secondary rounded-full" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Why Choose Us</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">
                            Why LegalE Made?
                        </h2>
                        <p className="text-lg text-white/40">
                            We understand that law can be intimidating. Our goal is to replace confusion with clarity
                            and fear with knowledge.
                        </p>

                        <div className="space-y-5 pt-4">
                            {reasons.map((reason, index) => (
                                <div key={index} className="flex gap-4 group">
                                    <div className="flex-shrink-0 mt-0.5">
                                        <div className="w-8 h-8 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                                            <CheckCircle2 className="h-4 w-4 text-secondary" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-base">{reason.title}</h3>
                                        <p className="text-white/40 text-sm leading-relaxed mt-1">{reason.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-square glass-card rounded-3xl flex items-center justify-center relative overflow-hidden border-secondary/10">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/[0.04] via-transparent to-transparent"></div>
                            <div className="text-center p-8 z-10">
                                <span className="block text-6xl font-serif font-bold text-white mb-2">100+</span>
                                <span className="text-white/40 font-medium text-sm uppercase tracking-wider">Concepts Simplified</span>

                                <div className="mt-8 border-t border-white/[0.06] pt-8">
                                    <span className="block text-4xl font-serif font-bold text-secondary mb-2">Daily</span>
                                    <span className="text-white/40 font-medium text-sm uppercase tracking-wider">Updates & News</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
