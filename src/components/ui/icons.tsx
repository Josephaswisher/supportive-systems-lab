import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

function Svg({ className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-6 h-6", className)}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

// ─── Three Pillars / Framework ──────────────────────────────────────

/** Heart with connection nodes — care, empathy, mission alignment */
export function HeartIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M12 21s-7-4.5-7-10.5C5 7.5 7.5 5 10 5c1.5 0 2.5.8 2 2m0 0c-.5-1.2.5-2 2-2 2.5 0 5 2.5 5 5.5C19 16.5 12 21 12 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Connection nodes */}
      <circle cx="8" cy="10.5" r="1.2" fill="currentColor" opacity="0.7" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
      <circle cx="16" cy="10.5" r="1.2" fill="currentColor" opacity="0.7" />
      {/* Connection lines */}
      <line x1="8" y1="10.5" x2="12" y2="12" stroke="currentColor" strokeWidth="0.7" opacity="0.35" />
      <line x1="16" y1="10.5" x2="12" y2="12" stroke="currentColor" strokeWidth="0.7" opacity="0.35" />
    </Svg>
  );
}

/** Brain with network nodes — strategy, intelligence, planning */
export function BrainIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* Left hemisphere */}
      <path
        d="M12 4C10 4 8.5 5 8 6.5C6.5 6 5 7.5 5 9.5c0 1.5.8 2.5 1.5 3C6 13.5 5.5 15 6.5 16.5c.8 1.2 2 1.5 3 1.5.5 1.2 1.5 2 2.5 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Right hemisphere */}
      <path
        d="M12 4c2 0 3.5 1 4 2.5C17.5 6 19 7.5 19 9.5c0 1.5-.8 2.5-1.5 3 .5 1 1 2.5 0 4-.8 1.2-2 1.5-3 1.5-.5 1.2-1.5 2-2.5 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Central stem */}
      <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" strokeWidth="0.6" opacity="0.2" />
      {/* Network nodes */}
      <circle cx="8.5" cy="9" r="1.1" fill="currentColor" opacity="0.6" />
      <circle cx="15.5" cy="9" r="1.1" fill="currentColor" opacity="0.6" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" />
      <circle cx="9" cy="15" r="1" fill="currentColor" opacity="0.5" />
      <circle cx="15" cy="15" r="1" fill="currentColor" opacity="0.5" />
      {/* Network connections */}
      <line x1="8.5" y1="9" x2="12" y2="12" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
      <line x1="15.5" y1="9" x2="12" y2="12" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
      <line x1="9" y1="15" x2="12" y2="12" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
      <line x1="15" y1="15" x2="12" y2="12" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
    </Svg>
  );
}

/** Column/pillar with structural reinforcements — backbone, infrastructure */
export function BackboneIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* Pillar */}
      <rect x="9" y="5" width="6" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" />
      {/* Capital (top) */}
      <path d="M7 5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Base */}
      <path d="M7 19h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Structural cross members */}
      <line x1="9.5" y1="9" x2="14.5" y2="9" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <line x1="9.5" y1="12" x2="14.5" y2="12" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      <line x1="9.5" y1="15" x2="14.5" y2="15" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      {/* Reinforcement nodes */}
      <circle cx="12" cy="9" r="1" fill="currentColor" opacity="0.5" />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" opacity="0.6" />
      <circle cx="12" cy="15" r="1" fill="currentColor" opacity="0.5" />
    </Svg>
  );
}

// ─── Pain Points (Who We Help) ──────────────────────────────────────

/** Person with broken/disconnected lines — turnover, burnout */
export function TurnoverIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* Person head */}
      <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
      {/* Body - broken/disconnected */}
      <path
        d="M7 20v-2a5 5 0 0 1 4-4.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2.5 2"
      />
      <path
        d="M17 20v-2a5 5 0 0 0-4-4.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2.5 2"
      />
      {/* Disconnection marks */}
      <line x1="18" y1="5" x2="20" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="20" y1="5" x2="18" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </Svg>
  );
}

/** Brain with scattered/broken connections — fragmented decisions */
export function FragmentedIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* Gear/cog outline */}
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      {/* Gear teeth */}
      <line x1="12" y1="3" x2="12" y2="5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="18.5" x2="12" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="3" y1="12" x2="5.5" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18.5" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Scattered disconnected nodes */}
      <circle cx="5" cy="5" r="1" fill="currentColor" opacity="0.4" />
      <circle cx="19" cy="5" r="1" fill="currentColor" opacity="0.4" />
      <circle cx="5" cy="19" r="1" fill="currentColor" opacity="0.4" />
      <circle cx="19" cy="19" r="1" fill="currentColor" opacity="0.4" />
      {/* Broken connection lines (dashed) */}
      <line x1="6" y1="6" x2="9" y2="9" stroke="currentColor" strokeWidth="0.7" strokeDasharray="1.5 1.5" opacity="0.35" />
      <line x1="18" y1="6" x2="15" y2="9" stroke="currentColor" strokeWidth="0.7" strokeDasharray="1.5 1.5" opacity="0.35" />
    </Svg>
  );
}

/** Chart with visible gaps — outcome gaps, visibility problems */
export function OutcomeGapsIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* Axis */}
      <path d="M4 20h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 20V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Bars with gaps */}
      <rect x="7" y="12" width="2.5" height="8" rx="0.5" fill="currentColor" opacity="0.6" />
      <rect x="11" y="15" width="2.5" height="5" rx="0.5" fill="currentColor" opacity="0.35" />
      <rect x="15" y="9" width="2.5" height="11" rx="0.5" fill="currentColor" opacity="0.6" />
      {/* Trend line (broken) */}
      <path
        d="M6 8l4 3 4-5 4 2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="3 2"
        opacity="0.5"
      />
      {/* Data nodes */}
      <circle cx="6" cy="8" r="1" fill="currentColor" opacity="0.5" />
      <circle cx="14" cy="6" r="1" fill="currentColor" opacity="0.5" />
      <circle cx="18" cy="8" r="1" fill="currentColor" opacity="0.5" />
    </Svg>
  );
}

/** Tangled paths — chaos, hidden processes, inconsistency */
export function ChaosIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* Tangled workflow paths */}
      <path
        d="M4 8h3c2 0 2 4 4 4s2-6 4-6h5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 16h3c2 0 3-5 5-5s2 5 4 5h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Scattered unconnected nodes */}
      <circle cx="7" cy="5" r="1" fill="currentColor" opacity="0.4" />
      <circle cx="17" cy="4" r="1" fill="currentColor" opacity="0.3" />
      <circle cx="12" cy="19" r="1" fill="currentColor" opacity="0.4" />
      <circle cx="5" cy="12" r="0.8" fill="currentColor" opacity="0.3" />
      <circle cx="19" cy="13" r="0.8" fill="currentColor" opacity="0.3" />
    </Svg>
  );
}

// ─── Process Steps ──────────────────────────────────────────────────

/** Magnifying glass with network node — discover, assess, research */
export function DiscoverIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* Glass */}
      <circle cx="10.5" cy="10.5" r="6" stroke="currentColor" strokeWidth="1.5" />
      {/* Handle */}
      <path d="M15 15l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Inner network */}
      <circle cx="10.5" cy="10.5" r="1.3" fill="currentColor" />
      <circle cx="8" cy="8" r="0.9" fill="currentColor" opacity="0.5" />
      <circle cx="13" cy="8" r="0.9" fill="currentColor" opacity="0.5" />
      <circle cx="10.5" cy="14" r="0.9" fill="currentColor" opacity="0.5" />
      <line x1="8" y1="8" x2="10.5" y2="10.5" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
      <line x1="13" y1="8" x2="10.5" y2="10.5" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
      <line x1="10.5" y1="14" x2="10.5" y2="10.5" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
    </Svg>
  );
}

/** Wrench with structural elements — build, construct, create */
export function BuildIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* Wrench shape */}
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Build nodes */}
      <circle cx="17" cy="7" r="1" fill="currentColor" opacity="0.5" />
      <circle cx="7" cy="17" r="1" fill="currentColor" opacity="0.5" />
    </Svg>
  );
}

/** Puzzle piece fitting together — embed, integrate */
export function EmbedIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* Puzzle piece */}
      <path
        d="M19 9h-1.5a1.5 1.5 0 0 1 0-3H19V4h-4v1.5a1.5 1.5 0 0 1-3 0V4H8v2.5a1.5 1.5 0 0 1-3 0V4H4a1 1 0 0 0-1 1v4h2.5a1.5 1.5 0 0 1 0 3H3v4a1 1 0 0 0 1 1h1v-1.5a1.5 1.5 0 0 1 3 0V17h4v-1.5a1.5 1.5 0 0 1 3 0V17h4a1 1 0 0 0 1-1v-4h-1.5a1.5 1.5 0 0 1 0-3H21V5a1 1 0 0 0-1-1h-1v2z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Center connection node */}
      <circle cx="12" cy="11" r="1.3" fill="currentColor" opacity="0.6" />
    </Svg>
  );
}

/** Phone with signal waves — discovery call, conversation */
export function PhoneIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* Phone receiver */}
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.35a2 2 0 0 1-.45 2.11L8.09 9.43a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.75.32 1.54.55 2.35.68A2 2 0 0 1 22 16.92z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Signal waves (connection indicator) */}
      <path d="M17 3a7.5 7.5 0 0 1 4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <path d="M18.5 5.5a3.5 3.5 0 0 1 1.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
    </Svg>
  );
}

/** Lightning bolt with energy nodes — sprint, speed, momentum */
export function SprintIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* Lightning bolt */}
      <path
        d="M13 2L4 14h7l-2 8 9-12h-7l2-8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Energy nodes */}
      <circle cx="12" cy="10" r="1.2" fill="currentColor" opacity="0.5" />
      <circle cx="10" cy="15" r="0.9" fill="currentColor" opacity="0.35" />
    </Svg>
  );
}

/** Circle with check and radiating lines — adoption, completion */
export function AdoptionIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* Outer circle */}
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      {/* Checkmark */}
      <path d="M8 12.5l2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Radiating connection nodes */}
      <circle cx="12" cy="1.5" r="0.8" fill="currentColor" opacity="0.35" />
      <circle cx="20.5" cy="7" r="0.8" fill="currentColor" opacity="0.35" />
      <circle cx="20.5" cy="17" r="0.8" fill="currentColor" opacity="0.35" />
      <circle cx="12" cy="22.5" r="0.8" fill="currentColor" opacity="0.35" />
      <circle cx="3.5" cy="17" r="0.8" fill="currentColor" opacity="0.35" />
      <circle cx="3.5" cy="7" r="0.8" fill="currentColor" opacity="0.35" />
    </Svg>
  );
}

/** Hands meeting — partnership, reinforcement, handshake */
export function HandshakeIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* Left hand */}
      <path
        d="M2 14l4-4 3 1 3-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right hand */}
      <path
        d="M22 14l-4-4-3 1-3-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Clasp */}
      <path
        d="M9 11l3 3 3-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Connection node at handshake point */}
      <circle cx="12" cy="12" r="1.3" fill="currentColor" opacity="0.6" />
      {/* Bridge arc */}
      <path d="M6 18c2-2 4-2 6-1s4 1 6-1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
    </Svg>
  );
}

// ─── Service Icons ──────────────────────────────────────────────────

/** Document with structured flow lines — SOPs, procedures */
export function SOPIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* Document */}
      <path
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Content lines with flow hierarchy */}
      <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="8" y1="15" x2="14" y2="15" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="8" y1="18" x2="12" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      {/* Flow nodes */}
      <circle cx="7" cy="12" r="0.7" fill="currentColor" opacity="0.5" />
      <circle cx="7" cy="15" r="0.7" fill="currentColor" opacity="0.5" />
      <circle cx="7" cy="18" r="0.7" fill="currentColor" opacity="0.5" />
    </Svg>
  );
}

/** Circular arrows with transformation — change management */
export function ChangeIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* Circular arrow paths */}
      <path
        d="M21 12a9 9 0 1 1-3-6.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M21 4v4.5h-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Transformation nodes */}
      <circle cx="12" cy="12" r="1.3" fill="currentColor" />
      <circle cx="7" cy="9" r="0.9" fill="currentColor" opacity="0.4" />
      <circle cx="17" cy="15" r="0.9" fill="currentColor" opacity="0.4" />
      {/* Transformation arc */}
      <line x1="7" y1="9" x2="12" y2="12" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />
      <line x1="12" y1="12" x2="17" y2="15" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />
    </Svg>
  );
}

/** Connected branches — systems integration, network */
export function SystemsIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* Main trunk */}
      <line x1="6" y1="4" x2="6" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Branch 1 */}
      <path d="M6 8h6a2 2 0 0 1 2 2v0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Branch 2 */}
      <path d="M6 14h6a2 2 0 0 1 2 2v0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Integration nodes */}
      <circle cx="6" cy="8" r="1.3" fill="currentColor" />
      <circle cx="6" cy="14" r="1.3" fill="currentColor" />
      <circle cx="14" cy="10" r="1.3" fill="currentColor" />
      <circle cx="14" cy="16" r="1.3" fill="currentColor" />
      {/* Cross connection */}
      <line x1="14" y1="10" x2="14" y2="16" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
      {/* Extended node */}
      <path d="M14 10h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <circle cx="18" cy="10" r="0.9" fill="currentColor" opacity="0.4" />
    </Svg>
  );
}

/** Connected people — team training, culture */
export function TeamIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* Person 1 (left) */}
      <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 20v-1a4 4 0 0 1 4-4h0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Person 2 (right) */}
      <circle cx="17" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M21 20v-1a4 4 0 0 0-4-4h0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Connection between people */}
      <line x1="9.5" y1="7" x2="14.5" y2="7" stroke="currentColor" strokeWidth="0.8" opacity="0.3" strokeDasharray="1.5 1.5" />
      {/* Central connection node */}
      <circle cx="12" cy="13" r="1.3" fill="currentColor" opacity="0.5" />
      <line x1="7" y1="9.5" x2="12" y2="13" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />
      <line x1="17" y1="9.5" x2="12" y2="13" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />
    </Svg>
  );
}

/** Speech bubbles with connection — communication systems */
export function CommsIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* Bubble 1 */}
      <path
        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Message dots (connection nodes style) */}
      <circle cx="8.5" cy="12" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="15.5" cy="12" r="1" fill="currentColor" opacity="0.6" />
    </Svg>
  );
}

/** Chart with connected data points — metrics, measurement */
export function MetricsIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* Axis */}
      <path d="M4 20h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 20V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Connected data line */}
      <path
        d="M7 15l3.5-4 3.5 2 4-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Data nodes */}
      <circle cx="7" cy="15" r="1.3" fill="currentColor" />
      <circle cx="10.5" cy="11" r="1.3" fill="currentColor" />
      <circle cx="14" cy="13" r="1.3" fill="currentColor" />
      <circle cx="18" cy="7" r="1.3" fill="currentColor" />
    </Svg>
  );
}

/** Star with radiance — premium, differentiator, sparkle */
export function SparkleIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* Main star */}
      <path
        d="M12 2l2.1 6.5H21l-5.5 4 2.1 6.5L12 15l-5.6 4 2.1-6.5L3 8.5h6.9L12 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Radiance nodes */}
      <circle cx="12" cy="10" r="1.2" fill="currentColor" opacity="0.5" />
      {/* Small sparkle accents */}
      <circle cx="3" cy="3" r="0.7" fill="currentColor" opacity="0.3" />
      <circle cx="21" cy="3" r="0.7" fill="currentColor" opacity="0.3" />
    </Svg>
  );
}

/** Clipboard with verified checkmarks — audit, verification */
export function ClipboardIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* Clipboard body */}
      <path
        d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Clipboard clip */}
      <rect x="8" y="2" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
      {/* Checklist items */}
      <path d="M8 11l1.5 1.5L13 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="15" y1="11" x2="17" y2="11" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <path d="M8 16l1.5 1.5L13 14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="15" y1="16" x2="17" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </Svg>
  );
}

// ─── Road Signs & Map ───────────────────────────────────────────────

/** Signpost with direction — road signs, practical guidance */
export function SignpostIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* Post */}
      <line x1="12" y1="3" x2="12" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Sign 1 (pointing right) */}
      <path
        d="M6 7h10l2 2-2 2H6V7z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Sign 2 (pointing left) */}
      <path
        d="M18 15H8l-2 2 2 2h10V15z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Direction nodes */}
      <circle cx="16" cy="9" r="0.8" fill="currentColor" opacity="0.5" />
      <circle cx="8" cy="17" r="0.8" fill="currentColor" opacity="0.5" />
    </Svg>
  );
}

/** Map with waypoints — the map, strategic direction */
export function MapIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* Map outline */}
      <path
        d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Fold lines */}
      <line x1="9" y1="3" x2="9" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="15" y1="6" x2="15" y2="21" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      {/* Route/waypoint nodes */}
      <circle cx="7" cy="9" r="1.1" fill="currentColor" opacity="0.5" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" />
      <circle cx="17" cy="10" r="1.1" fill="currentColor" opacity="0.5" />
      {/* Route connections */}
      <line x1="7" y1="9" x2="12" y2="12" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
      <line x1="12" y1="12" x2="17" y2="10" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
    </Svg>
  );
}

// ─── Decorative / UI ────────────────────────────────────────────────

/** Stylized quotation marks — testimonials, blockquotes */
export function QuoteIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      {/* Left quote mark */}
      <path
        d="M4 17.5V12a6 6 0 0 1 6-6h.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="5" cy="17.5" r="2.5" fill="currentColor" opacity="0.3" />
      <circle cx="5" cy="17.5" r="1" fill="currentColor" opacity="0.6" />
      {/* Right quote mark */}
      <path
        d="M14 17.5V12a6 6 0 0 1 6-6h.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="15" cy="17.5" r="2.5" fill="currentColor" opacity="0.3" />
      <circle cx="15" cy="17.5" r="1" fill="currentColor" opacity="0.6" />
    </Svg>
  );
}

/** Checkmark with subtle node — list item verification */
export function CheckIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M5 12.5l4 4 10-10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="16.5" r="1" fill="currentColor" opacity="0.3" />
    </Svg>
  );
}

/** Paper plane with trail — send, submit */
export function SendIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M22 2L11 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 2l-7 20-4-9-9-4 20-7z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Trail node */}
      <circle cx="8" cy="11" r="0.8" fill="currentColor" opacity="0.4" />
    </Svg>
  );
}

/** Success circle with check and glow nodes — form success */
export function SuccessIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 12.5l2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Celebration nodes */}
      <circle cx="4" cy="4" r="0.8" fill="currentColor" opacity="0.3" />
      <circle cx="20" cy="4" r="0.8" fill="currentColor" opacity="0.3" />
      <circle cx="4" cy="20" r="0.8" fill="currentColor" opacity="0.3" />
      <circle cx="20" cy="20" r="0.8" fill="currentColor" opacity="0.3" />
      <circle cx="12" cy="1" r="0.6" fill="currentColor" opacity="0.2" />
      <circle cx="23" cy="12" r="0.6" fill="currentColor" opacity="0.2" />
      <circle cx="12" cy="23" r="0.6" fill="currentColor" opacity="0.2" />
      <circle cx="1" cy="12" r="0.6" fill="currentColor" opacity="0.2" />
    </Svg>
  );
}

/** Envelope with connection nodes — email contact */
export function MailIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Connection nodes */}
      <circle cx="12" cy="13" r="0.9" fill="currentColor" opacity="0.3" />
    </Svg>
  );
}

/** Phone compact — for contact info */
export function PhoneCompactIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.35a2 2 0 0 1-.45 2.11L8.09 9.43a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.75.32 1.54.55 2.35.68A2 2 0 0 1 22 16.92z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

/** LinkedIn styled mark — social */
export function LinkedInIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
    </Svg>
  );
}

/** Arrow right with momentum — CTAs, navigation */
export function ArrowIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Momentum trail node */}
      <circle cx="3" cy="12" r="0.7" fill="currentColor" opacity="0.3" />
    </Svg>
  );
}

/** Hamburger menu with node accents */
export function MenuIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <line x1="4" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="4" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      {/* Subtle node accents */}
      <circle cx="20" cy="7" r="0.7" fill="currentColor" opacity="0.3" />
      <circle cx="20" cy="12" r="0.7" fill="currentColor" opacity="0.3" />
      <circle cx="20" cy="17" r="0.7" fill="currentColor" opacity="0.3" />
    </Svg>
  );
}

/** Arrow left with momentum trail — back navigation */
export function ArrowLeftIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M19 12H5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="21" cy="12" r="0.7" fill="currentColor" opacity="0.3" />
    </Svg>
  );
}

/** Calendar with connection node — scheduling */
export function CalendarIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="1.5" />
      {/* Date node indicators */}
      <circle cx="8" cy="15" r="1" fill="currentColor" opacity="0.4" />
      <circle cx="12" cy="15" r="1.2" fill="currentColor" opacity="0.6" />
      <circle cx="16" cy="15" r="1" fill="currentColor" opacity="0.4" />
    </Svg>
  );
}

/** Map pin with node — location */
export function MapPinIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M12 22s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="11" r="0.8" fill="currentColor" opacity="0.5" />
    </Svg>
  );
}

/** Chevron down — scroll indicator, accordion */
export function ChevronDownIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}
