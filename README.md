# Premium Portfolio

A production-ready personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, lucide-react, and shadcn-style UI primitives.

## Stack

- Next.js 16.2 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- next-themes
- shadcn/ui-compatible component structure
- Lucide icons
- Resend-powered contact API

## Features

- Responsive single-page portfolio with premium glassmorphism styling
- Animated hero, sticky auto-hiding navbar, section reveals, and loading state
- Project grid, timeline, services, and deploy-ready contact form
- Dark and light themes
- SEO metadata, `robots.ts`, and `sitemap.ts`
- Reusable component structure for easy content edits

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create your environment file:

   ```bash
   cp .env.example .env.local
   ```

3. Add your values to `.env.local`:

   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL` (optional)

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Customize content

- Update site identity and copy in `lib/data.ts`
- Replace project preview SVGs in `public/projects/`
- Adjust colors and tokens in `app/globals.css`
- Extend reusable UI primitives in `components/ui/`

## Deploy

Deploy directly to [Vercel](https://vercel.com/). Add the same environment variables in the project settings before enabling the contact form.
