import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import SignUp from "../Pages/SignUp";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            }
        ]
    },
 
]);

export default router