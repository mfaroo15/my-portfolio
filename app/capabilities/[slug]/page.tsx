import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { ContactBand } from "@/app/components/ContactBand";
import { InnerHero } from "@/app/components/InnerHero";
import { TechnologyLogo } from "@/app/components/TechnologyLogo";
import { capabilities } from "@/app/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return capabilities.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const capability = capabilities.find((item) => item.slug === slug);
  if (!capability) return {};
  return { title: capability.title, description: capability.summary, alternates: { canonical: `/capabilities/${slug}` } };
}

const approach = [
  { title: "Understand", text: "Clarify the operating context, users, constraints and priorities before defining the response." },
  { title: "Design", text: "Shape the architecture, experience and delivery plan around the requirement and its long-term ownership." },
  { title: "Deliver", text: "Build and introduce the capability carefully, with clear technical decisions and practical documentation." },
  { title: "Improve", text: "Use operational feedback to maintain, strengthen and evolve the technology after deployment." },
] as const;

export default async function CapabilityDetailPage({ params }: Props) {
  const { slug } = await params;
  const capability = capabilities.find((item) => item.slug === slug);
  if (!capability) notFound();

  return <main id="main-content">
    <InnerHero kicker="01 / CAPABILITY INTRODUCTION" title={capability.title} intro={capability.introduction} />

    <section className="section capability-detail-section"><div className="container numbered-section">
      <div className="section-marker"><span>02</span><p>SERVICES</p></div>
      <div className="section-body"><h2>Focused services, connected by context.</h2><div className="service-editorial-grid">{capability.items.map((service, index) => <article key={service}><span>{String(index + 1).padStart(2, "0")}</span><h3>{service}</h3></article>)}</div></div>
    </div></section>

    <section className="section capability-platform-section"><div className="container numbered-section">
      <div className="section-marker"><span>03</span><p>PLATFORMS &amp; TECHNOLOGIES</p></div>
      <div className="section-body"><h2>Technology selected for the requirement.</h2><p className="section-intro">Tools and platforms are chosen around fit, maintainability and the environment already in place. Their inclusion does not imply an official vendor partnership.</p>
        {capability.platforms.length ? <div className="capability-platform-grid">{capability.platforms.map((platform) => <TechnologyLogo key={platform.name} {...platform} />)}</div> : <p className="platform-context">The right security and operational tooling depends on the existing environment, risk profile and scope. We define that stack during discovery rather than prescribing a vendor in advance.</p>}
      </div>
    </div></section>

    <section className="section capability-detail-section"><div className="container numbered-section">
      <div className="section-marker"><span>04</span><p>HOW WE WORK</p></div>
      <div className="section-body"><h2>From operating need to lasting capability.</h2><div className="approach-grid">{approach.map((step, index) => <article key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div>
    </div></section>

    <section className="section capability-industries-section"><div className="container numbered-section">
      <div className="section-marker"><span>05</span><p>RELEVANT INDUSTRIES</p></div>
      <div className="section-body"><h2>Applicable across operating environments.</h2><p className="section-intro">These are sectors where the capability can be applied. They do not represent a claim of completed client work.</p><div className="relevant-industry-list">{capability.industries.map((industry) => <Link href="/industries" key={industry}>{industry}<ArrowRight aria-hidden="true" size={17} /></Link>)}</div></div>
    </div></section>

    <ContactBand title={`Discuss ${capability.title.toLowerCase()} for your operation.`} />
  </main>;
}
