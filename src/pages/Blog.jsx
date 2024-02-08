// ! Import Libraries
import { useQuery } from "@apollo/client";
import { GET_BLOG_QUERY } from "../graphql/queries/BlogQuery";
import { useParams } from "react-router-dom";
// ? Import MaterialUI
import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Grid from "@mui/material/Grid";
// ! Import Components
import Loading from "../components/shared/Loading";
// ! Import lybraries
import { Link } from "react-router-dom";

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
            <Loading />
            <Typography variant="h1" component="div" width="80%">
              <Skeleton width="" animation="wave" />
            </Typography>
            <Skeleton variant="rounded" animation="wave" width="80%" height="50vh" />
            <Typography variant="h1" component="div" width="80%">
              <Skeleton width="" animation="wave" />
            </Typography>
            <Typography variant="h2" component="div" width="80%" display="flex" justifyContent="start">
              <Skeleton width="40%" animation="wave" />
            </Typography>
            <Typography variant="p" component="div" width="80%">
              <Skeleton width="100%" />
              <Skeleton width="100%" />
              <Skeleton width="100%" />
              <Skeleton width="60%" />
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h3" component="h3" width="80%" py="1rem" fontWeight="500" color="primary">
              {data.post.title}
            </Typography>
            <img src={data.post.postCover.url} alt="Blog Cover" width="80%" style={{ height: "50vh", borderRadius: "10px" }} />
            <Box width="80%" justifyContent="start">
              <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
                <Link to={`/authors/${data.post.author.slug}`}>
                  <ListItem sx={{ padding: "1rem 0", fontSize: "12rem" }}>
                    <ListItemAvatar>
                      <Avatar alt="Author Avatar" src={data.post.author.avatar.url} sx={{ width: "60px", height: "60px", mr: "1rem" }} />
                    </ListItemAvatar>
                    <ListItemText primary={data.post.author.name} secondary={data.post.author.fild} />
                  </ListItem>
                </Link>
              </List>
            </Box>
            <Typography variant="h4" component="h4" width="80%" py="1rem" fontWeight="400">
              {data.post.title} :
            </Typography>
            <Typography variant="p" component="p" width="80%" py="1rem" fontWeight="400">
              <span dangerouslySetInnerHTML={{ __html: data.post.content.html }}></span>
            </Typography>
          </>
        )
      }
    </Box>
  );
};

export default Blog;
