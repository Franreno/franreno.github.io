# Personal Website Setup Guide

Welcome to your retro-styled personal website! This guide will help you customize and deploy your site.

## Features

- **Early 2000s Aesthetic**: Nostalgic design with dotted borders, retro boxes, and classic web elements
- **Dark Mode Only**: Beautiful dark theme with pastel purple accents
- **Three Main Pages**:
  - Landing Page (Home)
  - Projects Page
  - Blog Page (feature-flagged)
- **Feature Flag System**: Control page visibility with environment variables

## Getting Started

### Development

```bash
npm run dev
```

Visit `http://localhost:3000` to see your site.

### Build for Production

```bash
npm run build
npm start
```

## Customization Guide

### 1. Personal Information

Edit `/src/app/page.tsx` to update:
- Your name
- About section
- Skills and technologies
- Contact information (email, GitHub, LinkedIn)

### 2. Projects

Edit `/src/app/projects/page.tsx` to:
- Add your own projects
- Update project descriptions
- Change GitHub links
- Modify tech stacks

### 3. Blog Posts

Edit `/src/app/blog/page.tsx` to add or modify blog posts.

### 4. Theme Colors

Want different accent colors? Edit `/src/app/globals.css`:

```css
:root {
  --accent-purple: #c4b5fd;      /* Main accent color */
  --accent-purple-dim: #a78bfa;   /* Dimmed version */
  --accent-purple-bright: #ddd6fe; /* Bright version */
}
```

### 5. Metadata

Update site metadata in `/src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Your custom description",
};
```

## Feature Flags

### Enabling the Blog

The blog is hidden by default. To enable it:

1. Open `.env.local`
2. Change `NEXT_PUBLIC_FEATURE_BLOG=false` to `NEXT_PUBLIC_FEATURE_BLOG=true`
3. Restart your dev server

The blog link will now appear in navigation, and the blog page will be accessible.

### Adding More Feature Flags

Edit `/src/lib/features.ts`:

```typescript
export const features = {
  blog: process.env.NEXT_PUBLIC_FEATURE_BLOG === 'true',
  // Add more flags here
  newFeature: process.env.NEXT_PUBLIC_FEATURE_NEW === 'true',
} as const;
```

## Styling Tips

### Retro Elements

The theme includes several retro CSS classes:

- `.retro-box` - Card-style container with border
- `.retro-link` - Underlined link with purple accent
- `.retro-border` - Dotted purple border
- `.blink` - Blinking animation (use sparingly!)
- `.marquee` - Scrolling text animation

### Usage Example

```tsx
<div className="retro-box">
  <h2>My Section</h2>
  <a href="#" className="retro-link">Click me</a>
</div>
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_FEATURE_BLOG=true` (if you want blog enabled)
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Connect your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variables in Netlify dashboard

### Other Platforms

This is a standard Next.js 16 app and can be deployed to any platform that supports Next.js.

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Global styles and theme
│   ├── projects/
│   │   └── page.tsx        # Projects page
│   ├── blog/
│   │   └── page.tsx        # Blog page (feature-flagged)
│   └── not-found.tsx       # 404 page
├── components/
│   └── Navigation.tsx      # Navigation component
└── lib/
    └── features.ts         # Feature flag configuration
```

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Fonts**: Geist Sans & Geist Mono

## Tips & Tricks

1. **Keep the retro vibe**: Use tables, dotted borders, and simple layouts
2. **Color consistency**: Stick to the pastel purple palette for cohesion
3. **Performance**: The site is intentionally simple - keep it that way!
4. **Content**: Update placeholder text with your real information

## Need Help?

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

Built with modern tech, styled with nostalgia ✨
