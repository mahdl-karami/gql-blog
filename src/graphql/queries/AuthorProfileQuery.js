import { gql } from "@apollo/client";

export const GET_PROFILE_QUERY = gql`
  query Profile($slug : String!) {
    author(where: { slug: $slug }) {
      name
      fild
      slug
      avatar {
        url
      }
      info {
        html
      }
      posts {
        postCover {
          url
        }
        title
        slug
      }
    }
  }
`;
