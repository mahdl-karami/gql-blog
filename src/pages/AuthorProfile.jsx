// ! Import Libraries
import { useQuery } from "@apollo/client";
import { GET_PROFILE_QUERY } from "../graphql/queries/AuthorProfileQuery";
import { useParams } from "react-router-dom";
// ? Import MaterialUI
import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// ! Import Components
import Error from "../components/Error";
import AuthorProfileCard from "../components/AuthorProfileCard";

const AuthorProfile = () => {
  const { slug = "/" } = useParams();
  const { loading, data, errors } = useQuery(GET_PROFILE_QUERY, {
    variables: {
      slug,
    },
  });
  console.log(data);

  // ! Error Handling
  if (errors) {
    return <Error />;
  }

  return (
    <Box component="div" display="flex" alignItems="center" p="4rem 2rem" flexDirection="column">
      {loading ? (
        // ! Loading Skeleton
        <>
          <Skeleton variant="circular" animation="wave" width="300px" height="300px" />
          <Typography variant="h2" component="div">
            <Skeleton width="500px" />
          </Typography>
          <Typography variant="p" component="div">
            <Skeleton width="200px" />
          </Typography>
          <Typography variant="p" component="div" width="70%">
            <Skeleton width="100%" />
            <Skeleton width="100%" />
            <Skeleton width="100%" />
            <Skeleton width="80%" />
          </Typography>
          <Typography variant="h6" component="div">
            <Skeleton width="300px" />
          </Typography>
        </>
      ) : (
        // ! After Loading
        <>
          <Avatar alt="Author Avatar" src={data.author.avatar.url} sx={{ width: "300px", height: "300px" }} />
          <Typography variant="h2" component="h4" fontWeight="500">
            {data.author.name}
          </Typography>
          <Typography variant="h5" component="p">
            {data.author.fild ? data.author.fild : "The fild is not specified"}
          </Typography>
          <Typography variant="h6" component="p" width="70%">
            <span dangerouslySetInnerHTML={{ __html: data.author.info.html }}></span>
          </Typography>
          <Typography variant="h5" component="h5">
            Author Blogs :
          </Typography>
          <Box width="70%">
            <Grid container spacing={2}>
              {data.author.posts &&
                data.author.posts.map((post, index) => (
                  <Grid key={index} item xs={12} md={6} lg={4} >
                    <AuthorProfileCard post={post} />
                  </Grid>
                ))}
            </Grid>
          </Box>
        </>
      )}
    </Box>
  );
};

export default AuthorProfile;
