# Culinary Fresh

A premium e-commerce platform for fresh fish and quality meat products.

## Table of Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)

## About

Culinary Fresh is a modern e-commerce website specializing in premium seafood and meat products. Our platform offers customers a seamless shopping experience with carefully sourced, high-quality products delivered fresh to their doorstep.

## Features

- **Product Showcase**: Beautifully presented products with detailed information
- **Advanced Filtering**: Filter products by category, price range, and ratings
- **Sorting Options**: Sort by price, rating, or newest arrivals
- **Responsive Design**: Fully responsive layout that works on all devices
- **Animated UI**: Smooth animations and transitions for enhanced user experience
- **Contact Page**: Comprehensive contact information and messaging system
- **SEO Optimized**: Built with search engine optimization in mind

## Tech Stack

- **Frontend**: [Next.js 14](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Custom component library with [shadcn/ui](https://ui.shadcn.com/) inspiration
- **Animations**: [GSAP](https://greensock.com/gsap/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Hooks
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone git@github.com:Aswanthachu/v0-culinary-fresh.git
cd v0-culinary-fresh
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
.
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── privacy/           # Privacy policy page
│   ├── products/          # Products listing page
│   ├── returns/           # Return policy page
│   ├── shipping/          # Shipping information page
│   ├── sitemap/           # Sitemap page
│   ├── terms/             # Terms of service page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/                # Reusable UI components
│   ├── contact-form.tsx   # Contact form component
│   ├── cta-section.tsx    # Call to action section
│   ├── features-section.tsx # Features section
│   ├── filters-section.tsx # Product filters
│   ├── footer.tsx         # Footer component
│   ├── header.tsx         # Header/Navigation component
│   ├── hero-section.tsx   # Hero section
│   ├── product-card.tsx   # Product card component
│   ├── product-filters.tsx # Advanced product filters
│   ├── products-grid.tsx  # Products grid layout
│   └── theme-provider.tsx # Theme provider
├── lib/                   # Utility functions and data
│   └── product-data.ts    # Product data and types
├── public/                # Static assets
└── styles/                # Global styles
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about Tailwind CSS
- [GSAP Documentation](https://greensock.com/docs/) - Learn about GSAP animations