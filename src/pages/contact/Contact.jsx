import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | FixHut";
  }, []);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    toast.success("Message sent successfully!");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container mx-auto px-4 pb-10">
      <h1 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
        Contact Us
      </h1>
      <p className="text-center text-secondary max-w-2xl mx-auto mb-10 text-sm md:text-base">
        Need help or have a question? Reach out to us anytime — we're here to
        help.
      </p>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side: Contact Info */}
        <div className="space-y-6 text-secondary text-sm md:text-base">
          <div>
            <h3 className="font-semibold text-lg text-primary mb-1">Email</h3>
            <p>support@fixhut.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-primary mb-1">Phone</h3>
            <p>+880 1234-567890</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-primary mb-1">
              WhatsApp
            </h3>
            <p>+880 1987-654321</p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Your email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Your message..."
            className="textarea textarea-bordered w-full h-32"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-primary text-white w-full hover:bg-transparent hover:text-primary transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
