import { ContactBand } from "@/app/components/ContactBand";
import { InnerHero } from "@/app/components/InnerHero";
import { industries } from "@/app/data/site";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata = createPageMetadata({ title: "Industries We Serve", description: "Technology services for media, health, finance, real estate, education, advertising, retail, manufacturing, construction, logistics and trade.", path: "/industries" });
export default function IndustriesPage() {
  return <main id="main-content"><InnerHero kicker="INDUSTRIES WE SERVE" title="Technology shaped for different operating contexts." intro="These sectors represent markets where our services can be applied. They do not imply completed client work in every industry; each engagement starts with the specific organization and its needs." />
    <section className="section industry-detail"><div className="container">{industries.map((item) => <article key={item.title}><span>{item.code}</span><div><h2>{item.title}</h2><p>{item.text}</p></div><ul>{item.needs.map((need) => <li key={need}>{need}</li>)}</ul></article>)}</div></section><ContactBand /></main>;
}
