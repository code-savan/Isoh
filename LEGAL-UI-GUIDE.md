## ISOH Legal UI Guide

This guide defines how to create and maintain legal pages (Privacy Policy, Terms & Conditions, Disclaimers) matching the site's visual language.

### Theme & Foundations
- **Fonts**: `Inter` for body, `Poppins` for headings. Already set in `app/layout.js` via CSS variables `--font-inter` and `--font-poppins`.
- **Colors**: Body text `#1c1c1c` on light background, or `--foreground` on dark. Use `text-[color]` utilities sparingly; prefer defaults from `app/globals.css`.
- **Sizing**: Body 14px with line-height 1.6; headings weight 600. Follow size hints in `Styleguide.md` (H1 40px, H2 28px, H3 20px).
- **Spacing**: Section padding top/bottom ~ `py-20` (≈80px). Max width 1200px for content area.
- **Motion**: Keep subtle reveals consistent with the rest of the site. Avoid flashy animations on legal pages.

### Layout Structure
- **Page wrapper**: Use a centered container with comfortable reading width.
- **Section grouping**: Break content into clear sections with anchors for deep-linking.
- **Hierarchy**:
  - H1: Page title
  - H2: Major sections
  - H3: Subsections
  - Use ordered/unordered lists for clauses.

### Accessibility
- Use semantic headings in order (no skipping).
- Provide anchor `id` attributes for sections so the TOC links work.
- Maintain contrast; do not rely on color alone for emphasis.

### Standard Page Template (JSX)

```jsx
// app/[slug]/page.jsx (example)
export const metadata = {
  title: "Privacy Policy | P.A. ISOH LEGAL CONSULTANTS",
  description: "Our commitment to privacy and data protection.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="font-sans">
      <section className="relative hero-bg">
        <div className="mx-auto max-w-[1200px] px-4 py-20">
          <h1 className="text-3xl md:text-4xl font-heading font-semibold">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed">
            Effective date: 01 Oct 2025
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1200px] px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
            {/* TOC */}
            <nav aria-label="Table of contents" className="md:sticky md:top-20 h-fit">
              <ul className="space-y-2 text-sm">
                <li><a href="#overview" className="underline-offset-4 hover:underline">Overview</a></li>
                <li><a href="#data-collection" className="underline-offset-4 hover:underline">Data We Collect</a></li>
                <li><a href="#how-we-use" className="underline-offset-4 hover:underline">How We Use Data</a></li>
                <li><a href="#your-rights" className="underline-offset-4 hover:underline">Your Rights</a></li>
                <li><a href="#contact" className="underline-offset-4 hover:underline">Contact</a></li>
              </ul>
            </nav>

            {/* Content */}
            <article className="prose prose-neutral max-w-none">
              <section id="overview" className="scroll-mt-24">
                <h2 className="text-2xl font-heading font-semibold">Overview</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  This policy explains how we collect, use, and protect your information.
                </p>
              </section>

              <section id="data-collection" className="mt-10 scroll-mt-24">
                <h2 className="text-2xl font-heading font-semibold">Data We Collect</h2>
                <ul className="mt-3 list-disc pl-5 text-sm leading-relaxed">
                  <li>Contact information (name, email, phone)</li>
                  <li>Usage data (pages visited, interaction logs)</li>
                  <li>Communication records</li>
                </ul>
              </section>

              <section id="how-we-use" className="mt-10 scroll-mt-24">
                <h2 className="text-2xl font-heading font-semibold">How We Use Data</h2>
                <ol className="mt-3 list-decimal pl-5 text-sm leading-relaxed">
                  <li>Provide and improve services</li>
                  <li>Respond to inquiries</li>
                  <li>Legal compliance</li>
                </ol>
              </section>

              <section id="your-rights" className="mt-10 scroll-mt-24">
                <h2 className="text-2xl font-heading font-semibold">Your Rights</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  You may request access, correction, or deletion of your data as permitted by law.
                </p>
              </section>

              <section id="contact" className="mt-10 scroll-mt-24">
                <h2 className="text-2xl font-heading font-semibold">Contact</h2>
                <p className="mt-3 text-sm leading-relaxed">
                  Email: info@example.com
                </p>
              </section>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
```

### Utility Classes & Notes
- Use `hero-bg` on the top banner for subtle background texture (defined in `app/globals.css`).
- Keep content width within `max-w-[1200px]` and side padding `px-4`.
- Use `text-sm leading-relaxed` for body text to match 14px/1.6.
- For anchors, add `scroll-mt-24` so links don't get hidden under the sticky TOC.

### Metadata Pattern
Define `export const metadata = { title, description }` at the top of each legal page to match SEO patterns established in `app/layout.js`.

### Existing Legal Pages
- `app/privacy-policy/page.jsx`
- `app/terms-and-conditions/page.jsx`

Use the template and adapt section names. Keep tone formal and clear.
