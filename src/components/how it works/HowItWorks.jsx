import {
  FaSearch,
  FaClipboardCheck,
  FaRegCalendarCheck,
  FaCheckDouble,
} from "react-icons/fa";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaSearch size={40} />,
      title: "Browse & Search Services",
      description:
        "Explore and search for the perfect home repair service that fits your needs easily from our service list.",
    },
    {
      icon: <FaClipboardCheck size={40} />,
      title: "Book Your Service",
      description:
        "Select your desired service and complete the simple booking process in just a few clicks.",
    },
    {
      icon: <FaRegCalendarCheck size={40} />,
      title: "Manage Your Bookings",
      description:
        "Check all your bookings in one place and keep track of the services you have ordered.",
    },
    {
      icon: <FaCheckDouble size={40} />,
      title: "Track Booking Status",
      description:
        "Stay updated with real-time booking status: Pending, Accepted, or Rejected by the service provider.",
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center text-primary">
        How It Works
      </h2>
      <p className="text-center mb-16 text-xs md:text-sm text-secondary pt-2">
        Explains the simple steps to find, book, and manage services on the
        platform.
      </p>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="p-6 text-center border border-transparent hover:border-primary rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 cursor-default"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1  }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex justify-center text-primary mb-4">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-secondary">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
