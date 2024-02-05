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

function BlogCard(props) {
  const { loading = false } = props;

  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton animation="wave" variant="circular" width={40} height={40} />
          ) : (
            // ! Author Avatar
            <Avatar alt="Author Avatar" src="" />
          )
        }
        title={loading ? <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} /> : "//! Author Name"}
        subheader={loading ? <Skeleton animation="wave" height={10} width="40%" /> : "//! Fild"}
      />
      {loading ? (
        <Skeleton sx={{ height: "200px" }} animation="wave" variant="rectangular" />
      ) : (
        <CardMedia
          component="img"
          height="200"
          // ! Blog Cover
          image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
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
              {"Blog Title - 01"}
            </Typography>
            <Link to="/blogs/blog-slug">
              <Button variant="contained" style={{ width: "50%", marginTop: ".7rem" }}>
                Read Blog
              </Button>
            </Link>
          </>
        )}
      </CardContent>
    </Card>
  );
}

BlogCard.propTypes = {
  loading: PropTypes.bool,
};

export default BlogCard;
