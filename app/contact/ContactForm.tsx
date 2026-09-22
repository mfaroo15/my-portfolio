"use client";

import type { FormEvent } from "react";
import { useRef, useState } from "react";
import Script from "next/script";
import { contactServiceOptions } from "@/app/data/site";

const budgetRanges = ["Not sure yet", "Under $5,000", "$5,000 - $15,000", "$15,000 - $50,000", "$50,000+"];
const timelines = ["Not sure yet", "As soon as possible", "1 - 3 months", "3 - 6 months", "6+ months"];
const contactMethods = ["Email", "Phone", "Either"];
const formspreeEndpoint = "https://formspree.io/f/xkjgojzw";
const recaptchaSiteKey = "6LfC6sktAAAAAPCa1g7KfcnQkP7bkJ-y_oWfdNhU";
const recaptchaMessage = "Please complete the reCAPTCHA verification.";
const submissionTimeoutMs = 15_000;
const fieldLimits = {
  name: 100,
  email: 254,
  phone: 30,
  company: 150,
  description: 3000,
} as const;

type ReCaptchaApi = {
  getResponse: (widgetId?: number) => string;
  render: (
    container: HTMLElement,
    parameters: {
      sitekey: string;
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
    },
  ) => number;
  reset: (widgetId?: number) => void;
};

declare global {
  interface Window {
    grecaptcha?: ReCaptchaApi;
  }
}

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

function logSubmissionEvent(event: string, details?: Record<string, unknown>) {
  if (process.env.NODE_ENV === "development") {
    console.info(`[contact form] ${event}`, details ?? {});
  }
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [recaptchaError, setRecaptchaError] = useState("");
  const submissionInProgress = useRef(false);
  const recaptchaContainer = useRef<HTMLDivElement>(null);
  const recaptchaToken = useRef("");
  const recaptchaWidgetId = useRef<number | null>(null);

  const renderRecaptcha = () => {
    if (!recaptchaContainer.current || !window.grecaptcha || recaptchaWidgetId.current !== null) {
      return;
    }

    recaptchaWidgetId.current = window.grecaptcha.render(recaptchaContainer.current, {
      sitekey: recaptchaSiteKey,
      callback: (token) => {
        recaptchaToken.current = token;
        setRecaptchaError("");
      },
      "expired-callback": () => {
        recaptchaToken.current = "";
        setRecaptchaError(recaptchaMessage);
      },
      "error-callback": () => {
        recaptchaToken.current = "";
        setRecaptchaError("reCAPTCHA verification failed. Please try again.");
      },
    });
  };

  const resetRecaptcha = (message = "") => {
    recaptchaToken.current = "";
    if (recaptchaWidgetId.current !== null) {
      window.grecaptcha?.reset(recaptchaWidgetId.current);
    }
    setRecaptchaError(message);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submissionInProgress.current) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!isValidSubmission(formData)) {
      logSubmissionEvent("validation rejected");
      setStatus("error");
      return;
    }

    const recaptchaResponse =
      recaptchaToken.current ||
      (recaptchaWidgetId.current !== null
        ? window.grecaptcha?.getResponse(recaptchaWidgetId.current) ?? ""
        : "");

    if (!recaptchaResponse) {
      setRecaptchaError(recaptchaMessage);
      return;
    }

    formData.set("g-recaptcha-response", recaptchaResponse);

    submissionInProgress.current = true;
    setStatus("submitting");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), submissionTimeoutMs);

    try {
      logSubmissionEvent("request started");
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        signal: controller.signal,
        headers: {
          Accept: "application/json",
        },
      });

      logSubmissionEvent("response received", { status: response.status });

      if (!response.ok) {
        try {
          await response.json();
        } catch {
          // Formspree may return a non-JSON error page; the visitor still gets the retry state.
        }
        resetRecaptcha(recaptchaMessage);
        setStatus("error");
        return;
      }

      form.reset();
      resetRecaptcha();
      setStatus("success");
      logSubmissionEvent("confirmed success");
    } catch (error) {
      logSubmissionEvent("request failed", {
        reason: error instanceof DOMException && error.name === "AbortError" ? "timeout" : "network",
      });
      resetRecaptcha(recaptchaMessage);
      setStatus("error");
    } finally {
      window.clearTimeout(timeout);
      submissionInProgress.current = false;
    }
  };

  return (
    <form
      className="contact-form"
      onSubmit={onSubmit}
      onInput={() => {
        if (status === "success" || status === "error") {
          setStatus("idle");
        }
      }}
    >
      <input type="hidden" name="_subject" value="Dawood Technologies Inquiry" />
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
      <div className="recaptcha-field">
        <div ref={recaptchaContainer} />
        {recaptchaError ? (
          <p className="recaptcha-error" role="alert">
            {recaptchaError}
          </p>
        ) : null}
      </div>
      <button className="button button-primary" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit Inquiry"}
      </button>
      <p className="form-note" role="status" aria-live="polite">
        {status === "success"
          ? "Thank you. Your inquiry has been sent."
          : status === "error"
            ? "We couldn't send your inquiry. Please try again."
            : "Share the business context and we will follow up with the right next step."}
      </p>
      <Script
        id="google-recaptcha"
        src="https://www.google.com/recaptcha/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={renderRecaptcha}
        onError={() => setRecaptchaError("reCAPTCHA could not load. Please try again.")}
      />
    </form>
  );
}
