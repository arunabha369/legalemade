import type { Metadata } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LegalE Made - Law Made Simple",
  description: "Simplifying Indian laws for students, aspirants, and citizens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${playfair.variable} antialiased flex flex-col min-h-screen relative overflow-x-hidden`}
      >
        {/* Very subtle ambient blobs — nearly invisible */}
        <div
          className="fixed top-[-15%] left-[-10%] w-[500px] h-[500px] bg-secondary/[0.04] rounded-full blur-[120px] animate-float-blob pointer-events-none z-[-1]"
          aria-hidden="true"
        />
        <div
          className="fixed top-[20%] right-[-12%] w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[100px] animate-float-blob pointer-events-none z-[-1]"
          style={{ animationDelay: "3s" }}
          aria-hidden="true"
        />
        <div
          className="fixed bottom-[-10%] left-[40%] w-[350px] h-[350px] bg-secondary/[0.03] rounded-full blur-[100px] animate-float-blob pointer-events-none z-[-1]"
          style={{ animationDelay: "6s" }}
          aria-hidden="true"
        />

        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
