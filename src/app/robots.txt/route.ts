export function GET(request: Request) {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const origin = configuredUrl ? new URL(configuredUrl).origin : new URL(request.url).origin;
  const body = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /login",
    "Disallow: /signup",
    `Sitemap: ${origin}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
