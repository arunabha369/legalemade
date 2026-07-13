import { Section, Container } from "@/components/ui/Section";
import Link from "next/link";
import { Calendar, Tag } from "lucide-react";

const updates = [
    { id: 1, title: "Supreme Court's Latest Ruling on Right to Privacy", excerpt: "Analyzing the implications of the recent verdict and what it means for digital data protection in India.", date: "Oct 24, 2023", category: "Constitutional Law" },
    { id: 2, title: "Understanding the New Criminal Laws: BNS vs IPC", excerpt: "A comparative study of the key changes introduced in the Bharatiya Nyaya Sanhita compared to the Indian Penal Code.", date: "Oct 22, 2023", category: "Criminal Law" },
    { id: 3, title: "Rights of Arrested Persons: Check Your Legal Awareness", excerpt: "Essential knowledge for every citizen about the rights guaranteed during arrest and detention.", date: "Oct 20, 2023", category: "Legal Awareness" },
    { id: 4, title: "Judiciary Exam 2024: Preparation Strategy", excerpt: "Tips and roadmap for aspirants preparing for the upcoming state judiciary examinations.", date: "Oct 18, 2023", category: "Career" },
];

export default function UpdatesPage() {
    return (
        <>
            <section className="py-20 text-white relative overflow-hidden">
                <div className="watermark-text top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">NEWS</div>
                <Container className="text-center relative z-10">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="w-8 h-[2px] bg-secondary rounded-full" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Stay Updated</span>
                        <span className="w-8 h-[2px] bg-secondary rounded-full" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Legal Updates</h1>
                    <p className="text-xl text-white/40 max-w-2xl mx-auto">
                        Stay ahead with the latest judgments, amendments, and legal insights.
                    </p>
                </Container>
            </section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {updates.map((post) => (
                        <article key={post.id} className="flex flex-col glass-card overflow-hidden hover:border-secondary/20 transition-all duration-300">
                            <div className="h-48 bg-white/[0.02] w-full relative border-b border-white/[0.06]">
                                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-sm">
                                    [Thumbnail Image]
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-center gap-4 text-xs text-white/35 mb-3">
                                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                                    <span className="flex items-center gap-1 text-secondary font-medium"><Tag className="h-3 w-3" /> {post.category}</span>
                                </div>
                                <h2 className="text-lg font-bold font-serif text-white mb-3 leading-tight">
                                    <Link href={`/updates/${post.id}`} className="hover:text-secondary transition-colors">{post.title}</Link>
                                </h2>
                                <p className="text-white/40 text-sm line-clamp-3 mb-4 flex-1">{post.excerpt}</p>
                                <Link href={`/updates/${post.id}`}>
                                    <span className="text-sm font-bold text-secondary hover:text-white transition-all">Read Analysis &rarr;</span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <button className="gold-button px-8 py-3 text-sm font-bold">Load More Updates</button>
                </div>
            </Section>
        </>
    );
}
