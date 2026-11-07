import type { Metadata } from "next";
import Link from "next/link";
import { AuthForm } from "@/components/auth-form";
import { Eyebrow } from "@/components/site-ui";

export const metadata: Metadata = {
  title: "Log in",
  description: "The REMMY login screen is a front-end preview; authentication is not yet configured.",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <main className="auth-section">
      <div className="auth-layout">
        <div className="auth-copy">
          <Eyebrow>The REMMY library</Eyebrow>
          <h1>Your ideas are worth finding again.</h1>
          <p>
            This is a preview of the future sign-in experience. REMMY accounts
            are not available yet.
          </p>
          <Link className="text-link" href="/how-it-works">See how REMMY is imagined to work</Link>
        </div>
        <AuthForm mode="login" />
      </div>
    </main>
  );
}
