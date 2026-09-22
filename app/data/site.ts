export const siteUrl = "https://www.dawoodtech.com";
export const contactEmail = "info@dawoodtech.com";
export const legalUpdated = "September 21, 2026";

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/solutions", label: "Solutions" },
  { href: "/work", label: "Work" },
  { href: "/company", label: "Company" },
  { href: "/insights", label: "Insights" },
];

export const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export const capabilities = [
  {
    code: "01", slug: "technology-consulting", title: "Technology Consulting",
    summary: "Clear technology direction before or alongside implementation, grounded in business priorities and existing systems.",
    introduction: "We help organizations assess their technology position, define practical priorities and make informed architecture and platform decisions before committing to implementation.",
    items: ["Technology strategy", "Digital transformation consulting", "Technology assessments", "Solution architecture", "Systems and platform advisory", "Cloud strategy", "Technology roadmapping"],
    platforms: [],
    industries: ["FinTech", "HealthTech", "Retail & E-commerce", "Manufacturing & Infrastructure", "Professional Services"],
  },
  {
    code: "02", slug: "ai-automation", title: "AI & Automation",
    summary: "Applied AI and automation designed around defined business processes and practical operational value.",
    introduction: "We identify where AI and automation can improve a real workflow, then design the application, integration and controls needed to make that capability useful and maintainable.",
    items: ["AI consulting", "AI application development", "AI integration", "Intelligent automation", "Workflow automation", "Business process automation", "AI-enabled business applications"],
    platforms: [{ name: "Python", category: "Engineering" }, { name: "Microsoft Azure", category: "Cloud" }, { name: "AWS", category: "Cloud" }, { name: "Google Cloud", category: "Cloud" }],
    industries: ["FinTech", "HealthTech", "Retail & E-commerce", "Manufacturing & Infrastructure", "Professional Services"],
  },
  {
    code: "03", slug: "cloud-devops", title: "Cloud & DevOps",
    summary: "Reliable cloud foundations and delivery practices for applications, teams and business operations.",
    introduction: "We design and improve cloud environments with attention to security, maintainability, delivery flow and operational ownership.",
    items: ["Cloud consulting", "Cloud architecture", "Cloud migration", "Cloud infrastructure", "DevOps", "Cloud optimization", "Infrastructure automation", "Managed cloud"],
    platforms: [{ name: "AWS", category: "Cloud" }, { name: "Microsoft Azure", category: "Cloud" }, { name: "Google Cloud", category: "Cloud" }, { name: "Docker", category: "DevOps" }, { name: "GitHub", category: "Code delivery" }, { name: "Vercel", category: "Cloud delivery" }],
    industries: ["Media & Entertainment", "FinTech", "Retail & E-commerce", "Logistics & Supply Chain", "Professional Services"],
  },
  {
    code: "04", slug: "application-development", title: "Application Development",
    summary: "Modern digital products designed around users, workflows and the operating needs they support.",
    introduction: "We plan and engineer digital products that turn business requirements into maintainable software, from focused customer experiences to internal platforms and modernization programs.",
    items: ["Web application development", "Mobile application development", "Enterprise application development", "Customer and employee portals", "API development and integration", "E-commerce development", "Application modernization", "UI/UX engineering"],
    platforms: [{ name: "React", category: "Frontend" }, { name: "Next.js", category: "Web platform" }, { name: "TypeScript", category: "Engineering" }, { name: "Node.js", category: "Backend" }, { name: "Python", category: "Engineering" }],
    industries: ["Manufacturing & Infrastructure", "International Trade & Commerce", "Retail & Commerce", "Professional Services"],
  },
  {
    code: "05", slug: "enterprise-erp", title: "Enterprise & ERP",
    summary: "Connected business applications that bring structure, visibility and continuity to day-to-day operations.",
    introduction: "We shape enterprise systems around the way information and responsibility move through a business. That includes selecting, implementing and connecting platforms without treating software as separate from the operating process.",
    items: ["CRM solutions", "ERP solutions", "Systems integration", "Workflow automation", "Business process digitization", "Platform implementation", "Application integration", "Enterprise support"],
    platforms: [{ name: "Salesforce", category: "CRM" }, { name: "Dynamics 365", category: "Enterprise" }],
    industries: ["Manufacturing & Infrastructure", "International Trade & Commerce", "Retail & Commerce", "Professional Services"],
  },
  {
    code: "06", slug: "data-services", title: "Data Services",
    summary: "Data foundations, reporting and analytics that make operational information useful and accessible.",
    introduction: "We help businesses organize, integrate and present data so teams can report consistently, understand operations and make informed decisions.",
    items: ["Data engineering", "Business intelligence", "Data visualization", "Data analytics", "Data strategy", "Reporting solutions", "Data integration", "Operational analytics"],
    platforms: [{ name: "Power BI", category: "Analytics" }, { name: "Python", category: "Engineering" }, { name: "Microsoft Azure", category: "Cloud" }, { name: "AWS", category: "Cloud" }, { name: "Google Cloud", category: "Cloud" }],
    industries: ["FinTech", "Retail & E-commerce", "Manufacturing & Infrastructure", "Logistics & Supply Chain", "International Trade & Commerce"],
  },
  {
    code: "07", slug: "cybersecurity", title: "Cybersecurity",
    summary: "Practical security across identities, applications and infrastructure, built into the operating model.",
    introduction: "We help organizations identify risk and strengthen the controls surrounding their applications, users and infrastructure. Recommendations are practical, prioritized and tied to how technology is actually operated.",
    items: ["Security assessments", "Application security", "Cloud security", "Identity and access management", "Security hardening", "Vulnerability management", "Security monitoring", "Security architecture"],
    platforms: [],
    industries: ["Manufacturing & Infrastructure", "International Trade & Commerce", "Retail & Commerce", "Professional Services"],
  },
  {
    code: "08", slug: "managed-technology", title: "Managed Technology",
    summary: "Continuous ownership of applications and infrastructure after launch, with support, maintenance and improvement.",
    introduction: "Technology needs informed ownership after deployment. We can remain involved to preserve context, support day-to-day operation and guide improvements as business priorities and technical requirements change.",
    items: ["Managed IT", "Application support", "Infrastructure management", "Systems administration", "Technology operations", "Monitoring and maintenance", "Platform support", "Continuous improvement"],
    platforms: [],
    industries: ["Manufacturing & Infrastructure", "International Trade & Commerce", "Retail & Commerce", "Agriculture & Dairy", "Professional Services"],
  },
] as const;

export const industries = [
  { code: "01", title: "Media & Entertainment", text: "Digital platforms, content systems, audience experiences, analytics and scalable infrastructure.", needs: ["Content platforms", "Audience applications", "Analytics", "Cloud infrastructure"] },
  { code: "02", title: "HealthTech", text: "Digital applications and secure operational systems that support connected data workflows and automation.", needs: ["Digital applications", "Secure data workflows", "Operational systems", "Automation"] },
  { code: "03", title: "FinTech", text: "Secure customer applications, integrations, data systems and automated financial workflows.", needs: ["Customer platforms", "Secure integrations", "Data systems", "Process automation"] },
  { code: "04", title: "PropTech & Real Estate", text: "Property platforms, CRM integrations, operational workflows, analytics and digital customer experiences.", needs: ["Property platforms", "CRM integration", "Workflow systems", "Analytics"] },
  { code: "05", title: "EdTech & Education", text: "Learning platforms, portals, content systems and digital tools designed around educators and learners.", needs: ["Learning platforms", "Portals", "Content systems", "Automation"] },
  { code: "06", title: "AdTech & Advertising", text: "Campaign platforms, reporting, workflow automation and data integrations for advertising operations.", needs: ["Campaign platforms", "Data integration", "Analytics", "Workflow automation"] },
  { code: "07", title: "Sports", text: "Digital platforms, fan experiences, applications and analytics for connected sports operations.", needs: ["Digital platforms", "Fan experiences", "Mobile and web applications", "Data and analytics"] },
  { code: "08", title: "Aviation", text: "Passenger experiences, operational systems and enterprise integrations for connected aviation workflows.", needs: ["Passenger platforms", "Operational systems", "Workflow automation", "Enterprise integration"] },
  { code: "09", title: "Retail & E-commerce", text: "Connected commerce, customer, inventory and reporting experiences across physical and digital channels.", needs: ["Commerce platforms", "CRM", "System integration", "Customer analytics"] },
  { code: "10", title: "Manufacturing & Infrastructure", text: "Business applications, operational systems, reporting and digital infrastructure for production-led organizations.", needs: ["Business applications", "Operational visibility", "Reporting", "Digital infrastructure"] },
  { code: "11", title: "Construction", text: "Project workflows, business applications, data visibility and cloud platforms for coordinated delivery.", needs: ["Project workflows", "Business systems", "Reporting", "Cloud platforms"] },
  { code: "12", title: "Logistics & Supply Chain", text: "Tracking systems, integrations, reporting and data platforms for complex operational movement.", needs: ["Tracking systems", "Integrations", "Operational reporting", "Data platforms"] },
  { code: "13", title: "International Trade & Commerce", text: "Business systems, operational workflows, data management and commerce technology for international coordination.", needs: ["Business systems", "Digital presence", "Data management", "Automation"] },
] as const;

export const work = [
  { slug: "dawood-rcc-pipe", name: "Dawood RCC Pipe", sector: "Manufacturing & Infrastructure", title: "Digital foundations for an operating infrastructure manufacturer", summary: "Technology work shaped around business presence, operational context and long-term continuity.", logo: "/logos/dawood-rcc-pipe.png", website: "https://dawoodrccpipe.com" },
  { slug: "dawood-traders", name: "Dawood Traders", sector: "International Trade & Commerce", title: "Technology supporting modern trade operations", summary: "Digital capability shaped around information, coordination and the continuity international commerce requires.", logo: "/logos/dawood-traders.png", website: "https://dawoodtraderspk.com" },
] as const;

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

export const solutions = [
  { label: "01", title: "Business Applications", text: "Purpose-built systems for operational workflows, internal coordination and business visibility.", services: ["Application development", "Systems integration", "Data services"] },
  { label: "02", title: "Customer & Employee Portals", text: "Secure digital experiences that connect people with information, services and workflows.", services: ["Portal engineering", "Identity and access", "API integration"] },
  { label: "03", title: "CRM & Workflow Solutions", text: "Connected customer data and automated processes shaped around how teams work.", services: ["CRM implementation", "Workflow automation", "Platform integration"] },
  { label: "04", title: "E-commerce Solutions", text: "Commerce experiences integrated with customer, inventory, payment and reporting workflows.", services: ["Commerce development", "Shopify", "Systems integration"] },
  { label: "05", title: "Data & Analytics Solutions", text: "Reporting and analytics environments that turn operational data into usable information.", services: ["Business intelligence", "Data integration", "Operational analytics"] },
  { label: "06", title: "AI-powered Business Solutions", text: "Applied AI and automation introduced within defined business processes and controls.", services: ["AI integration", "Intelligent automation", "AI applications"] },
  { label: "07", title: "Cloud & Infrastructure Solutions", text: "Cloud foundations and managed environments aligned with application and operational needs.", services: ["Cloud architecture", "DevOps", "Managed cloud"] },
] as const;
export const locations = ["Pakistan", "United States", "Remote engagements"];
export const values = ["Clarity", "Reliability", "Security", "Practical Innovation", "Long-Term Value"];
