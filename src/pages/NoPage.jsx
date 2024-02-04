import { Link } from "react-router-dom";
const NoPage = () => {
  return (
    <div>
      <h1>404 Error !!!!!!!!!!!!</h1>
      <Link to="/">
        <button>Go Back To Home</button>
      </Link>
    </div>
  );
};

export default NoPage;
