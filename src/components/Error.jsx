import { Link, useRouteError } from "react-router-dom";
import NotFound from "../assets/images/not-found.svg";
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <div className="flex-col-center min-h-screen gap-4">
        <img src={NotFound} alt="page not found" />
        <h3>Ohh! page not found</h3>
        <p>we can't seem to find the page you are looking for</p>
        <Link to="/" className="btn-padding bg-primary-blue rounded text-white">
          Go back to homepage
        </Link>
      </div>
    );
  }
};

export default Error;
