import { Section, Container } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FileText, GraduationCap, Download, Lock } from "lucide-react";

export default function StudentsPage() {
    return (
        <>
            <section className="bg-primary text-white py-20">
                <Container className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">For Students</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Curated notes, exam strategies, and resources for LLB & Judiciary aspirants.
                    </p>
                </Container>
            </section>

            {/* Free Resources */}
            <Section>
                <div className="flex items-center gap-2 mb-8">
                    <div className="bg-secondary/20 p-2 rounded-lg text-secondary">
                        <FileText className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold font-serif text-primary">Free Study Materials</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4">
                            <div className="bg-gray-100 p-3 rounded-lg">
                                <FileText className="h-6 w-6 text-gray-500" />
                            </div>
                            <div>
                                <h3 className="font-bold text-primary text-lg">Question Bank: Constitutional Law</h3>
                                <p className="text-xs text-gray-500 mb-3">PDF • 2.4 MB</p>
                                <button className="text-sm font-medium text-secondary hover:text-primary flex items-center gap-1">
                                    <Download className="h-3 w-3" /> Download
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Courses / Premium Content Placeholder */}
            <Section variant="alternate">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="bg-primary/10 p-2 rounded-lg text-primary">
                                <GraduationCap className="h-6 w-6" />
                            </div>
                            <h2 className="text-3xl font-bold font-serif text-primary">Exam Prep Courses</h2>
                        </div>
                        <p className="text-gray-600">Comprehensive video lectures and mock tests designed for success.</p>
                    </div>

                    <span className="bg-secondary text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Coming Soon</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="bg-white p-8 rounded-xl border border-gray-200 relative overflow-hidden group">
                        <div className="absolute top-4 right-4 bg-gray-900 text-white px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                            <Lock className="h-3 w-3" /> LOCKED
                        </div>
                        <h3 className="text-2xl font-bold font-serif text-primary mb-2">CLAT 2025 Crash Course</h3>
                        <p className="text-gray-600 mb-6">Complete syllabus coverage with 50+ hours of video content.</p>
                        <Button disabled className="w-full">Notify Me</Button>
                    </div>

                    <div className="bg-white p-8 rounded-xl border border-gray-200 relative overflow-hidden group">
                        <div className="absolute top-4 right-4 bg-gray-900 text-white px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                            <Lock className="h-3 w-3" /> LOCKED
                        </div>
                        <h3 className="text-2xl font-bold font-serif text-primary mb-2">Judiciary Mains Answer Writing</h3>
                        <p className="text-gray-600 mb-6">Master the art of writing scoring answers with Kalyan Biswas.</p>
                        <Button disabled className="w-full">Notify Me</Button>
                    </div>
                </div>
            </Section>
        </>
    );
}
