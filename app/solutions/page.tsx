import { ContactBand } from "@/app/components/ContactBand";
import { InnerHero } from "@/app/components/InnerHero";
import { solutions } from "@/app/data/site";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata = createPageMetadata({ title: "Business Technology Solutions", description: "Business applications, portals, CRM, commerce, data, AI and cloud solutions designed around operational needs.", path: "/solutions" });
export default function SolutionsPage() { return <main id="main-content"><InnerHero kicker="SOLUTIONS" title="Technology systems organized around business outcomes." intro="Solutions bring multiple services together around a specific business need. They are designed and integrated for each organization; they are not off-the-shelf Dawood products." /><section className="section industry-detail"><div className="container">{solutions.map((item) => <article key={item.title}><span>{item.label}</span><div><h2>{item.title}</h2><p>{item.text}</p></div><ul>{item.services.map((service) => <li key={service}>{service}</li>)}</ul></article>)}</div></section><ContactBand /></main>; }
