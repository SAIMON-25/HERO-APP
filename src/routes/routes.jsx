import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import Root from "../pages/root/Root";
import Error from "../pages/error/Error";



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    // errorElement: Error,
    children:[
        {
          index:true, 
          Component:Home
        },
        {
          path:'*',
          Component: Error
        }
    ]
  },
 
]);

export default router;