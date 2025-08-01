import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import Empty from "../empty/Empty";
import useAxiousSecure from "../../hooks/useAxiousSecure";
import { motion } from "framer-motion";

const ManageServices = ({ fetchPromiseData }) => {
  const servicesData = use(fetchPromiseData);
  const axiosSecure = useAxiousSecure();
  const navigate = useNavigate();
  const [myServices, setMyServices] = useState(servicesData);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete This Service?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/delete-service/${id}`)
          .then((result) => {
            if (result.data.deletedCount) {
              const remainingMyServices = myServices.filter(
                (item) => item._id !== id
              );
              setMyServices(remainingMyServices);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            } else {
              toast.error("Something Went Wrong. Please Try Again");
            }
          })
          .catch((err) => {
            toast.error("Something Went Wrong. Please Try Again");
          });
      }
    });
  };

  if (myServices.length === 0) {
    return <Empty title="You haven't added any services yet." add={true} />;
  }

  return (
    <div className="px-1 sm:px-4 pb-10">
      <h2 className="text-3xl font-bold text-center text-primary">
        Manage Your Services
      </h2>
      <p className="text-center mb-12 text-xs md:text-sm text-secondary pt-2">
        Easily update or delete the services you’ve added in your account.
      </p>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myServices.map((service) => (
          <motion.div
            key={service._id}
            className="shadow-md rounded-xl overflow-hidden flex flex-col p-4 border border-gray-300"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-48 w-full object-cover rounded-lg"
            />
            <div className="p-4 flex flex-col flex-1">
              <div className="flex-1">
                <Link
                  to={`/services/${service?._id}`}
                  className="text-xl font-semibold text-primary"
                >
                  {service.title}
                </Link>
                <p className="my-3">
                  <span className="font-medium">Price:</span> ৳ {service.price}
                </p>
                <p className="text-sm sm:text-base">
                  {service?.description.length > 100
                    ? service.description.slice(0, 100) + "..."
                    : service?.description}
                </p>
              </div>

              <div className="flex justify-between mt-6">
                <Link to={`/edit-service/${service?._id}`}>
                  <button className="btn btn-sm btn-info hover:btn-outline hover:bg-transparent hover:text-info">
                    Edit
                  </button>
                </Link>
                <button
                  className="btn btn-sm btn-error hover:btn-outline hover:bg-transparent hover:text-error"
                  onClick={() => handleDelete(service?._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed border border-gray-200">
            <thead className="bg-primary text-white ">
              <tr>
                <th className="p-3 w-[50%] sm:w-auto text-left">Title</th>
                <th className="p-3 text-left">Location</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {myServices?.map((service) => (
                <tr
                  key={service._id}
                  className="border-b border-gray-200 hover:border-primary group transition"
                >
                  <td
                    className="p-3 text-sm sm:text-base font-semibold truncate group-hover:text-primary cursor-pointer"
                    onClick={() => navigate(`/services/${service?._id}`)}
                  >
                    {service.title.length > 25
                      ? service.title?.slice(0, 25) + "..."
                      : service.title}
                  </td>
                  <td className="p-3 text-sm sm:text-base">
                    {service.location}
                  </td>
                  <td className="p-3 text-sm sm:text-base">{service.price}৳</td>
                  <td className="p-3 text-sm sm:text-base flex flex-col sm:flex-row gap-2">
                    <Link to={`/edit-service/${service?._id}`}>
                      <button className="btn btn-sm btn-outline btn-primary w-full sm:w-auto">
                        Update
                      </button>
                    </Link>

                    <button
                      className="btn btn-sm btn-outline btn-error w-full sm:w-auto"
                      onClick={() => handleDelete(service._id)}
                    >
                      Delete
                    </button>
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

export default ManageServices;
