import { Link } from "react-router";
import { motion } from "framer-motion";
import manImage from "../../assets/man.svg";

const Hero = () => {
  return (
    <div className="px-4 lg:px-10 min-h-[70vh] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 ">
      <motion.div
        className="text-center lg:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6 font-primaryFont">
          Reliable Home Repair Services at Your Doorstep
        </h1>
        <p className="text-secondary text-lg mb-8">
          FixHut connects you with skilled professionals to fix anything around
          your home—quickly, safely, and affordably.
        </p>
        <Link to="/services">
          <button className="btn btn-primary btn-sm md:btn-md hover:bg-transparent hover:btn-outline hover:text-primary transition duration-300">
            Explore Services
          </button>
        </Link>
      </motion.div>

      <motion.div
        className="mb-10 lg:mb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={manImage}
          alt="Home Repair"
          className="w-full max-w-lg mx-auto"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
