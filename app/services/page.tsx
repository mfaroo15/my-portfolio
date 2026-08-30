import type { Metadata } from "next";
import { CTASection } from "@/app/components/CTASection";
import { PageHero } from "@/app/components/PageHero";
import { ServiceCard } from "@/app/components/ServiceCard";
import { services } from "@/app/data/site";

export const metadata: Metadata = {
  title: "Technology Services | MFI Technologies",
  description: "Explore MFI Technologies services for websites, software, POS and retail systems, CRM and databases, finance management systems, cybersecurity, IT controls, infrastructure and AI automation.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="TECHNOLOGY SERVICES"
        title="Complete digital capability for business operations."
        text="MFI Technologies brings strategy, implementation and ongoing support together across websites, software, business systems, POS, finance workflows, cybersecurity, IT controls, data and automation."
      />

      <section className="section services">
        <div className="container">
          <div className="service-grid service-grid-detailed">
            {services.map((item) => (
              <ServiceCard
                code={item.code}
                deliverables={item.deliverables}
                key={item.title}
                summary={item.summary}
                title={item.title}
                value={item.value}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Need help choosing the right service?" text="Share the business problem and MFI Technologies can help identify the right path before anything is built." />
    </main>
  );
}
