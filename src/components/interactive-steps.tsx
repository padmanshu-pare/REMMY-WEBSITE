"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Bookmark, Brain, Layers3, Search } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    label: "Save",
    description: "Spot something useful and save its Reel reference.",
    detail: "A reference keeps the original discovery in view.",
    icon: Bookmark,
    visual: "step-visual--save",
  },
  {
    label: "Understand",
    description: "Make sense of the details that are actually available.",
    detail: "A link does not guarantee access to every Reel’s content.",
    icon: Brain,
    visual: "step-visual--understand",
  },
  {
    label: "Organise",
    description: "Give useful ideas a little context and a place to live.",
    detail: "Summaries and categories are part of the planned product.",
    icon: Layers3,
    visual: "step-visual--organise",
  },
  {
    label: "Find",
    description: "Describe what you remember, then get back to it.",
    detail: "Natural-language search is a vision—not a live service yet.",
    icon: Search,
    visual: "step-visual--find",
  },
];

export function InteractiveSteps({ compact = false }: { compact?: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const active = steps[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <div className={`step-explorer${compact ? " step-explorer--compact" : ""}`}>
      <div className="step-explorer-tabs" role="tablist" aria-label="Explore the REMMY steps">
        {steps.map(({ label, icon: Icon }, index) => (
          <button
            type="button"
            role="tab"
            id={`workflow-tab-${index}`}
            aria-selected={activeIndex === index}
            aria-controls="workflow-panel"
            tabIndex={activeIndex === index ? 0 : -1}
            className={`step-explorer-tab${activeIndex === index ? " step-explorer-tab--active" : ""}`}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) => {
              if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
              event.preventDefault();
              const next = event.key === "ArrowRight"
                ? (activeIndex + 1) % steps.length
                : (activeIndex - 1 + steps.length) % steps.length;
              setActiveIndex(next);
              document.getElementById(`workflow-tab-${next}`)?.focus();
            }}
            key={label}
          >
            <Icon size={18} aria-hidden="true" />
            <span>{label}</span>
          </button>
        ))}
      </div>
      <div
        className="step-explorer-panel"
        id="workflow-panel"
        role="tabpanel"
        aria-labelledby={`workflow-tab-${activeIndex}`}
        tabIndex={0}
      >
        <AnimatePresence mode="wait">
          <motion.div
            className="step-explorer-content"
            key={active.label}
            initial={{ opacity: 0, x: reduceMotion ? 0 : 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: reduceMotion ? 0 : -10 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          >
            <div className={`step-explorer-visual ${active.visual}`}>
              <span className="step-number">0{activeIndex + 1}</span>
              <ActiveIcon size={44} strokeWidth={1.3} aria-hidden="true" />
              <span className="step-orbit" aria-hidden="true" />
            </div>
            <div className="step-explorer-copy">
              <span className="step-explorer-kicker">STEP 0{activeIndex + 1} / 04</span>
              <h3>{active.label}.</h3>
              <p>{active.description}</p>
              <p className="step-explorer-detail">{active.detail}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="step-explorer-bottom">
          <span>THE REMMY IDEA · PRODUCT PREVIEW</span>
          <div className="step-dots" aria-label={`Step ${activeIndex + 1} of 4`}>
            {steps.map((step, index) => (
              <button
                type="button"
                aria-label={`Show step ${index + 1}: ${step.label}`}
                aria-current={activeIndex === index ? "step" : undefined}
                onClick={() => setActiveIndex(index)}
                key={step.label}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
