import type { Metadata } from "next";
import { ButtonLink } from "@/app/components/ButtonLink";
import { CTASection } from "@/app/components/CTASection";
import { PageHero } from "@/app/components/PageHero";
import { solutions } from "@/app/data/site";

export const metadata: Metadata = {
  title: "Business Technology Solutions | MFI Technologies",
  description: "Business technology solutions organized around launches, platform improvements, CRM, automation, cybersecurity, growth and technology roadmaps.",
};

export default function SolutionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="BUSINESS SOLUTIONS"
        title="Technology organized around business problems."
        text="The right solution starts with the operational challenge, not the tool. MFI Technologies connects customer needs, workflows, risk and growth priorities to practical implementation."
      />

      <section className="section solutions">
        <div className="container solution-list">
          {solutions.map((item) => (
            <article className="solution-detail" key={item.title}>
              <div className="solution-detail-lead">
                <div className="solution-label">{item.label}</div>
                <h2>{item.title}</h2>
                <ButtonLink href="/contact" variant="dark">
                  Discuss This Solution
                </ButtonLink>
              </div>
              <div className="solution-columns">
                <div>
                  <h3>Business challenge</h3>
                  <p>{item.challenge}</p>
                </div>
                <div>
                  <h3>How MFI Technologies approaches it</h3>
                  <p>{item.approach}</p>
                </div>
                <div>
                  <h3>Relevant services</h3>
                  <ul>
                    {item.services.map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Expected outcome</h3>
                  <p>{item.outcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection title="Have a business challenge that does not fit a neat category?" text="Send the context. We can shape the technology path around the actual operation." />
    </main>
  );
}
