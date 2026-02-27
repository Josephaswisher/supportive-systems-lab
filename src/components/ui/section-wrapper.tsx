import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  bg?: "cream" | "white" | "cloud" | "navy" | "navy-dark" | "teal";
  id?: string;
  grain?: boolean;
}

const bgClasses: Record<string, string> = {
  cream: "bg-cream",
  white: "bg-white",
  cloud: "bg-cloud",
  navy: "bg-navy text-white",
  "navy-dark": "bg-navy-dark text-white",
  teal: "bg-teal text-white",
};

export function SectionWrapper({
  children,
  className,
  bg = "white",
  id,
  grain,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(bgClasses[bg], grain && "grain-overlay", "relative", className)}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20 md:py-24 relative z-10">
        {children}
      </div>
    </section>
  );
}
