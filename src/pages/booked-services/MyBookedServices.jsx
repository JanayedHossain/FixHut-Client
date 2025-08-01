import { Suspense, useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookedServices from "./BookedServices";
import useMyBookedServicesApi from "../../api/useMyBookedServicesApi";
import Loading from "../loading/Loading";

const MyBookedServices = () => {
  const { user } = useContext(AuthContext);
  const { myBookedServicesPromise } = useMyBookedServicesApi();
  useEffect(() => {
    document.title = "Booked Services | FixHut";
  }, []);
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <BookedServices
          fetchPromiseData={myBookedServicesPromise(user?.email)}
        />
      </Suspense>
    </div>
  );
};

export default MyBookedServices;
