import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // you can use Header.js/jsx also

import * as Navbar from "./components/Header.jsx"; // it imports all, use like Navbar.anyExport
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Error } from "./components/Error";
import { Restaurent } from "./components/Restaurent";

// import Header, { Title } from "./components/Header.jsx"; // this {} is not object destructuring

const AppLayout = () => (
  <>
    {/* <Navbar.Header /> */}
    <Header />
    <Outlet />
    <Footer />
  </>
);
const appRouter = createBrowserRouter([
  // always use after applayout
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about", // nested path to /
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturant/:id", // dynamic segment
        element: <Restaurent />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
