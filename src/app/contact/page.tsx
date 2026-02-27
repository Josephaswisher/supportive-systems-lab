import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactSection } from "@/components/contact/contact-section";
import { FAQSection } from "@/components/contact/faq-section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Supportive Systems Lab about building nonprofit systems your team can trust every day.",
  openGraph: {
    title: "Contact | Supportive Systems Lab",
    description: "Book a discovery conversation and scope your first operational sprint.",
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
