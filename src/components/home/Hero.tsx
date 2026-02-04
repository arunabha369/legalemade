import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden bg-primary text-white">
            {/* Background Pattern - subtle overlay */}
            {/* Background Pattern - subtle overlay */}
            <div className="absolute inset-0 bg-primary/5 opacity-10" />

            <div className="container relative mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
                        <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur-sm text-secondary">
                            <span>Welcome to LegalE Made</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif tracking-tight leading-tight">
                            Law Made Simple. <br />
                            <span className="text-secondary">Justice Made Understandable.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
                            Simplifying Indian laws for students, aspirants, and citizens. Your trusted source for legal education and updates.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                            <Link href="/learn">
                                <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto bg-secondary text-primary hover:bg-[#bfa030]">
                                    Start Learning
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/updates">
                                <Button size="lg" variant="outline" className="h-14 px-8 text-lg w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-primary">
                                    Get Legal Updates
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative w-full aspect-[4/3] lg:aspect-square flex items-center justify-center">
                        <div className="relative w-full h-full">
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
        </section>
    );
}
