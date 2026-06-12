## Rebrand: Hope and Faith Foundation → Amahoro Foundation

Replace all textual references to the old brand name with "Amahoro Foundation" across the site. Keep the existing color palette, layout, tagline, and all other content unchanged.

### Scope of changes

Replace the following text patterns site-wide (case-preserving):
- `HOPE AND FAITH FOUNDATION` → `AMAHORO FOUNDATION`
- `Hope and Faith Foundation` → `Amahoro Foundation`

### Files to update

Components:
- src/components/Navbar.tsx
- src/components/Footer.tsx
- src/components/Hero.tsx
- src/components/AboutMinistry.tsx
- src/components/SEO.tsx
- src/components/ImpactStories.tsx
- src/components/TestimonialsCarousel.tsx
- src/components/ContactForm.tsx

Pages:
- src/pages/Index.tsx
- src/pages/About.tsx
- src/pages/Programs.tsx
- src/pages/Donate.tsx
- src/pages/Volunteer.tsx
- src/pages/Contact.tsx
- src/pages/Impact.tsx
- src/pages/Testimonials.tsx
- src/pages/Resources.tsx
- src/pages/Blog.tsx
- src/pages/BlogPostDetail.tsx
- src/pages/Careers.tsx

Data / utils:
- src/data/structuredData.ts (organization name in JSON-LD)
- src/utils/seoHelpers.ts (keyword strings)
- src/utils/whatsappHelper.ts (any name references in messages)

Static/meta:
- index.html (page `<title>`, meta description, OG/Twitter tags if present)
- public/sitemap.xml and public/robots.txt (only if they reference the name)
- README.md (project description)

### Out of scope

- No color, layout, or component structure changes.
- Tagline "Transforming lives through love and care" stays as is.
- Domain references (e.g. hopeandfaithfoundation.online in SEO helpers) remain unchanged unless you provide a new domain.
- Logo/favicon image assets are not regenerated.

### Verification

After edits, run a project-wide search for "Hope and Faith" / "HOPE AND FAITH" to confirm zero remaining matches, then visually check the home page in preview.