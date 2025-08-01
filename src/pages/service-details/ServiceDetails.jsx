import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
import useAxiousSecure from "../../hooks/useAxiousSecure";
import Loading from "../loading/Loading";
import { toast } from "react-toastify";
import Empty from "../empty/Empty";

const SingleServiceDetails = () => {
  const [service, setService] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const axiosSecure = useAxiousSecure();
  useEffect(() => {
    document.title = "Details | FixHut";
  }, []);

  useEffect(() => {
    axiosSecure
      .get(`/services/${id}`)
      .then((res) => {
        setService(res.data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Failed to load service details. Please try again.");
        console.error(error);
        setLoading(false);
      });
  }, [id, axiosSecure]);

  if (loading) {
    return <Loading />;
  }
  if (!service?._id) {
    return <Empty title={" Service not found!"} home={true} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto p-2 mb-24 sm:p-6 border rounded-2xl"
    >
      <div className="flex items-center space-x-4 mb-6">
        <div>
          {service.providerImage ? (
            <div className="avatar">
              <div className="w-10  rounded-full">
                <img src={service.providerImage} />
              </div>
            </div>
          ) : (
            <div className="avatar avatar-placeholder">
              <div className="bg-neutral text-neutral-content w-10 rounded-full ">
                <span className="capitalize font-semibold">
                  {service.providerName ? service.providerName[0] : "?"}
                </span>
              </div>
            </div>
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{service.providerName}</h3>
          <p className="text-sm text-secondary">{service.location}</p>
        </div>
      </div>

      <div className=" shadow-lg rounded-lg p-3 sm:p-6">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold mb-2 text-primary">
          {service.title}
        </h2>
        <p className="text-secondary mb-4">{service.description}</p>

        <p className="text-right py-2 font-semibold text-lg">৳ {service.price}</p>

        <Link to={`/booking/${service?._id}`}>
          <button className="btn hover:btn-outline hover:bg-transparent hover:text-primary btn-primary px-6 py-2 rounded">
            Book Now
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default SingleServiceDetails;
