import { use } from "react";
import { Link, useNavigate } from "react-router";
import Empty from "../empty/Empty";
import useAxiousSecure from "../../hooks/useAxiousSecure";

import { motion } from "framer-motion";
import { toast } from "react-toastify";

const ServiceToDo = ({ fetchPromiseData }) => {
  const bookedServices = use(fetchPromiseData);
  const axiosSecure = useAxiousSecure();
  const navigate = useNavigate();
  const handleChange = (e, id) => {
    const statusValue = e.target.value;
    const status = { statusValue };
    axiosSecure
      .put(`update-status/${id}`, status)
      .then((result) => {
        if (result.data.modifiedCount) {
          toast.success(`Service status updated to "${statusValue}".`);
        } else {
          toast.info("No changes made to the service status.");
        }
      })
      .catch((err) => {
        toast.error("Failed to update service status. Please try again.");
      });
  };

  if (bookedServices.length === 0) {
    return (
      <Empty
        title="You have no services to complete at this moment."
        home={true}
      />
    );
  }

  return (
    <div className="container mx-auto px-1 sm:px-4 mb-14">
      <h1 className="text-3xl font-bold text-center text-primary">
        Services To Do
      </h1>
      <p className="text-center mb-12 text-xs md:text-sm text-secondary pt-2">
        Manage and update the status of services booked from you by others.
      </p>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookedServices.map((service) => (
          <motion.div
            key={service._id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 p-4 rounded-2xl border border-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <figure>
              <img
                src={service.serviceImage}
                alt={service.serviceName}
                className="w-full h-52 object-cover rounded-xl"
              />
            </figure>
            <div className="mt-4 space-y-2">
              <Link
                to={`/services/${service?.serviceId}`}
                className="text-xl font-semibold text-primary"
              >
                {service.serviceName}
              </Link>
              <p>
                <span className="font-semibold">Customer:</span>{" "}
                {service.userName}
              </p>
              <p>
                <span className="font-semibold">Price:</span> ৳ {service.price}
              </p>
              <p>
                <span className="font-semibold">Booking Date:</span>{" "}
                {service.serviceTakingDate}
              </p>
              <p>
                <span className="font-semibold">Instruction:</span>{" "}
                {service.specialInstruction}
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="font-semibold">Status:</span>
                <select
                  className="select select-bordered w-1/2"
                  onChange={(e) => handleChange(e, service?._id)}
                  defaultValue={service.status}
                >
                  <option value="pending">Pending</option>
                  <option value="working">Working</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>
          </motion.div>
        ))}
      </div> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed border border-gray-200">
            <thead className="bg-primary text-white ">
              <tr>
                <th className="p-3 w-[50%] sm:w-auto text-left">Title</th>
                <th className="p-3 text-left">Customer</th>
                <th className="p-3 text-left">Instruction</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Booking Date</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookedServices?.map((service) => (
                <tr
                  key={service?._id}
                  className="border-b border-gray-200 hover:border-primary hover:text-primary transition"
                >
                  <td
                    className="p-3 text-sm sm:text-base font-semibold truncate cursor-pointer"
                    onClick={() => navigate(`/services/${service?.serviceId}`)}
                  >
                    {service?.serviceName.length > 25
                      ? service?.serviceName?.slice(0, 25) + "..."
                      : service?.serviceName}
                  </td>
                  <td className="p-3 text-sm sm:text-base truncate">
                    {service?.userName}
                  </td>
                  <td className="p-3 text-sm sm:text-base truncate">
                    {service?.specialInstruction}
                  </td>
                  <td className="p-3 text-sm sm:text-base">
                    {service?.price}৳
                  </td>
                  <td className="p-3 text-sm sm:text-base truncate">
                    {service?.serviceTakingDate}
                  </td>
                  <td className="p-3 text-sm sm:text-base">
                    <select
                      className="select select-bordered w-full min-w-[140px]"
                      onChange={(e) => handleChange(e, service?._id)}
                      defaultValue={service.status}
                    >
                      <option value="pending">Pending</option>
                      <option value="working">Working</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceToDo;
