import { gql } from "@apollo/client";

export const BLOG_SIDEBAR_QUERY = gql`
  query Sidebar {
    authors {
      name
      fild
      avatar {
        url
      }
    }
  }
`;
