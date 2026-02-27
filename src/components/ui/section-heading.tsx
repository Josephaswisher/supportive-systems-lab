import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12 md:mb-16")}>
      {eyebrow && (
        <span
          className={cn(
            "text-sm font-medium uppercase tracking-[0.2em] eyebrow-dash",
            light ? "text-teal-light" : "text-teal"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-[2.75rem] font-serif mt-2 leading-tight [text-wrap:balance] heading-tight",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg max-w-2xl leading-relaxed [text-wrap:pretty]",
            centered && "mx-auto",
            light ? "text-white/92" : "text-slate-brand"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
