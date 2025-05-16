type Props = {
  imageSrc: string;
};

function BlogCardImage({ imageSrc }: Props) {
  return (
    <div>
      <img
        src={imageSrc}
        className="w-full rounded-[10px]"
        alt="Illustration"
      />
    </div>
  );
}

export default BlogCardImage;
