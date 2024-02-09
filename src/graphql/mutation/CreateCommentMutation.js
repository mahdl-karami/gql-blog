import { gql } from "@apollo/client";

const CREATE_COMMENT = gql`
    mutation NewComment($name: String!, $email: String!, $text: String!, $postSlug: String!) {
        createComment(data: { name: $name, email: $email, text: $text, post: { connect: { slug: $postSlug } } }) {
            id
        }
    }
`;

export default CREATE_COMMENT;
