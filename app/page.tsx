import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { capabilities, industries, lifecycle, siteUrl, work } from "@/app/data/site";

export const metadata: Metadata = {
  title: "Technology Built Around Business",
  description: "Dawood Technologies designs, builds, operates, secures and continuously improves technology for real businesses.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dawood Technologies",
    url: siteUrl,
    email: "info@dawoodtech.com",
    logo: `${siteUrl}/dawood-technologies-logo.png`,
    description: "A technology company that designs, builds, operates and improves digital systems around business operations.",
  };

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }} />

      <section className="home-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="kicker">DAWOOD TECHNOLOGIES</p>
            <h1>Technology built around <span>business.</span></h1>
            <p className="hero-intro">We design, build, manage and evolve the digital systems modern businesses depend on, from software and enterprise platforms to infrastructure, security, data and intelligent automation.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/work">Explore Our Work <ArrowRight aria-hidden="true" size={17} /></Link>
              <Link className="text-link" href="/contact">Work With Us <ArrowUpRight aria-hidden="true" size={17} /></Link>
            </div>
          </div>
          <div className="hero-system" aria-label="Technology lifecycle">
            <header className="system-head">
              <span>Operating model</span>
              <span>Continuous</span>
            </header>
            <div className="system-core">
              <span className="system-orbit orbit-one" />
              <span className="system-orbit orbit-two" />
              <div>
                <small>Business</small>
                <strong>Technology<br />Capability</strong>
              </div>
            </div>
            <ol className="system-phases">
              {lifecycle.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="container hero-foot"><span>Engineering for real operating environments</span><span>Software / Systems / Infrastructure / Intelligence</span></div>
      </section>

      <section className="section real-world">
        <div className="container split-heading">
          <div><p className="kicker">TECHNOLOGY IN THE REAL WORLD</p><h2>Built where business happens.</h2></div>
          <p>Our capability is developed through direct exposure to operating businesses. We solve for real workflows, real constraints and systems that need to keep working long after deployment.</p>
        </div>
        <div className="container evidence-grid">
          {work.map((item, index) => (
            <Link className="evidence-item" href={`/work/${item.slug}`} key={item.slug}>
              <span className="index">{String(index + 1).padStart(2, "0")}</span>
              <div className="evidence-logo"><Image src={item.logo} alt={item.name} width={420} height={120} /></div>
              <div><strong>{item.name}</strong><span>{item.sector}</span></div>
              <ArrowUpRight aria-hidden="true" />
            </Link>
          ))}
          <div className="evidence-statement"><p>This experience becomes a stronger technology capability for every organization we work with.</p></div>
        </div>
      </section>

      <section className="section work-feature">
        <div className="container section-top"><div><p className="kicker">SELECTED WORK</p><h2>Technology inside the operation.</h2></div><Link className="text-link" href="/work">View all work <ArrowRight aria-hidden="true" size={17} /></Link></div>
        <div className="container work-grid">
          {work.map((item, index) => (
            <Link className={`work-card work-card-${index + 1}`} href={`/work/${item.slug}`} key={item.slug}>
              <div className="work-visual">
                <span>{item.sector}</span>
                <Image src={item.logo} alt="" width={520} height={150} />
                <div className="blueprint-lines" aria-hidden="true" />
              </div>
              <div className="work-copy"><p>{item.name}</p><h3>{item.title}</h3><span>View case study <ArrowUpRight aria-hidden="true" size={16} /></span></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section capability-section">
        <div className="container split-heading light">
          <div><p className="kicker">CAPABILITIES</p><h2>One technology capability. Six connected disciplines.</h2></div>
          <p>We bring engineering, operations and security together so businesses are not left coordinating disconnected vendors or fragile systems.</p>
        </div>
        <div className="container capability-list">
          {capabilities.map((item) => (
            <Link href="/capabilities" className="capability-row" key={item.title}>
              <span>{item.code}</span><h3>{item.title}</h3><p>{item.summary}</p><ArrowUpRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section className="section lifecycle-section">
        <div className="container lifecycle-intro"><p className="kicker">MANAGED TECHNOLOGY</p><h2>Delivery is a milestone.<br />Ownership is continuous.</h2><p>Technology needs attention after it goes live. We can remain responsible for the systems we build, keeping them reliable, secure and aligned as the business changes.</p></div>
        <div className="container lifecycle-track">{lifecycle.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>)}</div>
        <div className="container section-action"><Link className="button button-dark" href="/capabilities">Explore Managed Technology <ArrowRight aria-hidden="true" size={17} /></Link></div>
      </section>

      <section className="section industry-section">
        <div className="container section-top"><div><p className="kicker">INDUSTRIES</p><h2>Experience with operational context.</h2></div><p>We focus our story on sectors where business realities can inform the technology.</p></div>
        <div className="container industry-list">{industries.map((item) => <article key={item.title}><span>{item.code}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>

      <section className="section closing-cta">
        <div className="container"><p className="kicker">LET&apos;S BUILD WHAT THE BUSINESS NEEDS</p><h2>Bring technology closer to the operation.</h2><Link className="button button-primary" href="/contact">Start a Conversation <ArrowUpRight aria-hidden="true" size={17} /></Link></div>
      </section>
    </main>
  );
}
