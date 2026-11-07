import type { Metadata } from "next";
import { ArrowDown, ArrowRight, ArrowUpRight, Bookmark, Layers3, Search } from "lucide-react";
import Link from "next/link";
import { InteractiveDemo } from "@/components/interactive-demo";
import { InteractiveSteps } from "@/components/interactive-steps";
import { FloatingMemoryPrompts } from "@/components/floating-memory-prompts";
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
    title: "Save the good stuff",
    description: "Keep the link and the idea together.",
    icon: Bookmark,
    feature: "library",
  },
  {
    title: "Keep it organised",
    description: "Recipes, tools, places—sab ek jagah.",
    icon: Layers3,
    feature: "organisation",
  },
  {
    title: "Find it from a clue",
    description: "No folder names. Just describe what you remember.",
    icon: Search,
    feature: "search",
  },
];

export default function Home() {
  return (
    <main>
      <section className="interactive-hero">
        <div className="hero-glow hero-glow--left" aria-hidden="true" />
        <div className="hero-scribble hero-scribble--one" aria-hidden="true">✳</div>
        <div className="hero-scribble hero-scribble--two" aria-hidden="true">✴</div>
        <div className="container interactive-hero-grid">
          <FloatingMemoryPrompts />
          <Reveal className="interactive-hero-copy">
            <Eyebrow>Saved it. Now where was it?</Eyebrow>
            <h1>
              Find it again.
              <br />
              <span>Scroll kyun karna?</span>
            </h1>
            <p>
              “Where was that pasta Reel?” Just describe what you remember.
              That&apos;s the REMMY idea, bhai.
            </p>
            <Link className="button button-primary" href="#try-it">
              Try the demo <ArrowDown size={17} aria-hidden="true" />
            </Link>
            <span className="hero-demo-note">Just a sample demo—not real search. Chill.</span>
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
            <Eyebrow>Give it a go</Eyebrow>
            <h2>What do you remember?</h2>
            <p>Type a clue or pick a sample. Save it if you like—demo mein hi.</p>
          </Reveal>
          <InteractiveDemo />
        </div>
      </section>

      <section className="interactive-steps-section" id="how-it-works">
        <div className="container interactive-steps-grid">
          <Reveal>
            <Eyebrow>Simple by design</Eyebrow>
            <h2>From saved to found.</h2>
            <p>Four simple steps. No endless scrolling.</p>
            <Link className="text-link" href="/how-it-works">
              See how it works <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
          <InteractiveSteps compact />
        </div>
      </section>

      <section className="interactive-features-section" id="features">
        <div className="container">
          <Reveal className="interactive-section-heading">
            <Eyebrow>A little more than bookmarks</Eyebrow>
            <h2>Useful things, right when you need them.</h2>
          </Reveal>
          <div className="interactive-highlight-grid">
            {highlights.map(({ title, description, icon: Icon, feature }, index) => (
              <Reveal key={title} delay={index * 0.06}>
                <Link className="interactive-highlight" href={`/features#feature-${feature}`}>
                  <span className="interactive-highlight-icon"><Icon size={21} strokeWidth={1.7} aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="highlight-explore">Take a look <ArrowUpRight size={15} aria-hidden="true" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Link className="text-link feature-explore-link" href="/features">
            Explore all the ideas <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="interactive-faq-section" id="faq">
        <div className="container interactive-faq-grid">
          <Reveal>
            <Eyebrow>Quick answers</Eyebrow>
            <h2>A few things you might be wondering.</h2>
            <p>Here&apos;s what&apos;s real today—and what&apos;s still an idea.</p>
            <Link className="text-link" href="/faq">
              All the answers <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
          <div className="interactive-faq-list">
            <details className="faq-item">
              <summary>Can I use REMMY today?<span aria-hidden="true">+</span></summary>
              <p>Not yet, bhai. This is a website demo; accounts and real search aren&apos;t live.</p>
            </details>
            <details className="faq-item">
              <summary>Will it understand every Reel?<span aria-hidden="true">+</span></summary>
              <p>No guarantees. A link doesn&apos;t always provide access to the Reel&apos;s video, audio or caption.</p>
            </details>
            <details className="faq-item">
              <summary>Is the demo using AI?<span aria-hidden="true">+</span></summary>
              <p>Nope. They&apos;re sample cards only—kuch bhi kahin send nahi ho raha.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="interactive-cta-section">
        <Reveal className="container">
          <div className="interactive-cta">
            <div>
              <Eyebrow>SAVE TODAY. FIND TOMORROW.</Eyebrow>
              <h2>For all those “I&apos;ll find it later” saves.</h2>
            </div>
            <Link className="button button-primary" href="/about">
              What is REMMY? <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
