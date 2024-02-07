import BlogsSection from "../components/BlogsSection";
import BlogsSidebar from "../components/BlogsSidebar";

// ? Import MaterialUI
import Box from "@mui/material/Box";


const Blogs = () => {
  return (
    <Box display="flex" justifyContent="space-between">
      <BlogsSection />
      <BlogsSidebar />
    </Box>
  );
};

export default Blogs;
