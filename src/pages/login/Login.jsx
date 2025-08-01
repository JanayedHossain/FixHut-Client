import Lottie from "lottie-react";
import loginAnimation from "../../assets/login.json";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import Loading from "../loading/Loading";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { logInUser, setUser, googleLogIn, loading, setLoading } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Log In | FixHut";
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logInUser(email, password)
      .then((res) => {
        e.target.reset();
        setLoading(false);
        setUser(res.user);
        toast.success("login successfull");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Login failed. Check your email and password.");
      });
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((res) => {
        toast.success("login successfull");
        setUser(res.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => toast.error("Login failed."));
  };
  return (
    <>
      {loading && <Loading />}
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className=" rounded-3xl shadow-xl flex flex-col-reverse lg:flex-row-reverse items-center overflow-hidden max-w-5xl w-full md:w-[70%] lg:w-full">
          <div className="w-full lg:w-1/2 p-6 flex justify-center bg-blue-100 order-2 lg:order-1">
            <Lottie animationData={loginAnimation} loop={true} />
          </div>

          <div className="w-full lg:w-1/2 p-8 order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-center text-primary mb-6">
              Welcome Back
            </h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <div className="absolute top-2.5 right-3 z-10">
                  {showPassword ? (
                    <FaRegEyeSlash
                      className="cursor-pointer"
                      size={20}
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <IoEyeOutline
                      className="cursor-pointer"
                      size={20}
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="w-full btn btn-primary hover:text-primary py-2 rounded-xl hover:bg-transparent hover:btn-outline transition duration-300 cursor-pointer"
              >
                Log In
              </button>
            </form>
            <div>
              <p className="py-4 text-center">Or</p>
              <div
                className="btn w-full flex items-center justify-center hover:bg-blue-200 hover:text-black"
                onClick={handleGoogleLogIn}
              >
                <FcGoogle size={25} />
                <span>Log in with Google</span>
              </div>
            </div>
            <p className="text-sm text-center text-secondary mt-4">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
