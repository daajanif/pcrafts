# Precision Crafts - Construction Company Website

A multilingual (English/Arabic) website for Precision Crafts construction company built with Astro and TinaCMS.

![Precision Crafts Screenshot](/public/images/screenshot.jpg)

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Fast, modern static site generator
- **CMS**: [TinaCMS](https://tina.io/) - Git-based headless CMS with visual editing
- **CSS**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Internationalization**: Custom i18n implementation with multi-language support
- **Deployment**: Vercel/Netlify/GitHub Pages (choose your platform)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Access the admin panel at `/admin` to manage content through TinaCMS.

## 📁 Project Structure

```
├── public/             # Static assets
│   ├── images/         # Images and icons
│   └── fonts/          # Web fonts
├── src/
│   ├── components/     # Reusable UI components
│   ├── content/        # Content collections
│   ├── i18n/           # Internationalization utilities
│   ├── layouts/        # Page layouts
│   └── pages/          # Page components and routes
│       └── [lang]/     # Language-specific pages
├── tina/               # TinaCMS configuration
│   ├── collections/    # Content schemas
│   └── components/     # TinaCMS custom components
└── astro.config.mjs    # Astro configuration
```

## 🌐 Internationalization

The website supports English and Arabic languages. The language is determined by the URL path (`/en/` or `/ar/`). Each page has translations defined in the page component or pulled from TinaCMS.

To add a new language:
1. Add the language code to the `getStaticPaths()` function in each page
2. Add translations for the new language in the translations object
3. Create language-specific content in TinaCMS

## 📋 Content Management

Content is managed through TinaCMS, which provides a visual editing interface. To access the CMS:

1. Start the development server: `npm run dev`
2. Navigate to `/admin` in your browser
3. Make changes using the visual editor
4. Changes are saved to the Git repository

## 🚢 Deployment

### Vercel Deployment

1. Connect your repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy

### Netlify Deployment

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### GitHub Pages Deployment

Add this to your `package.json`:

```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

Then run:

```bash
npm install gh-pages --save-dev
npm run deploy
```

## ⚙️ Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PUBLIC_SITE_URL=https://your-site-url.com
TINA_CLIENT_ID=your-tina-client-id
TINA_TOKEN=your-tina-token
```



## 🐛 Troubleshooting

### Common Issues:

1. **TinaCMS Connection Issues**
   - Check your Tina tokens and client ID
   - Ensure your Tina config is properly set up

2. **Build Errors**
   - Make sure all dependencies are installed
   - Check for missing content files referenced in pages

3. **SVG Import Issues**
   - SVGs in the `public` directory should be referenced with absolute paths
   - For imported SVGs, use the Astro Image component

