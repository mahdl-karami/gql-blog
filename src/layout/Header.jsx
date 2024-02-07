// ? Import MaterialUI
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// ! Import Router Link
import { Link } from "react-router-dom";
// ! Import Components and Helpers
import HeaderDrawer from "../components/header/Drawer";
import handleDrawerToggle from "../Helpers/handleDrawerToggle";

const drawerWidth = 240;
const navItems = ["Home", "Blogs", "Authors"];

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={()=> handleDrawerToggle(setMobileOpen)} sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <Link style={{ color: "#fff" }} to="/">
              GraphQL Blog
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link key={item} to={item.toLowerCase()}>
                <Button sx={{ color: "#fff" }}>{item}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {<HeaderDrawer handleDrawerToggle={handleDrawerToggle} navItems={navItems} setMobileOpen={setMobileOpen} />}
        </Drawer>
      </nav>
    </Box>
  );
};

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
