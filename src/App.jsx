// ! Import Routes
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// ! Import Pages
import Layout from "./layout/Layout";
import Blogs from "./pages/Blogs";
import Authors from "./pages/Authors";
import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="/blog" />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
