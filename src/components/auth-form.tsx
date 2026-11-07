"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

type AuthMode = "login" | "signup";

export function AuthForm({ mode }: { mode: AuthMode }) {
  const isSignup = mode === "signup";
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [notice, setNotice] = useState("");
  const [isMismatch, setIsMismatch] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (isSignup && formData.get("password") !== formData.get("confirmPassword")) {
      setIsMismatch(true);
      setNotice("Those passwords do not match. Please check both fields.");
      return;
    }

    setIsMismatch(false);
    setNotice(
      isSignup
        ? "Account creation is not available yet. No account was created and no information was sent."
        : "Login is not available yet. No sign-in was attempted and no information was sent.",
    );
  }

  return (
    <div className="auth-card">
      <h2>{isSignup ? "Create your account" : "Welcome back"}</h2>
      <p>{isSignup ? "A first look at the future REMMY sign-up." : "A first look at the future REMMY sign-in."}</p>
      <form
        className="site-form auth-form"
        onSubmit={handleSubmit}
        onInput={() => {
          setNotice("");
          setIsMismatch(false);
        }}
      >
        {isSignup && (
          <div className="form-field">
            <label htmlFor="auth-name">Name</label>
            <input id="auth-name" name="name" autoComplete="name" required maxLength={100} />
          </div>
        )}
        <div className="form-field">
          <label htmlFor="auth-email">Email</label>
          <input id="auth-email" name="email" type="email" autoComplete="email" required maxLength={254} />
        </div>
        <div className="form-field">
          <label htmlFor="auth-password">Password</label>
          <div className="password-wrap">
            <input
              id="auth-password"
              name="password"
              type={passwordVisible ? "text" : "password"}
              autoComplete={isSignup ? "new-password" : "current-password"}
              required
              minLength={8}
              maxLength={128}
            />
            <button
              className="password-toggle"
              type="button"
              aria-label={passwordVisible ? "Hide password" : "Show password"}
              onClick={() => setPasswordVisible((visible) => !visible)}
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        {isSignup && (
          <div className="form-field">
            <label htmlFor="auth-confirm-password">Confirm password</label>
            <div className="password-wrap">
              <input
                id="auth-confirm-password"
                name="confirmPassword"
                type={passwordVisible ? "text" : "password"}
                autoComplete="new-password"
                required
                minLength={8}
                maxLength={128}
                aria-invalid={isMismatch}
              />
            </div>
          </div>
        )}
        {notice && (
          <p className={`form-status${isMismatch ? " form-status--error" : ""}`} role={isMismatch ? "alert" : "status"}>
            {notice}
          </p>
        )}
        <button className="button button-primary" type="submit">
          {isSignup ? "Create account" : "Log in"} <ArrowUpRight size={16} aria-hidden="true" />
        </button>
      </form>
      <span className="form-disclaimer">
        This is a front-end preview only. Authentication is not connected and no account or session is created.
      </span>
      <p className="auth-switch">
        {isSignup ? "Already have an account?" : "New to REMMY?"}
        <Link href={isSignup ? "/login" : "/signup"}>{isSignup ? "Log in" : "Create an account"}</Link>
      </p>
      {!isSignup && (
        <p className="auth-switch">
          <Link href="/faq#password-reset">Forgot your password?</Link>
        </p>
      )}
    </div>
  );
}
