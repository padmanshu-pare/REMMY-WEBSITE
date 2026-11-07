import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CallToAction, Eyebrow, PageIntro } from "@/components/site-ui";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About REMMY",
  description: "Meet the idea behind REMMY: a personal memory for the useful things you save, built around finding them again.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Ek kaafi familiar problem"
        title="Save toh kiya. Ab milega kahan?"
        description="Useful Reel save ki, phir woh saves ke jungle mein gayab. REMMY ka idea: jo yaad hai, usi se wapas dhoondo."
      />
      <section className="content-section">
        <div className="content-narrow">
          <Reveal>
            <Eyebrow>Save karna easy. Dhoondhna—uff.</Eyebrow>
            <h2>Itna scroll kaun karega?</h2>
            <p>
              Saves mein tutorials, recipes, spots—sab mix. Creator ka naam
              gaya, caption gaya. Bas idea yaad hai. Haan, wahi toh.
            </p>
            <p>
              REMMY ek independent product idea hai: jo yaad hai woh bolo, aur
              useful cheez tak wapas jao.
            </p>
          </Reveal>
          <Reveal>
            <div className="memory-card" style={{ minHeight: 270, margin: "48px 0" }}>
              <span className="memory-label">The REMMY philosophy</span>
              <p className="display-heading" style={{ maxWidth: 560, padding: "30px", textAlign: "center" }}>
                Yaad se dhoondo, folder ke naam se nahi.
              </p>
              <span className="memory-caption">SAVE TODAY. FIND TOMORROW.</span>
            </div>
          </Reveal>
          <Reveal>
            <Eyebrow>Curiosity rakho, scroll kam</Eyebrow>
            <h2>Kaam ki cheez, kaam ke time.</h2>
            <p>
              Pehla focus Instagram Reels hain—tips, recipes, spots aur
              recommendations ke liye. Badi soch? Useful discoveries ko useful
              hi rehne dena.
            </p>
            <p>
              Abhi REMMY ban raha hai. Is site pe live account, real search ya
              Reel processing nahi hai. Jo nahi hai, uska fake flex bhi nahi.
            </p>
            <Link className="text-link" href="/how-it-works">
              Product ka scene dekho <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="section section-cta">
        <Reveal className="container">
          <CallToAction
            eyebrow="Aaj save. Kal dhoondo."
            title="Kal wala-you bolega, thanks."
            text="Dekho REMMY ka idea kya hai."
            primaryHref="/how-it-works"
            primaryLabel="Kaise kaam karega?"
            secondaryHref="/contact"
            secondaryLabel="Baat karte hain"
          />
        </Reveal>
      </section>
    </main>
  );
}
