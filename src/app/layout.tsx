import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Supportive Systems Lab | Nonprofit Operations Architecture",
    template: "%s | Supportive Systems Lab",
  },
  description:
    "Supportive Systems Lab helps nonprofits build durable operational infrastructure through focused sprints that connect mission, management, and execution.",
  keywords: [
    "nonprofit consulting",
    "nonprofit operations",
    "nonprofit SOPs",
    "Triangle NC nonprofit consulting",
    "Raleigh Durham nonprofit consultant",
  ],
  openGraph: {
    title: "Supportive Systems Lab",
    description:
      "Operational infrastructure for nonprofits: Heart. Head. Backbone.",
    type: "website",
    locale: "en_US",
    siteName: "Supportive Systems Lab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supportive Systems Lab",
    description:
      "Focused nonprofit operations consulting for systems that last.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="min-h-screen flex flex-col relative isolate font-sans">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ScrollProgress />
        <div className="strobe-light" aria-hidden="true" />
        <Navbar />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
