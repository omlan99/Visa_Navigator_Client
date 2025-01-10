import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import SignUp from "../Pages/SignUp";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllVisas from "../Pages/AllVisas";
import VisaDetails from "../Pages/VisaDetails";
import AddVisa from "../Pages/AddVisa";
import MyVisa from "../Pages/MyVisa";

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
      {
        path : '/allvisa/:id',
        element : <VisaDetails></VisaDetails>
      },
      {
        path : '/addvisa',
        element : <AddVisa></AddVisa>
      },
      {
        path : '/myVisa',
        element : <MyVisa></MyVisa>
      }
    ],
  },
]);

export default router;
