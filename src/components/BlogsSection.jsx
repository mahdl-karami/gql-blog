// ! Import Components
import BlogsCard from "./BlogsCard";
import Error from "./Error";
import Loading from "./Loading";
// ! Import GraphQL
import { useQuery } from "@apollo/client";
import { BLOG_CARD_QUERY } from "../graphql/queries/BlogCardQuery";

const BlogsSection = () => {
  const skeletonCount = [1, 2, 3, 4, 5, 6];
  const {data , loading , error} = useQuery(BLOG_CARD_QUERY);


  if (error) {
    return <Error error={error} />
  }

  if (loading) {
    return (
      <section style={{ width: "80%" }}>
        <Loading />
        {skeletonCount.map((index) => (
          <BlogsCard key={index} loading />
        ))}
      </section>
    );
  }

  return (
    <section style={{ width: "80%" }}>
      {data && (
        <>
          {data.posts.map((post, index) => (
            <BlogsCard key={index} post={post} />
          ))}
        </>
      )}
    </section>
  );
};

export default BlogsSection;
