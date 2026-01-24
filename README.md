# Fibreglass Technologies Website

A modern, professional website for Fibreglass Technologies - premium fibreglass pool renovations across New Zealand.

## Features

- **Modern Design**: Built with Next.js 16, React 19, and Tailwind CSS v4
- **shadcn/ui Components**: Beautiful, accessible UI components
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Proper metadata and semantic HTML
- **Form Handling**: Contact form with validation using react-hook-form and Zod

## Pages

1. **Homepage** (`/`) - Hero section, value proposition, services overview, and CTAs
2. **Services** (`/services`) - Detailed service offerings with outcomes and inclusions
3. **Why Fibreglass?** (`/why-fibreglass`) - Educational content about fibreglass benefits
4. **Our Process** (`/our-process`) - 5-step professional process breakdown
5. **Contact** (`/contact`) - Contact form and enquiry page

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Forms**: react-hook-form + Zod validation
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
fiberglass/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── services/          # Services page
│   ├── why-fibreglass/    # Education page
│   ├── our-process/       # Process page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── navigation.tsx     # Site navigation
│   ├── footer.tsx         # Site footer
│   └── ui/                # shadcn/ui components
└── lib/                   # Utility functions
```

## Brand Colors

The site uses a blue/grey color scheme:
- Primary: Blue tones (oklch(0.45 0.15 240))
- Background: Clean whites and light greys
- Accents: Professional blues and greys

## Customization

### Updating Content

- Edit page content in `app/[page-name]/page.tsx`
- Update navigation items in `components/navigation.tsx`
- Modify footer content in `components/footer.tsx`

### Styling

- Global styles: `app/globals.css`
- Color scheme: CSS variables in `globals.css`
- Component styles: Tailwind classes in components

### Form Submission

The contact form currently logs to console. To connect to a backend:

1. Update the `onSubmit` function in `app/contact/page.tsx`
2. Add your API endpoint
3. Handle form submission server-side

## Deployment

This project can be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting**

```bash
# Build the project
npm run build

# The output will be in .next/ directory
```

## License

Private project for Fibreglass Technologies.
