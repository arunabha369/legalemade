import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, CheckCircle2, BookOpen, Shield } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
            {/* Watermark ghost text behind everything */}
            <div className="watermark-text top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
                LEGALE
            </div>

            {/* Diagonal accent lines */}
            <div
                className="absolute top-0 right-[35%] w-[2px] h-full bg-gradient-to-b from-transparent via-secondary/20 to-transparent rotate-[15deg] origin-top z-0"
                style={{ animation: "line-glow 4s ease-in-out infinite" }}
            />
            <div
                className="absolute top-0 right-[33%] w-[1px] h-full bg-gradient-to-b from-transparent via-secondary/10 to-transparent rotate-[15deg] origin-top z-0"
                style={{ animation: "line-glow 4s ease-in-out infinite 1s" }}
            />

            <div className="container relative mx-auto px-4 md:px-6 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
                        {/* Subtitle with accent line */}
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-secondary rounded-full" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                                Legal Education Platform
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif tracking-tight leading-[0.95]">
                            <span className="text-white">Law Made Simple.</span>
                            <br />
                            <span className="text-white">Justice Made</span>
                            <br />
                            <span className="text-secondary">Understandable.</span>
                        </h1>

                        <p className="text-base md:text-lg text-white/40 max-w-lg leading-relaxed">
                            Simplifying Indian laws for students, aspirants, and citizens. Your trusted source for legal education and updates.
                        </p>

                        {/* CTA Buttons - pill shaped */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                            <Link href="/learn">
                                <button className="gold-button h-12 px-8 text-base font-bold flex items-center gap-2">
                                    Start Learning
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </Link>
                            <Link href="/contact">
                                <button className="glass-button h-12 px-8 text-base font-medium flex items-center gap-2 text-white/80">
                                    <MessageCircle className="h-4 w-4" />
                                    Contact Us
                                </button>
                            </Link>
                        </div>

                        {/* Feature badge pills */}
                        <div className="flex flex-wrap items-center gap-3 pt-4">
                            <div className="badge-pill">
                                <CheckCircle2 className="h-4 w-4 text-secondary" />
                                <span>Simplified Content</span>
                            </div>
                            <div className="badge-pill">
                                <BookOpen className="h-4 w-4 text-secondary" />
                                <span>Daily Updates</span>
                            </div>
                            <div className="badge-pill">
                                <Shield className="h-4 w-4 text-secondary" />
                                <span>Student Focused</span>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative w-full flex items-center justify-center">
                        {/* Gold accent badge - floating */}
                        <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20 badge-pill border-secondary/25 bg-black/40 backdrop-blur-sm">
                            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                            <span className="text-white/80 text-xs font-medium">Learn Law · Stay Updated</span>
                        </div>

                        <div className="relative w-full aspect-[4/3] lg:aspect-square">
                            <Image
                                src="/hero-illustration-v2.png"
                                alt="Legal Education Illustration"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-medium">Scroll</span>
                <svg className="w-4 h-4 text-white/30 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </section>
    );
}
