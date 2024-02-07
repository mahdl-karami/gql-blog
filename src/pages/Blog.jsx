// ! Import Libraries
import { useQuery } from "@apollo/client";
import { GET_BLOG_QUERY } from "../graphql/queries/BlogQuery";
import { useParams } from "react-router-dom";
// ? Import MaterialUI
import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// ! Import Components

const Blog = () => {
  const { slug = "/" } = useParams();
  const { loading, data, errors } = useQuery(GET_BLOG_QUERY, {
    variables: {
      slug,
    },
  });
  console.log(data);
  return (
    <Box component="div" display="flex" alignItems="center" p="4rem 2rem" flexDirection="column">
      {
        // ! Loading Skeleton
        loading ? (
          <>
            <Skeleton variant="rounded" animation="wave" width="80%" height="550px" />
          </>
        ) : (
          <>
            <img src={data.post.postCover.url} alt="Blog Cover" width="80%" height="550px" style={{borderRadius: "10px"}} />
          </>
        )
      }
    </Box>
  );
};

export default Blog;
