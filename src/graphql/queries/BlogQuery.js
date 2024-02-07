import { gql } from "@apollo/client";

export const GET_BLOG_QUERY = gql`
  query Blog($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        name
        posts {
          title
        }
      }
      id
      slug
      title
      comments {
        email
        name
      }
    }
  }
`;
