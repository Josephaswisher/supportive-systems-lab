export const BRAND_CONTEXT = {
  name: "Supportive Systems Lab",
  tagline: "Heart. Head. Backbone.",
  positioning:
    "Supportive Systems Lab strengthens the operational backbone of small and mid-size nonprofits through focused sprint engagements that deliver practical systems teams actually use.",
  mission:
    "Help mission-driven organizations translate vision into durable execution so great programs do not collapse under preventable operational strain.",
  promise:
    "We do not leave you with shelf-ware. We co-build and embed the tools your staff needs in real workflows, then train teams to sustain them.",
  audience: {
    primary:
      "Small to mid-size nonprofits navigating growth, founder dependency, fragmented operations, or weak documentation.",
    secondary:
      "Organizations serving vulnerable populations across housing, health, social services, and youth support.",
    buyerProfile:
      "Executive directors, operations leads, and program leaders who need fast, concrete improvements without long retainers.",
  },
  coreNarrative: {
    problem:
      "Many nonprofits carry extraordinary purpose but fragile infrastructure: undocumented procedures, siloed teams, unclear client pipelines, and critical knowledge trapped in a few people.",
    stakes:
      "When systems are weak, staff burn out, clients experience inconsistency, and impact becomes harder to prove to funders.",
    solution:
      "Supportive Systems Lab applies the Heart-Head-Backbone framework to align care, strategy, and operations into one coherent delivery system.",
  },
  framework: [
    {
      pillar: "Heart",
      meaning: "Social work expertise and trauma-informed design.",
      proofPoints: [
        "Client-centered program design",
        "Culturally responsive service planning",
        "Human-first operational decisions",
      ],
    },
    {
      pillar: "Head",
      meaning: "Business rigor, financial clarity, and growth logic.",
      proofPoints: [
        "Revenue and sustainability planning",
        "Outcome measurement tied to funding narratives",
        "Data-informed prioritization",
      ],
    },
    {
      pillar: "Backbone",
      meaning: "Operational systems that make mission delivery repeatable.",
      proofPoints: [
        "SOPs, handbooks, onboarding, and training",
        "Cross-functional integration from frontline to admin",
        "Knowledge transfer and role-level succession planning",
      ],
    },
  ],
  engagementModel: {
    format:
      "Short, focused sprints (about one month) designed to diagnose quickly, deliver tangible tools, and embed adoption.",
    phases: ["Discovery and assessment", "Build and deliver", "Embed and adopt"],
    differentiator:
      "Practical adoption support: procedures become habits, not binders.",
    pricingSignal:
      "Accessible, high-impact engagements around the $5,000 range, compared with legacy consulting retainers.",
  },
  evidence: {
    caseStudy: "Kings Ridge affordable housing operations leadership",
    highlights: [
      "145 residents served, including 52 children",
      "Cross-functional care and reporting systems built from the ground up",
      "Estimated $300K-$500K in prevented acute-care costs in year one",
    ],
  },
  messageBank: {
    heroOptions: [
      "Build the systems your mission deserves.",
      "From passion to process, without losing your humanity.",
      "Operational backbone for organizations that cannot afford to fail.",
    ],
    subheadOptions: [
      "We help nonprofits turn tribal knowledge into clear, adoptable systems through focused sprint engagements.",
      "Supportive Systems Lab combines social work insight, business discipline, and operational design to make impact sustainable.",
      "When your team has practical tools, shared workflows, and clear ownership, mission delivery gets stronger every day.",
    ],
    ctaOptions: [
      "Book an Operational Tune-Up",
      "Start a Focused Sprint",
      "See What One Month Can Fix",
    ],
  },
  tone: {
    direction: "Grandiose but grounded for nonprofits",
    principles: [
      "Lead with dignity and mission-scale ambition",
      "Stay concrete, practical, and plainspoken",
      "Use confident language without hype",
      "Honor frontline realities and lived experience",
      "Frame systems as care infrastructure, not bureaucracy",
    ],
    avoid: [
      "Jargon-heavy management speak",
      "Condescending or charity-pity framing",
      "Vague strategy language without deliverables",
      "Overpromising outcomes without operational evidence",
    ],
  },
} as const;

export const PAGE_CONTEXT = {
  home: {
    objective:
      "Establish trust quickly, frame the problem, present the Heart-Head-Backbone model, and invite a sprint conversation.",
    keyMessages: [
      "Mission strength requires operational strength",
      "Focused sprints deliver practical tools fast",
      "Adoption is the differentiator",
    ],
  },
  about: {
    objective:
      "Show why Chris Pearson's blend of social work, business, and operations leadership is uniquely credible.",
    keyMessages: [
      "Lived and professional proximity to nonprofit realities",
      "Systems thinking rooted in service delivery",
      "Leadership that values people and process together",
    ],
  },
  services: {
    objective:
      "Translate offerings into immediate practical value and role-specific outcomes.",
    keyMessages: [
      "Every service leads to a tangible operating tool",
      "Work is scoped for action, not endless analysis",
      "Success means staff can use what is delivered tomorrow",
    ],
  },
  howItWorks: {
    objective:
      "Clarify the sprint model and reduce fear of consulting bloat or disruption.",
    keyMessages: [
      "Rapid diagnosis",
      "Concrete build",
      "Embedded adoption",
    ],
  },
  impact: {
    objective:
      "Prove that strong systems create measurable human and financial outcomes.",
    keyMessages: [
      "Operational discipline improves care continuity",
      "Cross-functional communication prevents avoidable crises",
      "Impact data strengthens funder confidence",
    ],
  },
  contact: {
    objective:
      "Lower friction to first conversation and prompt high-quality inbound detail.",
    keyMessages: [
      "You do not need everything figured out to start",
      "We can begin with one pressing operational bottleneck",
      "The first sprint should create immediate team relief",
    ],
  },
} as const;
