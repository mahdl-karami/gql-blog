import { gql } from "@apollo/client";

export const GET_AUTHORS = gql`
  query Posts {
    authors {
      avatar {
        url
        id
      }
      name
      fild
    }
  }
`;
