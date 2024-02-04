// ? Import UiMaterial
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

// ! Import Icons
import { ImGithub } from "react-icons/im";

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <h3 className="d-flex align-center">Developer
            <ImGithub className="ml-3" />
          </h3>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
