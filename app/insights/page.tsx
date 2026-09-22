import { ContactBand } from "@/app/components/ContactBand";
import { InnerHero } from "@/app/components/InnerHero";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata = createPageMetadata({ title: "Insights", description: "Future Dawood Technologies articles on engineering, cloud, cybersecurity, data, AI and business technology.", path: "/insights" });
export default function InsightsPage() {
  return <main id="main-content"><InnerHero kicker="INSIGHTS" title="Insights coming soon." intro="Future articles will cover engineering, cloud, cybersecurity, data and business technology." />
    <ContactBand title="Discuss a technology requirement with us." /></main>;
}
