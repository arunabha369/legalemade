import { Section, Container } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, BookOpen, FileText, Scale, Gavel, AlertTriangle, Briefcase } from "lucide-react";
import { notFound } from "next/navigation";

const topicData: Record<string, {
    title: string; description: string; icon: any; color: string;
    introduction: string; keyFeatures: string[];
    subTopics: { title: string; desc: string }[];
}> = {
    "constitutional-law": {
        title: "Constitutional Law", description: "Fundamental rights, duties, and the framework of Indian governance.",
        icon: Scale, color: "text-blue-400 bg-blue-500/10",
        introduction: "The Constitution of India is the supreme law of India. It lays down the framework defining fundamental political code, structure, procedures, powers, and duties of government institutions and sets out fundamental rights, directive principles, and the duties of citizens.",
        keyFeatures: ["Preamble and Basic Structure Doctrine", "Fundamental Rights (Articles 12-35)", "Directive Principles of State Policy (DPSP)", "Fundamental Duties (Article 51A)", "Union and State Judiciary"],
        subTopics: [{ title: "Right to Equality", desc: "Understanding Articles 14-18 and case laws." }, { title: "Right to Life & Liberty", desc: "Deep dive into Article 21 and its expanding horizons." }, { title: "Emergency Provisions", desc: "National, State, and Financial Emergencies." }]
    },
    "criminal-law": {
        title: "Criminal Law (IPC/BNS)", description: "Understanding crimes, punishments, and the new Bharatiya Nyaya Sanhita.",
        icon: Gavel, color: "text-red-400 bg-red-500/10",
        introduction: "Criminal law governs crimes, including felonies and misdemeanors. With the introduction of the Bharatiya Nyaya Sanhita (BNS), India is transitioning from the colonial-era Indian Penal Code (IPC) to a more modern justice system.",
        keyFeatures: ["General Exceptions (Self-defense, etc.)", "Offences against the Human Body", "Offences against Property", "Defamation", "Transition from IPC to BNS"],
        subTopics: [{ title: "Culpable Homicide vs Murder", desc: "Distinguishing Section 299 and 300 of IPC (and BNS equivalents)." }, { title: "Theft, Extortion, Robbery", desc: "Understanding property crimes." }, { title: "Women's Safety Laws", desc: "Provisions for safety and dignity of women." }]
    },
    "civil-procedure": {
        title: "Civil Procedure (CPC)", description: "The rules and procedures for civil litigation in India.",
        icon: AlertTriangle, color: "text-orange-400 bg-orange-500/10",
        introduction: "The Code of Civil Procedure, 1908 is a procedural law related to the administration of civil proceedings in India. It regulates the functioning of civil courts.",
        keyFeatures: ["Jurisdiction of Civil Courts", "Res Judicata & Res Sub-Judice", "Pleadings (Plaint & Written Statement)", "Injunctions and Interlocutory Orders", "Execution of Decrees"],
        subTopics: [{ title: "Stages of a Civil Suit", desc: "From filing a plaint to final judgment." }, { title: "Appeals, Reference, Review", desc: "Remedies available after a decree." }, { title: "ADR Mechanisms", desc: "Mediation and Lok Adalats under Section 89." }]
    },
    "corporate-law": {
        title: "Corporate Law", description: "Company acts, mergers, and business regulations.",
        icon: Briefcase, color: "text-green-400 bg-green-500/10",
        introduction: "Corporate law deals with the formation and operations of corporations and is related to commercial and contract law. The Companies Act, 2013 is the primary legislation.",
        keyFeatures: ["Incorporation of Companies", "Directors: Roles & Responsibilities", "Corporate Social Responsibility (CSR)", "Mergers & Acquisitions", "Winding Up & Insolvency (IBC)"],
        subTopics: [{ title: "Types of Companies", desc: "Private, Public, OPC, and LLPs." }, { title: "Share Capital & Debentures", desc: "Financial structure of a company." }, { title: "Board Meetings", desc: "Procedures and quorum requirements." }]
    },
    "family-law": {
        title: "Family Law", description: "Marriage, divorce, succession, and guardianship laws.",
        icon: BookOpen, color: "text-purple-400 bg-purple-500/10",
        introduction: "Family law involves legal matters related to family relationships, such as marriage, adoption, and divorce. In India, this is often governed by personal laws based on religion.",
        keyFeatures: ["Hindu Marriage Act, 1955", "Muslim Personal Law (Shariat)", "Special Marriage Act, 1954", "Adoption & Maintenance", "Succession & Inheritance"],
        subTopics: [{ title: "Grounds for Divorce", desc: "Cruelty, Adultery, Desertion, etc." }, { title: "Rights of Women in Property", desc: "Hindu Succession Amendment Act, 2005." }, { title: "Uniform Civil Code (UCC)", desc: "Debates and constitutional perspective." }]
    },
    "contract-law": {
        title: "Contract Law", description: "Agreements, obligations, and legal enforceability.",
        icon: FileText, color: "text-teal-400 bg-teal-500/10",
        introduction: "The Indian Contract Act, 1872 pertains to contracts in India. It defines the conditions under which promises made by parties to a contract shall be legally binding.",
        keyFeatures: ["Essentials of a Valid Contract", "Offer and Acceptance", "Consideration", "Free Consent (Coercion, Undue Influence)", "Breach of Contract & Remedies"],
        subTopics: [{ title: "Void vs Voidable Contracts", desc: "Understanding the legal status of agreements." }, { title: "Indemnity & Guarantee", desc: "Special types of contracts." }, { title: "Agency", desc: "Principal-Agent relationship and liabilities." }]
    },
};

export default async function TopicPage({ params }: { params: Promise<{ topic: string }> }) {
    const { topic: slug } = await params;
    const topic = topicData[slug];
    if (!topic) { notFound(); }
    const Icon = topic.icon;

    return (
        <div className="min-h-screen">
            <div className="py-16 relative overflow-hidden">
                <div className="watermark-text top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem]">LAW</div>
                <Container className="relative z-10">
                    <Link href="/learn" className="inline-flex items-center text-white/35 hover:text-secondary mb-6 transition-colors text-sm">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Topics
                    </Link>
                    <div className="flex items-center gap-6 mb-6">
                        <div className="p-4 rounded-xl bg-white/[0.06] border border-white/[0.06]">
                            <Icon className="h-10 w-10 text-secondary" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold font-serif text-white">{topic.title}</h1>
                    </div>
                    <p className="text-lg text-white/40 max-w-2xl leading-relaxed">{topic.description}</p>
                </Container>
                <div className="absolute -right-20 -bottom-20 opacity-[0.02]"><Icon className="h-96 w-96 text-white" /></div>
            </div>

            <Container className="py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="glass-card p-8">
                            <h2 className="text-2xl font-bold text-white mb-4 font-serif">Introduction</h2>
                            <p className="text-white/40 leading-relaxed text-lg">{topic.introduction}</p>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-white mb-4 font-serif">Key Concepts</h2>
                            {topic.subTopics.map((sub, idx) => (
                                <div key={idx} className="glass-card p-6 hover:border-secondary/20 transition-all duration-300 group cursor-pointer">
                                    <h3 className="text-lg font-bold text-white group-hover:text-secondary transition-colors mb-2">{sub.title}</h3>
                                    <p className="text-white/40">{sub.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="glass-card p-6 sticky top-24">
                            <h3 className="font-bold text-lg text-white mb-4 border-b border-white/[0.06] pb-2">Syllabus Highlights</h3>
                            <ul className="space-y-3">
                                {topic.keyFeatures.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-white/40">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full mt-6 gold-button py-2.5 text-sm font-bold">Download Notes (PDF)</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
