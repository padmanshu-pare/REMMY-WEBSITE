# REMMY website

The public-facing REMMY website lives in this directory and is independent of any future mobile application.

## Run locally

Use Node.js 20.9 or newer:

```powershell
npm install
npm run dev
```

Useful checks:

```powershell
npm run lint
npx tsc --noEmit
npm run build
```

## Configuration

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS origin before deployment. The sitemap and robots routes use the configured origin when present and otherwise use the incoming request origin.

## Product and launch boundaries

- The home page includes a local, sample-only search/save interaction and the workflow and feature pages have interactive previews. These use static sample data and do not call AI or a backend.
- Login and sign-up are validated front-end previews. They do not create accounts or send credentials.
- The contact form is a validated preview. It does not send or store messages.
- Search results and dashboard cards are illustrative examples, not live product data.
- No Instagram content is downloaded, analysed or searched by this website.
- Privacy and terms pages are pre-launch notices and need qualified review before a service launch.
- No official logo or koala artwork was present in the supplied workspace. The current header/footer use a plain text name and the product visuals are abstract; replace these with the approved brand assets when they are provided. No substitute mascot has been created.

## Routes

`/`, `/how-it-works`, `/features`, `/about`, `/contact`, `/faq`, `/privacy`, `/terms`, `/login`, and `/signup`.
