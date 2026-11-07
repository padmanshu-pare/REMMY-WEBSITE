"use client";

const prompts = [
  { className: "floating-prompt floating-prompt--pasta", label: "that pasta Reel 🍝", query: "That creamy pasta recipe" },
  { className: "floating-prompt floating-prompt--cafe", label: "café kidhar tha? ☕", query: "The café with wooden interiors" },
  { className: "floating-prompt floating-prompt--coding", label: "that coding tip 💻", query: "That coding tutorial I saved" },
];

export function FloatingMemoryPrompts() {
  function choosePrompt(query: string) {
    window.dispatchEvent(new CustomEvent("remmy:prompt", { detail: { query } }));
  }

  return (
    <aside className="floating-memory-prompts" aria-label="Try a demo search">
      {prompts.map((prompt) => (
        <button
          className={prompt.className}
          type="button"
          onClick={() => choosePrompt(prompt.query)}
          key={prompt.query}
        >
          {prompt.label}
        </button>
      ))}
    </aside>
  );
}
