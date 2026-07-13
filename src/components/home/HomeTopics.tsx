import { Section, Container } from "@/components/ui/Section";
import Link from "next/link";
import { Book, Gavel, Scale, AlertTriangle, Briefcase, FileText, ArrowRight } from "lucide-react";

const categories = [
    {
        icon: Scale,
        title: "Constitutional Law",
        slug: "constitutional-law",
        description: "Fundamental rights, duties, and the framework of Indian governance.",
        color: "bg-blue-500/10 text-blue-400 border-blue-500/15",
    },
    {
        icon: Gavel,
        title: "Criminal Law (IPC/BNS)",
        slug: "criminal-law",
        description: "Understanding crimes, punishments, and the new Bharatiya Nyaya Sanhita.",
        color: "bg-red-500/10 text-red-400 border-red-500/15",
    },
    {
        icon: AlertTriangle,
        title: "Civil Procedure (CPC)",
        slug: "civil-procedure",
        description: "The rules and procedures for civil litigation in India.",
        color: "bg-orange-500/10 text-orange-400 border-orange-500/15",
    },
    {
        icon: Briefcase,
        title: "Corporate Law",
        slug: "corporate-law",
        description: "Company acts, mergers, and business regulations.",
        color: "bg-green-500/10 text-green-400 border-green-500/15",
    },
    {
        icon: Book,
        title: "Family Law",
        slug: "family-law",
        description: "Marriage, divorce, succession, and guardianship laws.",
        color: "bg-purple-500/10 text-purple-400 border-purple-500/15",
    },
    {
        icon: FileText,
        title: "Contract Law",
        slug: "contract-law",
        description: "Agreements, obligations, and legal enforceability.",
        color: "bg-teal-500/10 text-teal-400 border-teal-500/15",
    },
];

export function HomeTopics() {
    return (
        <Section>
            <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="w-8 h-[2px] bg-secondary rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Topics</span>
                    <span className="w-8 h-[2px] bg-secondary rounded-full" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">Explore Legal Topics</h2>
                <p className="text-white/40 text-lg">
                    Dive deep into specific areas of Indian Law with our simplified guides.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((cat, index) => (
                    <Link key={index} href={`/learn/${cat.slug}`} className="group">
                        <div className="glass-card p-6 hover:border-secondary/20 transition-all duration-300 h-full flex flex-col">
                            <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${cat.color} border group-hover:scale-110 transition-transform`}>
                                <cat.icon className="h-5 w-5" />
                            </div>
                            <h3 className="text-lg font-bold font-serif text-white mb-2 group-hover:text-secondary transition-colors">
                                {cat.title}
                            </h3>
                            <p className="text-white/40 text-sm leading-relaxed mb-4 flex-grow">
                                {cat.description}
                            </p>
                            <div className="text-sm font-bold text-secondary flex items-center gap-1 mt-auto group-hover:gap-2 transition-all">
                                Explore <ArrowRight className="h-3.5 w-3.5" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="text-center mt-12">
                <Link href="/learn" className="gold-button inline-flex items-center px-6 py-3 text-sm font-bold">
                    View All Topics &rarr;
                </Link>
            </div>
        </Section>
    );
}
