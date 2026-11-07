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
        eyebrow="Bookmarks se thoda aage"
        title="Koi idea chuno. Aage dekho."
        description="Tap karke dekho—REMMY kis cheez ko thoda less messy bana sakta hai."
        note="Abhi product idea hai, live feature nahi"
      />
      <section className="content-section feature-explorer-section">
        <div className="container">
          <FeatureExplorer />
        </div>
      </section>
    </main>
  );
}
