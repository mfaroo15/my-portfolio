import { ContactBand } from "@/app/components/ContactBand";
import { InnerHero } from "@/app/components/InnerHero";
import { insightCategories } from "@/app/data/site";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata = createPageMetadata({ title: "Insights", description: "Future Dawood Technologies articles on engineering, cloud, cybersecurity, data, AI and business technology.", path: "/insights" });
export default function InsightsPage() {
  return <main id="main-content"><InnerHero kicker="INSIGHTS" title="Insights coming soon." intro="Future articles will cover engineering, cloud, cybersecurity, data and business technology." />
    <section className="section insight-index"><div className="container"><div className="insight-status"><p className="kicker">TOPICS</p><h2>Planned areas of coverage.</h2></div><div className="category-list">{insightCategories.map((category, index) => <div key={category}><span>{String(index + 1).padStart(2, "0")}</span><strong>{category}</strong></div>)}</div></div></section><ContactBand title="Discuss a technology requirement with us." /></main>;
}
