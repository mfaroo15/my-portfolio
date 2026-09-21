import type { Metadata } from "next";
import { ContactBand } from "@/app/components/ContactBand";
import { InnerHero } from "@/app/components/InnerHero";
import { insightCategories } from "@/app/data/site";

export const metadata: Metadata = { title: "Insights", description: "Dawood Technologies perspectives on engineering, cloud, cybersecurity, data, AI and business technology.", alternates: { canonical: "/insights" } };
export default function InsightsPage() {
  return <main id="main-content"><InnerHero kicker="INSIGHTS" title="Useful thinking, published with purpose." intro="This is the home for practical perspectives from our work across engineering and business technology. We publish when there is something specific and useful to contribute." />
    <section className="section insight-index"><div className="container"><div className="insight-status"><p className="kicker">EDITORIAL DESK</p><h2>Insights are in development.</h2><p>We are building a considered library rather than filling this space with generic articles. New work will appear here as it is reviewed and ready.</p></div><div className="category-list">{insightCategories.map((category, index) => <div key={category}><span>{String(index + 1).padStart(2, "0")}</span><strong>{category}</strong></div>)}</div></div></section><ContactBand title="Have a technology question worth exploring?" /></main>;
}
