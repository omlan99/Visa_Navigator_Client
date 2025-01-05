import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import SignUp from "../Pages/SignUp";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllVisas from "../Pages/AllVisas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/allvisa",
        element: <AllVisas></AllVisas>,
      },
    ],
  },
]);

export default router;
