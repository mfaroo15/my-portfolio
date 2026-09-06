import type { Metadata } from "next";
import { ContactForm } from "@/app/contact/ContactForm";
import { PageHero } from "@/app/components/PageHero";
import { contactEmail } from "@/app/data/site";

export const metadata: Metadata = {
  title: "Start a Project | MFI Technologies",
  description: "Contact MFI Technologies to discuss websites, software, POS and retail systems, finance management systems, cybersecurity, security audits, IT controls, infrastructure or automation.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="START A PROJECT"
        title="Tell us what your business needs technology to do."
        text="Share the project context, timeline and service area. We will review the details and follow up with the right next step."
      />

      <section className="section contact-page">
        <div className="container contact-layout">
          <div>
            <div className="section-kicker">PROJECT INQUIRY</div>
            <h2 className="section-title">Start with the business problem.</h2>
            <p className="section-intro">Use the form to prepare a complete inquiry, or email directly if that is easier.</p>
            <a className="contact-email" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
