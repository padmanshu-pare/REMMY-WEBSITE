"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState, type FormEvent, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { ArrowUpRight, Bookmark, Check, Coffee, Code2, Lightbulb, Search, Utensils, X } from "lucide-react";
import { ConceptLabel } from "@/components/site-ui";

const memories = [
  {
    id: "coding",
    category: "Coding",
    query: "That coding tutorial I saved",
    title: "Binary search, made visual",
    summary: "A quick walkthrough of narrowing down a sorted list, one step at a time.",
    creator: "Sample coding Reel",
    icon: Code2,
    art: "memory-art--coding",
    tags: ["Algorithms", "JavaScript"],
  },
  {
    id: "places",
    category: "Places",
    query: "The café with wooden interiors",
    title: "A little café with warm light",
    summary: "A quiet corner, wood tables and a good spot to settle in with a book.",
    creator: "Sample places Reel",
    icon: Coffee,
    art: "memory-art--places",
    tags: ["Cafés", "Weekend"],
  },
  {
    id: "recipes",
    category: "Recipes",
    query: "That creamy pasta recipe",
    title: "Creamy pasta, crisp sage",
    summary: "A cosy bowl with a silky sauce and a little crunch on top.",
    creator: "Sample recipe Reel",
    icon: Utensils,
    art: "memory-art--recipes",
    tags: ["Dinner", "Quick"],
  },
  {
    id: "ideas",
    category: "Ideas",
    query: "A useful website I discovered",
    title: "A tiny tool for big ideas",
    summary: "A handy website that turns a rough thought into a useful starting point.",
    creator: "Sample ideas Reel",
    icon: Lightbulb,
    art: "memory-art--ideas",
    tags: ["Tools", "Creative"],
  },
] as const;

const categories = ["All", ...memories.map((memory) => memory.category)];

function normalizeSearchText(value: string) {
  return value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
}

export function InteractiveDemo({ compact = false }: { compact?: boolean }) {
  const [query, setQuery] = useState("");
  const [activeMemory, setActiveMemory] = useState<(typeof memories)[number]>(memories[0]);
  const [category, setCategory] = useState("All");
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const dialogTriggerRef = useRef<HTMLButtonElement>(null);
  const wasDialogOpenRef = useRef(false);
  const [toast, setToast] = useState("");
  const reduceMotion = useReducedMotion();

  const filteredMemories = useMemo(
    () => (category === "All" ? memories : memories.filter((memory) => memory.category === category)),
    [category],
  );

  const matchingSuggestions = memories.filter((memory) =>
    memory.query.toLowerCase().includes(query.trim().toLowerCase()),
  );
  const suggestions = (matchingSuggestions.length ? matchingSuggestions : memories).slice(0, 3);
  const isSaved = savedIds.includes(activeMemory.id);

  useEffect(() => {
    if (!compact) return;

    function onPrompt(event: Event) {
      const { query: prompt } = (event as CustomEvent<{ query: string }>).detail;
      const match = memories.find((memory) => memory.query === prompt);
      if (match) {
        setActiveMemory(match);
        setQuery(match.query);
        setCategory(match.category);
        setSubmitted(true);
        setToast("Bas, mil gaya! ✨");
      }
      document.getElementById("try-it")?.scrollIntoView({ behavior: reduceMotion ? "instant" : "smooth" });
    }

    window.addEventListener("remmy:prompt", onPrompt);
    return () => window.removeEventListener("remmy:prompt", onPrompt);
  }, [compact, reduceMotion]);

  useEffect(() => {
    if (!dialogOpen) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setDialogOpen(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [dialogOpen]);

  useEffect(() => {
    if (dialogOpen) {
      wasDialogOpenRef.current = true;
    } else if (wasDialogOpenRef.current) {
      wasDialogOpenRef.current = false;
      dialogTriggerRef.current?.focus();
    }
  }, [dialogOpen]);

  useEffect(() => {
    if (!toast) return;
    const timeout = window.setTimeout(() => setToast(""), 2600);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  function chooseMemory(memory: (typeof memories)[number]) {
    setActiveMemory(memory);
    setQuery(memory.query);
    setCategory(memory.category);
    setSubmitted(true);
    setToast("Bas, mil gaya! ✨");
  }

  function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = normalizeSearchText(query);
    if (!text.trim()) {
      setToast("Add a clue first, bhai 🙂");
      return;
    }

    const scored = memories
      .map((memory) => ({
        memory,
        score: [memory.id, memory.category, memory.query, memory.title, memory.summary, ...memory.tags]
          .flatMap((value) => normalizeSearchText(value).split(/[^a-z0-9]+/))
          .filter((word) => word.length > 2 && text.includes(word)).length,
      }))
      .sort((left, right) => right.score - left.score)[0];

    if (!scored || scored.score === 0) {
      setSubmitted(false);
      setToast("Not in this demo—try a sample instead!");
      return;
    }

    const match = scored.memory;
    chooseMemory(match);
  }

  function toggleSaved() {
    if (isSaved) {
      setSavedIds((current) => current.filter((id) => id !== activeMemory.id));
      setToast("Removed from this demo.");
      return;
    }
    setSavedIds((current) => [...current, activeMemory.id]);
    setToast("Saved, bhai! Just in this demo, though.");
  }

  function keepDialogFocus(event: ReactKeyboardEvent<HTMLElement>) {
    if (event.key !== "Tab") return;

    const focusableElements = event.currentTarget.querySelectorAll<HTMLElement>(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (!firstElement || !lastElement) {
      event.preventDefault();
      return;
    }

    if (!event.currentTarget.contains(document.activeElement)) {
      event.preventDefault();
      firstElement.focus();
    } else if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  return (
    <div className={`memory-demo${compact ? " memory-demo--compact" : ""}`}>
      <div className="memory-demo-top">
        <div>
          <span className="memory-demo-kicker"><span className="memory-demo-mark" /> YOUR FUTURE MEMORY</span>
          <h3>{compact ? "What are you looking for?" : "Let’s jog your memory."}</h3>
        </div>
        <ConceptLabel />
      </div>

      <form className="memory-search-form" onSubmit={search}>
        <Search size={19} aria-hidden="true" />
        <label className="sr-only" htmlFor={compact ? "hero-memory-search" : "memory-search"}>
          What are you trying to remember?
        </label>
        <input
          id={compact ? "hero-memory-search" : "memory-search"}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setSubmitted(false);
          }}
          placeholder="Describe what you remember..."
          autoComplete="off"
        />
        <button className="memory-search-submit" type="submit" aria-label="Search sample memories">
          <ArrowUpRight size={18} aria-hidden="true" />
        </button>
      </form>

      <div className="memory-suggestions" aria-label="Sample search suggestions">
        <span className="memory-suggestions-label">Need a hint? Try this:</span>
        {suggestions.map((memory) => (
          <button
            type="button"
            className={`suggestion-chip${query === memory.query ? " suggestion-chip--active" : ""}`}
            onClick={() => chooseMemory(memory)}
            key={memory.id}
          >
            {memory.query}
          </button>
        ))}
      </div>

      {!compact && (
        <div className="memory-category-row" role="group" aria-label="Filter sample memories by category">
          {categories.map((item) => (
            <button
              type="button"
              className={`memory-category${category === item ? " memory-category--active" : ""}`}
              onClick={() => {
                setCategory(item);
                const nextMemory = item === "All" ? activeMemory : memories.find((memory) => memory.category === item);
                if (nextMemory) {
                  setActiveMemory(nextMemory);
                  setQuery(nextMemory.query);
                  setSubmitted(true);
                }
              }}
              aria-pressed={category === item}
              key={item}
            >
              {item === "All" ? "All" : item === "Places" ? "Spots" : item}
            </button>
          ))}
          <span className="memory-category-hint">{filteredMemories.length} sample {filteredMemories.length === 1 ? "memory" : "memories"}</span>
        </div>
      )}

      <div className="memory-result-stage" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.article
            className={`memory-result ${activeMemory.art}`}
            key={activeMemory.id}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
          >
            <div className="memory-art-panel" aria-hidden="true">
              <activeMemory.icon size={30} strokeWidth={1.5} />
              <span>REEL<br />SAVED</span>
            </div>
            <div className="memory-result-copy">
              <span className="memory-result-meta">{activeMemory.category} <span>·</span> {activeMemory.creator}</span>
              <h4>{activeMemory.title}</h4>
              <p>{activeMemory.summary}</p>
              <div className="memory-tag-row">
                {activeMemory.tags.map((tag) => <span key={tag}>#{tag}</span>)}
              </div>
            </div>
            <div className="memory-result-actions">
              <button
                type="button"
                className="memory-peek-button"
                ref={dialogTriggerRef}
                onClick={() => setDialogOpen(true)}
              >
                Peek inside <ArrowUpRight size={14} aria-hidden="true" />
              </button>
              <button
                type="button"
                className={`memory-save-button${isSaved ? " memory-save-button--saved" : ""}`}
                onClick={toggleSaved}
                aria-pressed={isSaved}
              >
                {isSaved ? <Check size={16} /> : <Bookmark size={16} />}
                <span>{isSaved ? "Saved" : "Save memory"}</span>
              </button>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="memory-demo-footer">
        <span className={`demo-feedback${submitted ? " demo-feedback--active" : ""}`}>
          <span aria-hidden="true" />
          {submitted ? "Found it in the sample library. Mil gaya!" : "Remember a detail? Try a sample."}
        </span>
        <span>DEMO ONLY · NO AI · NO ACCOUNT</span>
      </div>
      <AnimatePresence>
        {toast && (
          <motion.div
            className="memory-toast"
            role="status"
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: reduceMotion ? 0 : 0.18 }}
          >
            <span aria-hidden="true">✦</span>{toast}
          </motion.div>
        )}
      </AnimatePresence>
      {savedIds.length > 0 && (
        <motion.p
          className="saved-memory-note"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          aria-live="polite"
        >
          Nice! {savedIds.length} sample {savedIds.length === 1 ? "memory" : "memories"} saved—sirf is demo mein.
        </motion.p>
      )}
      <AnimatePresence>
        {dialogOpen && (
          <motion.div
            className="memory-dialog-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setDialogOpen(false);
            }}
          >
            <motion.section
              className={`memory-dialog ${activeMemory.art}`}
              role="dialog"
              aria-modal="true"
              aria-labelledby="memory-dialog-title"
              onKeyDown={keepDialogFocus}
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
            >
              <button className="memory-dialog-close" type="button" aria-label="Close memory preview" onClick={() => setDialogOpen(false)} autoFocus>
                <X size={19} aria-hidden="true" />
              </button>
              <div className="memory-dialog-art"><activeMemory.icon size={38} aria-hidden="true" /></div>
              <span className="memory-result-meta">{activeMemory.category} · SAMPLE REEL</span>
              <h2 id="memory-dialog-title">{activeMemory.title}</h2>
              <p>{activeMemory.summary}</p>
              <div className="memory-dialog-note">
                Just a sample preview—koi Reel is being played or analysed.
              </div>
              <button className="button button-primary memory-dialog-action" type="button" onClick={() => { if (!isSaved) toggleSaved(); setDialogOpen(false); }}>
                {isSaved ? "All set, boss" : "Save this memory"} <Bookmark size={16} aria-hidden="true" />
              </button>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
