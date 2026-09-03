import type { Metadata } from "next";
import { ButtonLink } from "@/app/components/ButtonLink";
import { CTASection } from "@/app/components/CTASection";
import { PageHero } from "@/app/components/PageHero";
import { SectionHeading } from "@/app/components/SectionHeading";
import { ServiceCard } from "@/app/components/ServiceCard";
import {
  capabilities,
  coreCapabilities,
  deliveryPrinciples,
  homeServicePreview,
  homeSolutionPreview,
  proofPoints,
  processSteps,
  transformationAreas,
  workflowProblems,
} from "@/app/data/site";

export const metadata: Metadata = {
  title: "MFI Technologies | Business Technology Solutions",
  description: "MFI Technologies designs, builds, manages and improves websites, software, business systems, point-of-sale systems, cybersecurity, IT controls and AI automation.",
};

export default function Home() {
  return (
    <main>
      <PageHero
        eyebrow="WEB / SOFTWARE / SYSTEMS / AI"
        title={
          <>
            We diagnose, build and improve <span>business technology.</span>
          </>
        }
        text="MFI Technologies helps companies turn operational friction into dependable websites, software, CRM, POS, finance workflows, reporting systems, cybersecurity practices and AI automation."
      >
        <ButtonLink href="/contact" variant="primary">
          Book a Technology Diagnostic
        </ButtonLink>
        <ButtonLink href="/services">Explore Services</ButtonLink>
      </PageHero>

      <section className="value-strip" aria-label="Core capabilities">
        <div className="container value-grid">
          {coreCapabilities.map((item) => (
            <div className="value-item" key={item.label}>
              <small>{item.label}</small>
              <strong>{item.title}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section diagnostic-section">
        <div className="container diagnostic-layout">
          <div>
            <div className="section-kicker">BUSINESS SYSTEMS DIAGNOSTIC</div>
            <h2 className="section-title">Find the work that quietly drains time, margin and focus.</h2>
          </div>
          <div className="diagnostic-copy">
            <p>
              Your team may already use modern tools, but the work tied to customers, sales, operations and reporting can still depend on manual checking, copying and chasing.
            </p>
            <p>
              MFI Technologies helps identify the costly workflow, put structure around the fix and build the system that makes the improvement stick.
            </p>
          </div>
        </div>
        <div className="container diagnostic-grid" aria-label="Common technology problems">
          {workflowProblems.map((item) => (
            <article className="diagnostic-card" key={item.label}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="container proof-grid" aria-label="MFI Technologies engagement proof points">
          {proofPoints.map((item) => (
            <div className="proof-item" key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section transformation-section">
        <div className="container transformation-layout">
          <div>
            <div className="section-kicker">TRANSFORMATION AREAS</div>
            <h2 className="section-title">Enterprise discipline for practical business technology.</h2>
            <p className="section-intro">
              MFI Technologies helps businesses connect CRM systems, database systems, point-of-sale systems, inventory workflows, finance management systems, reporting dashboards and workflow automation.
            </p>
            <div className="section-action">
              <ButtonLink href="/solutions" variant="primary">
                View Business Solutions
              </ButtonLink>
            </div>
          </div>
          <div className="transformation-grid">
            {transformationAreas.map((item) => (
              <article className="transformation-card" key={item.label}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section services">
        <div className="container">
          <SectionHeading
            eyebrow="SERVICES PREVIEW"
            title="Complete digital capability, clearly organized."
            text="Choose a focused service or bring us a broader business challenge. We shape the right combination of strategy, software, systems and support."
          />
          <div className="service-grid">
            {homeServicePreview.map((item) => (
              <ServiceCard compact code={item.code} key={item.title} summary={item.summary} title={item.title} />
            ))}
          </div>
          <div className="section-action">
            <ButtonLink href="/services" variant="dark">
              View All Services
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section solutions">
        <div className="container">
          <SectionHeading
            eyebrow="SOLUTIONS PREVIEW"
            title="Practical transformation without losing the business context."
            text="Inspired by outcome-led digital transformation firms, this site now puts the operating problem first: what needs to be built, connected, protected or improved."
          />
          <div className="solution-grid">
            {homeSolutionPreview.map((item) => (
              <article className="solution-card" key={item.title}>
                <div className="solution-label">{item.label}</div>
                <h3>{item.title}</h3>
                <p>{item.approach}</p>
              </article>
            ))}
          </div>
          <div className="section-action">
            <ButtonLink href="/solutions" variant="dark">
              Explore Solutions
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section assurance-section">
        <div className="container assurance-layout">
          <div>
            <div className="section-kicker">DELIVERY ASSURANCE</div>
            <h2 className="section-title">Built with ownership, security and continuity in mind.</h2>
            <p className="section-intro">
              The goal is not just a polished launch. It is a usable system your team can trust, understand and keep improving.
            </p>
          </div>
          <div className="assurance-grid">
            {deliveryPrinciples.map((item) => (
              <article className="assurance-item" key={item.label}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <SectionHeading
            eyebrow="HOW WE WORK"
            title="Structured delivery. Clear communication."
            text="Every engagement follows a practical path from understanding the problem to delivering and improving the solution."
          />
          <div className="process-track">
            {processSteps.map((item) => (
              <article className="process-step" key={item.number}>
                <div className="process-number">{item.number}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="section-action">
            <ButtonLink href="/process" variant="dark">
              Learn How We Work
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section about">
        <div className="container about-grid">
          <div>
            <div className="section-kicker">ABOUT MFI TECHNOLOGIES</div>
            <h2 className="section-title">Business understanding with technical execution.</h2>
          </div>
          <div className="about-copy">
            <p>MFI Technologies is a business technology company focused on helping organizations build, manage and improve their digital capabilities.</p>
            <p>Our approach connects commercial goals with practical technology, staying focused on usability, reliability, security and long-term value.</p>
            <ButtonLink href="/about" variant="primary">
              About MFI Technologies
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="tech-section" aria-label="Technology capabilities">
        <div className="container">
          <div className="tech-label">TECHNOLOGY CAPABILITIES</div>
          <div className="tech-capability-grid">
            {capabilities.map((item) => (
              <article className="tech-capability" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span>{item.tools}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
