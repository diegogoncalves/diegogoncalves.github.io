export const siteMeta = {
  title: "Useful side projects for everyday decisions",
  eyebrow: "Product-first portfolio",
  intro:
    "A single-page portfolio can work like a launch pad instead of a resume. These concepts focus on helping visitors understand what each project does, why it matters, and how to start using it fast.",
  audience:
    "People who travel, eat out often, or want better interview prep should be able to find a project and use it in under a minute.",
};

export const projects = [
  {
    slug: "freesplit",
    name: "FreeSplit",
    category: "Travel money",
    status: "Live",
    url: "https://freesplit-drab.vercel.app/",
    tagline: "Split travel expenses without paying a monthly subscription.",
    summary:
      "A lightweight expense splitting app built for trips, shared plans, and group spending without the paywall people now hit in Splitwise.",
    audience: "Travel groups, roommates, and friends sharing costs.",
    problem:
      "People still need a simple way to track shared expenses, but paying a recurring fee for basic splitting feels unnecessary.",
    solution:
      "FreeSplit keeps the core expense-sharing workflow simple, free, and easy to use while traveling.",
    howToUse: [
      "Create a group for your trip or shared event.",
      "Add expenses as they happen.",
      "See who owes what without doing the math yourself.",
    ],
    features: [
      "Simple shared expense tracking",
      "Clear balances between people",
      "Designed for real travel use",
    ],
    hooks: ["No subscription", "Made for trips", "Fast split overview"],
    accent: "#2dd4bf",
  },
  {
    slug: "tiphelper",
    name: "TipHelper",
    category: "Restaurant safety",
    status: "Live",
    url: "https://tiphelper.vercel.app/",
    tagline: "Check tips quickly so you do not get overcharged at restaurants.",
    summary:
      "A fast calculator for diners who want to sanity-check gratuity, avoid inflated tip prompts, and understand what they should actually pay.",
    audience: "Restaurant customers, especially in cities with aggressive tip screens.",
    problem:
      "Restaurants can pre-add gratuity, suggest unusually high percentages, or make tip math hard to check in the moment.",
    solution:
      "TipHelper gives people a fast, confidence-building way to verify a fair tip before they pay.",
    howToUse: [
      "Enter the bill amount.",
      "Review the suggested tip values and compare percentages.",
      "Pay with confidence knowing the final total is fair.",
    ],
    features: [
      "Fast tip percentage checks",
      "Clear total calculation",
      "Built for in-the-moment decision making",
    ],
    hooks: ["Avoid hidden gratuity", "Quick math", "Confidence at checkout"],
    accent: "#f97316",
  },
  {
    slug: "nomadprice",
    name: "NomadPrice",
    category: "Travel utility",
    status: "Live",
    url: "https://nomad-price.vercel.app/",
    tagline: "Snap a menu abroad and instantly see dish prices in US dollars.",
    summary:
      "A travel-focused converter that helps people understand restaurant prices in unfamiliar currencies without manually converting every item.",
    audience: "Travelers eating abroad who think in USD.",
    problem:
      "Menus in foreign currencies create friction, and converting every line item by hand is slow and error-prone.",
    solution:
      "NomadPrice uses a photo workflow to make foreign menu prices easier to understand at a glance.",
    howToUse: [
      "Take a photo of the menu.",
      "Let the app read and convert the listed prices.",
      "Compare dishes in USD before ordering.",
    ],
    features: [
      "Menu photo workflow",
      "Currency conversion to USD",
      "Faster restaurant decisions while traveling",
    ],
    hooks: ["Photo-first flow", "USD conversion", "Built for travel friction"],
    accent: "#38bdf8",
  },
  {
    slug: "interviewify",
    name: "Interviewify",
    category: "Career prep",
    status: "Live",
    url: "https://interviewifyfrontend.vercel.app/",
    tagline: "Practice PM interviews with AI and get immediate feedback.",
    summary:
      "An interview practice app for product managers who want useful feedback on mock answers without depending on a partner who may not know how to coach well.",
    audience: "Product managers preparing for interviews.",
    problem:
      "Mock interviews are hard to evaluate well, and peer feedback is often inconsistent or too shallow to be useful.",
    solution:
      "Interviewify simulates practice with AI and responds with feedback that helps candidates improve their answers faster.",
    howToUse: [
      "Start a mock interview session.",
      "Answer the prompt as you would in a real interview.",
      "Review the AI feedback and iterate on your answer.",
    ],
    features: [
      "AI mock interview flow",
      "Fast answer feedback",
      "Built for PM interview prep",
    ],
    hooks: ["Practice anytime", "Sharper feedback", "PM focused"],
    accent: "#a78bfa",
  },
];

export const conceptSummaries = [
  {
    folder: "concept-1",
    name: "Concept 1 - Launchpad",
    blurb:
      "Editorial hero plus polished project cards with expandable usage details.",
  },
  {
    folder: "concept-2",
    name: "Concept 2 - Bento Grid",
    blurb:
      "Dashboard-style layout that makes the projects feel like a curated product suite.",
  },
  {
    folder: "concept-3",
    name: "Concept 3 - Field Guide",
    blurb:
      "Story-driven landing page with alternating sections that explain the moment each tool is built for.",
  },
  {
    folder: "concept-4",
    name: "Concept 4 - Control Room",
    blurb:
      "Comparison-first experience with an interactive detail panel for fast evaluation.",
  },
];
