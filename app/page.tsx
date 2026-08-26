const capabilities = [
  {
    icon: "IT",
    title: "IT Operations",
    description:
      "Supporting business-critical systems and resolving operational technology issues.",
  },
  {
    icon: "PD",
    title: "Project Delivery",
    description:
      "Coordinating technology initiatives, priorities, documentation, and technical readiness.",
  },
  {
    icon: "AR",
    title: "IT Audit & Risk",
    description:
      "Supporting control documentation, evidence gathering, risk awareness, and audit readiness.",
  },
  {
    icon: "CS",
    title: "Cybersecurity",
    description:
      "Strengthening access, documentation, security awareness, and technology processes.",
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
      "Supported cybersecurity operations through security monitoring, vulnerability awareness, technical documentation, risk identification, and IT infrastructure support.",
  },
  {
    role: "IT / Student Assistant",
    company: "DePaul University",
    description:
      "Assisted students with day-to-day services, addressed general technology needs, and supported the university’s administrative and IT operations.",
  },
];

const focusAreas = [
  { symbol: "▦", label: "IT Operations" },
  { symbol: "□", label: "Technology Projects" },
  { symbol: "✓", label: "IT Audit & Controls" },
  { symbol: "◇", label: "Technology Risk" },
  { symbol: "⌁", label: "Cybersecurity" },
];

const companyLogos = [
  {
    name: "DePaul University",
    src: "/logos/depaul-university.png",
    className: "logo-depaul",
  },
  {
    name: "PBS",
    src: "/logos/pbs.png",
    className: "logo-pbs",
  },
  {
    name: "Enterprise Network Technology",
    src: "/logos/ntech.png",
    className: "logo-ntech",
  },
];

export default function Home() {
  return (
    <>
      <style>{`
        :root {
          --navy: #0b1530;
          --blue: #0755c9;
          --blue-dark: #003f9e;
          --text: #101a33;
          --muted: #59677f;
          --border: #dce4ef;
          --surface: #ffffff;
          --background: #fbfcfe;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--background);
          color: var(--text);
          font-family: Arial, Helvetica, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .container {
          width: min(1320px, calc(100% - 48px));
          margin: 0 auto;
        }

        /* Navigation */

        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.94);
          border-bottom: 1px solid rgba(220, 228, 239, 0.9);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .nav-inner {
          min-height: 82px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 30px;
        }

        .brand {
          font-size: 22px;
          font-weight: 850;
          letter-spacing: -0.6px;
        }

        .nav-links {
          display: flex;
          gap: 32px;
          font-size: 14px;
          font-weight: 750;
        }

        .nav-links a {
          position: relative;
          padding: 10px 0;
        }

        .nav-links a::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: 3px;
          left: 0;
          height: 2px;
          background: var(--blue);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 180ms ease;
        }

        .nav-links a:hover {
          color: var(--blue);
        }

        .nav-links a:hover::after {
          transform: scaleX(1);
        }

        .bismillah {
          justify-self: end;
          text-align: center;
        }

        .bismillah-arabic {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 23px;
          line-height: 1.2;
          direction: rtl;
        }

        .bismillah-english {
          margin-top: 3px;
          color: #68758c;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 10px;
          font-style: italic;
          line-height: 1.35;
        }

        /* Hero */

        .hero {
          position: relative;
          overflow: hidden;
          padding: 72px 0 44px;
          background:
            radial-gradient(
              circle at 8% 16%,
              rgba(7, 85, 201, 0.08),
              transparent 23%
            ),
            linear-gradient(180deg, #ffffff 0%, #fbfcfe 100%);
        }

        .hero::before {
          content: "";
          position: absolute;
          top: 32px;
          left: 16px;
          width: 110px;
          height: 110px;
          opacity: 0.4;
          background-image: radial-gradient(
            circle,
            #80a9e5 1.4px,
            transparent 1.5px
          );
          background-size: 17px 17px;
        }

        .hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.35fr 0.85fr;
          gap: 78px;
          align-items: center;
        }

        .eyebrow {
          margin-bottom: 18px;
          color: var(--blue);
          font-size: 12px;
          font-weight: 850;
          letter-spacing: 3.5px;
        }

        .hero h1 {
          max-width: 750px;
          margin: 0;
          color: var(--navy);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(45px, 5vw, 69px);
          line-height: 1.03;
          letter-spacing: -2.6px;
        }

        .hero-description {
          max-width: 700px;
          margin: 23px 0 28px;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.67;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
        }

        .button {
          min-height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0 25px;
          border: 1px solid var(--blue);
          border-radius: 7px;
          color: var(--blue);
          background: #ffffff;
          font-size: 15px;
          font-weight: 800;
          transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            background 180ms ease;
        }

        .button-primary {
          background: var(--blue);
          color: #ffffff;
          box-shadow: 0 10px 25px rgba(7, 85, 201, 0.2);
        }

        .button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(7, 85, 201, 0.18);
        }

        .button-primary:hover {
          background: var(--blue-dark);
        }

        .location {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 21px;
          color: #647188;
          font-size: 14px;
        }

        .location-dot {
          width: 9px;
          height: 9px;
          background: var(--blue);
          border: 3px solid #dceaff;
          border-radius: 50%;
          box-sizing: content-box;
        }

        /* Focus panel */

        .focus-panel {
          position: relative;
          overflow: hidden;
          padding: 29px 34px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.98),
            rgba(240, 246, 255, 0.98)
          );
          border: 1px solid var(--border);
          border-radius: 14px;
          box-shadow:
            0 20px 55px rgba(24, 45, 82, 0.1),
            0 2px 8px rgba(24, 45, 82, 0.05);
        }

        .focus-panel::after {
          content: "";
          position: absolute;
          right: -60px;
          bottom: -70px;
          width: 180px;
          height: 180px;
          background: rgba(7, 85, 201, 0.05);
          border-radius: 50%;
        }

        .focus-panel h2 {
          position: relative;
          z-index: 1;
          margin: 0 0 10px;
          color: var(--blue);
          font-size: 20px;
        }

        .blue-line {
          position: relative;
          z-index: 1;
          width: 42px;
          height: 2px;
          margin-bottom: 13px;
          background: var(--blue);
        }

        .focus-item {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 14px 0;
          border-bottom: 1px solid #dce3ed;
          font-size: 15px;
          font-weight: 750;
        }

        .focus-item:last-child {
          border-bottom: 0;
        }

        .focus-icon {
          width: 31px;
          color: var(--blue);
          font-size: 19px;
          font-weight: 900;
          text-align: center;
        }

        /* General sections */

        .section {
          padding: 65px 0;
        }

        .section-heading {
          display: flex;
          align-items: center;
          gap: 22px;
          margin-bottom: 32px;
        }

        .section-heading::before,
        .section-heading::after {
          content: "";
          height: 1px;
          background: #d5dce7;
          flex: 1;
        }

        .section-heading h2 {
          margin: 0;
          color: var(--navy);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 39px;
          text-align: center;
          letter-spacing: -1px;
        }

        /* Capabilities */

        .capability-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .capability-card {
          position: relative;
          min-height: 200px;
          overflow: hidden;
          padding: 28px 23px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          box-shadow: 0 8px 22px rgba(17, 35, 68, 0.05);
          transition:
            transform 200ms ease,
            border-color 200ms ease,
            box-shadow 200ms ease;
        }

        .capability-card::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: 3px;
          background: var(--blue);
          transform: scaleX(0);
          transition: transform 200ms ease;
        }

        .capability-card:hover {
          transform: translateY(-5px);
          border-color: #9cbceb;
          box-shadow: 0 16px 35px rgba(17, 35, 68, 0.11);
        }

        .capability-card:hover::after {
          transform: scaleX(1);
        }

        .card-top {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 16px;
        }

        .card-icon {
          width: 53px;
          height: 53px;
          flex: 0 0 53px;
          display: grid;
          place-items: center;
          background: linear-gradient(145deg, #1266df, #0345aa);
          border-radius: 50%;
          color: #ffffff;
          box-shadow: 0 8px 20px rgba(7, 85, 201, 0.22);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.5px;
        }

        .capability-card h3 {
          margin: 0;
          color: var(--navy);
          font-size: 17px;
        }

        .capability-card p {
          margin: 0;
          color: #536078;
          font-size: 14px;
          line-height: 1.65;
        }

        /* Featured article */

        .article-section {
          padding: 4px 0 65px;
        }

        .article-card {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 45px;
          padding: 38px 42px;
          background:
            radial-gradient(
              circle at 90% 15%,
              rgba(62, 139, 255, 0.22),
              transparent 27%
            ),
            linear-gradient(135deg, #07152f, #0d2a58);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 15px;
          color: #ffffff;
          box-shadow: 0 22px 55px rgba(11, 21, 48, 0.2);
        }

        .article-card::after {
          content: "";
          position: absolute;
          right: -100px;
          bottom: -145px;
          width: 420px;
          height: 240px;
          border: 1px solid rgba(130, 182, 255, 0.17);
          border-radius: 50%;
          transform: rotate(-8deg);
        }

        .article-content {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .article-icon {
          width: 66px;
          height: 66px;
          flex: 0 0 66px;
          display: grid;
          place-items: center;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.11);
          border-radius: 10px;
          color: #ffffff;
          font-size: 28px;
        }

        .article-label {
          margin-bottom: 9px;
          color: #7eb5ff;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 3px;
        }

        .article-card h2 {
          margin: 0 0 8px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 31px;
          letter-spacing: -0.5px;
        }

        .article-card p {
          max-width: 710px;
          margin: 0;
          color: #ced9e9;
          font-size: 14px;
          line-height: 1.65;
        }

        .article-button {
          position: relative;
          z-index: 2;
          min-width: 185px;
          min-height: 52px;
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0 22px;
          background: #ffffff;
          border-radius: 7px;
          color: var(--blue);
          box-shadow: 0 10px 27px rgba(0, 0, 0, 0.18);
          font-size: 14px;
          font-weight: 850;
          transition:
            transform 180ms ease,
            box-shadow 180ms ease;
        }

        .article-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 34px rgba(0, 0, 0, 0.25);
        }

        /* Experience */

        .experience-section {
          background:
            radial-gradient(
              circle at 90% 10%,
              rgba(7, 85, 201, 0.06),
              transparent 27%
            ),
            linear-gradient(145deg, #f3f7fd, #ffffff);
          border-top: 1px solid #e0e7f0;
        }

        .experience-title {
          margin: 0 0 8px;
          color: var(--navy);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 39px;
          letter-spacing: -1px;
        }

        .title-underline {
          width: 40px;
          height: 3px;
          margin-bottom: 30px;
          background: var(--blue);
        }

        .experience-layout {
          display: grid;
          grid-template-columns: 1.35fr 0.65fr;
          gap: 70px;
          align-items: start;
        }

        .experience-list {
          position: relative;
          display: grid;
          gap: 16px;
          padding-left: 25px;
        }

        .experience-list::before {
          content: "";
          position: absolute;
          top: 12px;
          bottom: 12px;
          left: 5px;
          width: 1px;
          background: #b8c9e2;
        }

        .experience-item {
          position: relative;
          padding: 23px 26px;
          background: rgba(255, 255, 255, 0.94);
          border: 1px solid var(--border);
          border-radius: 11px;
          box-shadow: 0 8px 22px rgba(17, 35, 68, 0.05);
          transition:
            transform 180ms ease,
            box-shadow 180ms ease;
        }

        .experience-item::before {
          content: "";
          position: absolute;
          top: 29px;
          left: -25px;
          width: 9px;
          height: 9px;
          background: var(--blue);
          border: 4px solid #eaf2ff;
          border-radius: 50%;
          transform: translateX(-50%);
        }

        .experience-item:hover {
          transform: translateX(4px);
          box-shadow: 0 13px 30px rgba(17, 35, 68, 0.09);
        }

        .experience-item h3 {
          margin: 0 0 6px;
          color: var(--navy);
          font-size: 17px;
        }

        .company {
          margin-bottom: 10px;
          color: var(--blue);
          font-size: 14px;
          font-weight: 800;
        }

        .experience-item p {
          margin: 0;
          color: #5b687f;
          font-size: 14px;
          line-height: 1.6;
        }

        /* Contact */

        .contact-panel {
          position: sticky;
          top: 110px;
          overflow: hidden;
          padding: 29px;
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 13px;
          box-shadow: 0 12px 32px rgba(17, 35, 68, 0.07);
        }

        .contact-panel::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--blue), #68a2f0);
        }

        .contact-panel h3 {
          margin: 0 0 9px;
          color: var(--navy);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 27px;
        }

        .contact-panel p {
          margin: 0 0 23px;
          color: #5b687f;
          font-size: 14px;
          line-height: 1.65;
        }

        .contact-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 17px 0;
          border-top: 1px solid #dce3ed;
          color: var(--blue);
          font-weight: 800;
          transition:
            color 180ms ease,
            padding 180ms ease;
        }

        .contact-link:hover {
          padding-left: 5px;
          color: var(--blue-dark);
        }

        .contact-arrow {
          transition: transform 180ms ease;
        }

        .contact-link:hover .contact-arrow {
          transform: translate(3px, -3px);
        }

        /* Continuous company-logo marquee */

        .logo-marquee-section {
          position: relative;
          overflow: hidden;
          padding: 20px 0;
          background: #ffffff;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .logo-marquee-section::before,
        .logo-marquee-section::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          z-index: 2;
          width: min(10vw, 130px);
          pointer-events: none;
        }

        .logo-marquee-section::before {
          left: 0;
          background: linear-gradient(90deg, #ffffff, transparent);
        }

        .logo-marquee-section::after {
          right: 0;
          background: linear-gradient(270deg, #ffffff, transparent);
        }

        .logo-marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: logo-marquee 24s linear infinite;
        }

        .logo-marquee-section:hover .logo-marquee-track {
          animation-play-state: paused;
        }

        .logo-marquee-group {
          display: flex;
          flex-shrink: 0;
          align-items: center;
          gap: clamp(70px, 8vw, 130px);
          padding-right: clamp(70px, 8vw, 130px);
        }

        .logo-marquee-item {
          width: clamp(175px, 15vw, 235px);
          height: 72px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-marquee-item img {
          display: block;
          width: auto;
          max-width: 100%;
          height: auto;
          max-height: 62px;
          object-fit: contain;
        }

        .logo-marquee-item .logo-depaul {
          max-height: 48px;
        }

        .logo-marquee-item .logo-pbs {
          max-height: 54px;
        }

        .logo-marquee-item .logo-ntech {
          max-height: 64px;
        }

        @keyframes logo-marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-marquee-track {
            animation-play-state: paused;
          }
        }

        /* Footer */

        footer {
          padding: 27px 0;
          background: var(--navy);
          color: #bdc8da;
          text-align: center;
          font-size: 13px;
        }

        /* Responsive */

        @media (max-width: 1050px) {
          .nav-inner {
            grid-template-columns: 1fr auto;
          }

          .nav-links {
            display: none;
          }

          .hero-grid,
          .experience-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .capability-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .contact-panel {
            position: static;
          }
        }

        @media (max-width: 750px) {
          .article-card {
            display: grid;
            gap: 28px;
            padding: 31px 26px;
          }

          .article-content {
            align-items: flex-start;
          }

          .article-button {
            width: 100%;
          }
        }

        @media (max-width: 650px) {
          .container {
            width: min(100% - 30px, 1320px);
          }

          .nav-inner {
            min-height: 74px;
          }

          .brand {
            font-size: 16px;
          }

          .bismillah-arabic {
            font-size: 16px;
          }

          .bismillah-english {
            display: none;
          }

          .hero {
            padding: 45px 0 30px;
          }

          .hero::before {
            display: none;
          }

          .hero h1 {
            font-size: 40px;
            letter-spacing: -1.5px;
          }

          .eyebrow {
            font-size: 10px;
            letter-spacing: 2.2px;
          }

          .hero-description {
            font-size: 15px;
          }

          .hero-buttons {
            display: grid;
          }

          .button {
            width: 100%;
          }

          .focus-panel {
            padding: 24px;
          }

          .section {
            padding: 47px 0;
          }

          .section-heading {
            gap: 13px;
          }

          .section-heading h2,
          .experience-title {
            font-size: 30px;
          }

          .capability-grid {
            grid-template-columns: 1fr;
          }

          .article-section {
            padding-bottom: 47px;
          }

          .article-content {
            display: block;
          }

          .article-icon {
            margin-bottom: 20px;
          }

          .article-card h2 {
            font-size: 27px;
          }

          .experience-layout {
            gap: 35px;
          }
        }
      `}</style>

      <header className="navbar">
        <div className="container nav-inner">
          <a className="brand" href="#about">
            Muhammad Farooq Ibrahim
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#writing">Writing</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="bismillah">
            <div className="bismillah-arabic">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </div>

            <div className="bismillah-english">
              In the name of Allah, the Most
              <br />
              Gracious, the Most Merciful
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="about">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">
                TECHNOLOGY • CYBERSECURITY • IT OPERATIONS
              </div>

              <h1>
                Turning complex technology operations into reliable, organized
                solutions.
              </h1>

              <p className="hero-description">
                Chicago-based technology professional with experience in IT
                operations, cybersecurity, systems support, technical
                documentation, data analysis, technology risk, and process
                improvement.
              </p>

              <div className="hero-buttons">
                <a className="button button-primary" href="#experience">
                  View Experience <span>→</span>
                </a>

                <a
                  className="button"
                  href="mailto:contact@farooqibrahim.com"
                >
                  Let&apos;s Connect <span>✉</span>
                </a>
              </div>

             <div className="location">
  <span className="location-dot" />
  Chicago, Illinois • Washington, D.C.
</div>
            </div>

            <aside className="focus-panel">
              <h2>Focus Areas</h2>
              <div className="blue-line" />

              {focusAreas.map((area) => (
                <div className="focus-item" key={area.label}>
                  <span className="focus-icon">{area.symbol}</span>
                  <span>{area.label}</span>
                </div>
              ))}
            </aside>
          </div>
        </section>

        <section className="section" id="capabilities">
          <div className="container">
            <div className="section-heading">
              <h2>How I Contribute</h2>
            </div>

            <div className="capability-grid">
              {capabilities.map((item) => (
                <article className="capability-card" key={item.title}>
                  <div className="card-top">
                    <div className="card-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                  </div>

                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="article-section" id="writing">
          <div className="container">
            <div className="article-card">
              <div className="article-content">
                <div className="article-icon">▤</div>

                <div>
                  <div className="article-label">FEATURED WRITING</div>

                  <h2>Crypto for Beginners</h2>

                  <p>
                    A simple, beginner-friendly guide to understanding
                    cryptocurrency, how it works, and the key ideas newcomers
                    should know.
                  </p>
                </div>
              </div>

              <a
                className="article-button"
                href="https://www.linkedin.com/pulse/crypto-beginners-simple-guide-understanding-muhammad-farooq-x9ric/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read on LinkedIn <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="container">
            <h2 className="experience-title">Selected Experience</h2>
            <div className="title-underline" />

            <div className="experience-layout">
              <div className="experience-list">
                {experience.map((item) => (
                  <article className="experience-item" key={item.role}>
                    <h3>{item.role}</h3>
                    <div className="company">{item.company}</div>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>

              <aside className="contact-panel" id="contact">
                <h3>Let&apos;s Connect</h3>

                <p>
                  Connect with me to discuss technology, cybersecurity, IT
                  operations, audit and risk, or professional opportunities.
                </p>

                <a
                  className="contact-link"
                  href="https://linkedin.com/in/m-farooq15"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>LinkedIn</span>
                  <span className="contact-arrow">↗</span>
                </a>

                <a
                  className="contact-link"
                  href="mailto:contact@farooqibrahim.com"
                >
                  <span>Email</span>
                  <span className="contact-arrow">↗</span>
                </a>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <section
        className="logo-marquee-section"
        aria-label="Organizations I have experience with"
      >
        <div className="logo-marquee-track">
          <div className="logo-marquee-group">
            {companyLogos.map((logo) => (
              <div className="logo-marquee-item" key={logo.name}>
                <img
                  className={logo.className}
                  src={logo.src}
                  alt={logo.name}
                />
              </div>
            ))}
          </div>

          <div className="logo-marquee-group" aria-hidden="true">
            {companyLogos.map((logo) => (
              <div className="logo-marquee-item" key={`duplicate-${logo.name}`}>
                <img
                  className={logo.className}
                  src={logo.src}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} Muhammad Farooq Ibrahim
      </footer>
    </>
  );
}
