import { Link, NavLink, useNavigate } from "react-router";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import Loading from "../../pages/loading/Loading";

const Navbar = () => {
  const { user, logOutUser, loading, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        setLoading(false);
        toast.error("log out successfull");
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Something went wrong. Please try again");
      });
  };
  return (
    <>
      {loading && <Loading />}

      <div className="fixed top-0 left-0 w-full z-[999] bg-base-100 shadow-sm ">
        <nav className="navbar px-6 max-w-[1920px] mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="cursor-pointer p-0 mr-4 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Services</NavLink>
                </li>
                {user?.email && (
                  <li>
                    <a>Dashboard</a>
                    <ul className="p-2">
                      <li>
                        <NavLink to="/add-service">Add Service</NavLink>
                      </li>
                      <li>
                        <NavLink to="/all-services">All Services</NavLink>
                      </li>
                      <li>
                        <NavLink to="/manage-services">Manage Services</NavLink>
                      </li>
                      <li>
                        <NavLink to="/booked-services">Booked Services</NavLink>
                      </li>
                      <li>
                        <NavLink to="service-todo">Service To Do</NavLink>
                      </li>
                    </ul>
                  </li>
                )}
                <li>
                  <NavLink to="/about-us">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
            <a
              className="cursor-pointer text-xl flex items-center font-semibold gap-1"
              onClick={() => navigate("/")}
            >
              <img src={logo} alt="" className="w-6 sm:w-10" />
              <span className="text-base sm:text-xl tracking-widest font-seconderyFont">
                Fix<span className="text-primary">Hut</span>
              </span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex mr-14">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              {user?.email && (
                <li>
                  <details>
                    <summary>Dashboard</summary>
                    <ul className="p-2 w-44">
                      <li>
                        <NavLink to="/add-service">Add Service</NavLink>
                      </li>
                      <li>
                        <NavLink to="/all-services">All Services</NavLink>
                      </li>
                      <li>
                        <NavLink to="/manage-services">Manage Services</NavLink>
                      </li>
                      <li>
                        <NavLink to="/booked-services">Booked Services</NavLink>
                      </li>
                      <li>
                        <NavLink to="service-todo">Service To Do</NavLink>
                      </li>
                    </ul>
                  </details>
                </li>
              )}
              <li>
                <NavLink to="/about-us">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div>
              {user?.email &&
                (user.photoURL ? (
                  <div className="avatar">
                    <div className="w-8 md:w-10 mr-5 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </div>
                ) : (
                  <div className="avatar avatar-placeholder">
                    <div className="bg-neutral text-neutral-content w-8 md:w-10 rounded-full mr-5">
                      <span className="capitalize font-semibold">
                        {user.displayName ? user.displayName[0] : "?"}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
            {user?.email ? (
              <a
                className="btn btn-outline btn-primary btn-sm sm:btn-md"
                onClick={handleLogOut}
              >
                Log Out
              </a>
            ) : (
              <Link
                to={"/login"}
                className="btn btn-outline btn-primary btn-sm sm:btn-md"
              >
                Log In
              </Link>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
