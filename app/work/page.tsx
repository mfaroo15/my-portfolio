import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactBand } from "@/app/components/ContactBand";
import { InnerHero } from "@/app/components/InnerHero";
import { work } from "@/app/data/site";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata = createPageMetadata({ title: "Work", description: "Selected Dawood Technologies work in operating businesses across manufacturing, infrastructure and international trade.", path: "/work" });

export default function WorkPage() {
  return <main id="main-content">
    <InnerHero kicker="OUR WORK" title="Technology in operating businesses." intro="Dawood Technologies supports the digital presence and ongoing technology requirements of Dawood RCC Pipe and Dawood Traders." />
    <section className="section work-index"><div className="container work-case-list">
      {work.map((item, index) => <article className="work-case-feature" key={item.slug}>
        <div className="browser-frame" aria-label={`${item.name} project preview`}><div className="browser-bar"><span></span><span></span><span></span></div><div className="browser-canvas"><Image src={item.logo} alt={item.name} width={420} height={120} />{item.slug === "dawood-rcc-pipe" ? <strong>Dawood RCC Pipe</strong> : null}</div></div>
        <div className="work-case-copy"><span>{String(index + 1).padStart(2, "0")} / {item.sector}</span><h2><Link href={`/work/${item.slug}`}>{item.title}</Link></h2><p>{item.overview}</p><div className="work-index-actions"><Link href={`/work/${item.slug}`}>Read case study <ArrowUpRight aria-hidden="true" size={15} /></Link><a href={item.website} target="_blank" rel="noopener noreferrer">Visit website <ArrowUpRight aria-hidden="true" size={15} /></a></div></div>
      </article>)}
    </div></section>
    <ContactBand title="Tell us what your business needs technology to do." />
  </main>;
}
