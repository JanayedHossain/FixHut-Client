import { Suspense, useContext, useEffect } from "react";
import ServiceToDo from "./ServiceToDo";
import { AuthContext } from "../../provider/AuthProvider";
import useMyToDoApi from "../../api/useMyToDoApi";
import Loading from "../loading/Loading";

const MyToDo = () => {
  const { user } = useContext(AuthContext);
  const { myToDoPromise } = useMyToDoApi();
  useEffect(() => {
    document.title = "Service To Do | FixHut";
  }, []);
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <ServiceToDo fetchPromiseData={myToDoPromise(user?.email)} />
      </Suspense>
    </div>
  );
};

export default MyToDo;
