// ! Import Router Outlet
import { Outlet } from "react-router-dom";
// ! Import Components
import Header from "./Header";
import Footer from "./Footer";
const Layout = () => {
  return (
    <>
      <Header />
      <div className="container" style={{ minHeight: "calc(100vh - calc(10rem + 64px))" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
