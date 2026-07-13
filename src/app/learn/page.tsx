import { Section, Container } from "@/components/ui/Section";
import Link from "next/link";
import { Book, Gavel, Scale, AlertTriangle, Briefcase, FileText } from "lucide-react";

const categories = [
    { icon: Scale, title: "Constitutional Law", slug: "constitutional-law", description: "Fundamental rights, duties, and the framework of Indian governance.", color: "bg-blue-500/10 text-blue-400 border-blue-500/15" },
    { icon: Gavel, title: "Criminal Law (IPC/BNS)", slug: "criminal-law", description: "Understanding crimes, punishments, and the new Bharatiya Nyaya Sanhita.", color: "bg-red-500/10 text-red-400 border-red-500/15" },
    { icon: AlertTriangle, title: "Civil Procedure (CPC)", slug: "civil-procedure", description: "The rules and procedures for civil litigation in India.", color: "bg-orange-500/10 text-orange-400 border-orange-500/15" },
    { icon: Briefcase, title: "Corporate Law", slug: "corporate-law", description: "Company acts, mergers, and business regulations.", color: "bg-green-500/10 text-green-400 border-green-500/15" },
    { icon: Book, title: "Family Law", slug: "family-law", description: "Marriage, divorce, succession, and guardianship laws.", color: "bg-purple-500/10 text-purple-400 border-purple-500/15" },
    { icon: FileText, title: "Contract Law", slug: "contract-law", description: "Agreements, obligations, and legal enforceability.", color: "bg-teal-500/10 text-teal-400 border-teal-500/15" },
];

export default function LearnPage() {
    return (
        <>
            <section className="py-20 text-white relative overflow-hidden">
                <div className="watermark-text top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">LEARN</div>
                <Container className="text-center relative z-10">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="w-8 h-[2px] bg-secondary rounded-full" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Education</span>
                        <span className="w-8 h-[2px] bg-secondary rounded-full" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Learn Law</h1>
                    <p className="text-xl text-white/40 max-w-2xl mx-auto">
                        Comprehensive guides and simplified explanations for complex legal subjects.
                    </p>
                </Container>
            </section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat, index) => (
                        <Link key={index} href={`/learn/${cat.slug}`} className="group">
                            <div className="glass-card p-6 hover:border-secondary/20 transition-all duration-300 h-full flex flex-col">
                                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${cat.color} border`}>
                                    <cat.icon className="h-5 w-5" />
                                </div>
                                <h3 className="text-lg font-bold font-serif text-white mb-2 group-hover:text-secondary transition-colors">{cat.title}</h3>
                                <p className="text-white/40 text-sm leading-relaxed mb-4 flex-grow">{cat.description}</p>
                                <div className="text-sm font-medium text-secondary flex items-center mt-auto">Explore Topics &rarr;</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>
        </>
    );
}
