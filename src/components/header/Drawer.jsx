// ? Import MaterialUI
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// ! Import Router Link
import { Link } from "react-router-dom";

const HeaderDrawer = ({ handleDrawerToggle, navItems, setMobileOpen }) => {
  return (
    <Box onClick={() => handleDrawerToggle(setMobileOpen)} sx={{ textAlign: "center" }}>
      <Link to="/">
        <Typography variant="h6" sx={{ my: 2 }}>
          GraphQL Blog
        </Typography>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link key={item} to={item.toLowerCase()} style={{ color: "#000" }}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};
export default HeaderDrawer;
