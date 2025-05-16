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

---

Project built with React, TypeScript, and TailwindCSS.
