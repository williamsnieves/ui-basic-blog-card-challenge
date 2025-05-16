import type { AuthorProps } from "./BlogCard.types";

type Props = {
  author: AuthorProps;
};

function BlogCardAuthor({ author }: Props) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={author.avatarSrc}
        className="w-[32px] h-[32px] rounded-full"
        alt="Avatar"
      />
      <span className="font-extrabold text-sm">{author.name}</span>
    </div>
  );
}

export default BlogCardAuthor;
