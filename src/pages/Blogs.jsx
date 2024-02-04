import { gql, useQuery } from "@apollo/client";

const GET_POSTS = gql`
  query Posts {
    posts {
      createdAt
      datePublished
      id
      publishedAt
      slug
      title
      updatedAt
    }
  }
`;

const Blogs = () => {
  const res = useQuery(GET_POSTS);
  console.log(res);
  return (
    <div>
      <h1>Blogs Page</h1>
    </div>
  );
};

export default Blogs;
