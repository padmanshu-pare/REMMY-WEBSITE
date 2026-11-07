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
        title="Chaar taps. Scene clear."
        description="Dekho kaise ek saved Reel ko baad mein dhoondhna thoda easy ho sakta hai."
        note="Abhi sirf product demo hai"
      />
      <section className="content-section workflow-section">
        <div className="container">
          <InteractiveSteps />
          <p className="workflow-footnote">
            Reel ka link milne se video, audio ya caption ka access pakka nahi hota.
            Aur haan—ye demo Instagram content process nahi karta.
          </p>
        </div>
      </section>
    </main>
  );
}
