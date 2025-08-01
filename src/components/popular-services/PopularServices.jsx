import { Link } from "react-router";
import { TbCurrencyTaka } from "react-icons/tb";
import { motion } from "framer-motion";

const PopularServices = ({ services }) => {
  const allServicesData = services;
  const popularServices = allServicesData.slice(0, 8);

  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-center text-primary">
        Popular Services
      </h2>
      <p className="text-center mb-12 text-xs md:text-sm text-secondary pt-2">
        Showcasing top-rated services with brief details and pricing.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {popularServices.map((service, index) => (
          <motion.div
            key={service._id}
            className="flex flex-col border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition duration-300 h-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />

            <h2 className="text-lg font-semibold text-primary mb-2">
              {service.title}
            </h2>

            <p className="text-secondary text-sm flex-1">
              {service.description.length > 80
                ? service.description.slice(0, 80) + "..."
                : service.description}
            </p>

            <p className="flex items-center gap-1 text-secondary mt-3">
              <TbCurrencyTaka size={18} />
              <span>{service.price}</span>
            </p>

            <div className="mt-4">
              <Link to={`/services/${service._id}`}>
                <button className="btn btn-primary btn-sm w-full text-white hover:bg-transparent hover:text-primary transition duration-200">
                  See More
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link to="/services">
          <button className="btn btn-outline btn-primary">Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default PopularServices;
