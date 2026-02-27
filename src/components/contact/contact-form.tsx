"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter at least 2 characters for your name"),
  email: z.string().email("Please enter a valid work email"),
  organization: z.string().optional(),
  message: z
    .string()
    .min(10, "Please share a little more detail (minimum 10 characters)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Production: replace with API route or Formspree/Resend
    console.log("Form submitted:", data);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-12 h-12 text-teal mx-auto mb-4" />
        <h3 className="text-2xl font-serif text-navy mb-2">Message received</h3>
        <p className="text-slate-brand">
          Thank you for reaching out. We will follow up within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-navy mb-1.5"
        >
          Full name *
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="w-full px-4 py-3 rounded-xl border border-fog bg-cloud/50 text-navy placeholder:text-slate-brand/60 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all duration-200 input-glow"
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="text-terracotta text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-navy mb-1.5"
        >
          Work email *
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full px-4 py-3 rounded-xl border border-fog bg-cloud/50 text-navy placeholder:text-slate-brand/60 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all duration-200 input-glow"
          placeholder="name@organization.org"
        />
        {errors.email && (
          <p className="text-terracotta text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="organization"
          className="block text-sm font-medium text-navy mb-1.5"
        >
          Organization name
        </label>
        <input
          id="organization"
          type="text"
          {...register("organization")}
          className="w-full px-4 py-3 rounded-xl border border-fog bg-cloud/50 text-navy placeholder:text-slate-brand/60 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all duration-200 input-glow"
          placeholder="Your organization"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-navy mb-1.5"
        >
          What operational challenge is most urgent? *
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className="w-full px-4 py-3 rounded-xl border border-fog bg-cloud/50 text-navy placeholder:text-slate-brand/60 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all duration-200 input-glow resize-none"
          placeholder="Share the bottleneck, who it affects, and what outcome you need..."
        />
        {errors.message && (
          <p className="text-terracotta text-xs mt-1">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-dark hover:to-terracotta text-white rounded-xl py-4 sm:py-6 text-sm sm:text-base font-semibold btn-glow-terracotta"
      >
        {isSubmitting ? (
          "Sending message..."
        ) : (
          <>
            Send Inquiry <Send className="ml-2 w-4 h-4" />
          </>
        )}
      </Button>
    </form>
  );
}
