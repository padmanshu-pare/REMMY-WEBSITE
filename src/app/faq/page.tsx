import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/site-ui";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description: "Honest answers about REMMY, the product vision, Instagram Reel access, privacy and what is not available yet.",
  alternates: { canonical: "/faq" },
};

const questions = [
  ["REMMY kya hai?", "Ek product idea jo useful Reels ko save karne, samajhne aur baad mein yaad se dhoondhne ko easy banane ki soch raha hai. Abhi live service nahi hai."],
  ["Password bhool gaya—reset kaise karun?", "Abhi reset nahi ho sakta, kyunki accounts live hi nahi hain. Login page bas ek preview hai."],
  ["REMMY kaise kaam karega?", "Idea ye hai: Reel ka reference save karo, jo info access ho sake usse organise karo, phir jo yaad hai woh likh ke dhoondo. Abhi product vision hi hai."],
  ["Aaj Instagram Reels save kar sakta hoon?", "Is website se nahi. Reel save karna aur accounts abhi bana hi nahi hai."],
  ["Har Reel ko automatically samajh lega?", "Nahi pakka nahi. Link se video, audio, caption ya transcript ka access guaranteed nahi hota. Future mein bhi access aur permissions pe depend karega."],
  ["Natural language se saves search kar sakta hoon?", "Ye REMMY ka main goal hai, par real search abhi live nahi. Homepage demo mein sirf sample cards hain."],
  ["REMMY free hai?", "Pricing abhi decide ya announce nahi hui. Is website pe paid plan nahi hai."],
  ["Mera saved content private hai?", "Is site pe saved content ya accounts accept/process nahi hote, aur analytics service connected nahi hai. Accounts ya content processing launch hone se pehle privacy details share hongi."],
  ["Aur platforms bhi support honge?", "Abhi focus Instagram Reels pe hai. Baaki platforms future ka open question hain—current integration nahi."],
];

export default function FAQPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Seedhi baat"
        title="Sawaal poochho. Clear jawab lo."
        description="REMMY abhi early stage pe hai, toh jo live hai aur jo sirf idea hai—dono clear rakhenge."
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
