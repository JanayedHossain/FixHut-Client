import { useEffect } from "react";
import aboutImg from '../../assets/about.png'
const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us | FixHut";
  }, []);

  return (
    <div className="container mx-auto px-4 pb-10">
      <h1 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
        About FixHut
      </h1>
      <p className="text-center text-secondary max-w-2xl mx-auto mb-10 text-sm md:text-base">
        FixHut is your trusted partner for reliable and professional home repair
        services. Whether it's plumbing, electrical work, or general maintenance
        — we connect you with experienced service providers at your convenience.
      </p>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src={aboutImg}
          alt="FixHut Team"
          className="rounded-2xl  w-full"
        />

        <div className="space-y-4 text-sm md:text-base text-secondary">
          <p>
            ✅ <strong>Our Mission:</strong> To make home repair simple, quick,
            and dependable for everyone.
          </p>
          <p>
            ✅ <strong>Our Vision:</strong> Empower homeowners with hassle-free
            service access, anytime, anywhere.
          </p>
          <p>
            ✅ <strong>Our Network:</strong> We work with verified professionals
            across multiple service categories, ensuring quality and safety.
          </p>
          <p>
            ✅ <strong>Customer Support:</strong> Your satisfaction is our
            priority — we’re here to help whenever you need.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-xl font-semibold text-primary mb-2">
          Want to work with us?
        </h2>
        <p className="text-sm text-secondary">
          Contact us or explore available services to get started.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
