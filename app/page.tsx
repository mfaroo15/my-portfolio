import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { TechnologyLogo } from "@/app/components/TechnologyLogo";
import { capabilities, industries, siteUrl, solutions, technologyCategories, work } from "@/app/data/site";
import { createPageMetadata } from "@/app/lib/metadata";

const homeDescription = "Business applications, enterprise integrations, cloud infrastructure, data, AI automation and ongoing technology operations.";

export const metadata: Metadata = {
  ...createPageMetadata({ title: "Technology That Keeps Business Moving", description: homeDescription, path: "/" }),
  title: { absolute: "Dawood Technologies | Technology That Keeps Business Moving" },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Dawood Technologies",
        url: `${siteUrl}/`,
        logo: `${siteUrl}/dawood-technologies-logo.png`,
        description: "Dawood Technologies develops business applications, integrates enterprise systems, supports cloud infrastructure and provides ongoing technology operations.",
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Dawood Technologies",
        url: `${siteUrl}/`,
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };
  return <main id="main-content"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <section className="home-hero"><div className="container hero-inner"><div className="hero-copy"><h1>Technology that keeps business <span>moving.</span></h1><p className="hero-intro">Applications, enterprise systems, cloud infrastructure, data, automation and ongoing technology operations — connected to the needs of the business.</p><div className="hero-actions"><Link className="button button-primary" href="/services">Explore Services <ArrowRight aria-hidden="true" size={17} /></Link><Link className="text-link" href="/contact">Let&apos;s Talk <ArrowUpRight aria-hidden="true" size={17} /></Link></div></div><figure className="hero-visual"><Image src="/technology-built-around-business.png" alt="Abstract blue architectural forms representing connected business technology" width={1152} height={1536} priority /></figure></div></section>

    <section className="section capability-section"><div className="container split-heading light"><div><p className="kicker">SERVICES</p><h2>Full-service technology capability.</h2></div><p>Eight connected disciplines spanning advisory, engineering, integration and ongoing operation.</p></div><div className="container capability-list">{capabilities.map((item) => <Link href={`/services/${item.slug}`} className="capability-row" key={item.title}><span>{item.code}</span><h3>{item.title}</h3><p>{item.summary}</p><ArrowUpRight aria-hidden="true" /></Link>)}</div></section>

    <section className="section industry-section"><div className="container section-top"><div><p className="kicker">INDUSTRIES WE SERVE</p><h2>Technology for different operating contexts.</h2></div><Link className="text-link" href="/industries">Explore industries <ArrowRight aria-hidden="true" size={16} /></Link></div><div className="container industry-list">{industries.slice(0, 8).map((item) => <article key={item.title}><span>{item.code}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>

    <section className="section home-solutions"><div className="container split-heading"><div><p className="kicker">SOLUTIONS</p><h2>Systems built around business needs.</h2></div><Link className="text-link" href="/solutions">View all solutions <ArrowRight aria-hidden="true" size={16} /></Link></div><div className="container solution-summary-grid">{solutions.map((item) => <article key={item.title}><span>{item.label}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>

    <section className="section real-world"><div className="container split-heading"><div><p className="kicker">OUR WORK</p><h2>Technology in operating businesses.</h2></div><p>Our work with Dawood RCC Pipe and Dawood Traders keeps technology decisions connected to day-to-day business requirements.</p></div><div className="container evidence-grid">{work.map((item, index) => <article className="evidence-item work-evidence" key={item.slug}><span className="index">{String(index + 1).padStart(2, "0")}</span><div className="work-logo-block"><div className="evidence-logo"><Image src={item.logo} alt={item.name} width={420} height={120} /></div>{item.slug === "dawood-rcc-pipe" ? <strong>Dawood RCC Pipe</strong> : null}</div><div><strong>{item.name}</strong><span>{item.summary}</span></div><div className="work-evidence-actions"><a href={item.website} target="_blank" rel="noopener noreferrer">Visit website <ArrowUpRight aria-hidden="true" size={15} /></a></div></article>)}</div></section>

    <section className="section technology-section" aria-labelledby="technology-title"><div className="container split-heading"><div><p className="kicker">PLATFORMS &amp; TECHNOLOGIES</p><h2 id="technology-title">Tools selected around the system.</h2></div><p>These are technologies we work with, not claims of formal vendor partnership or certification.</p></div><div className="container technology-groups">{technologyCategories.map((group) => <section className="technology-group" key={group.title}><h3>{group.title}</h3><div className="technology-logo-grid">{group.logos.map((logo) => <TechnologyLogo key={logo.name} {...logo} />)}</div></section>)}</div></section>

    <section className="section principles"><div className="container"><p className="kicker">WHY DAWOOD TECHNOLOGIES</p><div className="principle-grid"><article><span>01</span><h3>Operating context</h3><p>Requirements are defined around the people, workflows and systems involved.</p></article><article><span>02</span><h3>Connected capability</h3><p>Applications, cloud infrastructure, data and enterprise systems are planned together.</p></article><article><span>03</span><h3>Ongoing ownership</h3><p>Support, maintenance and planned improvements continue after deployment.</p></article><article><span>04</span><h3>Documented decisions</h3><p>Architecture, access and operating responsibilities are made clear to the teams involved.</p></article></div></div></section>

    <section className="section home-insights"><div className="container split-heading"><div><p className="kicker">INSIGHTS</p><h2>Insights coming soon.</h2></div><div><Link className="text-link" href="/insights">Visit insights <ArrowRight aria-hidden="true" size={16} /></Link></div></div></section>
    <section className="section closing-cta"><div className="container"><p className="kicker">LET&apos;S TALK</p><h2>Tell us what your business needs technology to do.</h2><Link className="button button-primary" href="/contact">Let&apos;s Talk <ArrowUpRight aria-hidden="true" size={17} /></Link></div></section>
  </main>;
}
