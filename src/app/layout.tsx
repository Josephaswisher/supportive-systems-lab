import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
