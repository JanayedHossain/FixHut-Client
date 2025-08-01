import Lottie from "lottie-react";
import signupAnimation from "../../assets/signup.json";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Loading from "../loading/Loading";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUser, setUser, loading, googleLogIn, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    document.title = "Sign Up | FixHut";
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;

    if (name.length < 4) {
      toast.error("Name must be at least 4 characters long.");
      return;
    }

    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordValidation.test(password)) {
      toast.error(
        "Password must include uppercase, lowercase, and 6+ characters."
      );
      return;
    }

    createUser(email, password)
      .then((res) => {
        updateUser(name, photoUrl).then(() => {
          //success
        });
        toast.success("signup successfull");
        setLoading(false);
        setUser(res.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Email already registered");
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
        <div className=" rounded-2xl shadow-xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/2 p-6 flex items-center justify-center bg-blue-100">
            <Lottie animationData={signupAnimation} loop={true} />
          </div>

          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-primary">
              Sign Up
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-300 "
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-300"
                required
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-300"
                  required
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
              <input
                type="text"
                name="photoUrl"
                placeholder="Photo Url"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-300"
              />
              <button
                type="submit"
                className="w-full btn btn-primary text-white py-2 rounded-xl hover:bg-transparent hover:btn-outline hover:text-primary transition duration-300 cursor-pointer"
              >
                Create Account
              </button>
            </form>
            <div>
              <p className="py-4 text-center">Or</p>
              <div
                className="btn w-full flex items-center justify-center hover:bg-blue-200 hover:text-black"
                onClick={handleGoogleLogIn}
              >
                <FcGoogle size={25} />
                <span>Sign up with Google</span>
              </div>
            </div>
            <p className="text-sm text-center text-secondary mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
