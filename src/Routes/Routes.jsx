import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Installation from "../pages/Installation/Installation";
import Apps from "../pages/AllApps/Apps";


export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage></ErrorPage> ,
    children: [
        {
            index: true,
            path: '/',
            Component: Home
        },
        {
            path: '/allapps',
            Component: Apps
        },
        {
            path: '/installation',
            Component: Installation
        }
    ]
  }
])