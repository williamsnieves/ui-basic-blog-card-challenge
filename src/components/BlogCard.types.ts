// Types for BlogCard and its subcomponents
export interface BlogCardProps {
  category: string;
  publishedAt: string;
  title: string;
  description: string;
  imageSrc: string;
  author: AuthorProps;
}
export interface AuthorProps {
  name: string;
  avatarSrc: string;
}
