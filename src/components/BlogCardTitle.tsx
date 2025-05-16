type Props = {
  title: string;
};

function BlogCardTitle({ title }: Props) {
  return <h1 className="font-extrabold text-2xl">{title}</h1>;
}

export default BlogCardTitle;
