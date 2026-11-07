"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

export function ContactForm() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("This form is a preview and is not connected. Nothing was sent or stored.");
  }

  return (
    <form className="site-form" onSubmit={handleSubmit} onInput={() => setNotice("")}>
      <div className="form-field">
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" autoComplete="name" required maxLength={100} />
      </div>
      <div className="form-field">
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} />
      </div>
      <div className="form-field">
        <label htmlFor="contact-subject">Subject</label>
        <input id="contact-subject" name="subject" required maxLength={120} />
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" required minLength={10} maxLength={3000} />
      </div>
      <button className="button button-primary" type="submit">
        Send message <ArrowUpRight size={16} aria-hidden="true" />
      </button>
      {notice && <p className="form-status" role="status">{notice}</p>}
      <span className="form-disclaimer">
        The form is not connected to a service. Please do not enter sensitive information.
      </span>
    </form>
  );
}
