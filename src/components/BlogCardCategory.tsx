type Props = {
  category: string;
};

function BlogCardCategory({ category }: Props) {
  return (
    <span className="bg-[var(--yellow)] rounded-sm px-3 py-1 font-extrabold text-sm">
      {category}
    </span>
  );
}

export default BlogCardCategory;
