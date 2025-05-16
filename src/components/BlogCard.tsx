import BlogCardImage from "./BlogCardImage";
import BlogCardCategory from "./BlogCardCategory";
import BlogCardMeta from "./BlogCardMeta";
import BlogCardTitle from "./BlogCardTitle";
import BlogCardDescription from "./BlogCardDescription";
import BlogCardAuthor from "./BlogCardAuthor";
import type { BlogCardProps } from "./BlogCard.types";

const BLOG_CARD_DATA: BlogCardProps = {
  category: "Learning",
  publishedAt: "21 Dec 2023",
  title: "HTML & CSS foundations",
  description:
    "These languages are the backbone of every website, defining structure, content, and presentation.",
  imageSrc: `${import.meta.env.BASE_URL}illustration-article.svg`,
  author: {
    name: "Greg Hooper",
    avatarSrc: `${import.meta.env.BASE_URL}image-avatar.webp`,
  },
};

function BlogCard() {
  const { category, publishedAt, title, description, imageSrc, author } =
    BLOG_CARD_DATA;
  return (
    <div className="bg-white rounded-[20px] p-6 max-w-md m-w-[327px] w-full md:w-[384px] border border-gray-950 shadow-[var(--primary-shadow)] md:max-h-[522px] flex flex-col">
      <BlogCardImage imageSrc={imageSrc} />
      <div className="mt-6 flex flex-col items-start gap-3 text-gray-950">
        <BlogCardCategory category={category} />
        <BlogCardMeta publishedAt={publishedAt} />
      </div>
      <div className="mt-3">
        <BlogCardTitle title={title} />
        <BlogCardDescription description={description} />
      </div>
      <div className="mt-6">
        <BlogCardAuthor author={author} />
      </div>
    </div>
  );
}

export default BlogCard;
