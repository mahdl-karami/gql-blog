// ! Import GraphQL
import { useQuery } from "@apollo/client";
import { BLOG_SIDEBAR_QUERY } from "../../graphql/queries/BlogSidebarQuery";
// ! Import Components
import BlogsAuthor from "./BlogsAuthor";
import Error from "../shared/Error";
import Loading from "../shared/Loading";
// ? Import MaterialUI
import Grid from "@mui/material/Unstable_Grid2";

const BlogsSidebar = () => {
  const skeletonCount = [1, 2, 3, 4];
  const { data, loading, error } = useQuery(BLOG_SIDEBAR_QUERY);

  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return (
      <aside style={{ width: "20%" }}>
        <Loading />
        <h4 className="title">Authors</h4>
        {skeletonCount.map((index) => (
          <BlogsAuthor key={index} loading />
        ))}
      </aside>
    );
  }

  return (
    <aside style={{ width: "20%" }}>
      <div style={{ position: "sticky", top: "5rem" }}>
        <h4 className="title">Authors</h4>
        <Grid container sx={{ display: "inline-grid" }}>
          {data && (
            <>
              {data.authors.map((author, index) => (
                <BlogsAuthor key={index} author={author} />
              ))}
            </>
          )}
        </Grid>
      </div>
    </aside>
  );
};

export default BlogsSidebar;
