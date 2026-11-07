import type { Metadata } from "next";
import { PageIntro } from "@/components/site-ui";

export const metadata: Metadata = {
  title: "Terms and conditions",
  description: "Read the pre-launch notice for REMMY terms and conditions.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Terms and conditions"
        title="A pre-launch note, not a contract."
        description="The REMMY website currently shares an early product concept. A real service and its terms are not available yet."
        note="Legal terms must be reviewed before launch"
      />
      <section className="content-section">
        <article className="content-narrow">
          <div className="callout-note">
            This page is not a complete set of terms and conditions and does not create service terms. Obtain qualified legal review and replace this notice before making REMMY available to users.
          </div>
          <h2>What is available</h2>
          <p>
            This website provides informational copy and visual previews of a
            proposed product. Accounts, content processing, search, subscriptions
            and other product services are not currently available here.
          </p>
          <h2>Illustrative previews</h2>
          <p>
            Sample queries, results, collections and dashboard cards are
            illustrative concepts. They are not real user content, live search
            results or evidence of a working product feature.
          </p>
          <h2>Platform access</h2>
          <p>
            Any future ability to access third-party content would depend on
            platform terms, permissions, technical access and applicable law.
            This website does not download or analyse Instagram content.
          </p>
          <h2>Before service launch</h2>
          <p>
            Complete terms should address service availability, user
            responsibilities, intellectual property, third-party services,
            limitations, termination, jurisdiction and a way to contact the
            operator. Those details have not been supplied and are not invented
            here.
          </p>
        </article>
      </section>
    </main>
  );
}
