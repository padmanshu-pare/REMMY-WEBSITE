"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BookOpen, Brain, Layers3, NotebookPen, Search, Tags } from "lucide-react";
import { useState } from "react";

const featureList = [
  {
    title: "Find by the idea",
    category: "Search",
    description: "Describe the detail, topic or feeling you remember—not a folder name.",
    example: "“That little café with the wooden tables...”",
    icon: Search,
  },
  {
    title: "Understand what matters",
    category: "Understanding",
    description: "Make the useful bits easier to return to when the content is available.",
    example: "A clear note, connected to the original Reel.",
    icon: Brain,
  },
  {
    title: "Let things find their place",
    category: "Organisation",
    description: "Give your saved discoveries a little order with categories and tags.",
    example: "Coding · Algorithms · JavaScript",
    icon: Tags,
  },
  {
    title: "Keep ideas together",
    category: "Library",
    description: "A personal library for the references and context you want to keep.",
    example: "Recipes, places, tools, ideas—all yours.",
    icon: BookOpen,
  },
  {
    title: "Revisit the short version",
    category: "Summaries",
    description: "Get back to the main point without replaying every saved video.",
    example: "The idea in a few words, with the link nearby.",
    icon: Layers3,
  },
  {
    title: "Add your own context",
    category: "Collections",
    description: "Keep your own notes and bring related discoveries together.",
    example: "“Try this next time I make pasta.”",
    icon: NotebookPen,
  },
];

export function FeatureExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const active = featureList[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <div className="feature-explorer">
      <div className="feature-explorer-list" role="tablist" aria-label="Explore planned REMMY features" aria-orientation="vertical">
        {featureList.map(({ title, icon: Icon }, index) => (
          <button
            type="button"
            role="tab"
            id={`feature-tab-${index}`}
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
              document.getElementById(`feature-tab-${next}`)?.focus();
            }}
            key={title}
          >
            <Icon size={19} aria-hidden="true" />
            <span>{title}</span>
            <span className="feature-explorer-count">0{index + 1}</span>
          </button>
        ))}
      </div>
      <div className="feature-explorer-panel" id="feature-panel" role="tabpanel" aria-labelledby={`feature-tab-${activeIndex}`} tabIndex={0}>
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
            <span className="feature-explorer-kicker">{active.category} · PLANNED</span>
            <h2>{active.title}</h2>
            <p>{active.description}</p>
            <blockquote>{active.example}</blockquote>
            <span className="feature-plan-note">A glimpse of the REMMY direction—not a live feature.</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
