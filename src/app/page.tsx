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
    title: "Save karo",
    description: "Link ke saath useful idea bhi yaad rahe.",
    icon: Bookmark,
    feature: "library",
  },
  {
    title: "Thoda organise",
    description: "Recipes, tools, spots—sab ek jagah.",
    icon: Layers3,
    feature: "organisation",
  },
  {
    title: "Yaad se dhoondo",
    description: "Folder ka naam nahi. Bas jo yaad hai woh bolo.",
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
            <Eyebrow>Arre, save toh kar liya...</Eyebrow>
            <h1>
              Mil bhi jayega.
              <br />
              <span>Scroll kyun karna?</span>
            </h1>
            <p>
              “Woh pasta wali Reel kidhar thi?” Bas yaad se bolo. REMMY ka idea
              hi yahi hai, bhai.
            </p>
            <Link className="button button-primary" href="#try-it">
              Chalo, demo dekho <ArrowDown size={17} aria-hidden="true" />
            </Link>
            <span className="hero-demo-note">Demo hai, asli search nahi—chill.</span>
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
            <Eyebrow>Chal, dhoondh ke dikha</Eyebrow>
            <h2>Kya yaad aa raha hai?</h2>
            <p>Type karo, sample chuno, phir save dabao. Bas, scene set.</p>
          </Reveal>
          <InteractiveDemo />
        </div>
      </section>

      <section className="interactive-steps-section" id="how-it-works">
        <div className="container interactive-steps-grid">
          <Reveal>
            <Eyebrow>Itna bhi complicated nahi</Eyebrow>
            <h2>Save kiya. Ab mil bhi gaya.</h2>
            <p>Chaar steps, ekdum seedha.</p>
            <Link className="text-link" href="/how-it-works">
              Aur jaan na hai? <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
          <InteractiveSteps compact />
        </div>
      </section>

      <section className="interactive-features-section" id="features">
        <div className="container">
          <Reveal className="interactive-section-heading">
            <Eyebrow>Bookmarks se thoda aage</Eyebrow>
            <h2>Kaam ki cheez, kaam ke time.</h2>
          </Reveal>
          <div className="interactive-highlight-grid">
            {highlights.map(({ title, description, icon: Icon, feature }, index) => (
              <Reveal key={title} delay={index * 0.06}>
                <Link className="interactive-highlight" href={`/features#feature-${feature}`}>
                  <span className="interactive-highlight-icon"><Icon size={21} strokeWidth={1.7} aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="highlight-explore">Dekh na <ArrowUpRight size={15} aria-hidden="true" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Link className="text-link feature-explore-link" href="/features">
            Baaki ideas bhi dekho <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="interactive-faq-section" id="faq">
        <div className="container interactive-faq-grid">
          <Reveal>
            <Eyebrow>Seedhi baat</Eyebrow>
            <h2>Thode sawaal?</h2>
            <p>Jo hai woh hai. Jo nahi, woh bhi bata dete hain.</p>
            <Link className="text-link" href="/faq">
              Saare sawaal idhar <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
          <div className="interactive-faq-list">
            <details className="faq-item">
              <summary>Abhi use kar sakta hoon?<span aria-hidden="true">+</span></summary>
              <p>Abhi nahi, bhai. Ye website demo hai; account aur real search abhi live nahi.</p>
            </details>
            <details className="faq-item">
              <summary>Har Reel samajh lega?<span aria-hidden="true">+</span></summary>
              <p>Nahi pakka nahi. Reel ka video, audio ya caption access milna zaroori nahi.</p>
            </details>
            <details className="faq-item">
              <summary>Demo mein AI chal raha hai?<span aria-hidden="true">+</span></summary>
              <p>Nahi ji. Bas sample cards hain; kuch bhi kahin send nahi ho raha.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="interactive-cta-section">
        <Reveal className="container">
          <div className="interactive-cta">
            <div>
              <Eyebrow>SAVE TODAY. FIND TOMORROW.</Eyebrow>
              <h2>“Baad mein dekhunga” ka bhi jugaad.</h2>
            </div>
            <Link className="button button-primary" href="/about">
              REMMY kya hai? <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
