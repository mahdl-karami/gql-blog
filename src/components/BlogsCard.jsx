// ! Import Router Link
import { Link } from "react-router-dom";
// ? MaterialUL Import
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Button from "@mui/material/Button";

function BlogsCard(props) {
  const { loading = false } = props;
  const { post = undefined } = props;
  return (
    <Card sx={{ maxWidth: 345, m: 2, display: "" }}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton animation="wave" variant="circular" width={40} height={40} />
          ) : (
            // ! Author Avatar
            <Avatar alt="Author Avatar" src={post.author.avatar.url} />
          )
        }
        // ! Author Name
        title={loading ? <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} /> : post.author.name}
        // ! Author Fild
        subheader={loading ? <Skeleton animation="wave" height={10} width="40%" /> : (post.author.fild ? post.author.fild : "Is not specified")}
      />
      {loading ? (
        <Skeleton sx={{ height: "200px" }} animation="wave" variant="rectangular" />
      ) : (
        <CardMedia
          component="img"
          height="200"
          // ! Blog Cover
          image={post.postCover.url}
          alt="Nicola Sturgeon on a TED talk stage"
        />
      )}

      <CardContent>
        {loading ? (
          <>
            <Skeleton animation="wave" height={13} style={{ marginBottom: 1 }} />
            <Skeleton animation="wave" height={13} style={{ marginBottom: ".7rem" }} width={"70%"} />
            <Skeleton animation="wave" height={50} style={{ marginBottom: 0 }} width={"50%"} />
          </>
        ) : (
          <>
            <Typography variant="h6" color="text.black" fontWeight="bold" component="p">
              {/* //! Blog Title */}
              {post.title}
            </Typography>
            {/* //! Blog Slug */}
            <Link to={`/blogs/${post.slug}`}>
              <Button variant="contained" style={{ width: "60%", marginTop: ".7rem" , fontSize: ".8rem"}}>
                Read Blog
              </Button>
            </Link>
          </>
        )}
      </CardContent>
    </Card>
  );
}

BlogsCard.propTypes = {
  loading: PropTypes.bool,
};

export default BlogsCard;
