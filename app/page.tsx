"use client";

import { useEffect } from "react";
import type { MouseEvent } from "react";

const services = [
  { code: "01", title: "Web Development", text: "Fast, responsive and scalable websites built around your brand, customers and commercial goals." },
  { code: "02", title: "Software Development", text: "Custom business applications, internal tools, portals and digital products designed for real operational needs." },
  { code: "03", title: "Website Management", text: "Ongoing content updates, maintenance, performance monitoring, backups and continuous website improvement." },
  { code: "04", title: "Technical Support", text: "Reliable troubleshooting, issue resolution, technical guidance and day-to-day support for business technology." },
  { code: "05", title: "Business Software & CRM", text: "CRM selection, configuration and workflow design to organize leads, customers, sales activity and service delivery." },
  { code: "06", title: "Database & Systems", text: "Structured databases, system integrations, reporting foundations and dependable information management." },
  { code: "07", title: "Infrastructure", text: "Practical network, cloud, workplace and systems planning that supports secure and dependable operations." },
  { code: "08", title: "Cybersecurity", text: "Security reviews, audits, access practices, risk awareness, documentation and safeguards built into business processes." },
  { code: "09", title: "Digital Transformation", text: "Modernizing manual work through better software, connected systems, automation and data-driven processes." },
  { code: "10", title: "Technology Consulting", text: "Clear technology roadmaps, vendor guidance, solution evaluation and implementation planning for growing businesses." },
  { code: "11", title: "AI Chatbots & Automation", text: "Customer-service chatbots, internal knowledge assistants and workflow automation designed around useful outcomes." },
  { code: "12", title: "Website Growth", text: "Technical SEO, analytics, speed optimization, conversion improvements and measurable website-traffic strategy." },
];

const solutions = [
  { label: "BUILD", title: "Launch new digital products", text: "From idea and requirements to design, development, testing and launch." },
  { label: "MANAGE", title: "Improve existing systems", text: "Take over websites and software that need stronger support, performance or structure." },
  { label: "CONNECT", title: "Unify business workflows", text: "Connect customer, operational and reporting processes through the right tools and integrations." },
  { label: "GROW", title: "Turn technology into momentum", text: "Use analytics, automation, AI and continuous improvement to support sustainable growth." },
];

const process = [
  { number: "01", title: "Discover", text: "Understand the business, users, pain points, systems and desired outcome." },
  { number: "02", title: "Plan", text: "Define scope, priorities, architecture, timeline and a practical delivery roadmap." },
  { number: "03", title: "Design", text: "Shape the experience, workflows, interface and technical solution around the goal." },
  { number: "04", title: "Deliver", text: "Build, test, document and launch with clear communication throughout the work." },
  { number: "05", title: "Improve", text: "Monitor, support, measure and continuously strengthen the solution after launch." },
];

const industries = [
  "Professional Services", "Restaurants & Hospitality", "Retail & E-commerce",
  "Healthcare & Clinics", "Real Estate", "Manufacturing", "Import & Export",
  "Education", "Nonprofits", "Startups & Growing Businesses",
];

const capabilities = [
  "React", "Next.js", "Node.js", "WordPress", "Shopify", "Python", "Django",
  "SQL", "Power BI", "Tableau", "Microsoft 365", "Cloud & APIs",
];

export default function Home() {
  const contactEmail = "contact@farooqibrahim.com";

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const header = document.querySelector<HTMLElement>(".site-header");
    if (!section) return;

    const headerHeight = header?.getBoundingClientRect().height ?? 76;
    const target = section.querySelector<HTMLElement>("[data-scroll-target]") ?? section;
    const targetTop = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: Math.max(0, targetTop - headerHeight - 38),
      behavior: "auto",
    });
  };

  const navigate = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    window.history.pushState(null, "", `#${sectionId}`);
    scrollToSection(sectionId);
  };

  useEffect(() => {
    const alignHash = () => {
      const id = window.location.hash.replace("#", "");
      if (id) window.requestAnimationFrame(() => scrollToSection(id));
    };

    alignHash();
    window.addEventListener("hashchange", alignHash);
    return () => window.removeEventListener("hashchange", alignHash);
  }, []);

  return (
    <>
      <style>{`
        :root {
          --ink: #06111f;
          --navy: #0a1b31;
          --navy-2: #102a4b;
          --blue: #2e7df6;
          --cyan: #4dd8e8;
          --paper: #f5f7fa;
          --white: #ffffff;
          --text: #14233a;
          --muted: #607089;
          --line: rgba(9, 31, 56, 0.13);
          --soft-blue: #eaf2ff;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: auto; }
        body {
          margin: 0;
          color: var(--text);
          background: var(--paper);
          font-family: Inter, Arial, Helvetica, sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        a { color: inherit; text-decoration: none; }
        button, input, textarea { font: inherit; }
        .container { width: min(1240px, calc(100% - 48px)); margin: 0 auto; }

        .site-header {
          position: sticky;
          top: 0;
          z-index: 100;
          color: #fff;
          background: rgba(6, 17, 31, 0.94);
          border-bottom: 1px solid rgba(255,255,255,.1);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }
        .header-inner { min-height: 78px; display: grid; grid-template-columns: 1fr auto auto; align-items: center; gap: 34px; }
        .brand { display: flex; align-items: center; gap: 12px; }
        .brand-mark { width: 42px; height: 42px; display: grid; place-items: center; color: #fff; background: linear-gradient(145deg, var(--blue), #1451ae); border-radius: 11px; font-size: 12px; font-weight: 900; letter-spacing: .6px; box-shadow: 0 8px 25px rgba(46,125,246,.3); }
        .brand-name { display: block; font-size: 16px; font-weight: 850; letter-spacing: -.2px; }
        .brand-tag { display: block; margin-top: 2px; color: #91a5bf; font-size: 9px; letter-spacing: 1.2px; }
        .nav { display: flex; gap: 27px; color: #bcc9d9; font-size: 13px; font-weight: 750; }
        .nav a { transition: color 160ms ease; }
        .nav a:hover { color: #fff; }
        .header-cta { min-height: 44px; display: inline-flex; align-items: center; justify-content: center; padding: 0 20px; color: #fff; background: var(--blue); border-radius: 999px; font-size: 13px; font-weight: 850; }

        .hero {
          position: relative;
          min-height: calc(100svh - 78px);
          overflow: hidden;
          display: flex;
          align-items: center;
          color: #fff;
          background:
            radial-gradient(circle at 78% 30%, rgba(46,125,246,.28), transparent 28%),
            radial-gradient(circle at 20% 100%, rgba(77,216,232,.12), transparent 30%),
            linear-gradient(135deg, #06111f 0%, #0a1b31 55%, #102b50 100%);
        }
        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: .12;
          background-image: linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: linear-gradient(to right, transparent 5%, #000 100%);
        }
        .hero-inner { position: relative; z-index: 1; display: grid; grid-template-columns: 1.15fr .85fr; gap: 80px; align-items: center; padding: 84px 0; }
        .eyebrow { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; color: #8ebaff; font-size: 10px; font-weight: 900; letter-spacing: 3px; }
        .eyebrow::before { content: ""; width: 38px; height: 1px; background: #76aaff; }
        .hero h1 { max-width: 780px; margin: 0; font-family: Georgia, "Times New Roman", serif; font-size: clamp(48px, 6.2vw, 88px); font-weight: 400; line-height: .98; letter-spacing: -3.5px; }
        .hero h1 span { color: #87b8ff; }
        .hero-copy { max-width: 680px; margin: 27px 0 31px; color: #b9c7d8; font-size: 17px; line-height: 1.72; }
        .actions { display: flex; flex-wrap: wrap; gap: 13px; }
        .button { min-height: 52px; display: inline-flex; align-items: center; justify-content: center; gap: 11px; padding: 0 24px; border: 1px solid rgba(255,255,255,.45); border-radius: 999px; color: #fff; font-size: 14px; font-weight: 850; transition: transform 160ms ease, background 160ms ease, color 160ms ease; }
        .button:hover { transform: translateY(-2px); background: #fff; color: var(--ink); }
        .button-primary { border-color: var(--blue); background: var(--blue); }

        .system-card { position: relative; padding: 28px; background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.15); border-radius: 22px; box-shadow: 0 28px 70px rgba(0,0,0,.22); backdrop-filter: blur(12px); }
        .system-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 26px; }
        .system-label { color: #a7b8cc; font-size: 9px; font-weight: 850; letter-spacing: 2px; }
        .system-status { display: flex; align-items: center; gap: 7px; color: #aee9d0; font-size: 10px; font-weight: 800; }
        .status-dot { width: 8px; height: 8px; background: #53d69c; border-radius: 50%; box-shadow: 0 0 0 5px rgba(83,214,156,.12); }
        .system-core { min-height: 190px; display: grid; place-items: center; border: 1px solid rgba(255,255,255,.12); border-radius: 16px; background: linear-gradient(145deg, rgba(46,125,246,.2), rgba(255,255,255,.03)); }
        .core-ring { width: 130px; height: 130px; display: grid; place-items: center; border: 1px solid rgba(121,176,255,.6); border-radius: 50%; box-shadow: 0 0 0 22px rgba(46,125,246,.08), 0 0 0 44px rgba(46,125,246,.04); }
        .core-ring strong { font-size: 25px; letter-spacing: -1px; }
        .system-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; margin-top: 12px; }
        .system-node { padding: 13px 9px; color: #b7c5d7; background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.09); border-radius: 10px; font-size: 10px; text-align: center; }

        .value-strip { color: #fff; background: var(--blue); }
        .value-grid { display: grid; grid-template-columns: repeat(4,1fr); }
        .value-item { padding: 24px; border-left: 1px solid rgba(255,255,255,.2); }
        .value-item:last-child { border-right: 1px solid rgba(255,255,255,.2); }
        .value-item small { display: block; margin-bottom: 8px; color: #d3e3ff; font-size: 8px; font-weight: 900; letter-spacing: 2px; }
        .value-item strong { font-size: 14px; }

        .section { padding: 100px 0; }
        .section-kicker { margin-bottom: 18px; color: var(--blue); font-size: 9px; font-weight: 900; letter-spacing: 3px; }
        .section-title { max-width: 800px; margin: 0; color: var(--ink); font-family: Georgia, "Times New Roman", serif; font-size: clamp(38px, 4.5vw, 62px); font-weight: 400; line-height: 1.05; letter-spacing: -2px; }
        .section-intro { max-width: 650px; margin: 23px 0 0; color: var(--muted); font-size: 16px; line-height: 1.75; }
        .section-heading { display: grid; grid-template-columns: 1fr .7fr; gap: 70px; align-items: end; margin-bottom: 52px; }
        .section-heading .section-intro { margin: 0; }

        .solutions { background: #fff; }
        .solution-grid { display: grid; grid-template-columns: repeat(4,1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
        .solution-card { min-height: 285px; padding: 27px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); transition: background 180ms ease, color 180ms ease, transform 180ms ease; }
        .solution-card:hover { position: relative; z-index: 1; color: #fff; background: var(--navy); transform: translateY(-5px); }
        .solution-label { color: var(--blue); font-size: 9px; font-weight: 900; letter-spacing: 2px; }
        .solution-card h3 { margin: 75px 0 14px; font-family: Georgia, "Times New Roman", serif; font-size: 23px; font-weight: 400; line-height: 1.2; }
        .solution-card p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.65; }
        .solution-card:hover p { color: #b7c5d7; }

        .services { background: var(--paper); }
        .service-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
        .service-card { min-height: 255px; display: flex; flex-direction: column; padding: 27px; background: #fff; border: 1px solid var(--line); border-radius: 14px; box-shadow: 0 10px 30px rgba(14,38,67,.04); transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease; }
        .service-card:hover { transform: translateY(-5px); border-color: #a9c8fa; box-shadow: 0 18px 45px rgba(14,38,67,.1); }
        .service-code { color: var(--blue); font-size: 10px; font-weight: 900; letter-spacing: 2px; }
        .service-card h3 { margin: auto 0 13px; color: var(--ink); font-family: Georgia, "Times New Roman", serif; font-size: 22px; font-weight: 400; }
        .service-card p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.65; }

        .growth { color: #fff; background: linear-gradient(135deg, var(--ink), var(--navy-2)); }
        .growth .section-title { color: #fff; }
        .growth .section-intro { color: #b4c2d3; }
        .growth-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; margin-top: 48px; }
        .growth-card { min-height: 220px; padding: 25px; background: rgba(255,255,255,.055); border: 1px solid rgba(255,255,255,.12); border-radius: 14px; }
        .growth-icon { width: 42px; height: 42px; display: grid; place-items: center; margin-bottom: 43px; color: #9bc3ff; background: rgba(46,125,246,.16); border-radius: 12px; font-size: 11px; font-weight: 900; }
        .growth-card h3 { margin: 0 0 10px; font-size: 17px; }
        .growth-card p { margin: 0; color: #aebdce; font-size: 13px; line-height: 1.65; }

        .process-section { background: #fff; }
        .process-track { display: grid; grid-template-columns: repeat(5,1fr); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .process-step { position: relative; min-height: 270px; padding: 27px 23px; border-right: 1px solid var(--line); }
        .process-step:last-child { border-right: 0; }
        .process-step::after { content: "→"; position: absolute; top: 22px; right: -12px; z-index: 2; width: 24px; height: 24px; display: grid; place-items: center; color: var(--blue); background: #fff; border: 1px solid var(--line); border-radius: 50%; }
        .process-step:last-child::after { display: none; }
        .process-number { color: var(--blue); font-size: 9px; font-weight: 900; letter-spacing: 2px; }
        .process-step h3 { margin: 78px 0 13px; color: var(--ink); font-family: Georgia, "Times New Roman", serif; font-size: 22px; font-weight: 400; }
        .process-step p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.65; }

        .industry-section { background: var(--paper); }
        .industry-layout { display: grid; grid-template-columns: .8fr 1.2fr; gap: 80px; align-items: start; }
        .industry-list { display: grid; grid-template-columns: repeat(2,1fr); border-top: 1px solid var(--line); }
        .industry-item { display: flex; align-items: center; gap: 13px; padding: 20px 0; border-bottom: 1px solid var(--line); font-size: 14px; font-weight: 750; }
        .industry-item:nth-child(odd) { border-right: 1px solid var(--line); padding-right: 20px; }
        .industry-item:nth-child(even) { padding-left: 20px; }
        .industry-dot { width: 7px; height: 7px; flex: 0 0 7px; background: var(--blue); border-radius: 50%; box-shadow: 0 0 0 5px var(--soft-blue); }

        .tech-section { padding: 32px 0; color: #d0dbea; background: var(--navy); border-top: 1px solid rgba(255,255,255,.08); border-bottom: 1px solid rgba(255,255,255,.08); }
        .tech-label { margin-bottom: 19px; color: #7790ad; font-size: 8px; font-weight: 900; letter-spacing: 2px; text-align: center; }
        .tech-list { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
        .tech-item { padding: 10px 15px; background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.1); border-radius: 999px; font-size: 11px; font-weight: 750; }

        .about { color: #fff; background: var(--ink); }
        .about .section-title { color: #fff; }
        .about-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 95px; align-items: start; }
        .about-copy p { margin: 0 0 22px; color: #adbdcf; font-size: 16px; line-height: 1.78; }
        .about-copy p:first-child { color: #fff; font-size: 19px; }
        .locations { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 30px; }
        .location { padding: 10px 14px; color: #c6d5e7; background: rgba(255,255,255,.055); border: 1px solid rgba(255,255,255,.12); border-radius: 999px; font-size: 11px; font-weight: 750; }

        .contact-section { min-height: calc(100svh - 78px); display: flex; align-items: center; text-align: center; background: #fff; }
        .contact-section .section-title { max-width: 850px; margin: 0 auto; }
        .contact-section .section-intro { margin: 23px auto 32px; }
        .contact-actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 13px; }
        .contact-actions .button { border-color: var(--ink); color: var(--ink); }
        .contact-actions .button-primary { border-color: var(--blue); color: #fff; }

        footer { padding: 30px 0; color: #92a4ba; background: var(--ink); font-size: 11px; }
        .footer-grid { display: grid; grid-template-columns: 1fr auto; gap: 25px; align-items: center; }
        .footer-brand { color: #fff; font-weight: 850; }
        .footer-links { display: flex; gap: 20px; }

        @media (max-width: 1050px) {
          .nav { display: none; }
          .header-inner { grid-template-columns: 1fr auto; }
          .hero-inner, .section-heading, .industry-layout, .about-grid { grid-template-columns: 1fr; gap: 40px; }
          .solution-grid, .growth-grid { grid-template-columns: repeat(2,1fr); }
          .service-grid { grid-template-columns: repeat(2,1fr); }
          .process-track { grid-template-columns: 1fr; }
          .process-step { min-height: auto; padding: 27px 0; border-right: 0; border-bottom: 1px solid var(--line); }
          .process-step:last-child { border-bottom: 0; }
          .process-step h3 { margin: 35px 0 12px; }
          .process-step::after { content: "↓"; top: auto; right: 0; bottom: -12px; }
        }

        @media (max-width: 680px) {
          .container { width: min(100% - 30px, 1240px); }
          .header-inner { min-height: 70px; }
          .brand-tag { display: none; }
          .brand-mark { width: 38px; height: 38px; }
          .header-cta { min-height: 40px; padding: 0 15px; font-size: 11px; }
          .hero { min-height: auto; }
          .hero-inner { padding: 64px 0 54px; }
          .hero h1 { font-size: clamp(42px, 13vw, 58px); line-height: .98; letter-spacing: -2.5px; }
          .hero-copy { font-size: 15px; }
          .actions { display: grid; }
          .button { width: 100%; }
          .system-card { padding: 20px; }
          .system-grid { grid-template-columns: 1fr; }
          .value-grid { grid-template-columns: repeat(2,1fr); }
          .value-item:nth-child(3), .value-item:nth-child(4) { border-top: 1px solid rgba(255,255,255,.2); }
          .section { padding: 72px 0; }
          .section-title { font-size: clamp(35px, 11vw, 45px); }
          .solution-grid, .service-grid, .growth-grid, .industry-list { grid-template-columns: 1fr; }
          .solution-card { min-height: 240px; }
          .service-card { min-height: 230px; }
          .industry-item, .industry-item:nth-child(odd), .industry-item:nth-child(even) { padding: 18px 0; border-right: 0; }
          .footer-grid { grid-template-columns: 1fr; text-align: center; }
          .footer-links { justify-content: center; }
        }
      `}</style>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home" onClick={(event) => navigate(event, "home")}>
            <span className="brand-mark">MFI</span>
            <span><span className="brand-name">MFI Technologies</span><span className="brand-tag">BUSINESS TECHNOLOGY SOLUTIONS</span></span>
          </a>
          <nav className="nav" aria-label="Main navigation">
            <a href="#solutions" onClick={(event) => navigate(event, "solutions")}>Solutions</a>
            <a href="#services" onClick={(event) => navigate(event, "services")}>Services</a>
            <a href="#process" onClick={(event) => navigate(event, "process")}>Process</a>
            <a href="#about" onClick={(event) => navigate(event, "about")}>About</a>
          </nav>
          <a className="header-cta" href="#contact" onClick={(event) => navigate(event, "contact")}>Start a Project</a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-inner">
            <div>
              <div className="eyebrow" data-scroll-target>WEB · SOFTWARE · SYSTEMS · AI</div>
              <h1>Technology built around <span>your business.</span></h1>
              <p className="hero-copy">MFI Technologies designs, builds, manages and improves the digital systems businesses need to operate, serve customers and grow—from websites and software to CRM, infrastructure, cybersecurity and AI automation.</p>
              <div className="actions">
                <a className="button button-primary" href="#contact" onClick={(event) => navigate(event, "contact")}>Discuss Your Project <span>↗</span></a>
                <a className="button" href="#services" onClick={(event) => navigate(event, "services")}>Explore Services <span>↓</span></a>
              </div>
            </div>
            <aside className="system-card" aria-label="MFI Technologies solution model">
              <div className="system-top"><span className="system-label">MFI SOLUTION SYSTEM</span><span className="system-status"><span className="status-dot" />READY TO BUILD</span></div>
              <div className="system-core"><div className="core-ring"><strong>MFI</strong></div></div>
              <div className="system-grid"><div className="system-node">STRATEGY</div><div className="system-node">TECHNOLOGY</div><div className="system-node">GROWTH</div></div>
            </aside>
          </div>
        </section>

        <section className="value-strip" aria-label="Core capabilities">
          <div className="container value-grid">
            <div className="value-item"><small>CREATE</small><strong>Websites & Software</strong></div>
            <div className="value-item"><small>OPERATE</small><strong>Systems & Support</strong></div>
            <div className="value-item"><small>PROTECT</small><strong>Infrastructure & Security</strong></div>
            <div className="value-item"><small>GROW</small><strong>Traffic, Data & AI</strong></div>
          </div>
        </section>

        <section className="section solutions" id="solutions">
          <div className="container">
            <div data-scroll-target><div className="section-kicker">WHAT WE HELP BUSINESSES DO</div><h2 className="section-title">One technology partner across the business journey.</h2><p className="section-intro">Whether you are launching something new, improving an existing platform or modernizing daily operations, we bring strategy and implementation together.</p></div>
            <div className="solution-grid" style={{ marginTop: 50 }}>
              {solutions.map((item) => <article className="solution-card" key={item.label}><div className="solution-label">{item.label}</div><h3>{item.title}</h3><p>{item.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="container">
            <div className="section-heading" data-scroll-target>
              <div><div className="section-kicker">OUR SERVICES</div><h2 className="section-title">Complete digital capability, clearly organized.</h2></div>
              <p className="section-intro">Choose a focused service or bring us a broader business challenge. We shape the right combination of strategy, software, systems and support.</p>
            </div>
            <div className="service-grid">
              {services.map((item) => <article className="service-card" key={item.title}><div className="service-code">{item.code}</div><h3>{item.title}</h3><p>{item.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section growth">
          <div className="container">
            <div data-scroll-target><div className="section-kicker">DIGITAL GROWTH & INTELLIGENCE</div><h2 className="section-title">A better website is only the beginning.</h2><p className="section-intro">We help turn your digital presence into a working business asset through performance, visibility, useful data and intelligent automation.</p></div>
            <div className="growth-grid">
              <article className="growth-card"><div className="growth-icon">SEO</div><h3>Traffic & Search Visibility</h3><p>Technical SEO, content foundations and measurable improvements that help customers find you.</p></article>
              <article className="growth-card"><div className="growth-icon">CRO</div><h3>Conversion Improvement</h3><p>Clear journeys, stronger calls to action and usability improvements that help visitors take the next step.</p></article>
              <article className="growth-card"><div className="growth-icon">AI</div><h3>Chatbots & Automation</h3><p>Helpful AI experiences for customer questions, lead capture, internal knowledge and repetitive workflows.</p></article>
              <article className="growth-card"><div className="growth-icon">BI</div><h3>Analytics & Reporting</h3><p>Practical dashboards and reporting foundations that turn activity into clearer business decisions.</p></article>
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container">
            <div className="section-heading" data-scroll-target>
              <div><div className="section-kicker">HOW WE WORK</div><h2 className="section-title">Structured delivery. Clear communication.</h2></div>
              <p className="section-intro">Every engagement follows a practical path from understanding the problem to delivering and improving the solution.</p>
            </div>
            <div className="process-track">
              {process.map((item) => <article className="process-step" key={item.number}><div className="process-number">{item.number}</div><h3>{item.title}</h3><p>{item.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section industry-section">
          <div className="container industry-layout">
            <div><div className="section-kicker">INDUSTRIES</div><h2 className="section-title">Technology shaped for the way you work.</h2><p className="section-intro">We adapt the solution to your customers, operations, risk and growth stage—rather than forcing every business into the same template.</p></div>
            <div className="industry-list">
              {industries.map((item) => <div className="industry-item" key={item}><span className="industry-dot" />{item}</div>)}
            </div>
          </div>
        </section>

        <section className="tech-section" aria-label="Technology capabilities">
          <div className="container"><div className="tech-label">TECHNOLOGY CAPABILITIES</div><div className="tech-list">{capabilities.map((item) => <span className="tech-item" key={item}>{item}</span>)}</div></div>
        </section>

        <section className="section about" id="about">
          <div className="container about-grid">
            <div data-scroll-target><div className="section-kicker">ABOUT MFI TECHNOLOGIES</div><h2 className="section-title">Business understanding with technical execution.</h2></div>
            <div className="about-copy">
              <p>MFI Technologies is a business technology company focused on helping organizations build, manage and improve their digital capabilities.</p>
              <p>Our approach connects commercial goals with practical technology. That means understanding the operation first, recommending the right solution, and staying focused on usability, reliability, security and long-term value.</p>
              <p>We support businesses that need a new website or software product, stronger management of an existing platform, better internal systems, or experienced guidance through a technology decision.</p>
              <div className="locations"><span className="location">Chicago, IL</span><span className="location">Dallas, TX</span><span className="location">California</span><span className="location">New York, NY</span><span className="location">Washington, DC</span><span className="location">Karachi, Pakistan</span><span className="location">Dubai, UAE</span></div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="section-kicker">START A CONVERSATION</div>
            <h2 className="section-title">Tell us what your business needs technology to do.</h2>
            <p className="section-intro">Whether you need a website, software, ongoing support, CRM, cybersecurity, AI automation or a complete technology roadmap, let’s discuss the right next step.</p>
            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${contactEmail}?subject=MFI Technologies Project Inquiry`}>Start Your Project <span>↗</span></a>
              <a className="button" href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div><span className="footer-brand">MFI Technologies</span> · Technology built around your business.</div>
          <div className="footer-links"><a href="#services" onClick={(event) => navigate(event, "services")}>Services</a><a href="#about" onClick={(event) => navigate(event, "about")}>About</a><span>© {new Date().getFullYear()}</span></div>
        </div>
      </footer>
    </>
  );
}
