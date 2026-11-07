"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BookOpen, Brain, Layers3, NotebookPen, Search, Tags } from "lucide-react";
import { useEffect, useState } from "react";

const featureList = [
  {
    title: "Yaad se dhoondo",
    category: "Search",
    description: "Jo yaad aa raha hai woh type karo. Folder ka naam yaad rakhne ka scene hi nahi.",
    example: "“Woh wooden tables wala cute café...”",
    icon: Search,
  },
  {
    title: "Kaam ki baat samjho",
    category: "Understanding",
    description: "Content access mila toh useful bits ko dhoondhna easy ho sakta hai.",
    example: "Short note, original Reel ke saath. Sorted.",
    icon: Brain,
  },
  {
    title: "Har cheez ki jagah",
    category: "Organisation",
    description: "Categories aur tags—taaki sab kuch ek hi pile mein na ho.",
    example: "Coding · Algorithms · JavaScript. Bas.",
    icon: Tags,
  },
  {
    title: "Apni mini library",
    category: "Library",
    description: "Links aur context ko saath rakho. Baad wala-you thanks bolega.",
    example: "Recipes, spots, tools—sab apna.",
    icon: BookOpen,
  },
  {
    title: "Short version, please",
    category: "Summaries",
    description: "Har Reel ko phir se dekhne ka time nahi? Main point paas rakho.",
    example: "Idea chhota sa, link bilkul paas.",
    icon: Layers3,
  },
  {
    title: "Apna note bhi jodo",
    category: "Collections",
    description: "Apni yaad, apna context—ideas ko ek saath le aao.",
    example: "“Next pasta night pe ye try karna.”",
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
            <span className="feature-plan-note">REMMY ka idea hai—abhi live feature nahi.</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
