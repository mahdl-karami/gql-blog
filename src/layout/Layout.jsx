// ! Import Router Outlet
import { Outlet } from "react-router-dom";
// ! Import Components
import Header from "./Header";
import Footer from "./Footer";
// ? Import MaterialUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Layout = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Box component="section" my={"5rem"} sx={{ minHeight: "calc(100vh - calc(10rem + 64px))" }}>
          <Outlet />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
