import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputUrl = new URL("../dist/client/", import.meta.url);

async function output(filename) {
  return readFile(new URL(filename, outputUrl), "utf8");
}

test("GitHub Pages export contains every public route", async () => {
  await Promise.all([
    access(new URL("index.html", outputUrl)),
    access(new URL("2026.html", outputUrl)),
    access(new URL("2027.html", outputUrl)),
    access(new URL("404.html", outputUrl)),
    access(new URL("_next/", outputUrl)),
  ]);
});

test("2026 export uses the GitHub Pages repository path", async () => {
  const html = await output("2026.html");

  assert.match(html, /M2 DISS · Fall 2026 · 6 ECTS/);
  assert.match(html, /href="\/lyon1-mlta\/2027\.html"/);
  assert.match(html, /src="\/lyon1-mlta\/lyon1-logo\.png"/);
  assert.match(html, /src="\/lyon1-mlta\/instructor-chao-zhang\.jpg"/);
  assert.match(html, /href="\/lyon1-mlta\/_next\//);
  assert.match(html, /https:\/\/chaozhang-cs\.github\.io\/lyon1-mlta\/2026\/og-v2\.png/);
  assert.doesNotMatch(html, /http:\/\/localhost/);
});

test("root and 2027 pages are statically rendered", async () => {
  const [rootHtml, futureHtml] = await Promise.all([
    output("index.html"),
    output("2027.html"),
  ]);

  assert.match(rootHtml, /M2 DISS · Fall 2026 · 6 ECTS/);
  assert.match(futureHtml, /MLTA[\s\S]*2027/);
  assert.match(futureHtml, /href="\/lyon1-mlta\/2026\.html"/);
  assert.doesNotMatch(futureHtml, /property="og:image"/i);
});
