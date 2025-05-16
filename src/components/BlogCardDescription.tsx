type Props = {
  description: string;
};

function BlogCardDescription({ description }: Props) {
  return <p className="mt-3 text-gray-500">{description}</p>;
}

export default BlogCardDescription;
