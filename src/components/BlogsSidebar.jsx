// ! Import GraphQL
import { useQuery } from "@apollo/client";
import { BLOG_SIDEBAR_QUERY } from "../graphql/queries/BlogSidebarQuery";
// ! Import Components
import BlogsAuthor from "./BlogsAuthor";
import Error from "./Error";
import Loading from "./Loading";

const BlogsSidebar = () => {
  const skeletonCount = [1, 2, 3, 4];
  const { data, loading, error } = useQuery(BLOG_SIDEBAR_QUERY);

  if (error) {
    return <Error error={error} />
  }

  if (loading) {
    return (
      <aside style={{ width: "20%" }}>
        <Loading />
        {skeletonCount.map((index) => (
          <BlogsAuthor key={index} loading />
        ))}
      </aside>
    );
  }

  return (
    <aside style={{ width: "20%" }}>
      {data && (
        <>
          {data.authors.map((author, index) => (
            <BlogsAuthor key={index} author={author} />
          ))}
        </>
      )}
    </aside>
  )
};

export default BlogsSidebar;
