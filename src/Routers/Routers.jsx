import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
        path:'/',
        element:<Home></Home>
    },
    {
      path:"about/:category",
      element:<About></About>
    },
    {
      path:"login",
      element:<Login></Login>
    },
    {
      path:"signup",
      element:<SignUp></SignUp>
    },
    {
      path:'secret',
      element:<PrivateRoute><Secret></Secret></PrivateRoute>
    }
]
    },
    {
      path:"dashboard",
      element:<Dashboard></Dashboard>,
      children:[
       {
        path:"cart",
        element:<Cart></Cart>
       }
      ]
    }
  ]);