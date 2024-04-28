import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./Components/AppLayout";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Error } from "./Components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import RestaurantMenu from "./Components/RestaurantMenu";

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
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <Error />,
  },
  {
    path: "/restaurants/:resId",
    element: <RestaurantMenu />,
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
