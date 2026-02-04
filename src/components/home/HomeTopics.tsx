import { Section, Container } from "@/components/ui/Section";
import Link from "next/link";
import { Book, Gavel, Scale, AlertTriangle, Briefcase, FileText, ArrowRight } from "lucide-react";

const categories = [
    {
        icon: Scale,
        title: "Constitutional Law",
        description: "Fundamental rights, duties, and the framework of Indian governance.",
        color: "bg-blue-100 text-blue-700",
    },
    {
        icon: Gavel,
        title: "Criminal Law (IPC/BNS)",
        description: "Understanding crimes, punishments, and the new Bharatiya Nyaya Sanhita.",
        color: "bg-red-100 text-red-700",
    },
    {
        icon: AlertTriangle,
        title: "Civil Procedure (CPC)",
        description: "The rules and procedures for civil litigation in India.",
        color: "bg-orange-100 text-orange-700",
    },
    {
        icon: Briefcase,
        title: "Corporate Law",
        description: "Company acts, mergers, and business regulations.",
        color: "bg-green-100 text-green-700",
    },
    {
        icon: Book,
        title: "Family Law",
        description: "Marriage, divorce, succession, and guardianship laws.",
        color: "bg-purple-100 text-purple-700",
    },
    {
        icon: FileText,
        title: "Contract Law",
        description: "Agreements, obligations, and legal enforceability.",
        color: "bg-teal-100 text-teal-700",
    },
];

export function HomeTopics() {
    return (
        <Section className="bg-white">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">Explore Legal Topics</h2>
                <p className="text-gray-600 text-lg">
                    Dive deep into specific areas of Indian Law with our simplified guides.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((cat, index) => (
                    <Link key={index} href={`/learn/${cat.title.toLowerCase().replace(/ /g, "-")}`} className="group">
                        <div className="bg-gray-50 hover:bg-white p-6 rounded-xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${cat.color} group-hover:scale-110 transition-transform`}>
                                <cat.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold font-serif text-primary mb-2 group-hover:text-secondary transition-colors">
                                {cat.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                                {cat.description}
                            </p>
                            <div className="text-sm font-bold text-primary flex items-center gap-1 mt-auto group-hover:gap-2 transition-all">
                                Explore Topics <ArrowRight className="h-4 w-4" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="text-center mt-12">
                <Link href="/learn" className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors border-b-2 border-primary hover:border-secondary pb-1">
                    View All Topics &rarr;
                </Link>
            </div>
        </Section>
    );
}
