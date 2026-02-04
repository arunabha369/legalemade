import { Section, Container } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Calendar, Tag } from "lucide-react";

// Placeholder data for blog posts
const updates = [
    {
        id: 1,
        title: "Supreme Court's Latest Ruling on Right to Privacy",
        excerpt: "Analyzing the implications of the recent verdict and what it means for digital data protection in India.",
        date: "Oct 24, 2023",
        category: "Constitutional Law",
    },
    {
        id: 2,
        title: "Understanding the New Criminal Laws: BNS vs IPC",
        excerpt: "A comparative study of the key changes introduced in the Bharatiya Nyaya Sanhita compared to the Indian Penal Code.",
        date: "Oct 22, 2023",
        category: "Criminal Law",
    },
    {
        id: 3,
        title: "Rights of Arrested Persons: Check Your Legal Awareness",
        excerpt: "Essential knowledge for every citizen about the rights guaranteed during arrest and detention.",
        date: "Oct 20, 2023",
        category: "Legal Awareness",
    },
    {
        id: 4,
        title: "Judiciary Exam 2024: Preparation Strategy",
        excerpt: "Tips and roadmap for aspirants preparing for the upcoming state judiciary examinations.",
        date: "Oct 18, 2023",
        category: "Career",
    },
];

export default function UpdatesPage() {
    return (
        <>
            <section className="bg-primary text-white py-20">
                <Container className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Legal Updates</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Stay ahead with the latest judgments, amendments, and legal insights.
                    </p>
                </Container>
            </section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {updates.map((post) => (
                        <article key={post.id} className="flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                            {/* Image placeholder */}
                            <div className="h-48 bg-gray-200 w-full relative">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                                    [Thumnbail Image]
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                                    <span className="flex items-center gap-1 text-secondary font-medium"><Tag className="h-3 w-3" /> {post.category}</span>
                                </div>

                                <h2 className="text-xl font-bold font-serif text-primary mb-3 leading-tight">
                                    <Link href={`/updates/${post.id}`} className="hover:text-secondary transition-colors">
                                        {post.title}
                                    </Link>
                                </h2>

                                <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
                                    {post.excerpt}
                                </p>

                                <Link href={`/updates/${post.id}`}>
                                    <span className="text-sm font-bold text-primary hover:text-secondary underline decoration-2 underline-offset-4 decoration-secondary/30 hover:decoration-secondary transition-all">
                                        Read Analysis
                                    </span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button variant="outline" size="lg">Load More Updates</Button>
                </div>
            </Section>
        </>
    );
}
