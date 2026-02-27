import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import { Linkedin, Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white grain-overlay">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-teal flex items-center justify-center pulse-glow-teal">
                <span className="text-white font-serif text-lg font-bold">
                  S
                </span>
              </div>
              <span className="font-serif text-lg text-white">SSL</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Heart. Head. Backbone.
            </p>
            <p className="text-white/65 text-sm mt-2 leading-relaxed">
              Building the operational infrastructure that helps nonprofit
              missions endure and expand their impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-teal-light mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-white text-sm transition-all duration-200 hover:translate-x-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-teal-light mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:supsyslab@outlook.com"
                  className="text-white/80 hover:text-white text-sm transition-all duration-200 flex items-center gap-2 hover:translate-x-1"
                >
                  <Mail className="w-4 h-4" />
                  supsyslab@outlook.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+19195551234"
                  className="text-white/80 hover:text-white text-sm transition-all duration-200 flex items-center gap-2 hover:translate-x-1"
                >
                  <Phone className="w-4 h-4" />
                  (919) 555-1234
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white text-sm transition-all duration-200 flex items-center gap-2 hover:translate-x-1"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-teal-light mb-4">
              Ready to Begin?
            </h4>
            <p className="text-white/75 text-sm mb-4">
              Book a discovery conversation and we will identify your highest
              leverage operational next step.
            </p>
            <Button
              asChild
              className="bg-terracotta hover:bg-terracotta-dark text-white rounded-xl btn-glow-terracotta"
            >
              <Link href="/contact">
                Book Discovery Call <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} Supportive Systems Lab. All rights
            reserved.
          </p>
          <p className="text-white/55 text-xs">
            Triangle, NC &middot; Supporting nonprofits across the region and beyond
          </p>
        </div>
      </div>
    </footer>
  );
}
