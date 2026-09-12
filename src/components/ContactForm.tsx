"use client";

import { useId, useState, type FormEvent } from "react";
import { Button } from "@/components/Button";
import { trackEvent } from "@/lib/analytics";

const projectTypes = [
  "Solar",
  "Battery storage",
  "Critical power",
  "Electrical works",
  "Inspection & compliance",
  "Maintenance",
  "Consultancy",
  "Solar pumping",
  "Other",
] as const;

const contactMethods = ["Phone call", "WhatsApp", "Email"] as const;

const fieldClass =
  "border-border bg-bg-elevated text-ink focus:border-accent focus:ring-accent/20 w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition focus:ring-2";

const labelClass = "font-display text-ink mb-1.5 block text-sm font-semibold";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const formId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "Form is not connected yet. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to your environment.",
      );
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("botcheck")) {
      setStatus("success");
      form.reset();
      return;
    }

    const payload = {
      access_key: accessKey,
      subject: "San Marina — site assessment request",
      from_name: "San Marina Website",
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      location: String(formData.get("location") ?? ""),
      project_type: String(formData.get("project_type") ?? ""),
      monthly_bill: String(formData.get("monthly_bill") ?? ""),
      existing_solar: String(formData.get("existing_solar") ?? ""),
      preferred_contact: String(formData.get("preferred_contact") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        setStatus("error");
        setErrorMessage(
          result.message ??
            "Something went wrong. Please try again or email us.",
        );
        return;
      }

      setStatus("success");
      form.reset();
      trackEvent("site_assessment_submitted", {
        project_type: payload.project_type,
        location: payload.location,
      });
    } catch {
      setStatus("error");
      setErrorMessage(
        "Could not send right now. Please try again or email us directly.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className="border-accent/30 bg-accent/5 rounded-xl border p-6 sm:p-8"
        role="status"
        aria-live="polite"
      >
        <h3 className="font-display text-ink text-lg font-semibold">
          Thank you — we received your request.
        </h3>
        <p className="text-muted mt-2 text-sm leading-relaxed text-pretty">
          Our team will review your details and get back to you shortly. If it’s
          urgent, email us and we’ll prioritise your message.
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another request
        </Button>
      </div>
    );
  }

  return (
    <form
      id={formId}
      onSubmit={onSubmit}
      className="grid gap-4 sm:grid-cols-2"
      noValidate={false}
      aria-describedby={status === "error" ? `${formId}-error` : undefined}
    >
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="sm:col-span-1">
        <label htmlFor={`${formId}-name`} className={labelClass}>
          Full name
        </label>
        <input
          id={`${formId}-name`}
          name="name"
          type="text"
          required
          autoComplete="name"
          className={fieldClass}
          placeholder="Jane Wanjiku"
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor={`${formId}-phone`} className={labelClass}>
          Phone
        </label>
        <input
          id={`${formId}-phone`}
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className={fieldClass}
          placeholder="+254 7…"
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor={`${formId}-email`} className={labelClass}>
          Email
        </label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
          placeholder="you@example.com"
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor={`${formId}-location`} className={labelClass}>
          Location
        </label>
        <input
          id={`${formId}-location`}
          name="location"
          type="text"
          required
          autoComplete="address-level2"
          className={fieldClass}
          placeholder="Kisumu, Kenya"
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor={`${formId}-project`} className={labelClass}>
          Project type
        </label>
        <select
          id={`${formId}-project`}
          name="project_type"
          required
          className={fieldClass}
          defaultValue=""
        >
          <option value="" disabled>
            Select a project type
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor={`${formId}-bill`} className={labelClass}>
          Approx. monthly electricity bill
        </label>
        <input
          id={`${formId}-bill`}
          name="monthly_bill"
          type="text"
          className={fieldClass}
          placeholder="e.g. KES 10,000"
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor={`${formId}-solar`} className={labelClass}>
          Existing solar system?
        </label>
        <select
          id={`${formId}-solar`}
          name="existing_solar"
          className={fieldClass}
          defaultValue="No"
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
          <option value="Not sure">Not sure</option>
        </select>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor={`${formId}-prefer`} className={labelClass}>
          Preferred contact method
        </label>
        <select
          id={`${formId}-prefer`}
          name="preferred_contact"
          required
          className={fieldClass}
          defaultValue=""
        >
          <option value="" disabled>
            How should we reach you?
          </option>
          {contactMethods.map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor={`${formId}-message`} className={labelClass}>
          Tell us what you need
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          rows={4}
          className={`${fieldClass} resize-y`}
          placeholder="Describe your site, goals, or challenges…"
        />
      </div>

      {status === "error" ? (
        <p
          id={`${formId}-error`}
          className="text-sm text-red-700 sm:col-span-2"
          role="alert"
        >
          {errorMessage}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted text-xs leading-relaxed">
          Submissions are delivered to our inbox. We’ll only use your details to
          respond to this request.
        </p>
        <Button
          type="submit"
          className="w-full sm:w-auto"
          disabled={status === "submitting"}
          aria-busy={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Request a site assessment"}
        </Button>
      </div>
    </form>
  );
}
