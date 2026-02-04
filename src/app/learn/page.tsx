import { Section, Container } from "@/components/ui/Section";
import Link from "next/link";
import { Book, Gavel, Scale, AlertTriangle, Briefcase, FileText } from "lucide-react";

const categories = [
    {
        icon: Scale,
        title: "Constitutional Law",
        slug: "constitutional-law",
        description: "Fundamental rights, duties, and the framework of Indian governance.",
        color: "bg-blue-100 text-blue-700",
    },
    {
        icon: Gavel,
        title: "Criminal Law (IPC/BNS)",
        slug: "criminal-law",
        description: "Understanding crimes, punishments, and the new Bharatiya Nyaya Sanhita.",
        color: "bg-red-100 text-red-700",
    },
    {
        icon: AlertTriangle,
        title: "Civil Procedure (CPC)",
        slug: "civil-procedure",
        description: "The rules and procedures for civil litigation in India.",
        color: "bg-orange-100 text-orange-700",
    },
    {
        icon: Briefcase,
        title: "Corporate Law",
        slug: "corporate-law",
        description: "Company acts, mergers, and business regulations.",
        color: "bg-green-100 text-green-700",
    },
    {
        icon: Book,
        title: "Family Law",
        slug: "family-law",
        description: "Marriage, divorce, succession, and guardianship laws.",
        color: "bg-purple-100 text-purple-700",
    },
    {
        icon: FileText,
        title: "Contract Law",
        slug: "contract-law",
        description: "Agreements, obligations, and legal enforceability.",
        color: "bg-teal-100 text-teal-700",
    },
];

export default function LearnPage() {
    return (
        <>
            <section className="bg-primary text-white py-20">
                <Container className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Learn Law</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Comprehensive guides and simplified explanations for complex legal subjects.
                    </p>
                </Container>
            </section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, index) => (
                        <Link key={index} href={`/learn/${cat.slug}`} className="group">
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${cat.color}`}>
                                    <cat.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold font-serif text-primary mb-2 group-hover:text-secondary transition-colors">
                                    {cat.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                                    {cat.description}
                                </p>
                                <div className="text-sm font-medium text-primary flex items-center mt-auto">
                                    Explore Topics &rarr;
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>
        </>
    );
}
