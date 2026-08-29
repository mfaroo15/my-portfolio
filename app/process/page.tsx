import type { Metadata } from "next";
import { ButtonLink } from "@/app/components/ButtonLink";
import { CTASection } from "@/app/components/CTASection";
import { PageHero } from "@/app/components/PageHero";
import { processSteps } from "@/app/data/site";

export const metadata: Metadata = {
  title: "Process | MFI Technologies",
  description: "Learn how MFI Technologies approaches discovery, planning, design, delivery and continuous improvement.",
};

export default function ProcessPage() {
  return (
    <main>
      <PageHero
        eyebrow="HOW WE WORK"
        title="Structured delivery. Clear communication."
        text="MFI Technologies follows a practical delivery process that keeps business goals, users, technical decisions and long-term support connected from the start."
      >
        <ButtonLink href="/contact" variant="primary">
          Discuss Your Project
        </ButtonLink>
      </PageHero>

      <section className="section process-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="section-kicker">DELIVERY PROCESS</div>
              <h2 className="section-title">A clear path from business problem to working solution.</h2>
            </div>
            <p className="section-intro">
              Each engagement is shaped around the real operating need first, then translated into a practical plan, build path and improvement cycle.
            </p>
          </div>
          <div className="process-track">
            {processSteps.map((item) => (
              <article className="process-step" key={item.number}>
                <div className="process-number">{item.number}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready to shape the next step?" text="Share the business need and MFI Technologies can help define the practical path forward." />
    </main>
  );
}
