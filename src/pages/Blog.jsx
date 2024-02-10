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
// ! Import Components
import Loading from "../components/shared/Loading";
// ! Import lybraries
import { Link } from "react-router-dom";
import Error from "../components/shared/Error";
import CommentsForm from "../components/comments/Form";
import CommentsList from "../components/comments/CommentsList";

const Blog = () => {
  const { slug = "/" } = useParams();
  const { loading, data, errors } = useQuery(GET_BLOG_QUERY, {
    variables: {
      slug,
    },
  });

  if (errors) {
    return <Error error={errors.massege} />;
  }

  return (
    <Box component="div" display="flex" alignItems="center" py="2rem" flexDirection="column" width="100%">
      {
        // ! Loading Skeleton
        loading ? (
          <>
            <Loading />
            <Typography variant="h1" component="div" width="80%">
              <Skeleton width="" animation="wave" />
            </Typography>
            <Skeleton variant="rounded" animation="wave" width="80%" sx={{ height: { xs: "20vh", md: "40vh", lg: "50vh" } }} />
            <Typography variant="h1" component="div" width="80%">
              <Skeleton animation="wave" />
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
            <Typography variant="h3" component="h3" width="80%" py="1rem" fontWeight="500" color="primary" fontSize="2.5rem">
              {data.post.title}
            </Typography>
            <Box width="80%" sx={{ height: { xs: "35vh", md: "45vh", lg: "50vh" } }} justifyContent="center">
              <img src={data.post.postCover.url} alt="Blog Cover" width="100%" height="100%" style={{ borderRadius: "10px" }} />
            </Box>
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
            <Box width="80%">
              <CommentsForm slug={data.post.slug} />
            </Box>
            <Box width="80%">
              <h4>Comments</h4>
              {loading ? null : <>{data.post.comments.length ? <CommentsList comments={data.post.comments} /> : <p>No Comments</p>}</>}
            </Box>
          </>
        )
      }
    </Box>
  );
};

export default Blog;
