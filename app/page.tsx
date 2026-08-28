"use client";

import { useEffect } from "react";
import type { MouseEvent } from "react";

const capabilities = [
  {
    number: "01",
    title: "Revenue & Sales Operations",
    description:
      "Supporting organized sales processes, customer coordination, CRM discipline, pipeline visibility, and stronger commercial execution.",
  },
  {
    number: "02",
    title: "Project Delivery",
    description:
      "Coordinating priorities, stakeholders, documentation, technical readiness, and execution across technology initiatives.",
  },
  {
    number: "03",
    title: "Financial Management",
    description:
      "Bringing financial discipline to planning, budgeting, cost awareness, reporting, and operational decision-making.",
  },
  {
    number: "04",
    title: "Cybersecurity & Risk",
    description:
      "Supporting security awareness, access practices, risk identification, technical controls, and stronger technology processes.",
  },
  {
    number: "05",
    title: "Business Systems",
    description:
      "Connecting technology with real operational needs through organized systems, useful data, and practical process improvement.",
  },
  {
    number: "06",
    title: "IT Audit & Controls",
    description:
      "Supporting control documentation, evidence gathering, audit readiness, accountability, and continuous improvement.",
  },
];

const experience = [
  {
    role: "Technology Analyst",
    company: "Public Broadcasting Service Distribution",
    description:
      "Supported technology operations, business systems, reporting, technical documentation, and process improvement initiatives.",
  },
  {
    role: "Cybersecurity and Technology Intern",
    company: "Enterprise Network Technology",
    description:
      "Supported cybersecurity operations through security monitoring, vulnerability awareness, risk identification, documentation, and IT infrastructure support.",
  },
  {
    role: "IT / Student Assistant",
    company: "DePaul University",
    description:
      "Assisted students with day-to-day services, addressed technology needs, and supported the university’s administrative and IT operations.",
  },
];

const operatingModel = [
  {
    number: "01",
    title: "Understand the opportunity",
    description: "Clarify the business need, customer, market, operational challenge, and intended outcome.",
  },
  {
    number: "02",
    title: "Build the business case",
    description: "Connect value, cost, feasibility, risk, stakeholders, and expected impact before execution begins.",
  },
  {
    number: "03",
    title: "Design the right systems",
    description: "Select practical software, infrastructure, data, controls, and workflows that support the objective.",
  },
  {
    number: "04",
    title: "Execute with discipline",
    description: "Coordinate priorities, documentation, ownership, financial awareness, and technical readiness.",
  },
  {
    number: "05",
    title: "Measure and improve",
    description: "Review performance, identify gaps, manage risk, and turn lessons into stronger processes.",
  },
];

const softwareCategories = [
  { title: "Sales & CRM", detail: "Customer workflows · Pipeline visibility · Relationship management" },
  { title: "Finance & Reporting", detail: "Budget awareness · Cost visibility · Management reporting" },
  { title: "Business Intelligence", detail: "Power BI · Tableau · Operational dashboards · Data analysis" },
  { title: "Planning & Delivery", detail: "Jira · Confluence · Documentation · Cross-functional coordination" },
  { title: "Workplace Systems", detail: "Microsoft 365 · Collaboration · Identity · Business productivity" },
  { title: "Infrastructure & Security", detail: "Networks · Cloud · Access · Monitoring · Technology controls" },
];

const companyLogos = [
  { name: "DePaul University", src: "/logos/depaul-university.png", className: "logo-depaul" },
  { name: "PBS", src: "/logos/pbs.png", className: "logo-pbs" },
  { name: "Enterprise Network Technology", src: "/logos/ntech.png", className: "logo-ntech" },
];

export default function Home() {
  const scrollToSection = (sectionId: string, behavior: ScrollBehavior = "smooth") => {
    const section = document.getElementById(sectionId);
    const navbar = document.querySelector<HTMLElement>(".navbar");
    if (!section) return;

    const navbarHeight = navbar?.offsetHeight ?? 80;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: Math.max(0, sectionTop - navbarHeight - 20),
      behavior,
    });
  };

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    event.preventDefault();
    window.history.pushState(null, "", `#${sectionId}`);
    scrollToSection(sectionId);
  };

  useEffect(() => {
    const sectionId = window.location.hash.replace("#", "");
    if (!sectionId) return;
    const frame = window.requestAnimationFrame(() => scrollToSection(sectionId, "auto"));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <style>{`
        :root {
          --ink: #07111f;
          --navy: #0a1830;
          --navy-soft: #122542;
          --blue: #2b75df;
          --sky: #84b8ff;
          --cream: #f4f0e7;
          --paper: #f8f8f5;
          --white: #ffffff;
          --text: #162238;
          --muted: #617087;
          --line: rgba(16, 38, 68, 0.14);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; scroll-padding-top: 105px; }
        section[id] { scroll-margin-top: 105px; }
        body {
          margin: 0;
          color: var(--text);
          background: var(--paper);
          font-family: Arial, Helvetica, sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        a { color: inherit; text-decoration: none; }
        .container { width: min(1280px, calc(100% - 64px)); margin: 0 auto; }

        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(7, 17, 31, 0.94);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          color: var(--white);
        }
        .nav-inner {
          min-height: 82px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 30px;
        }
        .brand { font-size: 18px; font-weight: 800; letter-spacing: -0.3px; }
        .nav-links { display: flex; gap: 30px; font-size: 13px; font-weight: 700; }
        .nav-links a { color: #c5cfdd; transition: color 180ms ease; }
        .nav-links a:hover { color: #ffffff; }
        .bismillah { justify-self: end; text-align: center; }
        .bismillah-arabic {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 21px;
          line-height: 1.15;
          direction: rtl;
        }
        .bismillah-english {
          margin-top: 3px;
          color: #91a0b5;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 9px;
          font-style: italic;
          line-height: 1.3;
        }

        .hero {
          position: relative;
          min-height: calc(100vh - 82px);
          overflow: hidden;
          display: flex;
          align-items: center;
          color: #ffffff;
          background:
            radial-gradient(circle at 78% 30%, rgba(60, 125, 218, 0.28), transparent 28%),
            linear-gradient(135deg, #07111f 0%, #0a1830 52%, #15294a 100%);
        }
        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0.12;
          background-image:
            linear-gradient(rgba(255,255,255,.16) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.16) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: linear-gradient(to right, transparent, black 70%);
        }
        .hero::after {
          content: "MFI";
          position: absolute;
          right: -25px;
          bottom: -65px;
          color: rgba(255,255,255,.035);
          font-size: clamp(190px, 28vw, 430px);
          font-weight: 900;
          letter-spacing: -35px;
          line-height: .8;
        }
        .hero-inner { position: relative; z-index: 1; padding: 92px 0 70px; }
        .hero-kicker {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 28px;
          color: #a9cfff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3.3px;
        }
        .hero-kicker::before { content: ""; width: 44px; height: 1px; background: #70adff; }
        .hero h1 {
          max-width: 1040px;
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(55px, 8vw, 116px);
          font-weight: 400;
          line-height: .88;
          letter-spacing: -5px;
        }
        .hero h1 strong { font-family: Arial, Helvetica, sans-serif; font-weight: 900; }
        .hero-bottom {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(320px, 520px);
          gap: 70px;
          align-items: end;
          margin-top: 62px;
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,.16);
        }
        .hero-role { color: #d7e1ef; font-size: 14px; font-weight: 700; letter-spacing: 1px; }
        .hero-description { margin: 0 0 26px; color: #bdc9d8; font-size: 17px; line-height: 1.7; }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 13px; }
        .button {
          min-height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          padding: 0 24px;
          border: 1px solid rgba(255,255,255,.55);
          border-radius: 999px;
          color: #fff;
          font-size: 14px;
          font-weight: 800;
          transition: transform 180ms ease, background 180ms ease, color 180ms ease;
        }
        .button:hover { transform: translateY(-2px); background: #ffffff; color: var(--ink); }
        .button-primary { background: #ffffff; color: var(--ink); }
        .button-primary:hover { background: #dceaff; }

        .proof-strip { background: var(--cream); border-bottom: 1px solid var(--line); }
        .proof-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .proof-item { padding: 27px 24px; border-left: 1px solid var(--line); }
        .proof-item:last-child { border-right: 1px solid var(--line); }
        .proof-item span { display: block; color: #858c94; font-size: 9px; font-weight: 800; letter-spacing: 2.2px; }
        .proof-item strong { display: block; margin-top: 8px; color: var(--ink); font-size: 14px; }

        .section { padding: 105px 0; }
        .section-label { margin-bottom: 20px; color: var(--blue); font-size: 10px; font-weight: 900; letter-spacing: 3px; }
        .section-title {
          max-width: 800px;
          margin: 0;
          color: var(--ink);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(38px, 5vw, 68px);
          font-weight: 400;
          line-height: 1.04;
          letter-spacing: -2px;
        }

        .perspective { background: #ffffff; }
        .perspective-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 100px; align-items: start; }
        .perspective-copy { padding-top: 10px; }
        .perspective-copy p { margin: 0 0 24px; color: #526178; font-size: 17px; line-height: 1.78; }
        .perspective-copy p:first-child { color: var(--text); font-size: 20px; }
        .location-line { display: flex; gap: 12px; align-items: center; margin-top: 35px; color: #233551; font-size: 13px; font-weight: 800; }
        .location-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--blue); box-shadow: 0 0 0 5px #e8f1ff; }

        .capabilities { background: var(--paper); }
        .capability-header { display: flex; justify-content: space-between; gap: 50px; align-items: end; margin-bottom: 56px; }
        .capability-intro { max-width: 390px; margin: 0; color: var(--muted); font-size: 15px; line-height: 1.7; }
        .capability-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
        .capability-card {
          min-height: 270px;
          padding: 30px;
          background: #ffffff;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          transition: background 200ms ease, color 200ms ease, transform 200ms ease;
        }
        .capability-card:hover { position: relative; z-index: 1; color: #fff; background: var(--navy); transform: translateY(-5px); }
        .card-number { color: var(--blue); font-size: 11px; font-weight: 900; letter-spacing: 2px; }
        .capability-card h3 { margin: 70px 0 15px; font-family: Georgia, "Times New Roman", serif; font-size: 24px; font-weight: 400; }
        .capability-card p { margin: 0; color: var(--muted); font-size: 14px; line-height: 1.65; }
        .capability-card:hover p { color: #bfcbdc; }
        .capability-card:hover .card-number { color: #89bbff; }

        .operating-model { overflow: hidden; color: #fff; background: linear-gradient(135deg, #0b1a31, #132b4e); }
        .operating-model .section-label { color: #83b8ff; }
        .operating-model .section-title { color: #fff; }
        .model-heading { display: grid; grid-template-columns: 1fr .75fr; gap: 80px; align-items: end; margin-bottom: 65px; }
        .model-heading p { margin: 0; color: #adbbcd; font-size: 15px; line-height: 1.75; }
        .model-track { display: grid; grid-template-columns: repeat(5, 1fr); border-top: 1px solid rgba(255,255,255,.16); border-bottom: 1px solid rgba(255,255,255,.16); }
        .model-step { position: relative; min-height: 280px; padding: 30px 25px; border-right: 1px solid rgba(255,255,255,.16); }
        .model-step:last-child { border-right: 0; }
        .model-step::after { content: "→"; position: absolute; top: 26px; right: -12px; z-index: 2; width: 24px; height: 24px; display: grid; place-items: center; color: #8ebeff; background: #102440; border-radius: 50%; }
        .model-step:last-child::after { display: none; }
        .model-number { color: #83b8ff; font-size: 10px; font-weight: 900; letter-spacing: 2px; }
        .model-step h3 { margin: 83px 0 15px; font-family: Georgia, "Times New Roman", serif; font-size: 22px; font-weight: 400; line-height: 1.2; }
        .model-step p { margin: 0; color: #aab8ca; font-size: 13px; line-height: 1.65; }

        .software-section { background: #fff; }
        .software-heading { display: grid; grid-template-columns: .9fr 1.1fr; gap: 90px; margin-bottom: 55px; align-items: end; }
        .software-heading p { margin: 0; color: var(--muted); font-size: 15px; line-height: 1.75; }
        .software-grid { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid var(--line); }
        .software-item { display: grid; grid-template-columns: 55px 1fr; gap: 18px; padding: 29px 25px 29px 0; border-bottom: 1px solid var(--line); }
        .software-item:nth-child(odd) { border-right: 1px solid var(--line); }
        .software-item:nth-child(even) { padding-left: 25px; }
        .software-icon { width: 42px; height: 42px; display: grid; place-items: center; color: var(--blue); background: #edf4ff; border-radius: 50%; font-size: 14px; font-weight: 900; }
        .software-item h3 { margin: 1px 0 8px; color: var(--ink); font-family: Georgia, "Times New Roman", serif; font-size: 21px; font-weight: 400; }
        .software-item p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.6; }

        .experience-section { color: #fff; background: var(--ink); }
        .experience-section .section-label { color: #83b8ff; }
        .experience-section .section-title { color: #fff; }
        .experience-heading { display: grid; grid-template-columns: 1fr .8fr; gap: 80px; align-items: end; margin-bottom: 55px; }
        .experience-heading p { margin: 0; color: #aebccd; font-size: 15px; line-height: 1.7; }
        .experience-list { border-top: 1px solid rgba(255,255,255,.16); }
        .experience-item {
          display: grid;
          grid-template-columns: 72px .8fr 1.2fr;
          gap: 35px;
          padding: 34px 0;
          border-bottom: 1px solid rgba(255,255,255,.16);
        }
        .experience-number { color: #6f839c; font-size: 11px; font-weight: 800; }
        .experience-item h3 { margin: 0 0 9px; font-family: Georgia, "Times New Roman", serif; font-size: 22px; font-weight: 400; }
        .company { color: #83b8ff; font-size: 12px; font-weight: 800; line-height: 1.5; }
        .experience-item p { margin: 0; color: #aebccd; font-size: 14px; line-height: 1.7; }

        .writing { background: var(--cream); }
        .writing-card { display: grid; grid-template-columns: .9fr 1.1fr auto; gap: 50px; align-items: center; padding: 48px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .writing-tag { color: var(--blue); font-size: 10px; font-weight: 900; letter-spacing: 2.5px; }
        .writing-card h3 { margin: 0 0 10px; color: var(--ink); font-family: Georgia, "Times New Roman", serif; font-size: 31px; font-weight: 400; }
        .writing-card p { margin: 0; color: var(--muted); font-size: 14px; line-height: 1.7; }
        .round-link { width: 58px; height: 58px; display: grid; place-items: center; border: 1px solid #9da9b6; border-radius: 50%; font-size: 20px; transition: background 180ms ease, color 180ms ease; }
        .round-link:hover { color: #fff; background: var(--ink); }

        .contact-section { text-align: center; background: #fff; }
        .contact-section .section-title { max-width: 900px; margin: 0 auto 25px; }
        .contact-section p { max-width: 620px; margin: 0 auto 34px; color: var(--muted); font-size: 16px; line-height: 1.7; }
        .contact-actions { display: flex; justify-content: center; flex-wrap: wrap; gap: 13px; }
        .contact-actions .button { border-color: var(--ink); color: var(--ink); }
        .contact-actions .button:hover, .contact-actions .button-primary { color: #fff; background: var(--ink); }

        .logo-marquee-section { position: relative; overflow: hidden; padding: 22px 0; background: #fff; border-top: 1px solid var(--line); }
        .logo-marquee-section::before, .logo-marquee-section::after {
          content: ""; position: absolute; top: 0; bottom: 0; z-index: 2; width: min(10vw, 130px); pointer-events: none;
        }
        .logo-marquee-section::before { left: 0; background: linear-gradient(90deg, #fff, transparent); }
        .logo-marquee-section::after { right: 0; background: linear-gradient(270deg, #fff, transparent); }
        .logo-marquee-track { display: flex; width: max-content; will-change: transform; animation: logo-marquee 24s linear infinite; }
        .logo-marquee-section:hover .logo-marquee-track { animation-play-state: paused; }
        .logo-marquee-group { display: flex; flex-shrink: 0; align-items: center; gap: clamp(70px, 8vw, 130px); padding-right: clamp(70px, 8vw, 130px); }
        .logo-marquee-item { width: clamp(175px, 15vw, 235px); height: 72px; flex: 0 0 auto; display: flex; align-items: center; justify-content: center; }
        .logo-marquee-item img { display: block; width: auto; max-width: 100%; height: auto; max-height: 62px; object-fit: contain; }
        .logo-marquee-item .logo-depaul { max-height: 48px; }
        .logo-marquee-item .logo-pbs { max-height: 54px; }
        .logo-marquee-item .logo-ntech { max-height: 64px; }
        @keyframes logo-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        footer { padding: 28px 0; color: #9aa9bc; background: var(--ink); font-size: 12px; }
        .footer-content { display: flex; align-items: center; justify-content: space-between; gap: 20px; }
        .footer-credit strong { color: #fff; }

        @media (prefers-reduced-motion: reduce) { .logo-marquee-track { animation-play-state: paused; } }
        @media (max-width: 1000px) {
          .nav-inner { grid-template-columns: 1fr auto; }
          .nav-links { display: none; }
          .hero-bottom, .perspective-grid, .experience-heading, .model-heading, .software-heading { grid-template-columns: 1fr; gap: 35px; }
          .capability-grid { grid-template-columns: repeat(2, 1fr); }
          .model-track { grid-template-columns: 1fr; }
          .model-step { min-height: auto; padding: 28px 0; border-right: 0; border-bottom: 1px solid rgba(255,255,255,.16); }
          .model-step:last-child { border-bottom: 0; }
          .model-step::after { content: "↓"; top: auto; right: 0; bottom: -12px; }
          .model-step h3 { margin: 34px 0 12px; }
          .capability-header { display: block; }
          .capability-intro { margin-top: 25px; }
        }
        @media (max-width: 700px) {
          html { scroll-padding-top: 90px; }
          section[id] { scroll-margin-top: 90px; }
          .container { width: min(100% - 30px, 1280px); }
          .nav-inner { min-height: 76px; gap: 10px; }
          .brand { max-width: 125px; font-size: 15px; line-height: 1.15; }
          .bismillah-arabic { font-size: 14px; }
          .bismillah-english { display: block; font-size: 7px; }
          .hero { min-height: auto; }
          .hero-inner { padding: 65px 0 48px; }
          .hero h1 { font-size: 52px; line-height: .93; letter-spacing: -3px; }
          .hero-bottom { margin-top: 44px; padding-top: 25px; }
          .hero-description { font-size: 15px; }
          .hero-actions { display: grid; }
          .button { width: 100%; }
          .proof-grid { grid-template-columns: repeat(2, 1fr); }
          .proof-item:nth-child(3) { border-top: 1px solid var(--line); }
          .proof-item:nth-child(4) { border-top: 1px solid var(--line); }
          .section { padding: 72px 0; }
          .section-title { font-size: 42px; }
          .perspective-grid { gap: 38px; }
          .capability-grid { grid-template-columns: 1fr; }
          .capability-card { min-height: 225px; }
          .capability-card h3 { margin-top: 45px; }
          .experience-item { grid-template-columns: 42px 1fr; gap: 20px; }
          .experience-item p { grid-column: 2; }
          .software-grid { grid-template-columns: 1fr; }
          .software-item, .software-item:nth-child(even) { padding: 25px 0; border-right: 0; }
          .writing-card { grid-template-columns: 1fr auto; gap: 24px; }
          .writing-card > div:nth-child(2) { grid-column: 1 / -1; grid-row: 2; }
          .round-link { grid-column: 2; grid-row: 1; }
          .footer-content { flex-direction: column; justify-content: center; gap: 8px; text-align: center; }
        }
      `}</style>

      <header className="navbar">
        <div className="container nav-inner">
          <a className="brand" href="#about" onClick={(event) => handleNavigation(event, "about")}>Muhammad Farooq Ibrahim</a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#about" onClick={(event) => handleNavigation(event, "about")}>About</a>
            <a href="#capabilities" onClick={(event) => handleNavigation(event, "capabilities")}>Expertise</a>
            <a href="#experience" onClick={(event) => handleNavigation(event, "experience")}>Experience</a>
            <a href="#writing" onClick={(event) => handleNavigation(event, "writing")}>Writing</a>
            <a href="#contact" onClick={(event) => handleNavigation(event, "contact")}>Contact</a>
          </nav>
          <div className="bismillah">
            <div className="bismillah-arabic">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
            <div className="bismillah-english">In the name of Allah, the Most<br />Gracious, the Most Merciful</div>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="about">
          <div className="container hero-inner">
            <div className="hero-kicker">BUSINESS · TECHNOLOGY · FINANCE · EXECUTION</div>
            <h1><strong>MUHAMMAD</strong><br />FAROOQ IBRAHIM</h1>
            <div className="hero-bottom">
              <div className="hero-role">Business & Technology Strategist</div>
              <div>
                <p className="hero-description">I work where business ambition meets disciplined execution—across revenue operations, financial management, business software, audit readiness, infrastructure, cybersecurity, and strategic planning.</p>
                <div className="hero-actions">
                  <a className="button button-primary" href="#capabilities" onClick={(event) => handleNavigation(event, "capabilities")}>Explore My Work <span>↗</span></a>
                  <a className="button" href="mailto:contact@farooqibrahim.com">Get in Touch <span>↗</span></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Professional focus">
          <div className="container proof-grid">
            <div className="proof-item"><span>COMMERCIAL</span><strong>Sales & Revenue Operations</strong></div>
            <div className="proof-item"><span>FINANCIAL</span><strong>Finance, Audit & Controls</strong></div>
            <div className="proof-item"><span>DIGITAL</span><strong>Business Software & Data</strong></div>
            <div className="proof-item"><span>OPERATIONAL</span><strong>Infrastructure & Execution</strong></div>
          </div>
        </section>

        <section className="section perspective">
          <div className="container perspective-grid">
            <div>
              <div className="section-label">BUSINESS PERSPECTIVE</div>
              <h2 className="section-title">Where technology, finance, and operations come together.</h2>
            </div>
            <div className="perspective-copy">
              <p>My work focuses on the systems, financial processes, technology, and operational decisions that help organizations function efficiently and grow responsibly.</p>
              <p>I am particularly interested in how cybersecurity, automation, financial discipline, useful data, and better execution can strengthen modern businesses.</p>
              <p>My approach combines technical understanding with an operational mindset: identify what matters, organize the work, manage risk, and move ideas toward practical results.</p>
              <div className="location-line"><span className="location-dot" />Chicago, Illinois · Washington, D.C.</div>
            </div>
          </div>
        </section>

        <section className="section operating-model">
          <div className="container">
            <div className="model-heading">
              <div>
                <div className="section-label">ENTREPRENEURIAL OPERATING MODEL</div>
                <h2 className="section-title">From opportunity to measurable execution.</h2>
              </div>
              <p>I approach business challenges as connected systems: understand the commercial opportunity, test the economics, design the operating model, manage risk, and execute with accountability.</p>
            </div>
            <div className="model-track">
              {operatingModel.map((step) => (
                <article className="model-step" key={step.number}>
                  <div className="model-number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section software-section">
          <div className="container">
            <div className="software-heading">
              <div>
                <div className="section-label">BUSINESS SOFTWARE & INFRASTRUCTURE</div>
                <h2 className="section-title">The systems behind modern operations.</h2>
              </div>
              <p>My perspective spans the tools and infrastructure businesses use to sell, plan, report, collaborate, manage risk, and operate reliably.</p>
            </div>
            <div className="software-grid">
              {softwareCategories.map((item, index) => (
                <article className="software-item" key={item.title}>
                  <div className="software-icon">0{index + 1}</div>
                  <div><h3>{item.title}</h3><p>{item.detail}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section capabilities" id="capabilities">
          <div className="container">
            <div className="capability-header">
              <div>
                <div className="section-label">WHAT I WORK ACROSS</div>
                <h2 className="section-title">Capabilities built around real business needs.</h2>
              </div>
              <p className="capability-intro">A cross-functional perspective spanning technology, financial management, security, systems, controls, and operational delivery.</p>
            </div>
            <div className="capability-grid">
              {capabilities.map((item) => (
                <article className="capability-card" key={item.title}>
                  <div className="card-number">{item.number}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="container">
            <div className="experience-heading">
              <div>
                <div className="section-label">SELECTED EXPERIENCE</div>
                <h2 className="section-title">Experience across technology, systems, and security.</h2>
              </div>
              <p>Professional experience supporting organizations through technical operations, documentation, analysis, risk awareness, and process improvement.</p>
            </div>
            <div className="experience-list">
              {experience.map((item, index) => (
                <article className="experience-item" key={item.role}>
                  <div className="experience-number">0{index + 1}</div>
                  <div><h3>{item.role}</h3><div className="company">{item.company}</div></div>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section writing" id="writing">
          <div className="container">
            <div className="writing-card">
              <div className="writing-tag">FEATURED WRITING</div>
              <div>
                <h3>Crypto for Beginners</h3>
                <p>A simple guide to understanding cryptocurrency, how it works, and the key ideas newcomers should know.</p>
              </div>
              <a className="round-link" href="https://www.linkedin.com/pulse/crypto-beginners-simple-guide-understanding-muhammad-farooq-x9ric/" target="_blank" rel="noopener noreferrer" aria-label="Read Crypto for Beginners on LinkedIn">↗</a>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="section-label">LET’S CONNECT</div>
            <h2 className="section-title">Interested in technology that moves business forward?</h2>
            <p>Connect with me to discuss technology operations, financial management, cybersecurity, business systems, or professional opportunities.</p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:contact@farooqibrahim.com">Email Me <span>↗</span></a>
              <a className="button" href="https://linkedin.com/in/m-farooq15" target="_blank" rel="noopener noreferrer">LinkedIn <span>↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <section className="logo-marquee-section" aria-label="Organizations I have experience with">
        <div className="logo-marquee-track">
          {["first", "duplicate"].map((group) => (
            <div className="logo-marquee-group" aria-hidden={group === "duplicate" ? "true" : undefined} key={group}>
              {companyLogos.map((logo) => (
                <div className="logo-marquee-item" key={`${group}-${logo.name}`}>
                  <img className={logo.className} src={logo.src} alt={group === "duplicate" ? "" : logo.name} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div className="container footer-content">
          <span>© {new Date().getFullYear()} Muhammad Farooq Ibrahim</span>
          <span className="footer-credit">Designed by <strong>MFI Technologies</strong></span>
        </div>
      </footer>
    </>
  );
}
