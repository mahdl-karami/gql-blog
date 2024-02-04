// ! Import Router Outlet
import { Outlet } from "react-router-dom";
// ! Import Components
import Header from "./Header";
import Footer from "./Footer";
const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ minHeight: "80vh" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
