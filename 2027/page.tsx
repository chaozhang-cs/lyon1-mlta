import type { Metadata } from "next";
import Link from "next/link";
import { COURSE_BASE_NAME, COURSE_NAME } from "../app/course-info";
import { siteRoute } from "../app/site-metadata";
import { course2027 } from "./course-data";

const title = `${COURSE_NAME} · ${course2027.year}`;
const description =
  `Planning page for the ${course2027.year} edition of ${COURSE_NAME} at Université Claude Bernard Lyon 1.`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: { title, description, images: [] },
  twitter: { card: "summary", title, description, images: [] },
};

export default function Course2027() {
  return (
    <main id="top" className="future-page">
      <header className="site-header">
        <Link className="brand" href={siteRoute("/2027")} aria-label="MLTA 2027 home">
          <span className="brand-mark">MLTA</span>
          <span className="brand-context">
            <span className="brand-course-name">{COURSE_BASE_NAME}</span>
            <span className="brand-school">Université Lyon 1</span>
          </span>
        </Link>
        <nav className="year-switcher" aria-label="Course year">
          <Link className="year-link" href={siteRoute("/2026")}>2026</Link>
          <Link className="year-link active" href={siteRoute("/2027")} aria-current="page">2027</Link>
        </nav>
      </header>

      <section className="future-hero">
        <div>
          <p className="eyebrow">M2 DISS · 2027 edition</p>
          <h1>MLTA <span>2027</span></h1>
          <p className="future-course-name">{COURSE_NAME}</p>
          <p className="hero-intro">
            The next edition is taking shape. The course keeps the same
            system-level perspective while the timetable and annually rotating
            frontier topic are confirmed.
          </p>
          <Link className="button button-primary" href={siteRoute("/2026")}>
            View the 2026 course
          </Link>
        </div>
        <aside className="future-card">
          <p className="card-kicker">Planning status</p>
          <p className="future-status">{course2027.status}</p>
          <dl className="future-details">
            <div><dt>Dates &amp; rooms</dt><dd>{course2027.datesAndRooms}</dd></div>
            <div><dt>Course structure</dt><dd>{course2027.courseStructure}</dd></div>
            <div><dt>Annual frontier topic</dt><dd>{course2027.frontierTopic}</dd></div>
          </dl>
        </aside>
      </section>

      <section className="section future-outline">
        <div className="section-heading">
          <p className="section-label">What carries forward</p>
          <h2>A durable core, reviewed every year.</h2>
        </div>
        <div className="future-grid">
          <article><span>01</span><h3>Foundations</h3><p>Generation, evaluation, architecture, pretraining, and alignment remain the technical core.</p></article>
          <article><span>02</span><h3>Systems</h3><p>Retrieval, agents, training, inference, and serving stay connected through measurable trade-offs.</p></article>
          <article><span>03</span><h3>Frontier</h3><p>The final topic rotates only when it has clear objectives, credible evaluation, and reproducible evidence.</p></article>
        </div>
      </section>

      <footer className="site-footer">
        <div><p className="footer-mark">MLTA</p><p>{COURSE_NAME}</p></div>
        <div className="footer-meta"><p>Université Claude Bernard Lyon 1</p><p>2027 planning edition</p></div>
        <a href="#top" className="back-to-top">↑ Top</a>
      </footer>
    </main>
  );
}
