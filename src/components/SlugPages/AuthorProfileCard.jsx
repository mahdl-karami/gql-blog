// ? Import MaterialUI
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
// ! Import Libraries
import { Link } from "react-router-dom";
const AuthorProfileCard = ({ post }) => {
  console.log(post);
  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia sx={{ height: 220 }} image={post.postCover.url} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Link to={post.slug}>
          <Button variant="contained" sx={{ width: "40%" }}>
            Read Blog
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default AuthorProfileCard;
