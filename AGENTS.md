# AGENTS.md

This file contains guidelines and commands for agentic coding agents working in this Astro personal website repository.

## Project Overview

This is an Astro 5.x personal website with TypeScript, featuring blog posts, talks, projects, and music content. The site uses Tailwind CSS v4 for styling and follows strict code quality standards.

## Essential Commands

### Development
```bash
npm run dev          # Start development server
npm run preview      # Preview production build locally
npm run sync         # Sync Astro dependencies
```

### Building & Quality Checks
```bash
npm run build        # Full build with checks (astro check + build + pagefind)
npm run prettier:check   # Check code formatting
npm run prettier:fix     # Auto-fix formatting issues
npm run lint         # Run ESLint (no-console rule enforced)
npm run ts:check     # TypeScript type checking without emit
```

**Always run `npm run lint` and `npm run ts:check` before committing changes.**

## Code Style Guidelines

### TypeScript & JavaScript
- Use strict TypeScript with proper type annotations
- Prefer `as const` for configuration objects and constants
- No console statements allowed (ESLint error rule)
- Use meaningful function and variable names
- Export utility functions as default when they're the main export

### Import Patterns
- Use path alias `@/` for src directory imports (configured in tsconfig.json)
- Group imports: external libraries first, then internal imports
- Example import structure:
```typescript
import external from 'external-lib';
import { SITE } from "@/config";
import { utility } from "@/utils/someUtility";
```

### Prettier Configuration
- 2 spaces for indentation
- Semicolons required
- Double quotes for strings (single quotes: false)
- Trailing commas: es5 compatible
- Print width: 80 characters
- Line ending: LF

## File Organization

### Directory Structure
```
src/
├── assets/          # Static assets (icons, images)
├── components/      # Reusable Astro components
├── constants.ts     # Site constants and social links
├── config.ts        # Site configuration
├── content.config.ts # Astro content collection schemas
├── layouts/         # Page layout components
├── pages/           # Route-based pages
├── styles/          # Global styles and CSS
└── utils/           # Utility functions
```

### Component Guidelines
- Astro components use `.astro` extension
- Frontmatter script (`---`) for server-side logic
- Client-side scripts in separate `<script>` tags
- Use Tailwind classes with responsive prefixes
- Components should be reusable and accept props via interfaces

Example component structure:
```astro
---
import { someImport } from "@/utils/helper";

export interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<div class="p-4 sm:p-6">
  <h1>{title}</h1>
  {description && <p>{description}</p>}
</div>
```

## Content Collections

### Schema Definition
- Use Zod schemas in `content.config.ts` for type safety
- All content types extend `CommonContent` base schema
- Required fields: `type`, `title`, `pubDatetime`
- Optional fields: `description`, `modDatetime`, `tags`, `draft`

### Content Organization
```
data/
├── blog/            # Blog posts (Markdown files)
├── talks/           # Talk descriptions (Markdown files)
├── projects/        # Project descriptions (Markdown files)
└── travels-data/    # Travel data (JSON files)
```

## Styling Guidelines

### Tailwind CSS Usage
- Use responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`
- Leverage custom CSS variables defined in `global.css`
- Follow the established color scheme using CSS custom properties
- Use semantic class names for better maintainability

### CSS Custom Properties
- Light theme: `--background: #f9e6cf`, `--accent: #da498d`
- Dark theme: `--background: #432e54`, `--accent: #ae445a`
- Use these in components: `class="bg-background text-accent"`

## Code Quality Standards

### Before Committing
1. Run `npm run prettier:check` to ensure formatting
2. Run `npm run lint` to check for code issues
3. Run `npm run ts:check` to verify TypeScript types
4. Test functionality in development mode

### Error Handling
- Use proper TypeScript types to prevent runtime errors
- Handle optional values gracefully with nullish coalescing
- Use Zod validation for content schemas
- Implement proper error boundaries where needed

## Performance Considerations

### Image Optimization
- Use Astro's Image component with appropriate layout settings
- Ensure OG images meet minimum size requirements (1200x630px)
- Optimize images for web using the built-in sharp integration

### Build Optimization
- The build process includes Pagefind for search functionality
- OG images are generated dynamically using Satori
- Use Astro's built-in optimizations for bundling

## Development Tips

### Working with Content
- Draft posts can be hidden with `draft: true` in frontmatter
- Use the `postFilter` utility to filter published content
- Content collections provide type-safe access to markdown files

### Testing Approach
- This is a content-focused website without formal test frameworks
- Manual testing in development mode is the primary testing method
- Focus on content accuracy, navigation flow, and responsive design

### Common Patterns
- Use `getSortedPosts` utility for consistent content ordering
- Implement proper SEO with structured data in layouts
- Follow the established pattern for new content types
- Use the existing utility functions rather than recreating functionality