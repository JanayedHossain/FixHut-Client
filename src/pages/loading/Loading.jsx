import { useEffect } from "react";
import Lottie from "lottie-react";
import LoadingAnimation from "../../assets/loading.json";

const Loading = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-base-200 z-[999] flex justify-center items-center h-screen">
      <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64">
        <Lottie animationData={LoadingAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Loading;
