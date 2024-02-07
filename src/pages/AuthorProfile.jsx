import { useQuery } from "@apollo/client";
import { GET_PROFILE_QUERY } from "../graphql/queries/AuthorProfileQuery";
import { useParams } from "react-router-dom";

const AuthorProfile = () => {
  const { slug = "/" } = useParams();
  const { loading, data, errors } = useQuery(GET_PROFILE_QUERY, {
    variables: {
      slug,
    },
  });
  console.log(data);
  return <div>AuthorProfile</div>;
};

export default AuthorProfile;
