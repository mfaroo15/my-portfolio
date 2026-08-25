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
      "Coordinating deployments, vendors, timelines, and technical readiness.",
  },
  {
    icon: "AR",
    title: "IT Audit & Risk",
    description:
      "Supporting control documentation, evidence gathering, risk awareness, and audit readiness.",
  },
  {
    icon: "SS",
    title: "Systems & Security",
    description:
      "Improving access, device, documentation, and cybersecurity processes.",
  },
];

const experience = [
  {
    role: "Associate Consultant — Managed Services",
    company: "Retail Technology Solutions",
    description:
      "Supporting IT operations, technology deployments, business systems, vendors, and technical projects across a multi-location environment.",
  },
  {
    role: "Technology Analyst",
    company: "PBS Distribution",
    description:
      "Supported technology operations, systems, reporting, and business requirements.",
  },
  {
    role: "Cybersecurity and Technology Intern",
    company: "Enterprise Network Technology",
    description:
      "Assisted with cybersecurity processes, technical documentation, and technology support.",
  },
  {
    role: "Student Assistant",
    company: "DePaul University",
    description:
      "Provided operational and administrative support within the university environment.",
  },
];

export default function Home() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #fbfcfe;
          color: #101a33;
          font-family: Arial, Helvetica, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .container {
          width: min(1320px, calc(100% - 48px));
          margin: 0 auto;
        }

        .navbar {
          background: rgba(255, 255, 255, 0.96);
          border-bottom: 1px solid #e5e9f0;
          position: sticky;
          top: 0;
          z-index: 100;
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
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .nav-links {
          display: flex;
          gap: 38px;
          font-size: 15px;
          font-weight: 700;
        }

        .nav-links a:hover {
          color: #0755c9;
        }

        .bismillah {
          justify-self: end;
          text-align: center;
        }

        .bismillah-arabic {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 23px;
          direction: rtl;
        }

        .bismillah-english {
          color: #62708b;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 10px;
          font-style: italic;
          line-height: 1.35;
          margin-top: 3px;
        }

        .hero {
          padding: 68px 0 38px;
          background:
            radial-gradient(circle at 3% 12%, #dbeaff 1.5px, transparent 1.5px),
            linear-gradient(180deg, #ffffff 0%, #fbfcfe 100%);
          background-size: 18px 18px, auto;
          background-repeat: no-repeat;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.35fr 0.85fr;
          gap: 80px;
          align-items: center;
        }

        .eyebrow {
          color: #0755c9;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 4px;
          margin-bottom: 18px;
        }

        .hero h1 {
          max-width: 720px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(45px, 5vw, 70px);
          line-height: 1.03;
          letter-spacing: -2.5px;
          margin: 0;
        }

        .hero-description {
          max-width: 690px;
          color: #5c6880;
          font-size: 17px;
          line-height: 1.65;
          margin: 22px 0 26px;
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
          padding: 0 25px;
          border: 1px solid #0755c9;
          border-radius: 6px;
          color: #0755c9;
          font-size: 15px;
          font-weight: 800;
          transition: 0.2s ease;
        }

        .button-primary {
          background: #0755c9;
          color: white;
        }

        .button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(7, 85, 201, 0.14);
        }

        .location {
          color: #637087;
          font-size: 14px;
          margin-top: 20px;
        }

        .focus-panel {
          padding: 28px 34px;
          background: linear-gradient(145deg, #ffffff, #f2f7ff);
          border: 1px solid #dce4ef;
          border-radius: 12px;
          box-shadow: 0 12px 32px rgba(24, 45, 82, 0.09);
        }

        .focus-panel h2 {
          color: #0755c9;
          font-size: 20px;
          margin: 0 0 10px;
        }

        .blue-line {
          width: 42px;
          height: 2px;
          background: #0755c9;
          margin-bottom: 13px;
        }

        .focus-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 0;
          border-bottom: 1px solid #dce3ed;
          font-size: 15px;
          font-weight: 700;
        }

        .focus-item:last-child {
          border-bottom: 0;
        }

        .focus-icon {
          width: 29px;
          color: #0755c9;
          font-size: 17px;
          font-weight: 900;
          text-align: center;
        }

        .section {
          padding: 60px 0;
        }

        .section-heading {
          display: flex;
          align-items: center;
          gap: 22px;
          margin-bottom: 30px;
        }

        .section-heading::before,
        .section-heading::after {
          content: "";
          height: 1px;
          background: #d5dce7;
          flex: 1;
        }

        .section-heading h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 38px;
          margin: 0;
          text-align: center;
        }

        .capability-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .capability-card {
          min-height: 190px;
          padding: 27px 23px;
          background: #ffffff;
          border: 1px solid #dce3ed;
          border-radius: 10px;
          box-shadow: 0 7px 18px rgba(17, 35, 68, 0.05);
          transition: 0.2s ease;
        }

        .capability-card:hover {
          transform: translateY(-4px);
          border-color: #9cbceb;
          box-shadow: 0 12px 26px rgba(17, 35, 68, 0.1);
        }

        .card-top {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
        }

        .card-icon {
          width: 52px;
          height: 52px;
          flex: 0 0 52px;
          display: grid;
          place-items: center;
          background: #0755c9;
          border-radius: 50%;
          color: #ffffff;
          font-size: 12px;
          font-weight: 900;
        }

        .capability-card h3 {
          font-size: 17px;
          margin: 0;
        }

        .capability-card p {
          color: #536078;
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
        }

        .experience-section {
          background: linear-gradient(145deg, #f3f7fd, #ffffff);
          border-top: 1px solid #e0e7f0;
        }

        .experience-title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 38px;
          margin: 0 0 8px;
        }

        .title-underline {
          width: 38px;
          height: 3px;
          background: #0755c9;
          margin-bottom: 28px;
        }

        .experience-layout {
          display: grid;
          grid-template-columns: 1.4fr 0.6fr;
          gap: 70px;
          align-items: start;
        }

        .experience-list {
          display: grid;
          gap: 15px;
        }

        .experience-item {
          background: #ffffff;
          border: 1px solid #dce3ed;
          border-radius: 9px;
          padding: 22px 25px;
        }

        .experience-item h3 {
          font-size: 16px;
          margin: 0 0 5px;
        }

        .company {
          color: #0755c9;
          font-size: 14px;
          font-weight: 800;
          margin-bottom: 9px;
        }

        .experience-item p {
          color: #5b687f;
          font-size: 14px;
          line-height: 1.55;
          margin: 0;
        }

        .contact-panel {
          position: sticky;
          top: 110px;
          padding: 26px;
          background: #ffffff;
          border: 1px solid #dce3ed;
          border-radius: 10px;
        }

        .contact-panel h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 25px;
          margin: 0 0 8px;
        }

        .contact-panel p {
          color: #5b687f;
          font-size: 14px;
          line-height: 1.6;
          margin: 0 0 22px;
        }

        .contact-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-top: 1px solid #dce3ed;
          color: #0755c9;
          font-weight: 800;
        }

        .contact-link:hover {
          color: #003d92;
        }

        footer {
          padding: 25px 0;
          background: #101a33;
          color: #bdc8da;
          text-align: center;
          font-size: 13px;
        }

        @media (max-width: 950px) {
          .nav-inner {
            grid-template-columns: 1fr auto;
          }

          .nav-links {
            display: none;
          }

          .hero-grid,
          .experience-layout {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .capability-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .contact-panel {
            position: static;
          }
        }

        @media (max-width: 600px) {
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
            padding-top: 42px;
          }

          .hero h1 {
            font-size: 40px;
            letter-spacing: -1.5px;
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
            padding: 23px;
          }

          .section {
            padding: 45px 0;
          }

          .section-heading h2,
          .experience-title {
            font-size: 30px;
          }

          .capability-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <header className="navbar">
        <div className="container nav-inner">
          <a className="brand" href="#">
            Muhammad Farooq Ibrahim
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#capabilities">Capabilities</a>
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
              <div className="eyebrow">TECHNOLOGY &amp; IT OPERATIONS</div>

              <h1>
                Turning complex technology operations into reliable, organized
                solutions.
              </h1>

              <p className="hero-description">
                Chicago-based technology professional with experience supporting
                IT operations, multi-location technology deployments, systems
                administration, documentation, and process improvement.
              </p>

              <div className="hero-buttons">
                <a className="button button-primary" href="#experience">
                  View Experience&nbsp; →
                </a>

                <a
                  className="button"
                  href="mailto:contact@farooqibrahim.com"
                >
                  Let&apos;s Connect&nbsp; ✉
                </a>
              </div>

              <div className="location">● &nbsp;Chicago, Illinois</div>
            </div>

            <aside className="focus-panel">
              <h2>Focus Areas</h2>
              <div className="blue-line" />

              <div className="focus-item">
                <span className="focus-icon">▦</span>
                IT Operations
              </div>
              <div className="focus-item">
                <span className="focus-icon">□</span>
                Technology Projects
              </div>
              <div className="focus-item">
                <span className="focus-icon">✓</span>
                IT Audit &amp; Controls
              </div>
              <div className="focus-item">
                <span className="focus-icon">◇</span>
                Technology Risk
              </div>
              <div className="focus-item">
                <span className="focus-icon">↗</span>
                Process Improvement
              </div>
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

        <section
          className="section experience-section"
          id="experience"
        >
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
                  Connect with me to discuss technology, IT operations,
                  projects, audit readiness, and professional opportunities.
                </p>

                <a
                  className="contact-link"
                  href="https://linkedin.com/in/m-farooq15"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>LinkedIn</span>
                  <span>↗</span>
                </a>

                <a
                  className="contact-link"
                  href="mailto:contact@farooqibrahim.com"
                >
                  <span>Email</span>
                  <span>↗</span>
                </a>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer>
        © {new Date().getFullYear()} Muhammad Farooq Ibrahim
      </footer>
    </>
  );
}