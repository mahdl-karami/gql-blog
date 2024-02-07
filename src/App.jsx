// ! Import Routes
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// ! Import Pages
import Layout from "./layout/Layout";
import Blogs from "./pages/Blogs";
import Authors from "./pages/Authors";
import NoPage from "./pages/NoPage";
import AuthorProfile from "./pages/AuthorProfile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="/blogs" />} />
          <Route path="/home" element={<Navigate to="/blogs" />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<Blogs />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/authors/:slug" element={<AuthorProfile />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
