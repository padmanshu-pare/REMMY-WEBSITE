import type { Metadata } from "next";
import { BookOpen, Brain, Layers3, NotebookPen, Search, Tags } from "lucide-react";
import { PageIntro } from "@/components/site-ui";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore the REMMY product vision: natural-language search, content understanding, summaries, collections and a personal knowledge library.",
  alternates: { canonical: "/features" },
};

const featureList = [
  {
    title: "Smart content understanding",
    description: "REMMY is being designed to identify useful details from supported content when that content is accessible.",
    note: "Access to a Reel's video, audio, caption or transcript is not guaranteed.",
    icon: Brain,
  },
  {
    title: "Natural-language search",
    description: "Search by the thought you remember: a topic, a small detail or what you wanted to do with the information.",
    note: "The search service is a product direction, not a live feature.",
    icon: Search,
  },
  {
    title: "Automatic organisation",
    description: "Helpful categories and relevant tags could make a growing personal library easier to browse.",
    note: "No content is being categorised by this website.",
    icon: Tags,
  },
  {
    title: "A personal knowledge library",
    description: "Keep saved references and their useful context together, rather than losing the reason you saved them.",
    note: "The library shown here is a visual concept only.",
    icon: BookOpen,
  },
  {
    title: "Useful summaries",
    description: "Revisit concise notes about the key idea instead of trying to watch every saved Reel again.",
    note: "Summaries are not generated on this site.",
    icon: Layers3,
  },
  {
    title: "Notes and collections",
    description: "Add your own context and bring related ideas together when a personal touch is useful.",
    note: "Collections and notes are planned, not currently available.",
    icon: NotebookPen,
  },
];

export default function FeaturesPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Thoughtful by design"
        title="A little more than a bookmark."
        description="REMMY's feature direction starts with a simple question: what if your saved content could remember why it mattered to you?"
        note="Everything below describes planned product direction"
      />
      <section className="content-section">
        <div className="content-narrow">
          {featureList.map(({ title, description, note, icon: Icon }, index) => (
            <article className="feature-showcase" key={title}>
              <div className="feature-showcase-copy">
                <p className="eyebrow"><span className="eyebrow-mark" aria-hidden="true" />FEATURE {String(index + 1).padStart(2, "0")}</p>
                <h2>{title}</h2>
                <p>{description}</p>
                <p className="audience-note">{note}</p>
              </div>
              <div className="feature-visual" aria-hidden="true">
                <Icon strokeWidth={1.4} />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
