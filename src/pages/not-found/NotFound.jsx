import { Link } from "react-router";
import Lottie from "lottie-react";
import notFoundAnimation from "../../assets/notfound.json";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
      document.title = "404 | FixHut";
    }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 text-center bg-base-100">
      <div className="w-48 sm:w-64  mb-6">
        <Lottie animationData={notFoundAnimation} loop={true} />
      </div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-3">
        404 - Page Not Found
      </h1>
      <p className="text-secondary text-sm md:text-base mb-6 max-w-xl">
        Oops! The page you're looking for doesn’t exist or has been moved.
        Please check the URL or return to the homepage.
      </p>
      <Link
        to="/"
        className="btn btn-primary hover:btn-outline hover:bg-transparent hover:text-primary font-semibold rounded-lg shadow-md btn-sm md:btn-md transition duration-300"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
