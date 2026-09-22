export const siteUrl = "https://dawoodtech.com";
export const contactEmail = "info@dawoodtech.com";
export const whatsappLabel = "Discuss Your Project";
export const whatsappNumber = "+92 332 3132729";
export const whatsappHref = "https://wa.me/923323132729";
export const legalUpdated = "September 21, 2026";

export const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/industries", label: "Industries" },
  { href: "/company", label: "Company" },
  { href: "/insights", label: "Insights" },
];

export const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export const capabilities = [
  { code: "01", title: "Software & Digital Products", summary: "Purpose-built websites, applications, platforms and integrations shaped around users and operations.", items: ["Custom software", "Web applications", "Digital platforms", "E-commerce", "Portals", "APIs & integrations"] },
  { code: "02", title: "Enterprise Systems", summary: "Connected business applications that bring structure, visibility and continuity to day-to-day work.", items: ["Business applications", "CRM", "ERP", "POS", "Workflow systems", "Systems integration"] },
  { code: "03", title: "Cloud & Infrastructure", summary: "Reliable foundations for applications, teams and operations, designed for maintainability and control.", items: ["Cloud architecture", "Infrastructure", "DevOps", "Networking", "Workplace technology", "Monitoring"] },
  { code: "04", title: "Cybersecurity", summary: "Practical security across identities, applications and infrastructure, built into the operating model.", items: ["Security architecture", "Identity & access", "Application security", "Infrastructure security", "Assessments", "Resilience"] },
  { code: "05", title: "Data, Automation & AI", summary: "Data and intelligent workflows that make information usable and reduce repetitive operational work.", items: ["Business intelligence", "Data engineering", "Analytics", "Workflow automation", "AI solutions", "Intelligent operations"] },
  { code: "06", title: "Managed Technology", summary: "Continuous ownership of applications and infrastructure after launch, with monitoring, support and improvement.", items: ["Technology operations", "Infrastructure management", "Application management", "Website management", "Vendor coordination", "Support"] },
] as const;

export const lifecycle = ["Plan", "Build", "Deploy", "Operate", "Secure", "Improve"] as const;

export const industries = [
  { code: "01", title: "Manufacturing & Infrastructure", text: "Systems that support production visibility, inventory, commercial workflows and dependable business operations." },
  { code: "02", title: "International Trade & Commerce", text: "Technology for information flow, customer coordination, documentation and the operational demands of trade." },
  { code: "03", title: "Retail & Commerce", text: "Connected customer, inventory, transaction and reporting experiences across physical and digital channels." },
  { code: "04", title: "Agriculture & Dairy", text: "Practical digital foundations for operational record keeping, visibility and evolving agricultural businesses." },
  { code: "05", title: "Professional Services", text: "Client, workflow and reporting systems that help knowledge-led teams operate with greater consistency." },
] as const;

export const work = [
  { slug: "dawood-rcc-pipe", name: "Dawood RCC Pipe", sector: "Manufacturing & Infrastructure", title: "Building the digital foundation for an established infrastructure manufacturer", summary: "A technology relationship grounded in the realities of an operating manufacturing business.", logo: "/logos/dawood-rcc-pipe.png" },
  { slug: "dawood-traders", name: "Dawood Traders", sector: "International Trade & Commerce", title: "Creating technology around modern trade operations", summary: "Digital capability shaped around the information, coordination and continuity international commerce requires.", logo: "/logos/dawood-traders.png" },
] as const;

export const groupCompanies = work.map((item) => ({ name: item.name, logo: item.logo, caption: item.name, descriptor: item.sector, url: `/work/${item.slug}` }));
export const insightCategories = ["Engineering", "Cloud", "Cybersecurity", "Data & AI", "Business Technology", "Digital Transformation"] as const;
export const technologyCategories = [
  { title: "Cloud & Infrastructure", logos: [
    { name: "AWS", category: "Cloud" },
    { name: "Microsoft Azure", category: "Cloud" },
    { name: "Google Cloud", category: "Cloud" },
    { name: "Vercel", category: "Cloud delivery" },
  ] },
  { title: "Enterprise & CRM", logos: [
    { name: "Salesforce", category: "CRM" },
    { name: "Dynamics 365", category: "Enterprise" },
  ] },
  { title: "Commerce", logos: [
    { name: "Shopify", category: "Commerce" },
  ] },
  { title: "Software Engineering", logos: [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Web platform" },
    { name: "TypeScript", category: "Engineering" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Engineering" },
  ] },
  { title: "Data & Analytics", logos: [
    { name: "Power BI", category: "Analytics" },
  ] },
  { title: "DevOps & Delivery", logos: [
    { name: "Docker", category: "DevOps" },
    { name: "GitHub", category: "Code delivery" },
  ] },
] as const;
export const contactServiceOptions = capabilities.map((item) => item.title);

// Compatibility data for established URLs and components retained during the redesign.
export const services = capabilities.map((item) => ({ code: item.code, title: item.title, summary: item.summary, deliverables: [...item.items], value: "Designed around the operation, with a clear path for long-term ownership." }));
export const solutions = capabilities.slice(0, 4).map((item) => ({ label: item.code, title: item.title, challenge: item.summary, approach: "We begin with the operating context, define the right technical response and plan for continuity after deployment.", services: [...item.items], outcome: "A maintainable technology capability aligned with the way the business works." }));
export const processSteps = lifecycle.map((title, index) => ({ number: String(index + 1).padStart(2, "0"), title, text: ["Understand the operation, priorities, users and constraints.", "Design and engineer the right system for the requirement.", "Release carefully, document decisions and support adoption.", "Keep applications and infrastructure dependable in use.", "Protect identities, systems, data and operational continuity.", "Use real feedback to strengthen the technology over time."][index] }));
export const locations = ["Pakistan", "United States", "Remote engagements"];
export const values = ["Clarity", "Reliability", "Security", "Practical Innovation", "Long-Term Value"];
