import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./error.jsx";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Shop from "./routes/Shop.jsx";
import Cart from "./routes/Cart.jsx";

import "./index.css";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            errorElement: <Error />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/about",
                    element: <About />,
                },
                {
                    path: "/shop",
                    element: <Shop />,
                },
                {
                    path: "/cart",
                    element: <Cart />,
                },
            ],
        },
    ],
    {
        basename: "/shopping-kart",
    }
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
