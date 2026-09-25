import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { EngineeringModel } from "@/app/components/EngineeringModel";
import { TechnologyEcosystem } from "@/app/components/TechnologyEcosystem";
import { capabilities, industries, siteUrl, solutions, work } from "@/app/data/site";
import { createPageMetadata } from "@/app/lib/metadata";

const homeDescription = "Technology capability developed through operating businesses, spanning applications, cloud, data, security, automation and ongoing operations.";

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
        description: "Dawood Technologies grew from the technology needs of operating businesses and designs, builds, modernizes and supports business technology.",
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
    <section className="home-hero"><div className="container hero-inner"><div className="hero-copy"><h1>Technology that keeps business <span>moving.</span></h1><p className="hero-intro">Applications, enterprise systems, cloud infrastructure, data and automation, with ongoing technology support for business operations.</p><div className="hero-actions"><Link className="button button-primary" href="/services">Explore Services <ArrowRight aria-hidden="true" size={17} /></Link><Link className="text-link" href="/contact">Let&apos;s Talk <ArrowUpRight aria-hidden="true" size={17} /></Link></div></div><figure className="hero-visual"><Image src="/technology-built-around-business.png" alt="Abstract blue architectural forms representing connected business technology" width={1152} height={1536} priority /></figure></div></section>

    <section className="section home-origin"><div className="container editorial-intro story-grid"><div><p className="kicker">BUILT FROM OPERATING EXPERIENCE</p><h2>Technology capability developed inside operating businesses.</h2></div><div className="editorial-copy story-copy"><p>Dawood Technologies grew from the technology needs of Dawood operating businesses. That internal capability developed into a dedicated technology company.</p><p>Today, we bring the same ownership-driven approach to organizations beyond Dawood, connecting technology decisions to how businesses actually operate.</p><Link className="text-link" href="/company">Our company story <ArrowRight aria-hidden="true" size={16} /></Link></div></div></section>

    <section className="section capability-section"><div className="container services-intro editorial-intro"><div><p className="kicker">SERVICES</p><h2>Engineering across the technology lifecycle.</h2></div><p className="editorial-copy">Our team brings together engineers and technology professionals across applications, cloud infrastructure, data, enterprise systems, automation, cybersecurity and technology operations.</p></div><div className="container capability-list">{capabilities.map((item) => <Link href={`/services/${item.slug}`} className="capability-row" key={item.title}><span>{item.code}</span><h3>{item.title}</h3><p>{item.summary}</p><ArrowUpRight aria-hidden="true" /></Link>)}</div></section>

    <section className="section industry-section"><div className="container editorial-intro"><div><p className="kicker">INDUSTRY EXPERIENCE &amp; APPLICATIONS</p><h2>Experience across operating environments.</h2></div><div className="editorial-copy"><p>Our operating-business work is concentrated in construction, infrastructure and international trade. Broader references reflect team experience and where our technology capabilities apply.</p><Link className="text-link" href="/industries">Explore industry experience <ArrowRight aria-hidden="true" size={16} /></Link></div></div><div className="container industry-experience-groups"><div className="industry-group"><div className="industry-group-heading"><h3>Demonstrated operating experience</h3></div><div className="industry-list">{industries.filter((item) => item.basis === "operating").map((item) => <article key={item.title}><span>{item.code}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div><div className="industry-group"><div className="industry-group-heading"><h3>Team experience &amp; technology applications</h3></div><div className="industry-list">{industries.filter((item) => item.basis === "team").slice(0, 4).map((item) => <article key={item.title}><span>{item.code}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></div></section>

    <section className="section home-solutions"><div className="container editorial-intro"><div><p className="kicker">SOLUTIONS</p><h2>Systems built around business needs.</h2></div><div className="editorial-copy"><p>Solution work combines product thinking, systems integration, data and infrastructure decisions around a specific operating requirement.</p><Link className="text-link" href="/solutions">View all solutions <ArrowRight aria-hidden="true" size={16} /></Link></div></div><div className="container solution-lineup">{solutions.map((item) => <article key={item.title}><span>{item.label}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>

    <section className="section real-world"><div className="container split-heading editorial-intro"><div><p className="kicker">OUR WORK</p><h2>Technology in operating businesses.</h2></div><p className="editorial-copy">Work with Dawood RCC Pipe and Dawood Traders helped shape an operating model grounded in day-to-day technology responsibility.</p></div><div className="container home-work-showcase">{work.map((item, index) => <article className="home-work-panel" key={item.slug}><div className="work-project-meta"><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.name}</strong><small>{item.sector}</small></div><div className="home-work-copy"><h3>{item.title}</h3><p>{item.summary}</p><ul className="work-capability-list">{item.built.slice(0, 3).map((capability) => <li key={capability}>{capability}</li>)}</ul><div className="work-evidence-actions"><Link href={`/work/${item.slug}`}>View case study <ArrowRight aria-hidden="true" size={15} /></Link><a href={item.website} target="_blank" rel="noopener noreferrer">Visit website <ArrowUpRight aria-hidden="true" size={15} /></a></div></div></article>)}</div></section>

    <section className="section technology-section" aria-labelledby="technology-title"><div className="container split-heading editorial-intro"><div><p className="kicker">ENGINEERING MODEL</p><h2 id="technology-title">Technology ownership beyond delivery.</h2></div><p className="editorial-copy">Architecture, implementation, deployment, security, maintainability, support and continuous improvement are treated as parts of the same operating responsibility.</p></div><div className="container technology-system"><EngineeringModel /><TechnologyEcosystem /></div></section>

    <section className="section principles"><div className="container"><p className="kicker">WHY DAWOOD TECHNOLOGIES</p><div className="principle-grid"><article><span>01</span><h3>Operating context</h3><p>Requirements are defined around the people, workflows and systems involved.</p></article><article><span>02</span><h3>Connected capability</h3><p>Applications, cloud infrastructure, data and enterprise systems are planned together.</p></article><article><span>03</span><h3>Ongoing ownership</h3><p>Support, maintenance and planned improvements continue after deployment.</p></article><article><span>04</span><h3>Documented decisions</h3><p>Architecture, access and operating responsibilities are made clear to the teams involved.</p></article></div></div></section>

    <section className="section closing-cta"><div className="container"><p className="kicker">LET&apos;S TALK</p><h2>Tell us what your business needs technology to do.</h2><Link className="button button-primary" href="/contact">Let&apos;s Talk <ArrowUpRight aria-hidden="true" size={17} /></Link></div></section>
  </main>;
}
