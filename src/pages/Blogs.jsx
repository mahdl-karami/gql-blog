import BlogsSection from "../components/BlogsSection";
import BlogsSidebar from "../components/BlogsSidebar";

const Blogs = () => {
  return (
    <div className="d-flex justify-between">
      <BlogsSection />
      <BlogsSidebar />
    </div>
  );
};

export default Blogs;
