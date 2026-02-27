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
      "Trauma-informed social work expertise that keeps every decision centered on the people you serve. Because systems exist for humans, not the other way around.",
  },
  {
    title: "The Head",
    icon: "Brain" as const,
    description:
      "Financial strategy, ROI analysis, and growth planning that keeps your organization sustainable. Mission doesn't pay the bills — smart operations do.",
  },
  {
    title: "The Backbone",
    icon: "Vertebrae" as const,
    description:
      "SOPs, handbooks, onboarding, training, and workflows that turn institutional knowledge into repeatable systems. So your organization survives beyond any one person.",
  },
] as const;

export const STATS = [
  { value: 145, suffix: "", label: "Residents Served" },
  { value: 52, suffix: "", label: "Children Housed" },
  { value: 500, suffix: "K+", prefix: "$", label: "In Preventive Savings" },
] as const;

export const SERVICES = [
  {
    id: "operational-assessment",
    title: "Operational Assessment & Roadmap",
    icon: "ClipboardCheck",
    summary: "Find out where the gaps are — and what to fix first.",
    details:
      "A rapid, comprehensive audit — the \"tune-up.\" We evaluate what your operational systems look like, whether your mission connects to your daily operations, and where you can improve.",
    deliverables: [
      "Gap analysis report",
      "Prioritized action plan",
      "Quick-win recommendations",
    ],
    idealFor:
      "Organizations that know something's broken but aren't sure where to start.",
  },
  {
    id: "sop-documentation",
    title: "SOP & Documentation Build-Out",
    icon: "FileText",
    summary: "Get it out of people's heads and into a system.",
    details:
      "Employee handbooks, onboarding guides, training materials, process checklists. Paired with the practical tools staff actually use: forms, templates, and quick-reference checklists that distill procedures into in-the-moment action items. Think road signs, not law books.",
    deliverables: [
      "Employee handbooks",
      "Onboarding guides",
      "Training materials",
      "Process checklists",
      "Forms and templates",
    ],
    idealFor:
      "Organizations where institutional knowledge lives in people's heads.",
  },
  {
    id: "sop-revamp",
    title: "SOP Revamp & Retooling",
    icon: "RefreshCcw",
    summary: "Dust off the binder nobody reads.",
    details:
      "Already have SOPs that no one follows? We evaluate, revamp, and retool existing procedures to align with how your organization actually works — not how someone imagined it should work five years ago.",
    deliverables: [
      "Audit of existing documentation",
      "Revamped SOPs aligned to current operations",
      "Practical quick-reference tools",
      "Staff adoption plan",
    ],
    idealFor: "Organizations with shelf-ware documentation.",
  },
  {
    id: "client-pipeline",
    title: "Client Pipeline Design",
    icon: "GitBranch",
    summary:
      "Map the journey from first contact to lasting impact.",
    details:
      "End-to-end mapping from intake to service completion to outcome measurement. We build the infrastructure that lets you track every client through your system and measure your real impact.",
    deliverables: [
      "Pipeline flowchart",
      "Intake forms",
      "Tracking templates",
      "Outcome metrics dashboard",
    ],
    idealFor:
      "Organizations that can't clearly articulate their client journey.",
  },
  {
    id: "succession-planning",
    title: "Succession & Knowledge Transfer",
    icon: "Users",
    summary: "Make your organization outlive any one person.",
    details:
      "Multi-level succession frameworks beyond just the CEO — what happens when your accountant leaves? Your program director? Your front desk coordinator? We build continuity into every role.",
    deliverables: [
      "Role-based continuity plans",
      "Cross-training programs",
      "Knowledge documentation",
      "Transition playbooks",
    ],
    idealFor:
      "Organizations vulnerable to founder syndrome or key-person dependency.",
  },
  {
    id: "team-integration",
    title: "Team Integration & Communication",
    icon: "MessagesSquare",
    summary:
      "Break the silos. Get everyone in the same room.",
    details:
      "Cross-functional meeting design, information-sharing protocols, and silo-breaking workflows. We create the structures that ensure the custodian's observation reaches the nurse, and the nurse's insight reaches the director.",
    deliverables: [
      "Meeting playbooks",
      "Communication templates",
      "RACI matrices",
      "Team structure recommendations",
    ],
    idealFor:
      "Organizations where departments don't talk to each other.",
  },
  {
    id: "outcome-measurement",
    title: "Outcome Measurement & Donor Narrative",
    icon: "BarChart3",
    summary: "Prove your impact. Fund your future.",
    details:
      "Identify, measure, and articulate the change you create in your community. We build the systems that let you show funders exactly what their dollars accomplish.",
    deliverables: [
      "Impact framework",
      "Measurement tools",
      "Donor-ready pitch materials",
      "Data visualization templates",
    ],
    idealFor:
      "Organizations that do great work but struggle to prove it to funders.",
  },
  {
    id: "adoption-culture",
    title: "Adoption & Culture Integration",
    icon: "Sparkles",
    summary: "Make it stick.",
    isSecretSauce: true,
    details:
      "The differentiator. We don't just hand over a binder and walk away. We work with your team to embed new procedures into daily operations through training facilitation, workflow integration, leadership coaching, and culture-building. Every team member sees how their daily work connects to the mission.",
    deliverables: [
      "Staff training sessions",
      "Workflow integration plan",
      "Leadership coaching",
      "Follow-up adoption check-ins",
      "Culture alignment workshops",
    ],
    idealFor:
      "Any organization that's been burned by consultants who deliver and disappear.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discover",
    description:
      "We get everybody in a room and ask: What do you do? How do you do it? Where does it break down?",
    details:
      "Rapid assessment of your operations, documentation, and team dynamics. We listen first, diagnose second.",
    icon: "Search",
  },
  {
    step: 2,
    title: "Build",
    description:
      "We deliver tangible tools — not theoretical reports.",
    details:
      "SOPs, checklists, forms, templates, onboarding materials, training programs, or system redesigns. Things your team can use immediately.",
    icon: "Wrench",
  },
  {
    step: 3,
    title: "Embed",
    description: "This is our secret sauce.",
    details:
      "We don't just hand over documents. We work with your team to weave new procedures into your daily operations and culture, so they actually stick.",
    icon: "Puzzle",
  },
] as const;

export const FAQS = [
  {
    question: "What does an engagement look like?",
    answer:
      "We work in focused ~1 month sprints. We assess, build, and embed — then get out of your way so you can focus on your mission.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Engagements start around $5,000 — a fraction of what legacy consulting firms charge for longer, less focused work.",
  },
  {
    question: "What if we already have SOPs but nobody follows them?",
    answer:
      "That's our secret sauce. We specialize in adoption — embedding procedures into your team's daily culture, not just writing documents.",
  },
  {
    question: "Do you work with organizations outside the Triangle?",
    answer:
      "Yes. While we're based in the Triangle area, we work with nonprofits across the region.",
  },
  {
    question: "What size nonprofits do you work with?",
    answer:
      "Primarily small to mid-size organizations — the ones too small for legacy consulting firms but too important to fail.",
  },
] as const;

export const COMPARISON_TABLE = [
  {
    category: "Engagement Length",
    ssl: "~1 month sprints",
    legacy: "3–6 months",
  },
  {
    category: "Cost",
    ssl: "~$5,000 per sprint",
    legacy: "$15,000–$30,000+",
  },
  {
    category: "Focus",
    ssl: "Ground-level operations",
    legacy: "5,000-foot view",
  },
  {
    category: "Deliverables",
    ssl: "SOPs, handbooks, forms, training",
    legacy: "Strategic reports & recommendations",
  },
  {
    category: "Post-Delivery",
    ssl: "Adoption & culture integration",
    legacy: "Hand off and walk away",
  },
] as const;

export const PAIN_POINTS = [
  "Staff learn by trial and error — no onboarding exists",
  "When your founder leaves, the knowledge goes with them",
  "You can't articulate your impact to funders",
  "Departments work in silos instead of in sync",
] as const;
