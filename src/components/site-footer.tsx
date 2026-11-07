import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  {
    heading: "Explore",
    links: [
      ["How it works", "/how-it-works"],
      ["Features", "/features"],
      ["Frequently asked questions", "/faq"],
    ],
  },
  {
    heading: "REMMY",
    links: [
      ["About", "/about"],
      ["Contact", "/contact"],
      ["Get started", "/signup"],
    ],
  },
  {
    heading: "The details",
    links: [
      ["Privacy", "/privacy"],
      ["Terms", "/terms"],
      ["Log in", "/login"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link className="brand-lockup" href="/" aria-label="REMMY home">
            <Image className="brand-mascot" src="/remmy-koala.png" alt="" width={44} height={44} />
            <span className="brand-copy">
              <span className="brand-word">REMMY</span>
              <span className="brand-tagline">SAVE TODAY. FIND TOMORROW.</span>
            </span>
          </Link>
          <p>Save the useful stuff. Find it by what you remember. Bas, endless scrolling bye.</p>
        </div>
        {footerLinks.map((group) => (
          <div className="footer-column" key={group.heading}>
            <h2>{group.heading}</h2>
            {group.links.map(([label, href]) => (
              <Link href={href} key={href}>{label}</Link>
            ))}
          </div>
        ))}
      </div>
      <div className="container footer-bottom">
        <span>© REMMY. Just getting started.</span>
        <span className="footer-note">For things worth remembering <ArrowUpRight size={13} aria-hidden="true" /></span>
      </div>
    </footer>
  );
}
