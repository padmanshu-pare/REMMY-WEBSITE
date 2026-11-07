const paths = [
  "/",
  "/how-it-works",
  "/features",
  "/about",
  "/contact",
  "/faq",
  "/privacy",
  "/terms",
];

export function GET(request: Request) {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const origin = configuredUrl ? new URL(configuredUrl).origin : new URL(request.url).origin;
  const entries = paths
    .map((path) => `  <url><loc>${origin}${path}</loc></url>`)
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
