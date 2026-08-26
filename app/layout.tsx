import type { Metadata } from "next";
import { COURSE_NAME } from "./course-info";
import { requestOrigin } from "./site-metadata";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const origin = await requestOrigin();
  const title = `${COURSE_NAME} · Université Lyon 1`;
  const description =
    `${COURSE_NAME} — a graduate course on foundation models, LLM systems, retrieval, agents, and evaluation.`;

  return {
    metadataBase: new URL(origin),
    title: { default: title, template: "%s · MLTA" },
    description,
    openGraph: {
      title,
      description,
      images: [{ url: `${origin}/og-v2.png`, width: 1734, height: 907 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og-v2.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
