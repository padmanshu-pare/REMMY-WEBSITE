import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/site-ui";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description: "Honest answers about REMMY, the product vision, Instagram Reel access, privacy and what is not available yet.",
  alternates: { canonical: "/faq" },
};

const questions = [
  ["What is REMMY?", "REMMY is an independent product concept for a personal memory and knowledge-retrieval platform. It is being designed to help people save useful Reels, understand accessible information and find it later using natural-language descriptions."],
  ["I forgot my password. Can I reset it?", "Not yet. REMMY accounts are not live, so there are no passwords or reset service. The login screen is only a front-end preview."],
  ["How does REMMY work?", "The intended journey is to save a Reel reference, organise the information that can be accessed, and search for it by describing what you remember. The service is not live yet; this website presents the product direction."],
  ["Can I save Instagram Reels with REMMY today?", "Not through this website. Reel saving and account features have not been implemented."],
  ["Does REMMY automatically understand every Reel?", "No. A URL does not guarantee access to the original video, audio, caption or transcript. Any future understanding would depend on the content available and the permissions and platform access in place."],
  ["Can I search my saves using natural language?", "Natural-language retrieval is a core product goal, but there is no live search service in this initial website."],
  ["Is REMMY free?", "Pricing has not been decided or announced. This website does not offer a paid plan."],
  ["Is my saved content private?", "This website does not accept or process saved content, and it has no account or analytics service integrated. A complete privacy approach will be published before any account or content-processing service launches."],
  ["Will REMMY support other platforms?", "Instagram Reels are the initial content focus. Support for other platforms is an open future possibility, not a current integration."],
];

export default function FAQPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Frequently asked questions"
        title="Good questions deserve clear answers."
        description="REMMY is at an early stage, so we separate the product vision from what's actually available today."
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
