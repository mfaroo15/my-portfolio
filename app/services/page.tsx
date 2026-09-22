import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactBand } from "@/app/components/ContactBand";
import { InnerHero } from "@/app/components/InnerHero";
import { TechnologyLogo } from "@/app/components/TechnologyLogo";
import { capabilities } from "@/app/data/site";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata = createPageMetadata({ title: "Technology Services", description: "AI, cloud, application development, enterprise systems, data, cybersecurity and managed technology services for businesses.", path: "/services" });

export default function ServicesPage() { return <main id="main-content"><InnerHero kicker="SERVICES" title="Technology services organized around business needs." intro="We connect consulting, engineering, integration and ongoing operation across eight service families. Each can stand alone or combine into a broader technology program." />
  <section className="section detail-list"><div className="container">{capabilities.map((item) => <article className="capability-overview-row" key={item.title}><span className="detail-code">{item.code}</span><div className="capability-overview-intro"><h2>{item.title}</h2><p>{item.summary}</p><Link className="text-link" href={`/services/${item.slug}`}>Explore service <ArrowRight aria-hidden="true" size={16} /></Link></div><div className="capability-overview-services"><strong>Selected services</strong><ul>{item.items.slice(0, 5).map((entry) => <li key={entry}>{entry}</li>)}</ul></div><div className="capability-overview-platforms"><strong>Platforms &amp; Technologies</strong>{item.platforms.length ? <div>{item.platforms.slice(0, 3).map((platform) => <TechnologyLogo key={platform.name} {...platform} />)}</div> : <p>Selected around the environment and requirements.</p>}</div></article>)}</div></section><ContactBand title="Tell us what your business needs technology to do." /></main>; }
