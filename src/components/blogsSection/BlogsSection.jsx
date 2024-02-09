// ! Import Components
import BlogsCard from "./BlogsCard";
import Error from "../shared/Error";
import Loading from "../shared/Loading";
// ! Import GraphQL
import { useQuery } from "@apollo/client";
import { BLOG_CARD_QUERY } from "../../graphql/queries/BlogCardQuery";
// ? Import MaterialUI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

const BlogsSection = () => {
  const skeletonCount = [1, 2, 3, 4, 5, 6];
  const { data, loading, error } = useQuery(BLOG_CARD_QUERY);

  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return (
      <section style={{ width: "80%" }}>
        <Loading />
        <h4 className="title">Blogs</h4>
        <Grid container spacing={2}>
          {skeletonCount.map((index) => (
            <Grid key={index} lg={3} md={4} sm={6} xs={12}>
              <BlogsCard loading />
            </Grid>
          ))}
        </Grid>
      </section>
    );
  }

  return (
    <section style={{ width: "80%" }}>
      <h4 className="title">Blogs</h4>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {data.posts.map((post, index) => (
            <Grid key={index} lg={3} md={4} sm={6} xs={12}>
              <BlogsCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default BlogsSection;
