import faqAnimation from "../../assets/faq.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

const FAQ = () => {
  return (
    <div className="pb-16">
      <h2 className="text-3xl font-bold text-center text-primary">FAQ</h2>
      <p className="text-center mb-12 text-xs md:text-sm text-secondary pt-2">
        Answers to common questions about using the service-sharing app and its
        features.
      </p>

      <motion.div
        className="flex items-center justify-center gap-8 px-4 xl:px-20 py-10 bg-base-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="join join-vertical w-full lg:w-1/2">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title font-semibold text-lg">
              How can I book a service on FixHut?
            </div>
            <div className="collapse-content text-sm">
              Browse the service list or use the search bar, then click on "View
              Details" of a service and hit "Book Now" to place your booking.
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-lg">
              Is there a search function to find services quickly?
            </div>
            <div className="collapse-content text-sm">
              Yes, you can use the search bar on the services page to quickly
              find services by their name.
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-lg">
              How do I check my booking status?
            </div>
            <div className="collapse-content text-sm">
              Check your booking status on the Booked Service page after logging
              in. It shows all your booked services and their current status.
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-lg">
              How can the booking status be updated?
            </div>
            <div className="collapse-content text-sm">
              In the Service To Do page, users can change the status via a
              dropdown with options: pending, working, completed.
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-lg">
              Is there any way to review or rate services?
            </div>
            <div className="collapse-content text-sm">
              Currently, the website does not support reviews or ratings.
            </div>
          </div>
        </div>

        <motion.div
          className="lg:w-52 xl:w-64 mx-auto hidden lg:block"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Lottie animationData={faqAnimation} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FAQ;
