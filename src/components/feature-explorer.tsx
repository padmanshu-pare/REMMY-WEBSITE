"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BookOpen, Brain, Layers3, NotebookPen, Search, Tags } from "lucide-react";
import { useEffect, useState } from "react";

const featureList = [
  {
    title: "Find it from a small clue",
    category: "Search",
    description: "Describe the detail, topic or feeling you remember. Folder names? Zaroori nahi.",
    example: "“That cute café with the wooden tables...”",
    icon: Search,
  },
  {
    title: "Kaam ki baat, made easy",
    category: "Understanding",
    description: "When content is available, make the useful details easy to revisit. Bas, no rewatching everything.",
    example: "A quick note with the original Reel. Sorted.",
    icon: Brain,
  },
  {
    title: "Give every idea a place",
    category: "Organisation",
    description: "Use categories and tags, taaki sab kuch ek hi pile mein na ho.",
    example: "Coding · Algorithms · JavaScript",
    icon: Tags,
  },
  {
    title: "Apni mini library",
    category: "Library",
    description: "Keep links and context together. Future-you will thank you—pakka.",
    example: "Recipes, places, tools—all in one place.",
    icon: BookOpen,
  },
  {
    title: "The short version, please",
    category: "Summaries",
    description: "No time to replay every Reel? Keep the main point close by.",
    example: "The key idea, with the link right there.",
    icon: Layers3,
  },
  {
    title: "Add your own context",
    category: "Collections",
    description: "Add your own notes and bring related ideas together. Apna context, apni marzi.",
    example: "“Try this next time I make pasta.”",
    icon: NotebookPen,
  },
];

export function FeatureExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const active = featureList[activeIndex];
  const ActiveIcon = active.icon;

  useEffect(() => {
    function selectFromHash() {
      const category = window.location.hash.replace("#feature-", "");
      const index = featureList.findIndex((feature) => feature.category.toLowerCase() === category);
      if (index >= 0) setActiveIndex(index);
    }

    selectFromHash();
    window.addEventListener("hashchange", selectFromHash);
    return () => window.removeEventListener("hashchange", selectFromHash);
  }, []);

  return (
    <div className="feature-explorer">
      <div className="feature-explorer-list" role="tablist" aria-label="Explore planned REMMY features" aria-orientation="vertical">
        {featureList.map(({ title, category, icon: Icon }, index) => (
          <button
            type="button"
            role="tab"
            id={`feature-${category.toLowerCase()}`}
            data-feature-index={index}
            aria-label={title}
            aria-selected={activeIndex === index}
            aria-controls="feature-panel"
            tabIndex={activeIndex === index ? 0 : -1}
            className={`feature-explorer-button${activeIndex === index ? " feature-explorer-button--active" : ""}`}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) => {
              if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
              event.preventDefault();
              const next = event.key === "ArrowDown"
                ? (activeIndex + 1) % featureList.length
                : (activeIndex - 1 + featureList.length) % featureList.length;
              setActiveIndex(next);
              document.querySelector<HTMLButtonElement>(`[data-feature-index="${next}"]`)?.focus();
            }}
            key={title}
          >
            <Icon size={19} aria-hidden="true" />
            <span>{title}</span>
            <span className="feature-explorer-count">0{index + 1}</span>
          </button>
        ))}
      </div>
      <div className="feature-explorer-panel" id="feature-panel" role="tabpanel" aria-labelledby={`feature-${active.category.toLowerCase()}`} tabIndex={0}>
        <AnimatePresence mode="wait">
          <motion.div
            className="feature-explorer-content"
            key={active.title}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
          >
            <div className={`feature-explorer-art feature-explorer-art--${active.category.toLowerCase()}`}>
              <span className="feature-art-orbit feature-art-orbit--one" aria-hidden="true" />
              <span className="feature-art-orbit feature-art-orbit--two" aria-hidden="true" />
              <span className="feature-art-icon"><ActiveIcon size={34} strokeWidth={1.5} aria-hidden="true" /></span>
              <span className="feature-art-caption">{active.category} · PRODUCT IDEA</span>
            </div>
            <span className="feature-explorer-kicker">{active.category} · IDEA</span>
            <h2>{active.title}</h2>
            <p>{active.description}</p>
            <blockquote>{active.example}</blockquote>
            <span className="feature-plan-note">Still a product idea—not live just yet.</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
