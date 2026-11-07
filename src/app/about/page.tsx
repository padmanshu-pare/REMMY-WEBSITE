import type { Metadata } from "next";
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
        eyebrow="A small idea with a familiar feeling"
        title="Built for everything you don't want to forget."
        description="You find something useful, save it for later, and trust your future self to remember where it went. REMMY begins with that everyday gap between collecting and recalling."
      />
      <section className="content-section">
        <div className="content-narrow">
          <Reveal>
            <Eyebrow>The problem is the pile</Eyebrow>
            <h2>Saving is easy. Coming back is the hard part.</h2>
            <p>
              A saved folder can hold hundreds of good ideas, but it does not
              always help you find the one you need. The creator, caption or
              collection name may be long forgotten. What stays with you is
              usually the idea itself.
            </p>
            <p>
              REMMY is an independent product concept exploring a more human way
              to retrieve those ideas: describe what you remember, then return
              to the useful thing you saved.
            </p>
          </Reveal>
          <Reveal>
            <div className="memory-card" style={{ minHeight: 270, margin: "48px 0" }}>
              <span className="memory-label">The REMMY philosophy</span>
              <p className="display-heading" style={{ maxWidth: 560, padding: "30px", textAlign: "center" }}>
                Search by what you remember, not where you saved it.
              </p>
              <span className="memory-caption">SAVE TODAY. FIND TOMORROW.</span>
            </div>
          </Reveal>
          <Reveal>
            <Eyebrow>Start with what&apos;s useful</Eyebrow>
            <h2>Make room for curiosity, not more scrolling.</h2>
            <p>
              The first product focus is Instagram Reels because they are a
              familiar place to discover tips, explainers, recipes, tools and
              recommendations. The larger vision is a personal memory that helps
              useful discoveries stay useful.
            </p>
            <p>
              REMMY is still taking shape. There are no live accounts, search
              tools or content-processing services on this website, and we
              won&apos;t invent a launch story or promise capabilities that
              aren&apos;t here yet.
            </p>
            <Link className="text-link" href="/how-it-works">
              Explore the product journey <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="section section-cta">
        <Reveal className="container">
          <CallToAction
            eyebrow="Save today. Find tomorrow."
            title="A better memory starts with a better question."
            text="See how REMMY is thinking about the things you save."
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
