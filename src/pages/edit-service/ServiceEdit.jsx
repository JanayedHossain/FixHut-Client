import { useContext, useEffect, useState } from "react";
import Lottie from "lottie-react";
import updateAnimation from "../../assets/update.json";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate,  useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import useAxiousSecure from "../../hooks/useAxiousSecure";
import Loading from "../loading/Loading";

const ServiceEdit = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiousSecure();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Edit Service | FixHut";
  }, []);

  useEffect(() => {
    axiosSecure
      .get(`/services/${id}`)
      .then((res) => {
        setServiceData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id, axiosSecure]);
  
  if (loading) {
    return <Loading />;
  }

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;

    const service = {
      title: form.title.value,
      image: form.image.value,
      description: form.description.value,
      price: form.price.value,
      location: form.location.value,
    };

    axiosSecure
      .put(`edit-service/${serviceData?._id}`, service)
      .then((result) => {
        if (result.data.modifiedCount) {
          toast.success("Service updated successfully!");
          navigate("/manage-services");
        } else {
          toast.info("No changes detected. Nothing to update.");
        }
      })
      .catch((err) => {
        toast.error("Update failed. Please try again.");
      });
  };
  if (serviceData.providerEmail !== user.email) { 
    logOutUser().then(() => {
      toast.error(
        "You are not authorized to edit this service. Logging out..."
      );
      navigate('/login')
    }).catch((err) => {
      toast.error("Something Went Wrong. Please Try Again");
      
    });
  }
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="hidden md:block">
            <Lottie animationData={updateAnimation} loop={true} />
          </div>

          <div className=" shadow-xl rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-center font-primaryFont">
              Update Your Service
            </h2>

            <form
              onSubmit={handleAddService}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <input
                type="text"
                name="providerName"
                defaultValue={user?.displayName}
                className="text-primary rounded-md px-3 py-2 outline-none bg-gray-200 w-full cursor-default"
                readOnly
              />
              <input
                type="email"
                name="providerEmail"
                value={user?.email || ""}
                className="text-primary rounded-md px-3 py-2 outline-none  bg-gray-200 w-full cursor-default"
                readOnly
              />
              <input
                type="text"
                name="title"
                defaultValue={serviceData.title}
                placeholder="Service Name"
                required
                className="border border-gray-300 outline-primary rounded-md px-3 py-2  w-fulll"
              />
              <input
                type="text"
                name="image"
                defaultValue={serviceData.image}
                placeholder="Image URL of the Service"
                required
                className="border border-gray-300 outline-primary rounded-md px-3 py-2  w-fulll"
              />
              <input
                type="number"
                name="price"
                defaultValue={serviceData.price}
                placeholder="Price"
                required
                className="border border-gray-300 outline-primary rounded-md px-3 py-2  w-fulll"
              />
              <input
                type="text"
                name="location"
                defaultValue={serviceData.location}
                placeholder="Service Area"
                required
                className="border border-gray-300 outline-primary rounded-md px-3 py-2  w-fulll"
              />
              <textarea
                name="description"
                defaultValue={serviceData.description}
                rows="4"
                placeholder="Service Description"
                required
                className="border border-gray-300 outline-primary rounded-md px-3  w-fulll md:col-span-2 py-2 resize-none"
              ></textarea>

              <button
                type="submit"
                className="btn bg-[#CBE8E7] btn-outline border-[#CBE8E7] md:col-span-2 w-full hover:bg-transparent duration-300 transition text-[#00ABD7]"
              >
                Update Service
              </button>
            </form>
          </div>
        </div>
      </div>
    );
   
};

export default ServiceEdit;
