import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import HowItWorks from "../../components/how it works/HowItWorks";
import PopularServices from "../../components/popular-services/PopularServices";
import { useNavigation } from "react-router";
import Loading from "../loading/Loading";
import FAQ from "../../components/faq/FAQ";
import Newsletter from "../../components/newsletter/Newsletter";


const Home = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Home | FixHut";

    const fetchServices = async () => {
      try {
        const res = await fetch("https://fix-hut-server.vercel.app/services");
        const data = await res.json();
        setServices(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching services:", error);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading || isNavigating) {
    return <Loading />;
  }

  return (
    <div>
      <Hero />
      <PopularServices services={services} />
      <HowItWorks />
      <Newsletter/>
      <FAQ />
    </div>
  );
};

export default Home;
