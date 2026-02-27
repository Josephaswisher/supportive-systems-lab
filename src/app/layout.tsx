import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "Supportive Systems Lab | Nonprofit Operations Consulting",
    template: "%s | Supportive Systems Lab",
  },
  description:
    "We build the operations, procedures, and systems that keep nonprofits running — so you can focus on changing lives. Heart. Head. Backbone.",
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
      "Nonprofit operations consulting. Heart. Head. Backbone.",
    type: "website",
    locale: "en_US",
    siteName: "Supportive Systems Lab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supportive Systems Lab",
    description:
      "Nonprofit operations consulting. Heart. Head. Backbone.",
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
