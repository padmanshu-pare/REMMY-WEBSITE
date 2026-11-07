import type { Metadata } from "next";
import { ArrowDown, ArrowRight, ArrowUpRight, Bookmark, Layers3, Search } from "lucide-react";
import Link from "next/link";
import { InteractiveDemo } from "@/components/interactive-demo";
import { InteractiveSteps } from "@/components/interactive-steps";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/site-ui";

export const metadata: Metadata = {
  title: "REMMY — Save today. Find tomorrow.",
  description:
    "Explore REMMY: a personal memory for the useful things you save. Search by what you remember, not where you saved it.",
  alternates: { canonical: "/" },
};

const highlights = [
  {
    title: "Save with context",
    description: "Keep the useful idea attached to the thing you saved.",
    icon: Bookmark,
  },
  {
    title: "Organise naturally",
    description: "Bring recipes, tools, places and ideas into one library.",
    icon: Layers3,
  },
  {
    title: "Find by memory",
    description: "Describe what stuck with you—not a folder name.",
    icon: Search,
  },
];

export default function Home() {
  return (
    <main>
      <section className="interactive-hero">
        <div className="hero-glow hero-glow--left" aria-hidden="true" />
        <div className="container interactive-hero-grid">
          <Reveal className="interactive-hero-copy">
            <Eyebrow>Your saves, with a better memory</Eyebrow>
            <h1>
              Keep the find.
              <br />
              <span>Lose the scroll.</span>
            </h1>
            <p>
              REMMY is a fresh take on the things you save. Explore how it could
              help you find them again.
            </p>
            <Link className="button button-primary" href="#try-it">
              Try the demo <ArrowDown size={17} aria-hidden="true" />
            </Link>
            <span className="hero-demo-note">A playful preview · no account needed</span>
          </Reveal>
          <Reveal className="hero-demo-wrap" delay={0.1}>
            <InteractiveDemo compact />
          </Reveal>
          <a className="hero-scroll-cue" href="#try-it" aria-label="Scroll to the interactive demo">
            <span>SCROLL TO PLAY</span><ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="interactive-demo-section" id="try-it">
        <div className="container">
          <Reveal className="interactive-section-heading">
            <Eyebrow>Go on, find something</Eyebrow>
            <h2>Search your memory.</h2>
            <p>Pick a thought. Save a sample. See how the pieces come together.</p>
          </Reveal>
          <InteractiveDemo />
        </div>
      </section>

      <section className="interactive-steps-section" id="how-it-works">
        <div className="container interactive-steps-grid">
          <Reveal>
            <Eyebrow>A few easy steps</Eyebrow>
            <h2>From “save this” to “there it is.”</h2>
            <p>Tap through the idea behind REMMY.</p>
            <Link className="text-link" href="/how-it-works">
              See the full journey <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
          <InteractiveSteps compact />
        </div>
      </section>

      <section className="interactive-features-section" id="features">
        <div className="container">
          <Reveal className="interactive-section-heading">
            <Eyebrow>Less hunting, more remembering</Eyebrow>
            <h2>A little more than a bookmark.</h2>
          </Reveal>
          <div className="interactive-highlight-grid">
            {highlights.map(({ title, description, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 0.06}>
                <article className="interactive-highlight">
                  <span className="interactive-highlight-icon"><Icon size={21} strokeWidth={1.7} aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Link className="text-link feature-explore-link" href="/features">
            Explore all planned features <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="interactive-faq-section" id="faq">
        <div className="container interactive-faq-grid">
          <Reveal>
            <Eyebrow>Good to know</Eyebrow>
            <h2>Curious? Fair.</h2>
            <p>REMMY is a concept in progress. Here are the honest answers.</p>
            <Link className="text-link" href="/faq">
              All the FAQs <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
          <div className="interactive-faq-list">
            <details className="faq-item">
              <summary>Can I use REMMY today?<span aria-hidden="true">+</span></summary>
              <p>Not yet. This site is a product preview; accounts and search are not live.</p>
            </details>
            <details className="faq-item">
              <summary>Can REMMY read every Reel?<span aria-hidden="true">+</span></summary>
              <p>No. Access to a Reel’s video, audio, caption or transcript can vary.</p>
            </details>
            <details className="faq-item">
              <summary>Is this demo using AI?<span aria-hidden="true">+</span></summary>
              <p>No. It uses a few local sample cards to demonstrate the idea. Nothing is sent to a service.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="interactive-cta-section">
        <Reveal className="container">
          <div className="interactive-cta">
            <div>
              <Eyebrow>SAVE TODAY. FIND TOMORROW.</Eyebrow>
              <h2>A better place for your “I’ll need that later.”</h2>
            </div>
            <Link className="button button-primary" href="/about">
              Meet the idea <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
