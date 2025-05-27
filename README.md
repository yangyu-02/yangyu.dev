# Yang Yu's Dev Blog

A minimalist personal dev blog built with Astro.

## Project Structure

```
src/
├── components/     # Reusable Astro components (PascalCase)
├── content/
│   └── posts/      # Blog posts as .mdx files (kebab-case)
├── layouts/        # Page layouts (Layout.astro)
└── pages/          # Routes and pages
    └── posts/      # Dynamic blog post routing
```

## Tech Stack

- **Framework**: Astro 5.7+ with React integration
- **Content**: MDX files with content collections
- **Styling**: Component-scoped CSS with custom properties
- **Package Manager**: Yarn 4.9+
- **Code Highlighting**: Shiki with copy buttons

## Development

```bash
# Start dev server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

## Package.json Notes

- Uses Yarn 4.9+ as package manager (see `packageManager` field)
- Build script includes `astro check` for TypeScript validation
- Includes `shiki-transformer-copy-button` for code block copy functionality
- React 19+ for interactive components

## Blog Posts

Create new posts in `src/content/posts/` with this frontmatter:

```yaml
---
title: "Post Title"
description: "Brief description"
date: "YYYY-MM-DD"
slug: "/custom-slug" # optional
---
```