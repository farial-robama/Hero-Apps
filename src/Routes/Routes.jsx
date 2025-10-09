import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Installation from "../pages/Installation/Installation";
import Apps from "../pages/AllApps/Apps";
import AppsDetails from "../pages/AppsDetails/AppsDetails";


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    // errorElement: <ErrorPage></ErrorPage> ,
    children: [
        {
            index: true,
            path: '/',
            Component: Home
        },
        {
            path: '/allApps',
            Component: Apps
        },
        {
          path: '/appsDetails/:id',
          Component: AppsDetails
        },
        {
            path: '/installation',
            Component: Installation
        },
        {
          path: '*',
          Component: ErrorPage
        }
    ]
  }
])