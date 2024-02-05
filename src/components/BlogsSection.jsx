import BlogCard from "./BlogCard";

import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../graphql/queries/PostQuery";
import { GET_AUTHORS } from "../graphql/queries/AuthorQuery";

const BlogsSection = () => {
  const posts = useQuery(GET_POSTS);
  const authors = useQuery(GET_AUTHORS);
  console.log({ posts, authors });
  return (
    <div>
      <BlogCard loading />
      <BlogCard />
    </div>
  );
};

export default BlogsSection;
