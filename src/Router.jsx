import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/shop",
            element: <Shop />
        }
    ])

    return <RouterProvider router={router} />
}

export default Router;