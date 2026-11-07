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
            <span className="brand-word">REMMY</span>
            <span className="brand-tagline">SAVE TODAY. FIND TOMORROW.</span>
          </Link>
          <p>Kaam ki cheezein save karo. Phir yaad se dhoondo. Bas, endless scroll bye.</p>
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
        <span>© REMMY. Abhi toh shuruaat hai.</span>
        <span className="footer-note">Yaad rehne wali cheezon ke liye <ArrowUpRight size={13} aria-hidden="true" /></span>
      </div>
    </footer>
  );
}
