# MLTA · Université Lyon 1

Course website for **Machine Learning Techniques and Applications: Foundation
Models and Agentic Systems**, taught in the M2 DISS programme at Université
Claude Bernard Lyon 1.

The site is organised so annual content and shared website code do not mix:

```text
2026/                 confirmed 2026 page and course data
2027/                 2027 planning page and placeholder data
app/                  routing, layout, metadata, and shared styles
  2026/page.tsx       thin route adapter for /2026
  2027/page.tsx       thin route adapter for /2027
public/               shared and year-specific images
tests/                rendered-page checks
```

The root URL automatically redirects to the matching current-year page when it
exists, otherwise to the most recent available offering.

## Local development

Node.js 22.13 or newer is required.

```bash
npm install
npm run dev
```

Use `npm run build` to create and validate the production build.

## GitHub Pages

The repository includes a GitHub Actions workflow that publishes a static
export to `https://chaozhang-cs.github.io/lyon1-mlta/`. Run the same build and
verification locally with:

```bash
npm run test:pages
```

After pushing to `main`, set **Settings → Pages → Build and deployment →
Source** to **GitHub Actions**. Every later push to `main` will rebuild and
publish the site automatically.

To update one edition, work only in its numbered directory. To add a future
edition, copy the structure of an existing year, add its thin route adapter in
`app/<year>/page.tsx`, and add the year to `availableYears` in `app/page.tsx`.
Unconfirmed details should remain explicitly marked **TBC** or "To be confirmed."
