import { TfiLocationPin } from "react-icons/tfi";
import { Link, useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import Empty from "../empty/Empty";
import { motion } from "framer-motion";

const Services = () => {
  const allServicesData = useLoaderData();
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    document.title = "Services | FixHut";
  }, []);

  const filteredServices = allServicesData.filter((service) =>
    service.title.toLowerCase().includes(searchText.trim().toLowerCase())
  );

  if (sortOption === "ascending") {
    filteredServices.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOption === "descending") {
    filteredServices.sort((a, b) => b.title.localeCompare(a.title));
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-primary">Services</h2>
      <p className="text-center mb-12 text-xs md:text-sm text-secondary pt-2">
        A list of all available services with details to help users choose and
        book.
      </p>
      <div className="flex w-full items-center justify-between">
        <div className="max-w-2/3 md:max-w-md  w-full">
          <input
            type="text"
            placeholder="Search services..."
            className="outline-none border py-2 px-3 border-gray-400 rounded-lg text-xs sm:text-sm w-full"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div>
          <select
            className="outline-none border py-2 px-3 border-gray-400 rounded-lg text-xs sm:text-sm w-full"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="ascending">Title: A → Z</option>
            <option value="descending">Title: Z → A</option>
          </select>
        </div>
      </div>
      {filteredServices.length === 0 && <Empty title="No services found!" />}

      {filteredServices?.map((service) => (
        <motion.div
          key={service?._id}
          className="p-6 border border-gray-200 rounded-3xl my-14 grid md:grid-cols-3 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="col-span-1">
            <img
              src={service?.image}
              alt=""
              className="w-full h-64 object-cover rounded-2xl"
            />
          </div>

          <div className="md:col-span-2 px-6 pt-6 md:pt-0">
            <div className="flex items-center gap-3">
              <div>
                {service.providerImage ? (
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={service.providerImage} />
                    </div>
                  </div>
                ) : (
                  <div className="avatar avatar-placeholder">
                    <div className="bg-neutral text-neutral-content w-10 rounded-full">
                      <span className="capitalize font-semibold">
                        {service.providerName ? service.providerName[0] : "?"}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <h1>{service?.providerName}</h1>
            </div>

            <hr className="border-gray-300 my-3" />
            <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl text-primary">
              {service?.title}
            </h1>

            <div className="flex items-center gap-5 text-sm sm:text-base">
              <p className="flex items-center gap-1 text-secondary py-2">
                <span>
                  <TfiLocationPin size={20} />
                </span>
                <span>{service?.location}</span>
              </p>
              <p className="flex items-center gap-1 text-secondary py-2">
                <span>
                  <TbCurrencyTaka size={20} />
                </span>
                <span>{service?.price}</span>
              </p>
            </div>

            <p className="text-secondary mt-2 text-sm sm:text-base">
              {service?.description.length > 100
                ? service.description.slice(0, 100) + "..."
                : service?.description}
            </p>

            <div className="flex items-center justify-end my-4">
              <Link to={`/services/${service?._id}`}>
                <button className="btn btn-primary btn-sm text-white hover:bg-transparent hover:text-primary duration-200 transition">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Services;
