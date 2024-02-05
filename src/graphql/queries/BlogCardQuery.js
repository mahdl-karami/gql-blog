import { gql } from "@apollo/client";

export const BLOG_CARD_QUERY = gql`
  query Card {
  posts {
    author{
      name
      fild
      avatar{
        url
      }
    }
    postCover {
      url
    }
    title
    slug
  }
}
`;
