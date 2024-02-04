import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../graphql/Queries/PostQuery";
import { GET_AUTHORS } from "../graphql/Queries/AuthorQuery";

const Blogs = () => {
  const posts = useQuery(GET_POSTS);
  const authors = useQuery(GET_AUTHORS);
  console.log({ posts, authors });
  return (
    <div>
      <h1>Blogs Page</h1>
    </div>
  );
};

export default Blogs;
