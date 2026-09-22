import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactBand } from "@/app/components/ContactBand";
import { InnerHero } from "@/app/components/InnerHero";
import { work } from "@/app/data/site";

export const metadata: Metadata = { title: "Work", description: "Selected Dawood Technologies work in operating businesses across manufacturing, infrastructure and international trade.", alternates: { canonical: "/work" } };

export default function WorkPage() {
  return <main id="main-content">
    <InnerHero kicker="OUR WORK" title="Technology in operating businesses." intro="Our work is presented without invented metrics or inflated claims. These engagements show where our understanding is formed and how we think about technology in context." />
    <section className="section work-index"><div className="container">
      {work.map((item, index) => <article className="work-index-row" key={item.slug}>
        <span>{String(index + 1).padStart(2, "0")}</span><div className="work-index-logo"><Image src={item.logo} alt={item.name} width={420} height={120} /></div><div><p>{item.sector}</p><h2><Link href={`/work/${item.slug}`}>{item.title}</Link></h2><small>{item.summary}</small><div className="work-index-actions"><a href={item.website} target="_blank" rel="noopener noreferrer">Visit website <ArrowUpRight aria-hidden="true" size={15} /></a></div></div>
      </article>)}
    </div></section>
    <ContactBand title="Tell us what your business needs technology to do." />
  </main>;
}
