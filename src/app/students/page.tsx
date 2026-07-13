import { Section, Container } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FileText, GraduationCap, Download, Lock } from "lucide-react";

export default function StudentsPage() {
    return (
        <>
            <section className="py-20 text-white relative overflow-hidden">
                <div className="watermark-text top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">STUDY</div>
                <Container className="text-center relative z-10">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="w-8 h-[2px] bg-secondary rounded-full" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Resources</span>
                        <span className="w-8 h-[2px] bg-secondary rounded-full" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">For Students</h1>
                    <p className="text-xl text-white/40 max-w-2xl mx-auto">
                        Curated notes, exam strategies, and resources for LLB & Judiciary aspirants.
                    </p>
                </Container>
            </section>

            <Section>
                <div className="flex items-center gap-3 mb-8">
                    <div className="bg-secondary/10 p-2 rounded-lg text-secondary border border-secondary/15">
                        <FileText className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold font-serif text-white">Free Study Materials</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="glass-card p-6 flex items-start gap-4 hover:border-secondary/20 transition-all duration-300">
                            <div className="bg-white/[0.06] p-3 rounded-lg border border-white/[0.06]">
                                <FileText className="h-6 w-6 text-white/35" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-base">Question Bank: Constitutional Law</h3>
                                <p className="text-xs text-white/35 mb-3">PDF • 2.4 MB</p>
                                <button className="text-sm font-medium text-secondary hover:text-white flex items-center gap-1 transition-colors">
                                    <Download className="h-3 w-3" /> Download
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section>
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="bg-white/[0.06] p-2 rounded-lg text-secondary border border-white/[0.06]">
                                <GraduationCap className="h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-bold font-serif text-white">Exam Prep Courses</h2>
                        </div>
                        <p className="text-white/40">Comprehensive video lectures and mock tests designed for success.</p>
                    </div>
                    <span className="gold-button px-4 py-1.5 text-xs font-bold uppercase tracking-wide">Coming Soon</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
                    {[
                        { title: "CLAT 2025 Crash Course", desc: "Complete syllabus coverage with 50+ hours of video content." },
                        { title: "Judiciary Mains Answer Writing", desc: "Master the art of writing scoring answers with Kalyan Biswas." }
                    ].map((course, i) => (
                        <div key={i} className="glass-card p-8 relative overflow-hidden group">
                            <div className="absolute top-4 right-4 badge-pill text-xs">
                                <Lock className="h-3 w-3 text-white/50" /> LOCKED
                            </div>
                            <h3 className="text-xl font-bold font-serif text-white mb-2">{course.title}</h3>
                            <p className="text-white/40 mb-6">{course.desc}</p>
                            <button disabled className="w-full glass-button py-2.5 text-sm font-medium opacity-50 cursor-not-allowed">Notify Me</button>
                        </div>
                    ))}
                </div>
            </Section>
        </>
    );
}
