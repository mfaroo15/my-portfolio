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
  {
    code: "01", slug: "software-digital-products", title: "Software & Digital Products",
    summary: "Modern digital systems designed around the people, workflows and operating needs they must support.",
    introduction: "We plan and engineer digital products that turn business requirements into maintainable software. The work can span a focused customer experience, an internal platform or the modernization of an existing application.",
    items: ["Web application development", "Mobile application development", "Enterprise application development", "Customer and employee portals", "API development and integration", "E-commerce development", "Application modernization", "UI/UX engineering"],
    platforms: [{ name: "React", category: "Frontend" }, { name: "Next.js", category: "Web platform" }, { name: "TypeScript", category: "Engineering" }, { name: "Node.js", category: "Backend" }, { name: "Python", category: "Engineering" }],
    industries: ["Manufacturing & Infrastructure", "International Trade & Commerce", "Retail & Commerce", "Professional Services"],
  },
  {
    code: "02", slug: "enterprise-systems", title: "Enterprise Systems",
    summary: "Connected business applications that bring structure, visibility and continuity to day-to-day operations.",
    introduction: "We shape enterprise systems around the way information and responsibility move through a business. That includes selecting, implementing and connecting platforms without treating software as separate from the operating process.",
    items: ["CRM solutions", "ERP solutions", "Systems integration", "Workflow automation", "Business process digitization", "Platform implementation", "Application integration", "Enterprise support"],
    platforms: [{ name: "Salesforce", category: "CRM" }, { name: "Dynamics 365", category: "Enterprise" }],
    industries: ["Manufacturing & Infrastructure", "International Trade & Commerce", "Retail & Commerce", "Professional Services"],
  },
  {
    code: "03", slug: "cloud-infrastructure", title: "Cloud & Infrastructure",
    summary: "Reliable technical foundations for applications, teams and operations, designed for maintainability and control.",
    introduction: "We design and improve cloud and infrastructure environments with attention to resilience, cost, security and operational ownership. Architecture decisions stay connected to the applications and teams that depend on them.",
    items: ["Cloud consulting", "Cloud architecture", "Cloud migration", "Cloud infrastructure", "DevOps", "Cloud optimization", "Managed cloud", "Infrastructure monitoring"],
    platforms: [{ name: "AWS", category: "Cloud" }, { name: "Microsoft Azure", category: "Cloud" }, { name: "Google Cloud", category: "Cloud" }, { name: "Docker", category: "DevOps" }, { name: "GitHub", category: "Code delivery" }, { name: "Vercel", category: "Cloud delivery" }],
    industries: ["Manufacturing & Infrastructure", "International Trade & Commerce", "Retail & Commerce", "Professional Services"],
  },
  {
    code: "04", slug: "cybersecurity", title: "Cybersecurity",
    summary: "Practical security across identities, applications and infrastructure, built into the operating model.",
    introduction: "We help organizations identify risk and strengthen the controls surrounding their applications, users and infrastructure. Recommendations are practical, prioritized and tied to how technology is actually operated.",
    items: ["Security assessments", "Application security", "Cloud security", "Identity and access management", "Security hardening", "Vulnerability management", "Security monitoring", "Security architecture"],
    platforms: [],
    industries: ["Manufacturing & Infrastructure", "International Trade & Commerce", "Retail & Commerce", "Professional Services"],
  },
  {
    code: "05", slug: "data-automation-ai", title: "Data, Automation & AI",
    summary: "Data and intelligent workflows that make information usable and reduce repetitive operational work.",
    introduction: "We help businesses organize data, improve reporting and introduce automation where it can remove friction. AI is approached as an applied capability within a defined workflow, with value and maintainability considered from the outset.",
    items: ["Data engineering", "Business intelligence", "Data visualization", "Analytics", "Data strategy", "Workflow automation", "AI application development", "AI integration", "Intelligent automation"],
    platforms: [{ name: "Power BI", category: "Analytics" }, { name: "Python", category: "Engineering" }, { name: "Microsoft Azure", category: "Cloud" }, { name: "Google Cloud", category: "Cloud" }, { name: "AWS", category: "Cloud" }],
    industries: ["Manufacturing & Infrastructure", "International Trade & Commerce", "Retail & Commerce", "Agriculture & Dairy", "Professional Services"],
  },
  {
    code: "06", slug: "managed-technology", title: "Managed Technology",
    summary: "Continuous ownership of applications and infrastructure after launch, with support, maintenance and improvement.",
    introduction: "Technology needs informed ownership after deployment. We can remain involved to preserve context, support day-to-day operation and guide improvements as business priorities and technical requirements change.",
    items: ["Managed IT", "Application support", "Infrastructure management", "Systems administration", "Technology operations", "Monitoring and maintenance", "Platform support", "Continuous improvement"],
    platforms: [],
    industries: ["Manufacturing & Infrastructure", "International Trade & Commerce", "Retail & Commerce", "Agriculture & Dairy", "Professional Services"],
  },
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
