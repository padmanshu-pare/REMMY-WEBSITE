import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  BookOpen,
  Brain,
  Clock3,
  Compass,
  Layers3,
  Search,
  Sparkles,
  Tags,
  WandSparkles,
} from "lucide-react";
import { CallToAction, ConceptLabel, Eyebrow, SectionTitle } from "@/components/site-ui";
import { Reveal } from "@/components/reveal";

const steps = [
  {
    number: "01",
    title: "Save",
    description: "Send a useful Instagram Reel to your REMMY library.",
    icon: Bookmark,
  },
  {
    number: "02",
    title: "Understand",
    description: "REMMY can organise the details it is able to access.",
    icon: Brain,
  },
  {
    number: "03",
    title: "Organise",
    description: "Keep ideas together with summaries, categories and tags.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Find",
    description: "Describe what you remember to find it again.",
    icon: Search,
  },
];

const features = [
  {
    title: "Search by the idea",
    text: "Describe a topic, detail or moment instead of remembering the creator or collection.",
    icon: Search,
    tone: "wine",
  },
  {
    title: "A library with context",
    text: "Keep a saved Reel reference alongside the notes and details that make it useful.",
    icon: BookOpen,
    tone: "cream",
  },
  {
    title: "Less sorting by hand",
    text: "Planned organisation can group useful things with categories and relevant tags.",
    icon: Tags,
    tone: "indigo",
  },
  {
    title: "Useful summaries",
    text: "A calmer way to revisit the key points when supported content is available.",
    icon: WandSparkles,
    tone: "blue",
  },
  {
    title: "Your own collections",
    text: "Bring recipes, tools, tutorials and recommendations into a personal knowledge space.",
    icon: Layers3,
    tone: "wine",
  },
  {
    title: "Made for curiosity",
    text: "Designed around the things you discover and want to remember—not another feed.",
    icon: Compass,
    tone: "cream",
  },
];

const audience = [
  {
    title: "Students",
    text: "Keep explainers and study tips close when revision comes around.",
    icon: BookOpen,
  },
  {
    title: "Developers",
    text: "Find that code walkthrough or tool recommendation by the problem it solved.",
    icon: WandSparkles,
  },
  {
    title: "Creators",
    text: "Gather visual references, ideas and practical advice in one place.",
    icon: Sparkles,
  },
  {
    title: "Curious minds",
    text: "Make the recipes, places and little discoveries easier to revisit.",
    icon: Compass,
  },
];

const sampleResults = [
  {
    category: "DESIGN · 2 MIN",
    title: "A softer way to animate a card",
    note: "A sample result based on motion and CSS details.",
    art: "result-art--violet",
  },
  {
    category: "DEVELOPMENT · 45 SEC",
    title: "The binary search walkthrough",
    note: "A sample result that matches the idea in your query.",
    art: "result-art--cream",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-glow hero-glow--left" aria-hidden="true" />
        <div className="hero-glow hero-glow--right" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <Reveal>
              <Eyebrow>For the things worth remembering</Eyebrow>
              <h1>
                Save today.
                <br />
                <span>Find tomorrow.</span>
              </h1>
              <p className="hero-lede">
                You save useful things every day. Finding them again shouldn&apos;t
                mean scrolling through hundreds of Reels. REMMY is being designed
                to help you remember what matters—and find it when you need it.
              </p>
              <div className="button-row">
                <Link className="button button-primary" href="/signup">
                  Get started <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
                <Link className="button button-quiet" href="/how-it-works">
                  See how it works <ArrowDownRight size={17} aria-hidden="true" />
                </Link>
              </div>
              <p className="hero-footnote">
                An early product concept. No account or search service is live yet.
              </p>
            </Reveal>
          </div>

          <Reveal className="hero-visual" delay={0.12}>
            <div className="orbit orbit--one" aria-hidden="true" />
            <div className="orbit orbit--two" aria-hidden="true" />
            <div className="floating-note floating-note--top">
              <span className="floating-icon floating-icon--cream">
                <Bookmark size={15} aria-hidden="true" />
              </span>
              <span>Saved for later</span>
            </div>
            <div className="floating-note floating-note--bottom">
              <span className="floating-icon floating-icon--wine">
                <Sparkles size={15} aria-hidden="true" />
              </span>
              <span>A detail worth keeping</span>
            </div>
            <div className="search-preview">
              <div className="preview-topline">
                <span className="preview-brand">
                  <span className="mini-bookmark" aria-hidden="true" />
                  Your future library
                </span>
                <ConceptLabel />
              </div>
              <div className="preview-search">
                <Search size={18} aria-hidden="true" />
                <span>That Reel explaining binary search...</span>
                <kbd>↵</kbd>
              </div>
              <div className="preview-meta">
                <span>EXAMPLE QUERY</span>
                <span>ILLUSTRATIVE ONLY</span>
              </div>
              <div className="preview-result">
                <div className="result-art result-art--cream" aria-hidden="true">
                  <span>01</span>
                  <span className="art-line" />
                  <span className="art-line art-line--short" />
                </div>
                <div>
                  <p className="result-category">DEVELOPMENT · SAMPLE</p>
                  <h2>Binary search, made visual</h2>
                  <p className="result-description">
                    A concept card for the kind of result REMMY may help you find.
                  </p>
                </div>
                <ArrowUpRight className="result-arrow" size={18} aria-hidden="true" />
              </div>
              <div className="preview-bottom">
                <span className="preview-dot" />
                <span>Search by what you remember</span>
                <span className="preview-count">Concept preview</span>
              </div>
            </div>
            <span className="visual-caption">A glimpse of the idea</span>
          </Reveal>
        </div>
        <div className="hero-bottom container">
          <span>Save useful things.</span>
          <span className="hero-bottom-line" aria-hidden="true" />
          <span>Remember them when it counts.</span>
        </div>
      </section>

      <section className="section section-problem">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="The familiar scroll"
              title="Saved it. Forgot it. Sound familiar?"
              description="Your saves are full of tutorials, recipes, tools and ideas. But when you actually need one, a long scroll is rarely the answer."
            />
          </Reveal>
          <div className="problem-grid">
            {[
              ["01", "The pile keeps growing", "Useful Reels disappear into a collection of everything."],
              ["02", "The details get fuzzy", "You remember the idea, not the creator or caption."],
              ["03", "Finding it takes forever", "One more scroll turns into a dozen more."],
              ["04", "Good ideas get lost", "The things you meant to use stay saved—and unused."],
            ].map(([number, title, text], index) => (
              <Reveal key={number} delay={index * 0.06}>
                <article className="problem-card">
                  <span className="card-index">{number}</span>
                  <div className={`problem-mark problem-mark--${index + 1}`} aria-hidden="true">
                    {index === 0 ? <Layers3 /> : index === 1 ? <Brain /> : index === 2 ? <Clock3 /> : <Bookmark />}
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-intro">
        <div className="container intro-grid">
          <Reveal>
            <div className="memory-card">
              <span className="memory-label">A little more than a bookmark</span>
              <div className="memory-stack" aria-hidden="true">
                <div className="stack-card stack-card--back">
                  <span className="stack-spark">✳</span>
                  <span>THAT PLACE</span>
                </div>
                <div className="stack-card stack-card--mid">
                  <span className="stack-card-tag">A RECIPE</span>
                  <span className="stack-card-title">Weeknight comfort</span>
                  <span className="stack-card-line" />
                </div>
                <div className="stack-card stack-card--front">
                  <span className="stack-card-tag">A THOUGHT</span>
                  <span className="stack-card-title">Make it easier to find.</span>
                  <span className="stack-card-line stack-card-line--short" />
                </div>
              </div>
              <span className="memory-caption">Your saved ideas, with context.</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Introducing REMMY</Eyebrow>
            <h2 className="display-heading">
              A personal memory for the things you save.
            </h2>
            <p className="body-large">
              REMMY is a new way to think about saved content: not a bigger pile,
              but a place where useful details can be understood, organised and
              found again.
            </p>
            <p className="muted-copy">
              It&apos;s being built with Instagram Reels in mind, with a broader
              ambition to make everything you want to remember easier to retrieve.
            </p>
            <Link className="text-link" href="/about">
              Get to know REMMY <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section section-steps">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="A simple idea"
              title="Four steps. A better way to remember."
              description="The experience REMMY is working toward, from first save to finding it later."
              align="center"
            />
          </Reveal>
          <div className="steps-grid">
            {steps.map(({ number, title, description, icon: Icon }, index) => (
              <Reveal key={number} delay={index * 0.08}>
                <article className="step-card">
                  <div className="step-top">
                    <span>{number}</span>
                    <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="section-note">
            What REMMY can understand will depend on the content available and
            platform access.
          </p>
        </div>
      </section>

      <section className="section section-features">
        <div className="container">
          <div className="section-title-row">
            <Reveal>
              <SectionTitle
                eyebrow="Designed around real recall"
                title="More than just saving links."
                description="Thoughtful tools for turning things you discover into things you can actually use."
              />
            </Reveal>
            <Link className="text-link section-title-link" href="/features">
              Explore the vision <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="features-grid">
            {features.map(({ title, text, icon: Icon, tone }, index) => (
              <Reveal key={title} delay={(index % 3) * 0.06}>
                <article className="feature-card">
                  <span className={`feature-icon feature-icon--${tone}`}>
                    <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="feature-card-line" aria-hidden="true" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-search">
        <div className="container search-section-grid">
          <Reveal>
            <Eyebrow>Remember the idea, not the link</Eyebrow>
            <h2 className="display-heading">
              “That Reel about the pasta with crispy sage…”
            </h2>
            <p className="body-large">
              Natural-language search is the heart of the REMMY vision. Describe
              what stuck with you, and find the saved thing that fits.
            </p>
            <p className="muted-copy">
              The cards here are sample previews—not live search results or real
              user content.
            </p>
            <Link className="text-link" href="/how-it-works">
              See the product journey <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="sample-search">
              <div className="sample-search-head">
                <span className="sample-search-title">
                  <Search size={17} aria-hidden="true" />
                  A sample of what you might ask
                </span>
                <ConceptLabel />
              </div>
              <div className="sample-query">
                <span className="query-spark">✳</span>
                <span>That Reel explaining binary search...</span>
              </div>
              <div className="sample-query sample-query--muted">
                “A café with wooden interiors”
              </div>
              <div className="sample-results">
                {sampleResults.map((result) => (
                  <article className="sample-result" key={result.title}>
                    <div className={`result-art ${result.art}`} aria-hidden="true">
                      <Bookmark size={17} />
                    </div>
                    <div className="sample-result-copy">
                      <span className="result-category">{result.category}</span>
                      <h3>{result.title}</h3>
                      <p>{result.note}</p>
                    </div>
                    <ArrowUpRight className="result-arrow" size={17} aria-hidden="true" />
                  </article>
                ))}
              </div>
              <div className="sample-search-foot">
                <span className="sample-status" />
                Illustrative preview · no live search
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-showcase">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="A look ahead"
              title="A calmer home for your saved ideas."
              description="The future REMMY library is imagined as a clear, personal space—not another feed competing for your attention."
              align="center"
            />
          </Reveal>
          <Reveal className="dashboard-wrap" delay={0.1}>
            <div className="dashboard-window">
              <div className="dashboard-sidebar">
                <div className="dashboard-wordmark">
                  <span className="mini-bookmark" aria-hidden="true" />
                  REMMY
                </div>
                <span className="dashboard-label">YOUR LIBRARY</span>
                <span className="dashboard-nav dashboard-nav--active"><Layers3 size={15} /> All saves <b>24</b></span>
                <span className="dashboard-nav"><BookOpen size={15} /> Learning</span>
                <span className="dashboard-nav"><Compass size={15} /> Places</span>
                <span className="dashboard-nav"><Tags size={15} /> Recipes</span>
                <span className="dashboard-sidebar-note">CONCEPT UI</span>
              </div>
              <div className="dashboard-main">
                <div className="dashboard-header">
                  <div>
                    <span className="dashboard-kicker">MONDAY, OCTOBER 14</span>
                    <h3>Your saved things.</h3>
                  </div>
                  <span className="dashboard-avatar">R</span>
                </div>
                <div className="dashboard-search"><Search size={16} /> Search by a thought, a topic, a detail...</div>
                <div className="dashboard-chip-row">
                  <span className="dashboard-chip dashboard-chip--selected">All saves <b>24</b></span>
                  <span className="dashboard-chip">Learning <b>08</b></span>
                  <span className="dashboard-chip">Places <b>06</b></span>
                  <span className="dashboard-chip">Recipes <b>10</b></span>
                </div>
                <div className="dashboard-cards">
                  <div className="dashboard-card dashboard-card--lavender">
                    <span className="dashboard-card-icon"><Brain size={16} /></span>
                    <span className="dashboard-card-tag">LEARNING · 3 DAYS AGO</span>
                    <strong>Binary search, made visual</strong>
                    <span className="dashboard-card-summary">A clear way to find an item in a sorted list.</span>
                  </div>
                  <div className="dashboard-card dashboard-card--sand">
                    <span className="dashboard-card-icon"><Compass size={16} /></span>
                    <span className="dashboard-card-tag">PLACES · LAST WEEK</span>
                    <strong>A quiet corner café</strong>
                    <span className="dashboard-card-summary">Warm wood, soft light, good for reading.</span>
                  </div>
                  <div className="dashboard-card dashboard-card--rose">
                    <span className="dashboard-card-icon"><Bookmark size={16} /></span>
                    <span className="dashboard-card-tag">RECIPE · LAST WEEK</span>
                    <strong>Crispy sage pasta</strong>
                    <span className="dashboard-card-summary">A quick dinner idea with a little crunch.</span>
                  </div>
                </div>
                <span className="dashboard-disclaimer">Concept UI · example content only</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-audience">
        <div className="container">
          <Reveal>
            <SectionTitle
              eyebrow="For your kind of curiosity"
              title="Made for people who love discovering useful things."
              description="If you’ve ever saved something with the thought “I’ll come back to this,” REMMY is for you."
            />
          </Reveal>
          <div className="audience-grid">
            {audience.map(({ title, text, icon: Icon }, index) => (
              <Reveal key={title} delay={index * 0.06}>
                <article className="audience-card">
                  <span className="audience-icon"><Icon size={19} aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-faq">
        <div className="container faq-preview-grid">
          <Reveal>
            <Eyebrow>Good questions</Eyebrow>
            <h2 className="display-heading">Clear answers, no guesswork.</h2>
            <p className="muted-copy">
              REMMY is still taking shape. Here&apos;s what&apos;s true today—and
              what&apos;s still a plan.
            </p>
            <Link className="text-link" href="/faq">
              All frequently asked questions <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
          <div className="faq-list">
            {[
              ["Is REMMY available to use?", "Not yet. This website shares the product direction; accounts and the search experience are not live."],
              ["Can REMMY understand every Reel?", "No such guarantee is possible. Access to a Reel’s video, audio, captions or transcript can vary."],
              ["Will my saves be private?", "A privacy approach will be published before any account or content-processing service launches."],
            ].map(([question, answer]) => (
              <details className="faq-item" key={question}>
                <summary>{question}<span aria-hidden="true">+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cta">
        <Reveal className="container">
          <CallToAction
            eyebrow="A better memory is on the way"
            title="Stop losing the things worth remembering."
            text="Your next useful discovery deserves a place in your memory."
            primaryHref="/signup"
            primaryLabel="Explore getting started"
            secondaryHref="/about"
            secondaryLabel="The REMMY idea"
          />
        </Reveal>
      </section>
    </main>
  );
}
