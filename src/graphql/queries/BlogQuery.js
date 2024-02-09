import { gql } from "@apollo/client";

export const GET_BLOG_QUERY = gql`
  query Blog($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        name
        fild
        slug
        avatar{
          url
        }
      }
      slug
      title
      content {
        html
      }
      comments {
        email
        name
        text
      }
      postCover {
        url
      }
    }
  }
`;
