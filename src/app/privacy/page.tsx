import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/site-ui";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Read the current pre-launch privacy information for the REMMY public website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Privacy"
        title="A clear note about this early website."
        description="This page describes the current front-end preview, not a complete policy for a future REMMY service."
        note="Pre-launch information · review before public launch"
      />
      <section className="content-section">
        <article className="content-narrow">
          <div className="callout-note">
            This is not a complete privacy policy or legal advice. A qualified review and service-specific policy are needed before accounts, analytics, contact submissions or content processing are introduced.
          </div>
          <h2>What this website does</h2>
          <p>
            The current website is a public product-information and interface
            preview. It does not provide user accounts, save Reels, run natural
            language search, or process submitted content.
          </p>
          <h2>Forms and information</h2>
          <p>
            The contact, login and sign-up forms are front-end demonstrations
            only. They validate fields in the browser to illustrate the planned
            experience, but do not send or store the entered values.
          </p>
          <h2>Analytics and cookies</h2>
          <p>
            No analytics or advertising service is configured in this project.
            Hosting infrastructure may process technical request information;
            review the hosting provider&apos;s own privacy documentation before
            deployment.
          </p>
          <h2>Future changes</h2>
          <p>
            Real accounts, integrations, analytics, form delivery or content
            processing would change what information is handled. A complete,
            accurate privacy policy must be written and reviewed before any of
            those features launch.
          </p>
          <h2>Contact</h2>
          <p>
            A support email has not been provided yet. The preview form on the
            {" "}<Link className="text-link" href="/contact">contact page</Link> is not connected and cannot receive messages.
          </p>
        </article>
      </section>
    </main>
  );
}
