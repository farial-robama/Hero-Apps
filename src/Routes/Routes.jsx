import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


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
            path: '/apps',
            Component: Apps
        }
    ]
  }
])