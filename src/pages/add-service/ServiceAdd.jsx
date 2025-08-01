import { useContext, useEffect } from "react";
import Lottie from "lottie-react";
import addServiceAnimation from "../../assets/addservice.json";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import useAxiousSecure from "../../hooks/useAxiousSecure";
import { useNavigation } from "react-router";
import Loading from "../loading/Loading";
import { motion } from "framer-motion";

const AddService = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiousSecure();
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  useEffect(() => {
    document.title = "Add Service | FixHut";
  }, []);

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;

    const service = {
      title: form.title.value,
      image: form.image.value,
      description: form.description.value,
      price: form.price.value,
      location: form.location.value,
      providerName: user?.displayName,
      providerEmail: user?.email,
      providerImage: user?.photoURL,
    };

    axiosSecure
      .post("/add-service", service)
      .then((result) => {
        if (result.data.insertedId) {
          e.target.reset();
          toast.success("Service added successfully!");
        } else {
          toast.error("Failed to add service. Please try again.");
        }
      })
      .catch((err) => {
        toast.error("Failed to add service. Please try again.");
      });
  };

  return (
    <>
      {isNavigating && <Loading />}
      <div className="max-w-7xl mx-auto px-1 sm:px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="hidden md:block">
            <Lottie animationData={addServiceAnimation} loop={false} />
          </div>

          <motion.div
            className="shadow-xl rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center font-primaryFont">
              Add a New Service
            </h2>

            <form
              onSubmit={handleAddService}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <input
                type="text"
                name="title"
                placeholder="Service Name"
                required
                className="border border-gray-300 outline-primary rounded-md px-3 py-2 w-full"
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL of the Service"
                required
                className="border border-gray-300 outline-primary rounded-md px-3 py-2 w-full"
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                min="0"
                required
                className="border border-gray-300 outline-primary rounded-md px-3 py-2 w-full"
              />
              <input
                type="text"
                name="location"
                placeholder="Service Area"
                required
                className="border border-gray-300 outline-primary rounded-md px-3 py-2 w-full"
              />
              <textarea
                name="description"
                rows="4"
                placeholder="Service Description"
                required
                className="border border-gray-300 outline-primary rounded-md px-3 w-full md:col-span-2 py-2 resize-none"
              ></textarea>

              <motion.button
                whileTap={{ scale: 0.9 }}
                type="submit"
                className="btn bg-[#CBE8E7] btn-outline border-[#CBE8E7] md:col-span-2 w-full hover:bg-transparent duration-300 transition text-[#00ABD7]"
              >
                Add Service
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AddService;
