import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import RootLayout from "../layout/RootLayout";
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";
import Services from "../pages/services/Services";
import ServiceAdd from "../pages/add-service/ServiceAdd";
import PrivateRoute from "../provider/PrivateRoute";
import ServiceDetails from "../pages/service-details/ServiceDetails";
import Booking from "../pages/booking/Booking";

import NotFound from "../pages/not-found/NotFound";
import ServiceEdit from "../pages/edit-service/ServiceEdit";

import Loading from "../pages/loading/Loading";
import MyServices from "../pages/manage-services/MyServices";
import MyBookedServices from "../pages/booked-services/MyBookedServices";
import MyToDo from "../pages/service-todo/MyToDo";
import AllServices from "../pages/services/AllServices";
import AboutUs from "../pages/about-us/AboutUs";
import Contact from "../pages/contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/services",
        Component: Services,
        loader: () => fetch("https://fix-hut-server.vercel.app/services"),
        HydrateFallback: Loading,
      },
      {
        path: "/about-us",
        Component: AboutUs,

      },
      {
        path: "/contact",
        Component: Contact,

      },
      {
        path: "/add-service",
        element: (
          <PrivateRoute>
            <ServiceAdd />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-services",
        element: (
          <PrivateRoute>
            <MyServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-service/:id",
        element: (
          <PrivateRoute>
            <ServiceEdit />
          </PrivateRoute>
        ),
      },
      {
        path: "/booking/:id",
        element: (
          <PrivateRoute>
            <Booking />
          </PrivateRoute>
        ),
      },
      {
        path: "/booked-services",
        element: (
          <PrivateRoute>
            <MyBookedServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/service-todo",
        element: (
          <PrivateRoute>
            <MyToDo />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-services",
        element: (
          <PrivateRoute>
            <AllServices/>
          </PrivateRoute>
        ),
        loader: () => fetch("https://fix-hut-server.vercel.app/services"),
        HydrateFallback: Loading,
      },
    ],
  },
]);
