import type { Metadata } from "next";
import Link from "next/link";
import { AuthForm } from "@/components/auth-form";
import { Eyebrow } from "@/components/site-ui";

export const metadata: Metadata = {
  title: "Get started",
  description: "Preview the REMMY sign-up screen. Account creation is not yet available.",
  robots: { index: false, follow: false },
};

export default function SignupPage() {
  return (
    <main className="auth-section">
      <div className="auth-layout">
        <div className="auth-copy">
          <Eyebrow>Make room for remembering</Eyebrow>
          <h1>Keep the things you don&apos;t want to lose.</h1>
          <p>
            REMMY is still being built. This screen previews a future sign-up;
            submitting it will not create an account.
          </p>
          <Link className="text-link" href="/features">Explore the product vision</Link>
        </div>
        <AuthForm mode="signup" />
      </div>
    </main>
  );
}
