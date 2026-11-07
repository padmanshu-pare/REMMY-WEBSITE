import type { Metadata } from "next";
import { InteractiveSteps } from "@/components/interactive-steps";
import { PageIntro } from "@/components/site-ui";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Tap through the REMMY idea: save, understand, organise and find the things you want to remember.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <main>
      <PageIntro
        eyebrow="The REMMY journey"
        title="Four taps through the idea."
        description="A small interactive tour of how REMMY could help a saved Reel become easier to find."
        note="Product concept · not a live service"
      />
      <section className="content-section workflow-section">
        <div className="container">
          <InteractiveSteps />
          <p className="workflow-footnote">
            A Reel link does not guarantee access to its video, audio, caption
            or transcript. This demonstration does not process Instagram content.
          </p>
        </div>
      </section>
    </main>
  );
}
