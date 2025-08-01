import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email.");
      return;
    }

    toast.success("Subscribed successfully!");
    setEmail("");
  };

  return (
    <motion.div
      className="bg-primary text-white py-12 px-4 my-16 rounded-2xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="text-sm md:text-base mb-6">
          Stay updated with the latest home service tips, offers, and updates
          from FixHut.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full sm:w-auto text-secondary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-neutral text-white hover:bg-white hover:text-primary transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Newsletter;
