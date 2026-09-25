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
    summary: "Technology assessments, architecture decisions and implementation roadmaps based on business requirements and existing systems.",
    introduction: "We assess existing systems, document requirements and define architecture, platform and delivery priorities before or alongside implementation.",
    items: ["Technology strategy", "Digital transformation consulting", "Technology assessments", "Solution architecture", "Systems and platform advisory", "Cloud strategy", "Technology roadmapping"],
    platforms: [],
    industries: ["FinTech", "HealthTech", "Retail & E-commerce", "Manufacturing & Infrastructure", "Professional Services"],
  },
  {
    code: "02", slug: "ai-automation", title: "AI & Automation",
    summary: "AI applications and workflow automation integrated into defined business processes with appropriate controls.",
    introduction: "We identify repeatable workflows, evaluate where AI or automation is appropriate, and build the applications, integrations and controls required for production use.",
    items: ["AI consulting", "AI application development", "AI integration", "Intelligent automation", "Workflow automation", "Business process automation", "AI-enabled business applications"],
    platforms: [{ name: "Python", category: "Engineering" }, { name: "Microsoft Azure", category: "Cloud" }, { name: "AWS", category: "Cloud" }, { name: "Google Cloud", category: "Cloud" }],
    industries: ["FinTech", "HealthTech", "Retail & E-commerce", "Manufacturing & Infrastructure", "Professional Services"],
  },
  {
    code: "03", slug: "cloud-devops", title: "Cloud & DevOps",
    summary: "Cloud architecture, migration, infrastructure automation and deployment pipelines for business applications.",
    introduction: "We design, migrate and maintain cloud environments, including infrastructure, deployment workflows, monitoring and security controls.",
    items: ["Cloud consulting", "Cloud architecture", "Cloud migration", "Cloud infrastructure", "DevOps", "Cloud optimization", "Infrastructure automation", "Managed cloud"],
    platforms: [{ name: "AWS", category: "Cloud" }, { name: "Microsoft Azure", category: "Cloud" }, { name: "Google Cloud", category: "Cloud" }, { name: "Docker", category: "DevOps" }, { name: "GitHub", category: "Code delivery" }, { name: "Vercel", category: "Cloud delivery" }],
    industries: ["Media & Entertainment", "FinTech", "Retail & E-commerce", "Logistics & Supply Chain", "Professional Services"],
  },
  {
    code: "04", slug: "application-development", title: "Application Development",
    summary: "Web and mobile applications, internal platforms, APIs and integrations built around defined users and workflows.",
    introduction: "We turn business requirements into maintainable web applications, mobile applications, internal platforms, APIs and system integrations.",
    items: ["Web application development", "Mobile application development", "Enterprise application development", "Customer and employee portals", "API development and integration", "E-commerce development", "Application modernization", "UI/UX engineering"],
    platforms: [{ name: "React", category: "Frontend" }, { name: "Next.js", category: "Web platform" }, { name: "TypeScript", category: "Engineering" }, { name: "Node.js", category: "Backend" }, { name: "Python", category: "Engineering" }],
    industries: ["Manufacturing & Infrastructure", "International Trade & Commerce", "Retail & Commerce", "Professional Services"],
  },
  {
    code: "05", slug: "enterprise-erp", title: "Enterprise & ERP",
    summary: "CRM, ERP and workflow systems configured and integrated around day-to-day business operations.",
    introduction: "We select, configure and connect CRM, ERP and workflow platforms around business data, responsibilities and operating processes.",
    items: ["CRM solutions", "ERP solutions", "Systems integration", "Workflow automation", "Business process digitization", "Platform implementation", "Application integration", "Enterprise support"],
    platforms: [{ name: "Salesforce", category: "CRM" }, { name: "Dynamics 365", category: "Enterprise" }],
    industries: ["Manufacturing & Infrastructure", "International Trade & Commerce", "Retail & Commerce", "Professional Services"],
  },
  {
    code: "06", slug: "data-services", title: "Data Services",
    summary: "Data pipelines, integrations, reporting and analytics for operational and management information.",
    introduction: "We organize data from business systems, build integrations and reporting pipelines, and deliver dashboards and analysis for operational use.",
    items: ["Data engineering", "Business intelligence", "Data visualization", "Data analytics", "Data strategy", "Reporting solutions", "Data integration", "Operational analytics"],
    platforms: [{ name: "Power BI", category: "Analytics" }, { name: "Python", category: "Engineering" }, { name: "Microsoft Azure", category: "Cloud" }, { name: "AWS", category: "Cloud" }, { name: "Google Cloud", category: "Cloud" }],
    industries: ["FinTech", "Retail & E-commerce", "Manufacturing & Infrastructure", "Logistics & Supply Chain", "International Trade & Commerce"],
  },
  {
    code: "07", slug: "cybersecurity", title: "Cybersecurity",
    summary: "Security assessments and controls for identities, applications, cloud environments and infrastructure.",
    introduction: "We assess security risks and implement prioritized controls across user access, applications, cloud environments and infrastructure.",
    items: ["Security assessments", "Application security", "Cloud security", "Identity and access management", "Security hardening", "Vulnerability management", "Security monitoring", "Security architecture"],
    platforms: [],
    industries: ["Manufacturing & Infrastructure", "International Trade & Commerce", "Retail & Commerce", "Professional Services"],
  },
  {
    code: "08", slug: "managed-technology", title: "Managed Technology",
    summary: "Ongoing monitoring, administration, support and maintenance for applications and infrastructure.",
    introduction: "We operate and maintain deployed systems through monitoring, administration, incident support, updates and planned improvements.",
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
  {
    slug: "dawood-rcc-pipe",
    name: "Dawood RCC Pipe",
    sector: "Manufacturing & Infrastructure",
    title: "Digital foundations for an operating infrastructure manufacturer",
    summary: "Digital presence and ongoing technology support for an established RCC pipe manufacturer.",
    logo: "/logos/dawood-rcc-pipe.png",
    website: "https://dawoodrccpipe.com",
    overview: "Dawood RCC Pipe required a clear public digital presence that reflects an established infrastructure manufacturing business and can be maintained as business needs evolve.",
    challenge: "The technology work needed to present essential company information clearly while keeping the platform simple enough to support over time.",
    built: ["Public website presence", "Structured company and product information", "Responsive user experience", "Ongoing website support"],
    approach: "The engagement prioritizes clear information architecture, maintainable implementation and continuity of support after launch.",
    system: ["Public experience", "Content and brand presentation", "Hosting and deployment", "Maintenance and updates"],
    outcome: "The business has a dedicated digital presence supported by Dawood Technologies.",
    support: "Dawood Technologies continues to support the website and related technology requirements as approved updates are needed.",
  },
  {
    slug: "dawood-traders",
    name: "Dawood Traders",
    sector: "International Trade & Commerce",
    title: "Technology supporting modern trade operations",
    summary: "Digital presence and technology support for international trade operations.",
    logo: "/logos/dawood-traders.png",
    website: "https://dawoodtraderspk.com",
    overview: "Dawood Traders needed a professional digital presence for an international trade business, with technology support aligned to ongoing operating requirements.",
    challenge: "The work needed to communicate the business clearly online without adding unnecessary system complexity or unsupported claims.",
    built: ["Public website presence", "Business information structure", "Responsive user experience", "Ongoing technology support"],
    approach: "The implementation is kept focused on credible business presentation, maintainability and continued support.",
    system: ["Public experience", "Business content structure", "Hosting and deployment", "Maintenance and updates"],
    outcome: "The business has a maintained digital presence supported by Dawood Technologies.",
    support: "Dawood Technologies provides continued support for published digital presence and approved technology updates.",
  },
] as const;

export const engineeringLayers = [
  { title: "Experience", items: ["Web Applications", "Mobile", "Internal Tools", "Customer Experiences"] },
  { title: "Application", items: ["Business Logic", "APIs", "Integrations", "Enterprise Applications"] },
  { title: "Data & Automation", items: ["Databases", "Analytics", "Data Pipelines", "Automation", "AI where appropriate"] },
  { title: "Infrastructure", items: ["Cloud", "Deployment", "Networking", "Security"] },
  { title: "Operations", items: ["Monitoring", "Support", "Maintenance", "Continuous Improvement"] },
] as const;

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
  { label: "01", title: "Business Applications", text: "Custom systems for operational workflows, approvals, internal coordination and reporting.", services: ["Application development", "Systems integration", "Data services"] },
  { label: "02", title: "Customer & Employee Portals", text: "Authenticated portals that provide customers and employees with access to information, services and workflows.", services: ["Portal engineering", "Identity and access", "API integration"] },
  { label: "03", title: "CRM & Workflow Solutions", text: "CRM configuration, customer-data integration and workflow automation for sales and service teams.", services: ["CRM implementation", "Workflow automation", "Platform integration"] },
  { label: "04", title: "E-commerce Solutions", text: "Online stores connected with product, inventory, payment, customer and reporting systems.", services: ["Commerce development", "Shopify", "Systems integration"] },
  { label: "05", title: "Data & Analytics Solutions", text: "Data integration, reporting and dashboards for operational and management information.", services: ["Business intelligence", "Data integration", "Operational analytics"] },
  { label: "06", title: "AI-powered Business Solutions", text: "AI-assisted applications and automation for defined tasks, workflows and business rules.", services: ["AI integration", "Intelligent automation", "AI applications"] },
  { label: "07", title: "Cloud & Infrastructure Solutions", text: "Cloud architecture, deployment pipelines, monitoring and managed infrastructure for business applications.", services: ["Cloud architecture", "DevOps", "Managed cloud"] },
] as const;
export const locations = ["Pakistan", "United States", "Remote engagements"];
export const values = ["Clarity", "Reliability", "Security", "Practical Innovation", "Long-Term Value"];
