import { gql } from "@apollo/client";

export const GET_BLOG_QUERY = gql`
  query Blog($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        name
        fild
      }
      slug
      title
      content {
        html
      }
      comments {
        email
        name
      }
      postCover {
        url
      }
    }
  }
`;
