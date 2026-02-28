import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showCircle?: boolean;
}

const sizes = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-14 h-14",
  xl: "w-20 h-20",
};

export function Logo({ size = "md", className, showCircle = true }: LogoProps) {
  return (
    <div
      className={cn(
        sizes[size],
        showCircle &&
          "rounded-full ring-2 ring-teal/30 shadow-[0_0_20px_rgba(26,122,109,0.15)]",
        "relative shrink-0 overflow-hidden",
        className
      )}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-label="Supportive Systems Lab logo"
      >
        {/* Circle background */}
        {showCircle && (
          <circle cx="50" cy="50" r="50" fill="#0F2438" />
        )}

        {/* Heart shape — left half (navy) */}
        <path
          d="M50 82C50 82 18 62 18 40C18 30 26 22 36 22C42 22 47 25 50 30C53 25 58 22 64 22C74 22 82 30 82 40C82 62 50 82 50 82Z"
          fill="#1B3A5C"
        />
        {/* Heart shape — right half (teal-green) */}
        <path
          d="M50 82C50 82 82 62 82 40C82 30 74 22 64 22C58 22 53 25 50 30V82Z"
          fill="#1A7A6D"
        />

        {/* Connection nodes */}
        <circle cx="36" cy="42" r="3.5" fill="white" opacity="0.9" />
        <circle cx="50" cy="50" r="4" fill="white" />
        <circle cx="64" cy="42" r="3.5" fill="white" opacity="0.9" />
        <circle cx="42" cy="60" r="3" fill="white" opacity="0.8" />
        <circle cx="58" cy="60" r="3" fill="white" opacity="0.8" />

        {/* Connection lines */}
        <line x1="36" y1="42" x2="50" y2="50" stroke="white" strokeWidth="1.2" opacity="0.5" />
        <line x1="64" y1="42" x2="50" y2="50" stroke="white" strokeWidth="1.2" opacity="0.5" />
        <line x1="36" y1="42" x2="42" y2="60" stroke="white" strokeWidth="1" opacity="0.35" />
        <line x1="64" y1="42" x2="58" y2="60" stroke="white" strokeWidth="1" opacity="0.35" />
        <line x1="42" y1="60" x2="50" y2="50" stroke="white" strokeWidth="1" opacity="0.4" />
        <line x1="58" y1="60" x2="50" y2="50" stroke="white" strokeWidth="1" opacity="0.4" />
        <line x1="42" y1="60" x2="58" y2="60" stroke="white" strokeWidth="1" opacity="0.3" />
      </svg>
    </div>
  );
}
