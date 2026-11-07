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
        title="Four taps. Scene clear."
        description="See how a saved Reel could be easier to find later—bas, no endless scrolling."
        note="A product demo, for now"
      />
      <section className="content-section workflow-section">
        <div className="container">
          <InteractiveSteps />
          <p className="workflow-footnote">
            A Reel link doesn&apos;t guarantee access to its video, audio or
            caption. Also, this demo does not process Instagram content.
          </p>
        </div>
      </section>
    </main>
  );
}
