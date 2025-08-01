import { FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-gray-900 text-primary-content p-10">
      <aside className="flex flex-col items-center space-y-3">
        
        <div className="flex items-center space-x-2">
          <img src={logo} alt="FixHut Logo" className="w-9 md:w-10" />
          <span className="text-xl md:text-2xl font-bold font-seconderyFont tracking-widest">
            Fix<span className="text-primary">Hut</span>
          </span>
        </div>
        <p className="font-primaryFont text-center text-sm md:text-base">
          FixHut is committed to making home repair simple, fast, and reliable
          for everyone.
        </p>
        <p className="text-center text-sm sm:text-base">
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
      </aside>

      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-400 transition-colors"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-red-600 transition-colors"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-700 transition-colors"
          >
            <FaFacebookF size={20} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
