import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html", host: "localhost" },
    }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("root renders the current 2026 offering", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /M2 DISS · Fall 2026 · 6 ECTS/);
});

test("server-renders the complete 2026 course page", async () => {
  const response = await render("/2026");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Machine Learning Techniques and Applications: Foundation Models and Agentic Systems · 2026<\/title>/i);
  assert.match(html, /brand-course-name[^>]*>Machine Learning Techniques and Applications<\/span>/);
  assert.match(html, /course-title-acronym[^>]*>MLTA<\/span>/);
  assert.doesNotMatch(html, /course-title-applications/);
  assert.match(html, /M2 DISS · Fall 2026 · 6 ECTS/);
  assert.doesNotMatch(html, /M2 DISS · A\w+ 2026/);
  assert.match(html, /aria-label="Course navigation"[\s\S]*href="#overview"[\s\S]*href="#syllabus"[\s\S]*href="#schedule"[\s\S]*href="#practical"[\s\S]*href="#assessment"[\s\S]*href="#logistics"/);
  assert.match(html, /aria-label="Session part colors"[\s\S]*aria-label="Part 1:[\s\S]*aria-label="Part 2:[\s\S]*aria-label="Part 3:[\s\S]*aria-label="Part 4:[\s\S]*aria-label="Part 5:/);
  assert.doesNotMatch(html, /aria-label="Part 6:/);
  assert.match(html, /class="part-name">Foundations, Prompting &amp; Evaluation<\/span>/);
  assert.match(html, /class="part-name">Reasoning, Agents &amp; Self-Improvement<\/span>/);
  assert.match(html, /<li class="part-1">[\s\S]*<li class="part-5">/);
  assert.doesNotMatch(html, /<li class="part-[67]">/);
  assert.match(html, /Foundation Models and Agentic Systems/);
  assert.match(html, /Advanced RAG/);
  assert.match(html, /Context, Memory, and Harness/);
  assert.match(html, /From Self-Correction to Self-Improvement/);
  assert.match(html, /Project presentations/);
  assert.doesNotMatch(html, /Trustworthy RAG|Serving Stack|Multimodal LLMs|Tabular Foundation Models|Agentic RL<|Annual Frontier/);
  assert.match(html, /Nautibus TP101</);
  assert.doesNotMatch(html, /First floor/);
  assert.match(html, /16 Dec/);
  assert.match(html, /Nautibus TD005/);
  assert.match(html, />Since<\/p>[\s\S]*>09 Sep<\/p>/);
  assert.doesNotMatch(html, /First class/);
  assert.match(html, /src="\/instructor-chao-zhang\.jpg"/);
  assert.match(html, /href="https:\/\/chaozhang-cs\.github\.io\/"[^>]*>\s*Chao Zhang/);
  assert.match(html, /Junior Professor Chair in Computer Science/);
  assert.match(html, /class="course-logo"[\s\S]*Since/);
  assert.match(html, /class="activity-grid"[\s\S]*<p>Fast Inference for Agents: Prefix Caching<\/p>/);
  assert.doesNotMatch(html, /Tokenization, generation, prompting/);
  assert.doesNotMatch(html, /Two technical assignments|Semester project|Paper discussion or reproduction note/);
  assert.match(html, /href="mailto:chao\.zhang@univ-lyon1\.fr"[^>]*>chao\.zhang@univ-lyon1\.fr/);
  assert.match(html, /Available on Moodle – Lyon 1/);
  assert.doesNotMatch(html, /office hours|Links to be added/i);
  assert.doesNotMatch(html, /Understand the whole system|Seven parts\. One continuous technical story|Evaluation appears early|Lectures run in three focused|Experiments over anecdotes|Every lab includes a hypothesis|Evidence, implementation, and critical judgment|The essentials/);
  assert.match(html, /alt="Université Claude Bernard Lyon 1"/);
  assert.match(html, /http:\/\/localhost(?::3000)?\/2026\/og-v2\.png/);
  assert.doesNotMatch(html, /Stanford|codex-preview|react-loading-skeleton/i);
});

test("server-renders the 2027 planning page with route-specific metadata", async () => {
  const response = await render("/2027");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /<title>Machine Learning Techniques and Applications: Foundation Models and Agentic Systems · 2027<\/title>/i);
  assert.match(html, /In preparation/);
  assert.match(html, /Dates &amp; rooms/);
  assert.doesNotMatch(html, /lyon1-logo\.png/);
  assert.doesNotMatch(html, /property="og:image"/i);
  assert.doesNotMatch(html, /2026\/og(?:-v2)?\.png|\/og(?:-v2)?\.png/i);
});
