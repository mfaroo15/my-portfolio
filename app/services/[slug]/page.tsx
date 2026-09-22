import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { ContactBand } from "@/app/components/ContactBand";
import { InnerHero } from "@/app/components/InnerHero";
import { TechnologyLogo } from "@/app/components/TechnologyLogo";
import { capabilities } from "@/app/data/site";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return capabilities.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const item = capabilities.find((entry) => entry.slug === slug); return item ? { title: item.title, description: item.summary, alternates: { canonical: `/services/${slug}` } } : {}; }
export default async function ServicePage({ params }: Props) { const { slug } = await params; const item = capabilities.find((entry) => entry.slug === slug); if (!item) notFound(); return <main id="main-content"><InnerHero kicker="SERVICE" title={item.title} intro={item.introduction} />
  <section className="section capability-detail-section"><div className="container numbered-section"><div className="section-marker"><span>01</span><p>SERVICES</p></div><div className="section-body"><h2>Focused capability, connected to the operation.</h2><div className="service-editorial-grid">{item.items.map((service, index) => <article key={service}><span>{String(index + 1).padStart(2, "0")}</span><h3>{service}</h3></article>)}</div></div></div></section>
  <section className="section capability-platform-section"><div className="container numbered-section"><div className="section-marker"><span>02</span><p>PLATFORMS &amp; TECHNOLOGIES</p></div><div className="section-body"><h2>Selected for fit and maintainability.</h2>{item.platforms.length ? <div className="capability-platform-grid">{item.platforms.map((platform) => <TechnologyLogo key={platform.name} {...platform} />)}</div> : <p className="platform-context">The appropriate technology stack depends on the existing environment, requirements and risk profile. It is defined during discovery rather than prescribed in advance.</p>}</div></div></section>
  <section className="section capability-industries-section"><div className="container numbered-section"><div className="section-marker"><span>03</span><p>RELEVANT INDUSTRIES</p></div><div className="section-body"><h2>Applicable across business environments.</h2><p className="section-intro">These sectors describe where the service can be applied, not a claim of completed work.</p><div className="relevant-industry-list">{item.industries.map((industry) => <Link href="/industries" key={industry}>{industry}<ArrowRight aria-hidden="true" size={17} /></Link>)}</div></div></div></section><ContactBand title={`Let's talk about ${item.title.toLowerCase()}.`} /></main>; }
