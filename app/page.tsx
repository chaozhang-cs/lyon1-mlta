// GitHub Pages cannot perform server-side redirects. Render the current
// offering directly at the repository root so the default URL remains useful.
export const dynamic = "force-static";
export { default, generateMetadata } from "../2026/page";
