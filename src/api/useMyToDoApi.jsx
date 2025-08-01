
import useAxiousSecure from "../hooks/useAxiousSecure";

const useMyToDoApi = () => {
  const axiosSecure = useAxiousSecure();
  const myToDoPromise = (email) => {
    return axiosSecure
      .get(`/service-todo?email=${email}`)
      .then((res) => res.data);
  };
  return { myToDoPromise };
};

export default useMyToDoApi;
