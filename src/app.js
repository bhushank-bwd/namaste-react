import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // you can use Header.js/jsx also

import * as Navbar from "./components/Header.jsx"; // it imports all, use like Navbar.anyExport
import Footer from "./components/Footer";
import Body from "./components/Body";

// import Header, { Title } from "./components/Header.jsx"; // this {} is not object destructuring

const AppLayout = () => (
  <>
    {/* <Navbar.Header /> */}
    <Header />
    <Body />
    <Footer />
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
