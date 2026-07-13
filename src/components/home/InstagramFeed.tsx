import { Section } from "@/components/ui/Section";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function InstagramFeed() {
    return (
        <Section className="overflow-hidden">
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-4">
                    <span className="w-8 h-[2px] bg-secondary rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Community</span>
                    <span className="w-8 h-[2px] bg-secondary rounded-full" />
                </div>
                <h2 className="text-3xl font-bold font-serif text-white">Join Our Community</h2>
                <p className="text-white/40 mt-2">Get your daily legal dose at @legalemade & @aarambh_aequitas_lawfoundation</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {/* Profile 1: LegalE Made */}
                <div className="glass-card p-8 flex flex-col items-center text-center hover:border-secondary/20 transition-all duration-300">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5 relative overflow-hidden border-2 border-white/[0.08]">
                        <Image src="/instagram_logo.jpeg" fill alt="LegalE Made Logo" className="object-cover" />
                    </div>
                    <h3 className="text-lg font-bold font-serif text-white">LegalE Made</h3>
                    <p className="text-white/35 text-sm font-medium mb-4">@legalemade</p>
                    <p className="text-white/40 text-sm mb-6 max-w-xs flex-grow">
                        Simplifying law for everyone. Daily updates, legal facts, and student resources.
                    </p>
                    <a href="https://instagram.com/legalemade" target="_blank" rel="noopener noreferrer" className="mt-auto w-full">
                        <button className="w-full gold-button py-2.5 text-sm font-bold flex items-center justify-center gap-2">
                            <Instagram className="h-4 w-4" />
                            Follow
                        </button>
                    </a>
                </div>

                {/* Profile 2: Aarambh Aequitas */}
                <div className="glass-card p-8 flex flex-col items-center text-center hover:border-secondary/20 transition-all duration-300">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5 relative overflow-hidden border-2 border-white/[0.08]">
                        <Image src="/aarambh_logo.jpg" fill alt="Aarambh Aequitas Logo" className="object-cover" />
                    </div>
                    <h3 className="text-lg font-bold font-serif text-white">Aarambh Aequitas</h3>
                    <p className="text-white/35 text-sm font-medium mb-4">@aarambh_aequitas_lawfoundation</p>
                    <p className="text-white/40 text-sm mb-6 max-w-xs flex-grow">
                        Dedicated to legal aid, awareness, and social justice initiatives.
                    </p>
                    <a href="https://instagram.com/aarambh_aequitas_lawfoundation" target="_blank" rel="noopener noreferrer" className="mt-auto w-full">
                        <button className="w-full gold-button py-2.5 text-sm font-bold flex items-center justify-center gap-2">
                            <Instagram className="h-4 w-4" />
                            Follow
                        </button>
                    </a>
                </div>

                {/* Profile 3: Kalyan Biswas */}
                <div className="glass-card p-8 flex flex-col items-center text-center hover:border-secondary/20 transition-all duration-300">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5 relative overflow-hidden border-2 border-white/[0.08]">
                        <Image src="/founder.jpg" fill alt="Kalyan Biswas" className="object-cover" />
                    </div>
                    <h3 className="text-lg font-bold font-serif text-white">Kalyan Biswas</h3>
                    <p className="text-white/35 text-sm font-medium mb-4">@kalyanb23</p>
                    <p className="text-white/40 text-sm mb-6 max-w-xs flex-grow">
                        Founder & Legal Educator. Sharing personal insights and journey.
                    </p>
                    <a href="https://www.instagram.com/kalyanb23/" target="_blank" rel="noopener noreferrer" className="mt-auto w-full">
                        <button className="w-full gold-button py-2.5 text-sm font-bold flex items-center justify-center gap-2">
                            <Instagram className="h-4 w-4" />
                            Follow
                        </button>
                    </a>
                </div>
            </div>

            <div className="text-center mt-12">
                <p className="text-white/25 text-sm">Follow us to stay updated with the latest legal news and events.</p>
            </div>
        </Section>
    );
}
