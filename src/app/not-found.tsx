import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center px-6">
        <p className="text-teal text-sm uppercase tracking-[0.2em] font-medium mb-4">
          404
        </p>
        <h1 className="text-4xl md:text-5xl font-serif text-navy mb-4">
          This page could not be found
        </h1>
        <p className="text-slate-brand text-lg mb-8 max-w-md mx-auto">
          The link may be outdated or moved. Let&apos;s get you back to the
          main experience.
        </p>
        <Button
          asChild
          className="bg-terracotta hover:bg-terracotta-dark text-white rounded-xl px-8"
        >
          <Link href="/">
            <ArrowLeft className="mr-2 w-4 h-4" /> Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
