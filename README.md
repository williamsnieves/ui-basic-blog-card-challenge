# Blog Card Challenge

This project implements a blog card using React and TypeScript best practices, with small, reusable components.

## Component Structure

- `BlogCard`: Main component that composes the card using subcomponents.
- `BlogCardImage`: Displays the main article image.
- `BlogCardCategory`: Displays the article category.
- `BlogCardMeta`: Displays the publication date.
- `BlogCardTitle`: Displays the article title.
- `BlogCardDescription`: Displays the article description.
- `BlogCardAuthor`: Displays the author information (name and avatar).

All components receive their typed props from `BlogCard.types.ts`.

## Installation & Usage

1. Install dependencies:
   ```sh
   pnpm install
   ```
2. Start the development server:
   ```sh
   pnpm dev
   ```

## Customization

You can modify the card content by editing the `BLOG_CARD_DATA` object in `src/components/BlogCard.tsx`.

## Deployment

To deploy this project to GitHub Pages:

1. Install the `gh-pages` package as a dev dependency:
   ```sh
   pnpm add -D gh-pages
   ```
2. Add the following scripts to your `package.json`:
   ```json
   "predeploy": "pnpm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Set the `base` option in your `vite.config.ts` to your repository name:
   ```ts
   // vite.config.ts
   export default defineConfig({
     // ...existing code...
     base: '/blog-card-challenge/',
   });
   ```
4. Build and deploy:
   ```sh
   pnpm run deploy
   ```

Your site will be published at `https://<your-github-username>.github.io/blog-card-challenge/`.

---

Project built with React, TypeScript, and TailwindCSS.
