import type { Metadata } from "next";
import { ContactBand } from "@/app/components/ContactBand";
import { InnerHero } from "@/app/components/InnerHero";
import { capabilities, lifecycle } from "@/app/data/site";

export const metadata: Metadata = { title: "Capabilities", description: "Software, enterprise systems, cloud, cybersecurity, data, automation and managed technology shaped around business operations.", alternates: { canonical: "/capabilities" } };

export default function CapabilitiesPage() {
  return <main id="main-content">
    <InnerHero kicker="CAPABILITIES" title="Engineering depth, organized around the business." intro="Our disciplines connect strategy, implementation and long-term operation. The result is technology that works as a system, not a collection of isolated projects." />
    <section className="section detail-list"><div className="container">
      {capabilities.map((item) => <article className="detail-row" key={item.title}>
        <span className="detail-code">{item.code}</span><div><h2>{item.title}</h2><p>{item.summary}</p></div>
        <ul>{item.items.map((entry) => <li key={entry}>{entry}</li>)}</ul>
      </article>)}
    </div></section>
    <section className="section managed-block"><div className="container split-heading light"><div><p className="kicker">CONTINUOUS OWNERSHIP</p><h2>Managed technology is part of the capability.</h2></div><p>We can stay accountable after implementation, carrying context forward and improving the system as priorities, risks and operations evolve.</p></div><div className="container lifecycle-track light">{lifecycle.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>)}</div></section>
    <ContactBand />
  </main>;
}
