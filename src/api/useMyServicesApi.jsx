import useAxiousSecure from "../hooks/useAxiousSecure";

const useMyServicesApi = () => {
  const axiosSecure = useAxiousSecure();
  const myServicesPromise = (email) => {
    return axiosSecure
      .get(`/manage-services?email=${email}`)
      .then((res) => res.data);
  };
  return { myServicesPromise };
};

export default useMyServicesApi;
