"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { contactServiceOptions } from "@/app/data/site";

const budgetRanges = ["Not sure yet", "Under $5,000", "$5,000 - $15,000", "$15,000 - $50,000", "$50,000+"];
const timelines = ["Not sure yet", "As soon as possible", "1 - 3 months", "3 - 6 months", "6+ months"];
const contactMethods = ["Email", "Phone", "WhatsApp", "Either"];
const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!formspreeEndpoint) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: new FormData(form),
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
    }
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <input type="hidden" name="_subject" value="MFI Technologies Project Inquiry" />
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>Work email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>Phone number</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          <span>Company name</span>
          <input name="company" type="text" autoComplete="organization" />
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
        <span>Project description</span>
        <textarea name="description" rows={7} required minLength={20} />
      </label>
      <button className="button button-primary" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit Project Inquiry"}
      </button>
      <p className="form-note" role="status" aria-live="polite">
        {status === "success"
          ? "Thank you. Your inquiry has been sent."
          : status === "error"
            ? "The form could not be sent. Please try again or email us directly."
            : "Share your project details and we will reply as soon as possible."}
      </p>
    </form>
  );
}
