import { Outlet } from "react-router";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import Toggle from "../components/toggle/Toggle";

const RootLayout = () => {
  return (
    <>
    
    <div className="max-w-[1920px] mx-auto">
      <Navbar />
<Toggle/>
      <div className="max-w-[95%] mx-auto pt-24">
        <Outlet />
      </div>
    </div>
      <Footer />
    </>
  );
};

export default RootLayout;
