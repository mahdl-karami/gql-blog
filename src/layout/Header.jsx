// ? Import UiMaterial
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="d-flex justify-between">
            <h1>GraphQL Blog !</h1>
          <Button color="inherit">Icon</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
