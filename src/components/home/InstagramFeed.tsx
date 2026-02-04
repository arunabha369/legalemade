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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {/* Placeholders for visual balance */}
                {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-square bg-gray-50 rounded-xl shadow-inner border border-gray-200 flex flex-col items-center justify-center p-6 text-center group hover:bg-gray-100 transition-colors">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 text-pink-500 shadow-sm">
                            <Instagram className="h-8 w-8" />
                        </div>
                        <p className="text-sm text-gray-900 font-semibold">Latest Update {i}</p>
                        <p className="text-xs text-gray-500 mt-1">@legalemade</p>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a href="https://instagram.com/legalemade" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 text-white shadow-lg shadow-purple-200">
                        Follow on Instagram
                    </Button>
                </a>
            </div>
        </Section>
    );
}
