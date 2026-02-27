import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactSection } from "@/components/contact/contact-section";
import { FAQSection } from "@/components/contact/faq-section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free 30-minute consultation with Supportive Systems Lab. Let's talk about what operational infrastructure can do for your nonprofit.",
  openGraph: {
    title: "Contact | Supportive Systems Lab",
    description: "Book a free consultation. Let's build your backbone.",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <FAQSection />
    </>
  );
}
