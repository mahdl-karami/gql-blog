import { useQuery } from "@apollo/client";
import { GET_BLOG_QUERY } from "../graphql/queries/BlogQuery";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { slug = "/" } = useParams();
  const { loading, data, errors } = useQuery(GET_BLOG_QUERY, {
    variables: {
      slug,
    },
  });
  console.log(data);
  return <div>Blog</div>;
};

export default Blog;
