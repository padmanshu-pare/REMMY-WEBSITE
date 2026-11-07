import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/site-ui";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description: "Honest answers about REMMY, the product vision, Instagram Reel access, privacy and what is not available yet.",
  alternates: { canonical: "/faq" },
};

const questions = [
  ["What is REMMY?", "REMMY is an independent product idea for saving useful Reels and finding them later from a natural-language description. It is not a live service yet."],
  ["Password bhool gaya—can I reset it?", "Not yet—accounts aren’t live, so there’s no reset service. The login page is just a preview."],
  ["How will REMMY work?", "The idea is to save a Reel reference, organise whatever information is available, then search by describing what you remember. Abhi product vision hi hai."],
  ["Can I save Instagram Reels with REMMY today?", "Not through this website. Reel saving and account features are not available yet."],
  ["Will REMMY automatically understand every Reel?", "No guarantees. A URL does not always provide access to the original video, audio, caption or transcript. Any future understanding would depend on access and permissions."],
  ["Can I search my saves using natural language?", "That’s a core product goal, but there is no live search service yet. The homepage demo uses sample cards only—bas sample data."],
  ["Is REMMY free?", "Pricing has not been decided or announced. There are no paid plans on this website."],
  ["Is my saved content private?", "This website does not accept or process saved content, and it has no account or analytics service integrated. Full privacy details will be shared before accounts or content processing launch."],
  ["Will REMMY support other platforms?", "Instagram Reels are the initial focus. Support for other platforms is a future possibility, not a current integration."],
];

export default function FAQPage() {
  return (
    <main>
      <PageIntro
        eyebrow="The straight-up answers"
        title="Good questions deserve clear answers."
        description="REMMY is at an early stage, so we keep the product vision separate from what’s available today."
      />
      <section className="content-section">
        <div className="content-narrow faq-list">
          {questions.map(([question, answer]) => (
            <details className="faq-item" id={question.startsWith("I forgot") ? "password-reset" : undefined} key={question}>
              <summary>{question}<span aria-hidden="true">+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
          <p style={{ marginTop: 30 }}>
            Still curious? <Link className="text-link" href="/contact">Visit the contact page</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
