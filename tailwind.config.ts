import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#080808",
                secondary: "#d4af37",
                background: "#080808",
                foreground: "#ffffff",
                glass: "rgba(255,255,255,0.04)",
                "glass-border": "rgba(255,255,255,0.08)",
                "glass-hover": "rgba(255,255,255,0.08)",
            },
            fontFamily: {
                sans: ["var(--font-open-sans)", "sans-serif"],
                serif: ["var(--font-playfair)", "serif"],
            },
            keyframes: {
                "float-blob": {
                    "0%, 100%": { transform: "translate(0, 0) scale(1)" },
                    "25%": { transform: "translate(30px, -50px) scale(1.1)" },
                    "50%": { transform: "translate(-20px, 20px) scale(0.95)" },
                    "75%": { transform: "translate(40px, 30px) scale(1.05)" },
                },
                "pulse-glow": {
                    "0%, 100%": { opacity: "0.08" },
                    "50%": { opacity: "0.15" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-200% center" },
                    "100%": { backgroundPosition: "200% center" },
                },
            },
            animation: {
                "float-blob": "float-blob 8s ease-in-out infinite",
                "pulse-glow": "pulse-glow 4s ease-in-out infinite",
                shimmer: "shimmer 3s linear infinite",
            },
        },
    },
    plugins: [],
};
export default config;
