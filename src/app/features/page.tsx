import type { Metadata } from "next";
import { FeatureExplorer } from "@/components/feature-explorer";
import { PageIntro } from "@/components/site-ui";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore the REMMY product vision: find saved ideas, organise context and build a personal memory.",
  alternates: { canonical: "/features" },
};

export default function FeaturesPage() {
  return (
    <main>
      <PageIntro
        eyebrow="A little more than a bookmark"
        title="Pick an idea. See where it goes."
        description="Tap through the things REMMY is being designed to make easier."
        note="Planned product direction · not live features"
      />
      <section className="content-section feature-explorer-section">
        <div className="container">
          <FeatureExplorer />
        </div>
      </section>
    </main>
  );
}
