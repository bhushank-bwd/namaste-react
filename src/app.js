import React, { Suspense, lazy, useState } from "react";
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
import Profile from "./components/Profile";
import AboutMain from "./components/AboutMain";
import { Shimmer } from "./components/Shimmer";
import { Blank } from "./components/Blank";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import { Cart } from "./components/Cart";
// import { Instamart } from "./components/Instamart";

// import Header, { Title } from "./components/Header.jsx"; // this {} is not object destructuring

// chunking <=> Code splitting <=> Dynamic Bundling <=> lazy loading <=> on demand loading <=> dynamyc loading <=>

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Bhushan",
    email: "bhushank.bwd@gmail.com",
  });
  return (
    <>
      <Blank />
      <Provider store={store}>
        <UserContext.Provider value={{ user, setUser }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
};
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
        element: <AboutMain />,
        children: [
          {
            path: "",
            element: <About />,
          },
          {
            path: "profile",
            element: <Profile name="Bhushan" />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturant/:id", // dynamic segment
        element: <Restaurent />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/instamart", // dynamic import
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
