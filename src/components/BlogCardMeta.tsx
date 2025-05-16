type Props = {
  publishedAt: string;
};

function BlogCardMeta({ publishedAt }: Props) {
  return <p>Published {publishedAt}</p>;
}

export default BlogCardMeta;
