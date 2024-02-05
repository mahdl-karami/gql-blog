// ! Import Router Link
import { Link } from "react-router-dom";
// ? MaterialUL Import
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";

function BlogsAuthor(props) {
  const { loading = false } = props;
  const { author = undefined } = props;
  return (
    <Card sx={{ m: 2 }}>
      <Link to="/blogs/author">
        <CardHeader
          avatar={
            loading ? (
              <Skeleton animation="wave" variant="circular" width={40} height={40} />
            ) : (
              // ! Author Avatar
              <Avatar alt="Author Avatar" src={author.avatar.url} />
            )
          }
          // ! Author Name
          title={
            loading ? (
              <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
            ) : (
              <span style={{ color: "#212121" }}>{author.name}</span>
            )
          }
          // ! Author Fild
          subheader={loading ? <Skeleton animation="wave" height={10} width="40%" /> : author.fild ? author.fild : "Is not specified"}
        />
      </Link>
    </Card>
  );
}

BlogsAuthor.propTypes = {
  loading: PropTypes.bool,
};

export default BlogsAuthor;
