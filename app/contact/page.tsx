import { ContactForm } from "@/app/contact/ContactForm";
import { contactPhone, contactPresence } from "@/app/data/site";
import { createPageMetadata } from "@/app/lib/metadata";

export const metadata = createPageMetadata({
  title: "Let's Talk",
  description: "Contact Dawood Technologies about technology consulting, software, cloud, enterprise systems, data, AI, cybersecurity or managed technology.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="section contact-page">
        <div className="container contact-layout">
          <div className="contact-primary">
            <header className="contact-intro">
              <p className="section-kicker">CONTACT</p>
              <h1>Let&apos;s talk.</h1>
              <p>Tell us about your organization, technology environment, or what you&apos;re looking to build. Our team will get back to you shortly.</p>
            </header>
            <ContactForm />
          </div>

          <aside className="contact-information" aria-label="Contact information and geographic presence">
            <section className="contact-information-block">
              <p className="section-kicker">CONTACT INFORMATION</p>
              <a className="contact-phone" href={contactPhone.href}>{contactPhone.display}</a>
              <p>We&apos;re available to discuss your requirements and answer any questions.</p>
            </section>

            <section className="contact-information-block">
              <p className="section-kicker">OUR PRESENCE</p>
              <div className="contact-presence">
                {contactPresence.map((location) => <span key={location}>{location}</span>)}
              </div>
            </section>

            <section className="contact-information-block">
              <p className="section-kicker">REMOTE ENGAGEMENT</p>
              <h2>Built to work<br />across locations.</h2>
              <p>Our team supports remote and distributed engagements, working with organizations across locations and time zones.</p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
