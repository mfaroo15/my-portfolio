"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { contactEmail, services } from "@/app/data/site";

const budgetRanges = ["Not sure yet", "Under $5,000", "$5,000 - $15,000", "$15,000 - $50,000", "$50,000+"];
const timelines = ["Not sure yet", "As soon as possible", "1 - 3 months", "3 - 6 months", "6+ months"];
const contactMethods = ["Email", "Phone", "Either"];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const lines = [
      `Name: ${formData.get("name")}`,
      `Work email: ${formData.get("email")}`,
      `Phone: ${formData.get("phone") || "Not provided"}`,
      `Company: ${formData.get("company") || "Not provided"}`,
      `Service required: ${formData.get("service")}`,
      `Budget range: ${formData.get("budget")}`,
      `Project timeline: ${formData.get("timeline")}`,
      `Preferred contact method: ${formData.get("contactMethod")}`,
      "",
      "Project description:",
      `${formData.get("description")}`,
    ];

    const subject = encodeURIComponent("MFI Technologies Project Inquiry");
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setStatus("success");
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
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
            {services.map((service) => (
              <option value={service.title} key={service.title}>
                {service.title}
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
      <button className="button button-primary" type="submit">
        Submit Project Inquiry
      </button>
      <p className="form-note" role="status" aria-live="polite">
        {status === "success"
          ? "Your email app should open with the project inquiry filled in. Send the email from there to complete the inquiry."
          : "This form uses a mailto fallback because no backend submission service is configured in the project yet."}
      </p>
    </form>
  );
}
