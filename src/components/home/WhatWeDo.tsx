import { Section, Container } from "@/components/ui/Section";
import { BookOpen, Scale, Newspaper, Users } from "lucide-react";

const services = [
    {
        icon: BookOpen,
        title: "Law Education",
        description: "Simplifying complex legal concepts and subjects like Constitutional Law, IPC, and CrPC for students.",
    },
    {
        icon: Newspaper,
        title: "Daily Legal Updates",
        description: "Stay informed with the latest legal news, amendments, and important notifications from the legal world.",
    },
    {
        icon: Scale,
        title: "Case Law Simplification",
        description: "Breaking down landmark judgments and recent court verdicts into easy-to-understand summaries.",
    },
    {
        icon: Users,
        title: "Legal Awareness",
        description: "Empowering common citizens by explaining their rights and duties in simple, practical language.",
    },
];

export function WhatWeDo() {
    return (
        <Section>
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="w-8 h-[2px] bg-secondary rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Our Services</span>
                    <span className="w-8 h-[2px] bg-secondary rounded-full" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">What We Do</h2>
                <p className="text-white/40 text-lg">
                    We bridge the gap between complex legal texts and practical understanding.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="glass-card p-8 group hover:border-secondary/20 transition-all duration-300"
                    >
                        <div className="w-12 h-12 bg-white/[0.06] rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/15 transition-all duration-300 text-secondary border border-white/[0.06] group-hover:border-secondary/20">
                            <service.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-serif font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-white/40 leading-relaxed text-sm">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
