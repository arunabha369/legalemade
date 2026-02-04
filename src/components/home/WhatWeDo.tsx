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
        <Section variant="alternate">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary">What We Do</h2>
                <p className="text-gray-600 text-lg">
                    We bridge the gap between complex legal texts and practical understanding through our comprehensive offerings.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group"
                    >
                        <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                            <service.icon className="h-7 w-7" />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-primary mb-3">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
