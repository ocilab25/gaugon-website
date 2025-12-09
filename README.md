# Gaugon - AI Automation & IT Solutions

A clean, modern marketing website for Gaugon, an IT + AI solutions studio focused on helping small businesses automate workflows and optimize their operations.

## 🚀 Live Site

Visit the site at: [https://ocilab25.github.io/gaugon-website/](https://ocilab25.github.io/gaugon-website/)

## 🛠️ Technologies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **GitHub Pages** - Static hosting

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/ocilab25/gaugon-website.git
cd gaugon-website
```

2. Install dependencies:
```bash
npm install
```

## 💻 Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🏗️ Build

Create a production build:

```bash
npm run build
```

This generates a static export in the `out` directory, optimized for GitHub Pages deployment.

## 🧪 Testing Build Locally

After building, you can test the production build locally:

```bash
npx serve out
```

Then visit the local URL provided (e.g., http://localhost:3000).

## 🚀 Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

### Manual Deployment

1. Build the site: `npm run build`
2. The GitHub Actions workflow automatically deploys the `out` directory to GitHub Pages

### Configuration

- **Base Path**: `/gaugon-website` (configured in `next.config.mjs`)
- **GitHub Pages**: Served from the `gh-pages` branch (managed by GitHub Actions)

## 📁 Project Structure

```
gaugon-website/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── sections/          # Page sections (Hero, Services, etc.)
│   ├── Navbar.tsx         # Navigation component
│   ├── Footer.tsx         # Footer component
│   └── WhatsAppButton.tsx # WhatsApp contact button
├── public/                # Static assets
├── .github/workflows/     # GitHub Actions CI/CD
└── next.config.mjs        # Next.js configuration
```

## 🎨 Brand

- **Name**: Gaugon
- **Tagline**: AI-driven IT & automation for small businesses
- **Primary Color**: `#6B4CFF`
- **Style**: Clean, minimal, security-focused

## 📄 License

Private repository - All rights reserved.

## 🤝 Contact

For inquiries about Gaugon services, visit the [contact page](https://ocilab25.github.io/gaugon-website/contact) or reach out via WhatsApp.
