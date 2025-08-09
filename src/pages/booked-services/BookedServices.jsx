import { use } from "react";
import { useNavigate } from "react-router";

import Empty from "../empty/Empty";

import { motion } from "framer-motion";

const BookedServices = ({ fetchPromiseData }) => {
  const bookedServices = use(fetchPromiseData);
  const navigate = useNavigate();
  if (bookedServices.length === 0) {
    return (
      <Empty title="You haven't booked any services yet." services={true} />
    );
  }

  return (
    <div className="container mx-auto px-1 sm:px-4 pb-10">
      <h1 className="text-3xl font-bold text-center text-primary">
        Your Booked Services
      </h1>
      <p className="text-center mb-12 text-xs md:text-sm text-secondary pt-2">
        View and track the status of services you have booked.
      </p>
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
                <th className="p-3 text-left">Provider</th>
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
                  <td className="p-3 text-sm sm:text-base">
                    {service?.providerName}
                  </td>
                  <td className="p-3 text-sm sm:text-base">
                    {service?.price}৳
                  </td>
                  <td className="p-3 text-sm truncate sm:text-base">
                    {service?.serviceTakingDate}
                  </td>
                  <td className="p-3 text-sm sm:text-base">
                    {service?.status}
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

export default BookedServices;
