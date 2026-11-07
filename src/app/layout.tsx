import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(configuredSiteUrl ?? "https://remmy.example"),
  alternates: { canonical: "/" },
  title: {
    default: "REMMY — Save today. Find tomorrow.",
    template: "%s | REMMY",
  },
  description:
    "REMMY is a personal memory for the useful things you save. Search by what you remember, not where you saved it.",
  applicationName: "REMMY",
  openGraph: {
    type: "website",
    siteName: "REMMY",
    title: "REMMY — Save today. Find tomorrow.",
    description:
      "A new way to remember the useful things you save. Search by what you remember, not where you saved it.",
  },
  twitter: {
    card: "summary_large_image",
    title: "REMMY — Save today. Find tomorrow.",
    description:
      "A new way to remember the useful things you save. Search by what you remember, not where you saved it.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
