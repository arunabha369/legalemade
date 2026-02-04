import { Section } from "@/components/ui/Section";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function InstagramFeed() {
    return (
        <Section variant="alternate" className="overflow-hidden">
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 text-primary font-medium mb-4 justify-center bg-white px-4 py-2 rounded-full shadow-sm">
                    <Instagram className="h-5 w-5" />
                    <span>Follow Us on Instagram</span>
                </div>
                <h2 className="text-3xl font-bold font-serif text-primary">Join Our Community</h2>
                <p className="text-gray-600 mt-2">Get your daily legal dose at @legalemade & @aarambh_aequitas_lawfoundation</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Profile 1: LegalE Made */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6 relative overflow-hidden group">
                        <Instagram className="h-10 w-10 text-gray-400 group-hover:text-pink-600 transition-colors" />
                        {/* <Image src="/path-to-logo.jpg" fill alt="LegalE Made Logo" className="object-cover" /> */}
                    </div>
                    <h3 className="text-xl font-bold font-serif text-primary">LegalE Made</h3>
                    <p className="text-gray-500 font-medium mb-4">@legalemade</p>
                    <p className="text-gray-600 text-sm mb-6 max-w-xs">
                        Simplifying law for everyone. Daily updates, legal facts, and student resources.
                    </p>
                    <a href="https://instagram.com/legalemade" target="_blank" rel="noopener noreferrer" className="mt-auto">
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 w-full px-8">
                            Follow
                        </Button>
                    </a>
                </div>

                {/* Profile 2: Aarambh Aequitas */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6 relative overflow-hidden group">
                        <Instagram className="h-10 w-10 text-gray-400 group-hover:text-pink-600 transition-colors" />
                        {/* <Image src="/path-to-logo.jpg" fill alt="Aarambh Aequitas Logo" className="object-cover" /> */}
                    </div>
                    <h3 className="text-xl font-bold font-serif text-primary">Aarambh Aequitas</h3>
                    <p className="text-gray-500 font-medium mb-4">@aarambh_aequitas_lawfoundation</p>
                    <p className="text-gray-600 text-sm mb-6 max-w-xs">
                        Dedicated to legal aid, awareness, and social justice initiatives.
                    </p>
                    <a href="https://instagram.com/aarambh_aequitas_lawfoundation" target="_blank" rel="noopener noreferrer" className="mt-auto">
                        <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50 w-full px-8">
                            Follow
                        </Button>
                    </a>
                </div>
            </div>

            <div className="text-center mt-12">
                <p className="text-gray-400 text-sm">Follow us to stay updated with the latest legal news and events.</p>
            </div>
        </Section>
    );
}
