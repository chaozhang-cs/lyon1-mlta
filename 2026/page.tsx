import type { Metadata } from "next";
import Link from "next/link";
import { COURSE_BASE_NAME, COURSE_NAME } from "../app/course-info";
import { parts, practicalActivities, sessions, teachingDays } from "./course-data";
import { publicAssetPath, requestOrigin, siteRoute } from "../app/site-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const origin = await requestOrigin();
  const title = `${COURSE_NAME} · 2026`;
  const description =
    `The 2026 edition of ${COURSE_NAME} at Université Claude Bernard Lyon 1.`;

  return {
    title: { absolute: title },
    description,
    openGraph: {
      title,
      description,
      images: [{ url: `${origin}/2026/og-v2.png`, width: 1734, height: 907 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/2026/og-v2.png`],
    },
  };
}

const sessionByNumber = new Map(sessions.map((session) => [session.number, session]));

export default function Course2026() {
  return (
    <main id="top">
      <div className="announcement">
        <span>2026 schedule published</span>
        <span className="announcement-separator" aria-hidden="true">•</span>
        <span>Last updated 25 August 2026</span>
      </div>

      <header className="site-header">
        <Link className="brand" href={siteRoute("/2026")} aria-label="MLTA 2026 home">
          <span className="brand-mark">MLTA</span>
          <span className="brand-context">
            <span className="brand-course-name">{COURSE_BASE_NAME}</span>
            <span className="brand-school">Université Lyon 1</span>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Course navigation">
          <a href="#overview">Overview</a>
          <a href="#syllabus">Syllabus</a>
          <a href="#schedule">Schedule</a>
          <a href="#practical">Practical</a>
          <a href="#assessment">Assessment</a>
          <a href="#logistics">Logistics</a>
        </nav>
        <nav className="year-switcher" aria-label="Course year">
          <Link className="year-link active" href={siteRoute("/2026")} aria-current="page">2026</Link>
          <Link className="year-link" href={siteRoute("/2027")}>2027</Link>
        </nav>
      </header>

      <section className="hero" aria-labelledby="course-title">
        <div className="hero-copy">
          <p className="eyebrow">M2 DISS · Fall 2026 · 6 ECTS</p>
          <h1 id="course-title" className="course-title">
            <span className="course-title-acronym">MLTA</span>
            <span className="course-title-focus">Foundation Models and Agentic Systems</span>
          </h1>
          <p className="hero-intro">
            Modern machine learning through foundation models—following the
            full path from generation and evaluation to retrieval, agents,
            systems, and multimodality.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#schedule">View course schedule</a>
            <a className="button button-secondary" href="#overview">Explore the course</a>
          </div>
        </div>

        <aside className="course-card" aria-label="Course essentials">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="course-logo"
            src={publicAssetPath("/lyon1-logo.png")}
            alt="Université Claude Bernard Lyon 1"
            width={154}
            height={171}
          />
          <p className="card-kicker">Since</p>
          <p className="card-date">09 Sep</p>
          <p className="card-year">2026</p>
          <dl className="card-details">
            <div><dt>When</dt><dd>Wednesday · 09:45–13:00</dd></div>
            <div><dt>Where</dt><dd>Nautibus TD001 · Ground floor</dd></div>
          </dl>
        </aside>
      </section>

      <section className="instructor-spotlight" aria-labelledby="instructor-name">
        {/* A plain image avoids Vinext's client-side next/image hydration issue. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="instructor-photo"
          src={publicAssetPath("/instructor-chao-zhang.jpg")}
          alt="Portrait of Chao Zhang"
          width={168}
          height={168}
        />
        <p className="instructor-label">Instructor</p>
        <h2 id="instructor-name">
          <a href="https://chaozhang-cs.github.io/" target="_blank" rel="noreferrer">
            Chao Zhang <span aria-hidden="true">↗</span>
          </a>
        </h2>
        <p className="instructor-role">Junior Professor Chair in Computer Science</p>
        <p className="instructor-affiliation">Université Claude Bernard Lyon 1</p>
      </section>

      <section className="stat-strip" aria-label="Course at a glance">
        <div><strong>33</strong><span>focused sessions</span></div>
        <div><strong>36h</strong><span>lectures</span></div>
        <div><strong>24h</strong><span>labs &amp; project</span></div>
        <div><strong>50/50</strong><span>exam / practical</span></div>
      </section>

      <section className="section section-intro" id="overview">
        <div className="section-heading compact-heading">
          <p className="section-label">01 · Course overview</p>
        </div>
        <div className="intro-grid">
          <p className="lead-copy">
            MLTA is a graduate-level course on modern machine learning with
            large language models as its principal technical thread.
          </p>
          <div className="body-copy">
            <p>
              We move through the complete lifecycle of an LLM system: how
              text becomes tokens and logits, how models are trained and
              aligned, how external knowledge is retrieved, how agents plan
              and act, and how the resulting systems are evaluated and served.
            </p>
            <p>
              Mechanisms, empirical evidence, controlled comparison, failure
              analysis, and system trade-offs are central throughout. Products
              and frameworks appear as case studies rather than ends in themselves.
            </p>
          </div>
        </div>
        <div className="callout-grid">
          <article className="info-callout">
            <span className="callout-number">01</span>
            <h3>What you will be able to do</h3>
            <p>Trace a decoder-only Transformer, design reproducible evaluations, build trustworthy RAG and agent systems, and reason about training and serving trade-offs.</p>
          </article>
          <article className="info-callout accent-callout">
            <span className="callout-number">02</span>
            <h3>What this course is not</h3>
            <p>A general introduction to classical machine learning. Regression, trees, clustering, calculus, probability, and linear algebra are prerequisites or reviewed just in time.</p>
          </article>
        </div>
      </section>

      <section className="section journey-section" id="syllabus">
        <div className="section-heading compact-heading">
          <p className="section-label light-label">02 · Syllabus</p>
        </div>
        <ol className="journey-list">
          {parts.map((part) => (
            <li key={part.number} className="journey-item">
              <div className="journey-index">{String(part.number).padStart(2, "0")}</div>
              <div className="journey-content">
                <p className="journey-range">Sessions {part.range}</p>
                <h3>{part.title}</h3>
                <p>{part.question}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section schedule-section" id="schedule">
        <div className="section-heading compact-heading">
          <p className="section-label">03 · Calendar</p>
        </div>

        <div className="schedule-legend" aria-label="Schedule legend">
          <span><i className="legend-dot lecture-dot" /> Lecture · 09:45–13:00</span>
          <span><i className="legend-dot practical-dot" /> Practical / project · afternoon</span>
          <span><i className="legend-dot exam-dot" /> Examination</span>
        </div>

        <div className="part-legend" aria-label="Session part colors">
          {parts.map((part) => (
            <span className={`part-legend-item part-${part.number}`} key={part.number} aria-label={`Part ${part.number}: ${part.title}`}>
              <i className="part-swatch" />
              <strong>Part {part.number}</strong>
              <span className="part-name">{part.title}</span>
            </span>
          ))}
        </div>

        <ol className="schedule-list">
          {teachingDays.map((day, index) => (
            <li className="schedule-row" key={day.isoDate}>
              <div className="schedule-date">
                <time dateTime={day.isoDate}>{day.date}</time>
                <span>Wednesday · Week {index + 1}</span>
              </div>
              <div className="schedule-block lecture-block">
                <div className="block-meta">
                  <span>09:45–13:00</span>
                  <span>Nautibus {day.room} · Ground floor</span>
                </div>
                <ol className="session-list">
                  {day.sessionNumbers.map((number) => {
                    const session = sessionByNumber.get(number);
                    return session ? (
                      <li className={`part-${session.part}`} key={number}>
                        <span className="session-number">{String(number).padStart(2, "0")}</span>
                        <span>{session.title}</span>
                      </li>
                    ) : null;
                  })}
                </ol>
              </div>
              {day.practical ? (
                <div className="schedule-block practical-block">
                  <div className="block-meta"><span>{day.practical.time}</span><span>Nautibus {day.room} · Ground floor</span></div>
                  <p>{day.practical.note}</p>
                </div>
              ) : (
                <div className="schedule-block no-afternoon"><span>No afternoon block</span></div>
              )}
            </li>
          ))}
          <li className="schedule-row exam-row">
            <div className="schedule-date">
              <time dateTime="2026-12-16">16 Dec</time>
              <span>Wednesday · Examination</span>
            </div>
            <div className="schedule-block exam-block">
              <div className="block-meta"><span>09:45–13:00</span><span>Nautibus TD005 · Ground floor</span></div>
              <p><strong>Written examination</strong><br />Coverage and format details to be confirmed.</p>
            </div>
            <div className="schedule-block no-afternoon"><span>End of course</span></div>
          </li>
        </ol>

        <div className="schedule-note">
          <span className="tbc-badge">TBC</span>
          <p>The dates, times, rooms, and morning session mapping are confirmed from the official timetable. The topics of the remaining seven practical activities remain to be confirmed.</p>
        </div>
      </section>

      <section className="section practical-section" id="practical">
        <div className="section-heading compact-heading">
          <p className="section-label">04 · Practical work</p>
        </div>
        <ol className="activity-grid">
          {practicalActivities.map((activity, index) => (
            <li key={index}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{activity}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="assessment-section" id="assessment">
        <div className="assessment-inner">
          <div className="section-heading compact-heading">
            <p className="section-label light-label">05 · Assessment</p>
          </div>
          <div className="assessment-grid">
            <article className="assessment-card">
              <div className="assessment-score">50<span>%</span></div>
              <h3>Written examination</h3>
              <p>Mechanisms, experiment and system design, trade-offs, failure diagnosis, and interpretation of evidence.</p>
            </article>
            <article className="assessment-card light-card">
              <div className="assessment-score">50<span>%</span></div>
              <h3>Practical work</h3>
            </article>
          </div>
        </div>
      </section>

      <section className="section logistics-section" id="logistics">
        <div className="section-heading compact-heading">
          <p className="section-label">06 · Logistics</p>
        </div>
        <dl className="logistics-grid">
          <div><dt>Course</dt><dd>{COURSE_NAME} (MLTA)</dd></div>
          <div><dt>Programme</dt><dd>M2 DISS · 6 ECTS</dd></div>
          <div><dt>Instructor</dt><dd><a href="https://chaozhang-cs.github.io/" target="_blank" rel="noreferrer">Chao Zhang</a></dd></div>
          <div><dt>Department</dt><dd>Département d&apos;Informatique<br />Université Claude Bernard Lyon 1</dd></div>
          <div><dt>Primary venue</dt><dd>Nautibus TD001 / TD005<br />Ground floor</dd></div>
          <div><dt>Contact</dt><dd><a href="mailto:chao.zhang@univ-lyon1.fr">chao.zhang@univ-lyon1.fr</a></dd></div>
          <div><dt>Course materials</dt><dd>Available on Moodle – Lyon 1</dd></div>
          <div><dt>Prerequisites</dt><dd>Python, machine learning and deep learning foundations, probability, linear algebra, and calculus.</dd></div>
        </dl>
      </section>

      <footer className="site-footer">
        <div>
          <p className="footer-mark">MLTA</p>
          <p>{COURSE_NAME}</p>
        </div>
        <div className="footer-meta">
          <p>Université Claude Bernard Lyon 1</p>
          <p>2026 course edition</p>
        </div>
        <a href="#top" className="back-to-top" aria-label="Back to top">↑ Top</a>
      </footer>
    </main>
  );
}
