import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import Root from "../pages/root/Root";
import Error from "../pages/error/Error";
import Apps from "../pages/apps/Apps";

const url = "/appData.json";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    // errorElement: Error,
    children: [
      {
        index: true,
        loader: () => fetch(url),
        Component: Home,
      },
      {
        path: "/allApps",
        loader: () => fetch(url),
        Component: Apps,
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);

export default router;
