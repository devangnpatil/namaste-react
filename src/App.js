import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./Components/AppLayout";

import Contact from "./Components/Contact";
import { Error } from "./Components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import RestaurantMenu from "./Components/RestaurantMenu";
import Shimmer from "./Components/Shimmer";
import Cart from "./Components/Cart";

// import Grocery from "./Components/Grocery";

const Grocery = lazy(() => import("./Components/Grocery"));
const About = lazy(() => import("./Components/About"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer></Shimmer>}>
            <About />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer></Shimmer>}>
            <Grocery />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
        errorElement: <Error />,
      },
      {
        path: "/cart/",
        element: <Cart />,
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/restaurants/:resId",
    element: <RestaurantMenu />,
    errorElement: <Error />,
  },
  {
    path: "/cart/",
    element: <Cart />,
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
