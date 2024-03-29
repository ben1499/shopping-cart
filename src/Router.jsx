import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import App from "./App";
import Cart from "./components/Cart";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "/shop",
                    element: <Shop />,
                },
                { 
                    path: "/shop/cart",
                    element: <Cart /> 
                }
            ]
        },
    ])

    return <RouterProvider router={router} />
}

export default Router;