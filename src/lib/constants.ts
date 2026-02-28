export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Impact", href: "/impact" },
  { label: "Contact", href: "/contact" },
] as const;

export const THREE_PILLARS = [
  {
    title: "The Heart",
    icon: "Heart" as const,
    description:
      "Trauma-informed social work leadership that keeps people, dignity, and lived experience at the center of every operational decision.",
  },
  {
    title: "The Head",
    icon: "Brain" as const,
    description:
      "Business discipline, financial clarity, and measurable outcomes that protect your mission from preventable operational drift.",
  },
  {
    title: "The Backbone",
    icon: "Vertebrae" as const,
    description:
      "SOPs, onboarding, training, and cross-functional workflows that turn tribal knowledge into repeatable execution at every level.",
  },
] as const;

export const STATS = [
  { value: 145, suffix: "", label: "Residents Stabilized" },
  { value: 52, suffix: "", label: "Children Supported" },
  { value: 500, suffix: "K+", prefix: "$", label: "Avoided Acute-Care Costs" },
  { value: 12, suffix: "+", label: "Years Nonprofit Leadership" },
  { value: 30, suffix: "+", label: "Organizations Served" },
  { value: 96, suffix: "%", label: "Client Retention Rate" },
] as const;

export const SERVICES = [
  {
    id: "operational-assessment",
    title: "Operational Assessment & Roadmap",
    icon: "ClipboardCheck",
    summary: "Pinpoint friction fast and sequence the right fixes first.",
    details:
      "A focused operational diagnostic that maps where work breaks down, where handoffs fail, and what changes will produce the highest-impact improvement in the shortest time.",
    deliverables: [
      "Operational gap analysis",
      "Prioritized intervention roadmap",
      "Immediate quick-win actions",
    ],
    idealFor:
      "Teams that feel constant friction but need objective clarity before investing in bigger change.",
  },
  {
    id: "sop-documentation",
    title: "SOP & Documentation Build-Out",
    icon: "FileText",
    summary: "Turn unwritten know-how into durable organizational memory.",
    details:
      "Build practical documentation ecosystems: handbooks, role guides, onboarding pathways, and in-the-moment tools your team can use under pressure.",
    deliverables: [
      "Role-based handbooks",
      "Structured onboarding guides",
      "Training and facilitation materials",
      "Process checklists",
      "Forms and workflow templates",
    ],
    idealFor:
      "Organizations dependent on verbal handoffs, hero staff, and memory-driven workflows.",
  },
  {
    id: "sop-revamp",
    title: "SOP Revamp & Retooling",
    icon: "RefreshCcw",
    summary: "Modernize outdated SOPs into living operating tools.",
    details:
      "If documentation exists but adoption is weak, we retool language, sequence, and format so procedures mirror real team behavior and can be sustained day to day.",
    deliverables: [
      "Documentation quality audit",
      "Operationally aligned SOP refresh",
      "Quick-reference implementation tools",
      "Adoption rollout strategy",
    ],
    idealFor: "Teams with SOPs that exist on paper but are absent in practice.",
  },
  {
    id: "client-pipeline",
    title: "Client Pipeline Design",
    icon: "GitBranch",
    summary: "Design a clear service journey from intake to measurable outcomes.",
    details:
      "Create end-to-end client pipelines with clear ownership, handoffs, and documentation so services are consistent, visible, and easier to evaluate.",
    deliverables: [
      "Service pipeline map",
      "Standardized intake tools",
      "Client tracking templates",
      "Outcome indicator framework",
    ],
    idealFor:
      "Programs that deliver strong work but cannot consistently map, measure, or communicate their client journey.",
  },
  {
    id: "succession-planning",
    title: "Succession & Knowledge Transfer",
    icon: "Users",
    summary: "Build continuity so mission delivery survives staff transitions.",
    details:
      "Develop role-level continuity systems that reduce key-person risk across leadership, operations, and frontline positions, beyond the executive team.",
    deliverables: [
      "Role continuity plans",
      "Cross-training structure",
      "Knowledge transfer documentation",
      "Transition playbooks",
    ],
    idealFor:
      "Organizations exposed to founder dependency or vulnerable single-point operational failure.",
  },
  {
    id: "team-integration",
    title: "Team Integration & Communication",
    icon: "MessagesSquare",
    summary: "Replace silos with reliable cross-team coordination.",
    details:
      "Design communication structures that move critical information from frontline staff to decision-makers quickly, clearly, and safely.",
    deliverables: [
      "Cross-functional meeting playbooks",
      "Communication templates",
      "RACI accountability maps",
      "Team integration recommendations",
    ],
    idealFor:
      "Departments that share mission but lack reliable ways to share information and decisions.",
  },
  {
    id: "outcome-measurement",
    title: "Outcome Measurement & Donor Narrative",
    icon: "BarChart3",
    summary: "Translate outcomes into compelling, fundable narratives.",
    details:
      "Build practical measurement systems that connect services to outcomes and outcomes to credible stories for funders, boards, and stakeholders.",
    deliverables: [
      "Impact measurement framework",
      "Outcome tracking tools",
      "Funder-ready narrative assets",
      "Data storytelling templates",
    ],
    idealFor:
      "Organizations delivering meaningful outcomes without a consistent way to evidence and communicate impact.",
  },
  {
    id: "adoption-culture",
    title: "Adoption & Culture Integration",
    icon: "Sparkles",
    summary: "Embed change until it becomes culture.",
    isSecretSauce: true,
    details:
      "This is the differentiator: we stay in the work long enough to build adoption, reinforce leadership ownership, and ensure procedures become habits instead of artifacts.",
    deliverables: [
      "Staff adoption sessions",
      "Workflow integration plan",
      "Leadership reinforcement coaching",
      "Post-implementation check-ins",
      "Culture alignment workshops",
    ],
    idealFor:
      "Teams that have been burned by consultant handoffs that never translated into real behavior change.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discover",
    description:
      "We align the right voices and map where work succeeds, stalls, or silently fails.",
    details:
      "A rapid operating assessment of workflows, documentation quality, and role-level handoffs grounded in real team behavior.",
    icon: "Search",
  },
  {
    step: 2,
    title: "Build",
    description:
      "We build practical tools your team can use immediately.",
    details:
      "SOPs, templates, forms, onboarding assets, and communication systems designed for clarity, speed, and frontline usability.",
    icon: "Wrench",
  },
  {
    step: 3,
    title: "Embed",
    description: "This is where change becomes durable.",
    details:
      "We coach leaders, reinforce team routines, and integrate procedures into live workflows until adoption is visible and repeatable.",
    icon: "Puzzle",
  },
] as const;

export const FAQS = [
  {
    question: "What does an engagement look like?",
    answer:
      "Most engagements run in focused one-month sprints: diagnose priority bottlenecks, build practical systems, and embed adoption with your team.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Engagements typically begin around $5,000, with scope calibrated to organizational size, urgency, and operational complexity.",
  },
  {
    question: "What if we already have SOPs but nobody follows them?",
    answer:
      "That is a core use case for us. We specialize in adoption architecture so procedures are used in real workflows, not stored in binders.",
  },
  {
    question: "Do you work with organizations outside the Triangle?",
    answer:
      "Yes. We are based in the Triangle and support nonprofits across the region and beyond through hybrid and remote engagements.",
  },
  {
    question: "What size nonprofits do you work with?",
    answer:
      "Primarily small and mid-size nonprofits that need rigorous operations support without enterprise consulting overhead.",
  },
] as const;

export const COMPARISON_TABLE = [
  {
    category: "Engagement Length",
    ssl: "Focused ~1 month sprints",
    legacy: "3–6 months",
  },
  {
    category: "Cost",
    ssl: "~$5,000 starting range",
    legacy: "$15,000–$30,000+",
  },
  {
    category: "Focus",
    ssl: "Ground-level execution",
    legacy: "5,000-foot view",
  },
  {
    category: "Deliverables",
    ssl: "Operational tools teams use daily",
    legacy: "Strategic reports & recommendations",
  },
  {
    category: "Post-Delivery",
    ssl: "Embedded adoption support",
    legacy: "Hand off and walk away",
  },
] as const;

export const PAIN_POINTS = [
  "New staff learn by guesswork because onboarding is inconsistent",
  "Critical know-how lives in a few people and disappears with turnover",
  "Impact is real but hard to prove in funder language",
  "Departments share mission but not information",
] as const;
