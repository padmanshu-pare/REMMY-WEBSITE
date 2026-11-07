import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CallToAction, Eyebrow, PageIntro } from "@/components/site-ui";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About REMMY",
  description: "Meet the idea behind REMMY: a personal memory for the useful things you save, built around finding them again.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="A familiar little problem"
        title="Saved it. Now where was it?"
        description="You save a useful Reel, then it disappears into a forest of saves. REMMY’s idea: find it again by remembering what it was about."
      />
      <section className="content-section">
        <div className="content-narrow">
          <Reveal>
            <Eyebrow>Saving is easy. Finding it? Uff.</Eyebrow>
            <h2>Who has time to scroll forever?</h2>
            <p>
              Your saves fill up with tutorials, recipes and places. The
              creator’s name? Gone. The caption? Also gone. Bas, the idea sticks.
            </p>
            <p>
              REMMY is an independent product idea: describe what you remember
              and get back to the useful thing you saved.
            </p>
          </Reveal>
          <Reveal>
            <div className="memory-card" style={{ minHeight: 270, margin: "48px 0" }}>
              <span className="memory-label">The REMMY philosophy</span>
              <Image
                className="about-brand-image"
                src="/remmy-brand.png"
                alt="REMMY koala mascot with the Save today. Find tomorrow. tagline"
                width={768}
                height={768}
              />
            </div>
          </Reveal>
          <Reveal>
            <Eyebrow>Stay curious. Scroll less.</Eyebrow>
            <h2>Useful things, right when you need them.</h2>
            <p>
              The first focus is Instagram Reels—a familiar place for tips,
              recipes, places and recommendations. Badi soch? Keep useful
              discoveries useful.
            </p>
            <p>
              REMMY is still taking shape. This site has no live accounts, real
              search or Reel processing. No fake flex about features that
              aren&apos;t here yet.
            </p>
            <Link className="text-link" href="/how-it-works">
              See how the idea works <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="section section-cta">
        <Reveal className="container">
          <CallToAction
            eyebrow="Save today. Find tomorrow."
            title="Future-you will say thanks."
            text="Take a look at the idea behind REMMY."
            primaryHref="/how-it-works"
            primaryLabel="How it works"
            secondaryHref="/contact"
            secondaryLabel="Get in touch"
          />
        </Reveal>
      </section>
    </main>
  );
}
