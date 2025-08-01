import Lottie from "lottie-react";
import { useNavigate, useParams } from "react-router";
import bookingAnimation from "../../assets/booking.json";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

import { toast } from "react-toastify";
import useAxiousSecure from "../../hooks/useAxiousSecure";
import Loading from "../loading/Loading";
import NotFound from "../not-found/NotFound";
import Empty from "../empty/Empty";

const Booking = () => {
  const [bookingDetails, setBookingDetails] = useState([]);
const [loading,setLoading]=useState(true)
  const navigate = useNavigate();
  const { id } = useParams();
  const axiosSecure = useAxiousSecure();
  const { user} = useContext(AuthContext);
  useEffect(() => {
    document.title = "Booking | FixHut";
  }, []);
 

  useEffect(() => {
    axiosSecure
      .get(`/services/${id}`)
      .then((res) => {
        setBookingDetails(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id, axiosSecure]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = user.displayName;
    const userEmail = user.email;
    const providerName = bookingDetails.providerName;
    const providerEmail = bookingDetails.providerEmail;
    const serviceId = id;
    const serviceName = bookingDetails.title;
    const serviceImage = bookingDetails.image;
    const serviceTakingDate = form.date.value;
    const specialInstruction = form.specialInstruction.value;
    const price = bookingDetails.price;
    const status = "pending";

    const formData = {
      userName,
      userEmail,
      providerName,
      providerEmail,
      serviceId,
      serviceName,
      serviceImage,
      serviceTakingDate,
      specialInstruction,
      price,
      status,
    };
    axiosSecure
      .post("/book", formData)
      .then((result) => {
        if (result.data.insertedId) {
          toast.success("Purchase Successfull");
          e.target.reset();
          navigate("/services");
        } else {
          toast.error("Booking was not successful. Please try again.");
        }
      })
      .catch((err) => {
        toast.error("Something Went Wrong. Please Try Again");
      });
  };
  if (loading) {
    return <Loading />;
  }

  if (!bookingDetails.title || !bookingDetails.providerEmail) {
  return <Empty title='Service Not Found' home={true}/>
}

  return (
    <div>
      <div className=" w-full mx-auto">
        <div className=" grid gap-10 lg:grid-cols-2 my-10 ">
          <div className="lg:w-[80%] xl:w-[70%] mx-auto lg:block hidden ">
            <Lottie animationData={bookingAnimation} loop={true} />
          </div>
          <div className=" p-6 border border-gray-300 rounded-2xl shadow">
            <h1 className="text-center text-2xl mb-5">Book Now</h1>

            <form
              className="py-4 flex flex-col gap-4 w-full"
              onSubmit={handleSubmit}
            >
              <div className="flex gap-1 flex-col md:flex-row">
                <div className="w-full">
                  <label className="font-medium text-sm text-secondary mb-1 block">
                    User Name
                  </label>
                  <input
                    type="text"
                    defaultValue={user.displayName}
                    readOnly
                    className="text-primary outline-none rounded-md px-3 py-2 bg-gray-200 w-full cursor-default"
                  />
                </div>
                <div className="w-full">
                  <label className="font-medium text-sm text-secondary mb-1 block">
                    User Email
                  </label>
                  <input
                    type="text"
                    defaultValue={user.email}
                    readOnly
                    className="text-primary outline-none rounded-md px-3 py-2 bg-gray-200 w-full cursor-default"
                  />
                </div>
              </div>

              <div>
                <label className="font-medium text-sm text-secondary mb-1 block">
                  Service ID
                </label>
                <input
                  type="text"
                  defaultValue={id}
                  readOnly
                  className="text-primary outline-none rounded-md px-3 py-2 bg-gray-200 w-full cursor-default"
                />
              </div>

              <div>
                <label className="font-medium text-sm text-secondary mb-1 block">
                  Service Name
                </label>
                <input
                  type="text"
                  defaultValue={bookingDetails.title}
                  readOnly
                  className="text-primary outline-none rounded-md px-3 py-2 bg-gray-200 w-full cursor-default"
                />
              </div>

              <div>
                <label className="font-medium text-sm text-secondary mb-1 block">
                  Service Image URL
                </label>
                <input
                  type="text"
                  defaultValue={bookingDetails.image}
                  readOnly
                  className="text-primary outline-none rounded-md px-3 py-2 bg-gray-200 w-full cursor-default"
                />
              </div>

              <div className="flex gap-2 flex-col md:flex-row">
                <div className="w-full">
                  <label className="font-medium text-sm text-secondary mb-1 block">
                    Provider Name
                  </label>
                  <input
                    type="text"
                    defaultValue={bookingDetails.providerName}
                    readOnly
                    className="text-primary outline-none rounded-md px-3 py-2 bg-gray-200 w-full cursor-default"
                  />
                </div>
                <div className="w-full">
                  <label className="font-medium text-sm text-secondary mb-1 block">
                    Provider Email
                  </label>
                  <input
                    type="text"
                    defaultValue={bookingDetails.providerEmail}
                    readOnly
                    className="text-primary outline-none rounded-md px-3 py-2 bg-gray-200 w-full cursor-default"
                  />
                </div>
              </div>

              <div className="flex gap-2 flex-col md:flex-row">
                <div className="w-full">
                  <label className="font-medium text-sm text-secondary mb-1 block">
                    Service Taking Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    className="rounded-md px-3 py-2 border border-gray-300 w-full outline-primary"
                  />
                </div>
                <div className="w-full">
                  <label className="font-medium text-sm text-secondary mb-1 block">
                    Price
                  </label>
                  <input
                    type="text"
                    defaultValue={bookingDetails.price}
                    readOnly
                    className="text-primary outline-none rounded-md px-3 py-2 bg-gray-200 w-full cursor-default"
                  />
                </div>
              </div>

              <div>
                <label className="font-medium text-sm text-secondary mb-1 block">
                  Special Instruction
                </label>
                <textarea
                  rows={4}
                  name="specialInstruction"
                  placeholder="Anything like address, area, customized plan..."
                  required
                  className="rounded-md px-3 py-2 w-full resize-none outline-primary border border-gray-300"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary mt-4 hover:btn-outline hover:bg-transparent hover:text-primary duration-300 transition"
              >
                Purchase
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
