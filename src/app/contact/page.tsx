import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/site-ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact REMMY. The current contact form is a front-end preview and does not send or store messages.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Contact"
        title="Have a thought to share?"
        description="Questions, ideas and thoughtful feedback help shape the REMMY direction."
        note="This form is not connected to a message service"
      />
      <section className="content-section">
        <div className="container form-layout">
          <div className="form-aside">
            <h2>Start a conversation.</h2>
            <p>
              There is no support email or connected inbox configured yet. Use
              the preview form to see its validation, but please do not enter
              sensitive information: submissions are not sent or stored.
            </p>
            <p>
              Before launch, this page needs a real contact destination and a
              clearly configured form service.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
