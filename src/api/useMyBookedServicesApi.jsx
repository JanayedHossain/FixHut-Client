import useAxiousSecure from "../hooks/useAxiousSecure";

const useMyBookedServicesApi = () => {
  const axiosSecure = useAxiousSecure();
  const myBookedServicesPromise = (email) => {
    return axiosSecure
      .get(`/booked-services?email=${email}`)
      .then((res) => res.data);
  };
  return { myBookedServicesPromise };
};

export default useMyBookedServicesApi;
