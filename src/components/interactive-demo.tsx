"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState, type FormEvent } from "react";
import { ArrowUpRight, Bookmark, Check, Coffee, Code2, Lightbulb, Search, Utensils } from "lucide-react";
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

export function InteractiveDemo({ compact = false }: { compact?: boolean }) {
  const [query, setQuery] = useState("");
  const [activeMemory, setActiveMemory] = useState<(typeof memories)[number]>(memories[0]);
  const [category, setCategory] = useState("All");
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
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

  function chooseMemory(memory: (typeof memories)[number]) {
    setActiveMemory(memory);
    setQuery(memory.query);
    setCategory(memory.category);
    setSubmitted(true);
  }

  function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = query.toLowerCase();
    const match =
      memories.find((memory) =>
        [memory.id, memory.category, memory.query, memory.title, memory.summary, ...memory.tags]
          .some((value) => value.toLowerCase().includes(text.trim()) && text.trim().length > 2),
      ) ??
      memories
        .map((memory) => ({
          memory,
          score: [memory.id, memory.category, memory.query, memory.title, memory.summary, ...memory.tags]
            .flatMap((value) => value.toLowerCase().split(/[^a-z0-9]+/))
            .filter((word) => word.length > 2 && text.includes(word)).length,
        }))
        .sort((left, right) => right.score - left.score)[0]?.memory ??
      activeMemory;
    chooseMemory(match);
  }

  function toggleSaved() {
    setSavedIds((current) =>
      current.includes(activeMemory.id)
        ? current.filter((id) => id !== activeMemory.id)
        : [...current, activeMemory.id],
    );
  }

  return (
    <div className={`memory-demo${compact ? " memory-demo--compact" : ""}`}>
      <div className="memory-demo-top">
        <div>
          <span className="memory-demo-kicker"><span className="memory-demo-mark" /> YOUR FUTURE MEMORY</span>
          <h3>{compact ? "What are you trying to remember?" : "Try a little memory magic."}</h3>
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
        <span className="memory-suggestions-label">Try one:</span>
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
              {item}
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
            <button
              type="button"
              className={`memory-save-button${isSaved ? " memory-save-button--saved" : ""}`}
              onClick={toggleSaved}
              aria-pressed={isSaved}
            >
              {isSaved ? <Check size={16} /> : <Bookmark size={16} />}
              <span>{isSaved ? "Saved" : "Save memory"}</span>
            </button>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="memory-demo-footer">
        <span className={`demo-feedback${submitted ? " demo-feedback--active" : ""}`}>
          <span aria-hidden="true" />
          {submitted ? "Found in this little sample library." : "Choose a thought to see a sample memory."}
        </span>
        <span>LOCAL DEMO · NO AI · NO ACCOUNT</span>
      </div>
      {savedIds.length > 0 && (
        <motion.p
          className="saved-memory-note"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          aria-live="polite"
        >
          Nice. {savedIds.length} sample {savedIds.length === 1 ? "memory is" : "memories are"} tucked away in this demo.
        </motion.p>
      )}
    </div>
  );
}
