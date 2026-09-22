import { ButtonLink } from "@/app/components/ButtonLink";
import { CTASection } from "@/app/components/CTASection";
import { PageHero } from "@/app/components/PageHero";
import { locations, values } from "@/app/data/site";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description: "Learn about Dawood Technologies, its business-first, risk-aware technology approach, values, markets served and way of working.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="ABOUT Dawood Technologies"
        title="Business understanding with technical execution."
        text="Dawood Technologies is a business technology company focused on helping organizations build, manage and improve their digital capabilities."
      >
        <ButtonLink href="/contact" variant="primary">
          Start a Conversation
        </ButtonLink>
      </PageHero>

      <section className="section about-page">
        <div className="container about-grid">
          <div>
            <div className="section-kicker">WHAT WE DO</div>
            <h2 className="section-title">Technology that serves the business first.</h2>
          </div>
          <div className="about-copy light-copy">
            <p>Dawood Technologies helps businesses plan, build and operate the digital systems they rely on, including websites, software, POS, finance workflows, CRM, internal systems, cybersecurity, IT controls, reporting and automation.</p>
            <p>The mission is to connect business goals with technology that is practical, secure, understandable and valuable over the long term.</p>
            <p>Dawood Technologies approaches technology as part of the wider business operation. Our work considers systems, people, workflows, access, documentation, security, controls, reporting, and long-term maintainability.</p>
            <p>Recommendations are based on operational requirements rather than using technology merely for appearance.</p>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="section-kicker">HOW THE COMPANY WORKS</div>
              <h2 className="section-title">Clear thinking before implementation.</h2>
            </div>
            <p className="section-intro">Every engagement starts by understanding the business, users, constraints and desired outcome. From there, Dawood Technologies defines a practical plan and delivers in clear steps.</p>
          </div>
          <div className="value-card-grid">
            {values.map((item) => (
              <article className="value-card" key={item}>
                <h3>{item}</h3>
                <p>
                  {item === "Clarity" && "Clear recommendations, plain communication and structured decisions."}
                  {item === "Reliability" && "Systems, support and delivery practices built for dependable use."}
                  {item === "Security" && "Risk awareness, access discipline, audits and safeguards built into the work."}
                  {item === "Practical Innovation" && "Modern tools applied where they solve real business problems."}
                  {item === "Long-Term Value" && "Technology choices that can be maintained, improved and understood over time."}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section locations-section">
        <div className="container">
          <div className="section-kicker">MARKETS AND LOCATIONS SERVED</div>
          <h2 className="section-title">Support across key business markets.</h2>
          <p className="section-intro">These are presented as markets and locations served, not as claims of physical offices in every location.</p>
          <div className="locations">
            {locations.map((item) => (
              <span className="location" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
