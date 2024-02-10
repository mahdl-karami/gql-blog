// ? MaterialUI
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const CommentsList = ({ comments }) => {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {comments.map((comment, index) => (
        <>
          <ListItem alignItems="flex-start" key={index} sx={{ width: "100%" }}>
            <ListItemAvatar>
              <Avatar alt="UserAvatar">{comment.name[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={comment.name ? comment.name : "Unknow User"}
              secondary={
                <>
                  <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                    email: { comment.email}
                    <br />
                  </Typography>
                  {comment.text}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </>
      ))}
    </List>
  );
};

export default CommentsList;
