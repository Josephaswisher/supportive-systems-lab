"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, ArrowIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
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
          : "bg-navy-dark/60 backdrop-blur-md border-b border-white/20 shadow-[0_10px_30px_rgba(3,12,24,0.35)]"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group logo-hover-effect">
          <Logo size="sm" />
          <div className="hidden sm:block">
            <span
              className={cn(
                "font-serif text-lg transition-colors tracking-[0.01em]",
                scrolled
                  ? "text-navy"
                  : "text-white font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
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
                "text-sm font-medium transition-colors relative py-1 px-2 rounded-md",
                pathname === item.href
                  ? scrolled
                    ? "text-teal"
                    : "text-white bg-white/14 ring-1 ring-white/30"
                  : scrolled
                    ? "text-navy/70 hover:text-navy nav-link-slide"
                    : "text-white hover:text-white nav-link-slide font-semibold drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]"
              )}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute bottom-0 left-1 right-1 h-0.5 bg-white rounded-full" />
              )}
            </Link>
          ))}
          <Button
            asChild
            className={cn(
              "bg-terracotta hover:bg-terracotta-dark text-white rounded-xl px-6 btn-glow-terracotta",
              !scrolled && "ring-2 ring-white/45 shadow-[0_0_0_1px_rgba(255,255,255,0.2)]"
            )}
          >
            <Link href="/contact">
              Book Discovery <ArrowIcon className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "transition-colors",
                scrolled
                  ? "text-navy"
                  : "text-white bg-white/12 ring-1 ring-white/28 hover:bg-white/16 hover:text-white rounded-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
              )}
            >
              <MenuIcon className="w-6 h-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full max-w-sm bg-white p-0"
          >
            <div className="p-6 flex items-center gap-3">
              <Logo size="md" />
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
                  className="w-full bg-terracotta hover:bg-terracotta-dark text-white rounded-xl py-6 text-lg btn-glow-terracotta"
                >
                    <Link href="/contact" onClick={() => setOpen(false)}>
                    Book Discovery <ArrowIcon className="ml-2 w-5 h-5" />
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
