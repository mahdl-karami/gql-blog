import { gql } from "@apollo/client";

export const GET_POSTS = gql`
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
