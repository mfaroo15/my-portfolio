"use client";

import type { FormEvent } from "react";
import { useRef, useState } from "react";
import { contactServiceOptions } from "@/app/data/site";

const budgetRanges = ["Not sure yet", "Under $5,000", "$5,000 - $15,000", "$15,000 - $50,000", "$50,000+"];
const timelines = ["Not sure yet", "As soon as possible", "1 - 3 months", "3 - 6 months", "6+ months"];
const contactMethods = ["Email", "Phone", "Either"];
const formspreeEndpoint = "https://formspree.io/f/xkjgojzw";
const fieldLimits = {
  name: 100,
  email: 254,
  phone: 30,
  company: 150,
  description: 3000,
} as const;

function getFieldValue(formData: FormData, field: string) {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
}

function isValidSubmission(formData: FormData) {
  const name = getFieldValue(formData, "name");
  const email = getFieldValue(formData, "email");
  const phone = getFieldValue(formData, "phone");
  const company = getFieldValue(formData, "company");
  const service = getFieldValue(formData, "service");
  const budget = getFieldValue(formData, "budget");
  const timeline = getFieldValue(formData, "timeline");
  const contactMethod = getFieldValue(formData, "contactMethod");
  const description = getFieldValue(formData, "description");

  return (
    name.length > 0 &&
    name.length <= fieldLimits.name &&
    email.length <= fieldLimits.email &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    phone.length <= fieldLimits.phone &&
    company.length <= fieldLimits.company &&
    (contactServiceOptions as readonly string[]).includes(service) &&
    budgetRanges.includes(budget) &&
    timelines.includes(timeline) &&
    contactMethods.includes(contactMethod) &&
    description.length >= 20 &&
    description.length <= fieldLimits.description
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const submissionInProgress = useRef(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submissionInProgress.current) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (getFieldValue(formData, "_gotcha")) {
      setStatus("success");
      return;
    }

    if (!formspreeEndpoint || !isValidSubmission(formData)) {
      setStatus("error");
      return;
    }

    submissionInProgress.current = true;
    setStatus("submitting");

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      submissionInProgress.current = false;
    }
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <input type="hidden" name="_subject" value="Dawood Technologies Inquiry" />
      <input
        className="sr-only"
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required maxLength={fieldLimits.name} />
        </label>
        <label>
          <span>Work email</span>
          <input name="email" type="email" autoComplete="email" required maxLength={fieldLimits.email} />
        </label>
        <label>
          <span>Phone number</span>
          <input name="phone" type="tel" autoComplete="tel" maxLength={fieldLimits.phone} />
        </label>
        <label>
          <span>Company name</span>
          <input name="company" type="text" autoComplete="organization" maxLength={fieldLimits.company} />
        </label>
        <label>
          <span>Service required</span>
          <select name="service" required defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {contactServiceOptions.map((service) => (
              <option value={service} key={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Budget range</span>
          <select name="budget" required defaultValue="Not sure yet">
            {budgetRanges.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Project timeline</span>
          <select name="timeline" required defaultValue="Not sure yet">
            {timelines.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Preferred contact method</span>
          <select name="contactMethod" required defaultValue="Email">
            {contactMethods.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label>
          <span>What does your business need technology to do?</span>
        <textarea
          name="description"
          rows={7}
          required
          minLength={20}
          maxLength={fieldLimits.description}
        />
      </label>
      <button className="button button-primary" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit Inquiry"}
      </button>
      <p className="form-note" role="status" aria-live="polite">
        {status === "success"
          ? "Thank you. Your inquiry has been sent."
          : status === "error"
            ? "The form could not be sent. Please try again or email us directly."
            : "Share the business context and we will follow up with the right next step."}
      </p>
    </form>
  );
}
