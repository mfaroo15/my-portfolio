import { ButtonLink } from "@/app/components/ButtonLink";
import { contactEmail, whatsappHref, whatsappNumber } from "@/app/data/site";

type CTASectionProps = {
  eyebrow?: string;
  title?: string;
  text?: string;
};

export function CTASection({
  eyebrow = "START A CONVERSATION",
  title = "Tell us what your business needs technology to do.",
  text = "Whether you need a website, software, ongoing support, CRM, cybersecurity, AI automation or a complete technology roadmap, let's discuss the right next step.",
}: CTASectionProps) {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="section-kicker">{eyebrow}</div>
        <h2 className="section-title">{title}</h2>
        <p className="section-intro">{text}</p>
        <div className="contact-actions">
          <ButtonLink href="/contact" variant="primary">
            Start Your Project
          </ButtonLink>
          <a className="button button-dark" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
          <a className="button button-dark" href={whatsappHref} rel="noopener noreferrer" target="_blank">
            WhatsApp {whatsappNumber}
          </a>
        </div>
      </div>
    </section>
  );
}
