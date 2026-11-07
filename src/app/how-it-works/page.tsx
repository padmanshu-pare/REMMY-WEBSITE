import type { Metadata } from "next";
import { CallToAction, PageIntro } from "@/components/site-ui";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "How it works",
  description: "See the REMMY product journey: save a Reel, organise the useful details, and find it later by describing what you remember.",
  alternates: { canonical: "/how-it-works" },
};

const journey = [
  ["01", "Discover something useful", "Find a Reel that teaches you something, sparks an idea or gives you a recommendation worth keeping."],
  ["02", "Share it with REMMY", "The intended experience is to submit or share a Reel reference into your personal REMMY library."],
  ["03", "Keep the reference", "REMMY is designed to keep a link or reference so you can return to the original post."],
  ["04", "Understand what is available", "If the necessary content is accessible, REMMY may be able to identify useful details. A URL alone does not guarantee access to video, audio, captions or a transcript."],
  ["05", "Make it easier to revisit", "The product direction includes concise summaries, categories and tags to give saved content helpful context."],
  ["06", "Search in your own words", "Describe the topic or detail you remember—not the exact title, creator or collection."],
  ["07", "Return to what matters", "Find the matching reference and revisit the original content or its available notes."],
];

export default function HowItWorksPage() {
  return (
    <main>
      <PageIntro
        eyebrow="The REMMY journey"
        title="From “save this” to “there it is.”"
        description="REMMY is being designed to turn saved Reels into a personal library you can search by the ideas and details you remember."
        note="Product direction, not a live service"
      />
      <section className="content-section">
        <div className="container">
          <div className="route-steps">
            {journey.map(([number, title, description], index) => (
              <Reveal key={number} delay={(index % 2) * 0.06}>
                <article className="route-step">
                  <span>STEP {number}</span>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="callout-note" style={{ marginTop: 28 }}>
            Platform access can vary. Receiving a Reel URL does not mean REMMY can access or analyse its video, audio, caption or transcript. The initial website does not process Reels.
          </div>
        </div>
      </section>
      <section className="section section-cta">
        <Reveal className="container">
          <CallToAction
            eyebrow="A clearer way to remember"
            title="The useful things deserve a way back."
            text="Explore the product vision and what REMMY is being designed to make possible."
            primaryHref="/features"
            primaryLabel="Explore features"
            secondaryHref="/faq"
            secondaryLabel="Read the FAQ"
          />
        </Reveal>
      </section>
    </main>
  );
}
