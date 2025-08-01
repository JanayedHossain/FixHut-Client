import { Suspense, useContext, useEffect } from "react";
import ManageServices from "./ManageServices";
import { AuthContext } from "../../provider/AuthProvider";
import useMyServicesApi from "../../api/useMyServicesApi";
import Loading from "../loading/Loading";

const MyServices = () => {
  const { user } = useContext(AuthContext);
  const { myServicesPromise } = useMyServicesApi();
  useEffect(() => {
    document.title = "Manage Services | FixHut";
  }, []);
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <ManageServices fetchPromiseData={myServicesPromise(user?.email)} />
      </Suspense>
    </div>
  );
};

export default MyServices;
