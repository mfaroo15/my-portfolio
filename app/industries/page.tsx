import type { Metadata } from "next";
import { ContactBand } from "@/app/components/ContactBand";
import { InnerHero } from "@/app/components/InnerHero";
import { industries } from "@/app/data/site";

export const metadata: Metadata = { title: "Industries", description: "Technology capabilities informed by manufacturing, infrastructure, trade, commerce, agriculture and professional services.", alternates: { canonical: "/industries" } };
export default function IndustriesPage() {
  return <main id="main-content"><InnerHero kicker="INDUSTRIES" title="Business context before technology choices." intro="We focus on operating environments we can speak about responsibly. Each engagement still begins with the organization in front of us, because no two workflows are exactly alike." />
    <section className="section industry-detail"><div className="container">{industries.map((item) => <article key={item.title}><span>{item.code}</span><div><h2>{item.title}</h2><p>{item.text}</p></div><ul><li>Operational visibility</li><li>Connected workflows</li><li>Secure, maintainable systems</li></ul></article>)}</div></section><ContactBand /></main>;
}
