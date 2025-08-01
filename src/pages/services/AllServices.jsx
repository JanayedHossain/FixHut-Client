import { useLoaderData, useNavigate } from "react-router";
import Empty from "../empty/Empty";
import { motion } from "framer-motion";
const AllServices = () => {
  const allServices = useLoaderData();
const navigate=useNavigate()
  if (!allServices || allServices.length === 0) {
    return <Empty title="No services found!" />;
  }

  return (
    <div className="px-1 sm:px-4 pb-10">
      <h2 className="text-3xl font-bold text-center text-primary">
        All Services
      </h2>
      <p className="text-center mb-12 text-xs md:text-sm text-secondary pt-2">
        Browse reliable home repair services with prices and locations.
      </p>
      <motion.div
        className="overflow-x-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <table className="min-w-full table-auto border border-gray-300">
          <thead className="bg-primary text-white">
            <tr>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Provider</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Price (৳)</th>
              <th className="p-3 text-left ">Description</th>
            </tr>
          </thead>
          <tbody>
            {allServices.map((service) => (
              <tr
                key={service._id}
                className="border-b border-gray-200 hover:border-primary hover:text-primary transition cursor-pointer"
                onClick={() => navigate(`/services/${service?._id}`)}
              >
                <td className="p-3 truncate">
                  {service?.title.length > 25
                    ? service?.title?.slice(0, 25) + "..."
                    : service?.title}
                </td>
                <td className="p-3 truncate">{service.providerName}</td>
                <td className="p-3">{service.location}</td>
                <td className="p-3">{service.price}</td>
                <td className="p-3 truncate max-w-xs">{service.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default AllServices;
