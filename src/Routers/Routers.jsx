import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    //   errorElement: <ErrorPage />,
    children:[
        {
        path:'/',
        element:<Home></Home>
    },
    {
      path:"about",
      element:<About></About>
    }
]
    },
  ]);