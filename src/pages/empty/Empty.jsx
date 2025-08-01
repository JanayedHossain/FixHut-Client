import Lottie from "lottie-react";
import EmptyAnimation from "../../assets/empty.json";
import { Link } from "react-router";
const Empty = ({ title, home, add, services }) => {
  return (
    <div className="py-14 pb-24">
      <div className="w-48 sm:w-64 mx-auto">
        <Lottie animationData={EmptyAnimation} loop={false} />
      </div>
      <h1 className="text-center text-secondary text-sm md:text-base pt-4">
        {title}
      </h1>
      <div className="flex items-center justify-center">
        {home && (
          <Link to={"/"}>
            <button className="mt-6 px-4 py-2 btn btn-primary hover:bg-transparent hover:btn-outline hover:text-primary btn-xs md:btn-md">
              Back to Home
            </button>
          </Link>
        )}
        {add && (
          <Link to={"/add-service"}>
            <button className="mt-6 px-4 py-2 btn btn-primary hover:bg-transparent hover:btn-outline hover:text-primary btn-xs md:btn-md">
              Add New Service
            </button>
          </Link>
        )}
        {services && (
          <Link to={"/services"}>
            <button className="mt-6 px-4 py-2 btn btn-primary hover:bg-transparent hover:btn-outline hover:text-primary btn-xs md:btn-md">
              Browse Services
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Empty;
