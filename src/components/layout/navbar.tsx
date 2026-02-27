"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { scrolled } = useScrollDirection();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-fog"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center">
            <span className="text-white font-serif text-lg font-bold">S</span>
          </div>
          <div className="hidden sm:block">
            <span
              className={cn(
                "font-serif text-lg transition-colors",
                scrolled ? "text-navy" : "text-navy"
              )}
            >
              Supportive Systems Lab
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.filter((item) => item.href !== "/").map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors relative py-1",
                pathname === item.href
                  ? "text-teal"
                  : "text-navy/70 hover:text-navy"
              )}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal rounded-full" />
              )}
            </Link>
          ))}
          <Button
            asChild
            className="bg-terracotta hover:bg-terracotta-dark text-white rounded-xl px-6"
          >
            <Link href="/contact">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-navy">
              <Menu className="w-6 h-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full max-w-sm bg-white p-0"
          >
            <div className="p-6">
              <SheetTitle className="font-serif text-navy text-xl">
                Supportive Systems Lab
              </SheetTitle>
            </div>
            <div className="flex flex-col px-6 gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "py-3 px-4 rounded-xl text-lg font-medium transition-colors",
                    pathname === item.href
                      ? "text-teal bg-teal/5"
                      : "text-navy/70 hover:text-navy hover:bg-cloud"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-6 pt-6 border-t border-fog">
                <Button
                  asChild
                  className="w-full bg-terracotta hover:bg-terracotta-dark text-white rounded-xl py-6 text-lg"
                >
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
