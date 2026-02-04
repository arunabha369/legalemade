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
                        <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary">
                            Why LegalE Made?
                        </h2>
                        <p className="text-lg text-gray-600">
                            We understand that law can be intimidating. Our goal is to replace confusion with clarity
                            and fear with knowledge.
                        </p>

                        <div className="space-y-4 pt-4">
                            {reasons.map((reason, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckCircle2 className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary text-lg">{reason.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        {/* Abstract visual representation */}
                        <div className="aspect-square bg-primary/5 rounded-full flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-50"></div>
                            <div className="text-center p-8 z-10">
                                <span className="block text-6xl font-serif font-bold text-primary mb-2">100+</span>
                                <span className="text-gray-600 font-medium">Concepts Simplified</span>

                                <div className="mt-8 border-t border-gray-200 pt-8">
                                    <span className="block text-4xl font-serif font-bold text-secondary mb-2">Daily</span>
                                    <span className="text-gray-600 font-medium">Updates & News</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
