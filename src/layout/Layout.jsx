// ! Import Router Outlet
import { Outlet } from "react-router-dom";
// ! Import Components
import Header from "./Header";
import Footer from "./Footer";
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
