import React from "react";
import ReactDOM from "react-dom/client";
import "boxicons";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <a href="/">
        <img
          alt="log"
          src="https://files.yappe.in/place/full/the-food-villa-5873411.webp"
        />
      </a>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Blog</li>
        <li>Contact us</li>
      </ul>
    </div>
  );
};
const restrauntListArray = [
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    name: "Burgor King",
    rating: 4.3,
    address: "Anand vihar",
    cusine: ["American", "Mexico"],
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bb7ae131544c7d37e10fc5faf76f09d6",
    name: "Dabba Garam",
    rating: 4.3,
    address: "Anand vihar",
    cusine: ["Indian", "Maharahtrian"],
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4",
    name: "mcDonald",
    rating: 4.9,
    address: "Jantar Mantar",
    cusine: ["American", "Italian"],
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1ace5fa65eff3e1223feb696c956b38b",
    name: "Qasva",
    rating: 4.1,
    address: "Sports park",
    cusine: ["Indian", "Hydrabad"],
  },
  {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/pjobovhpe4jwxdxoe1ns",
    name: "Jemini",
    rating: 3.7,
    address: "Anand Park",
    cusine: ["Indian", "Punjab"],
  },
];

const Body = () => {
  return (
    <>
      <RestrauntList />
    </>
  );
};
const RestrauntItem = ({ restraurant }) => {
  const { img, name, rating, address, cusine } = restraurant;
  return (
    <div className="restro-item">
      <img src={img} alt="restro-img" />
      <h2>{name}</h2>
      <h3 className="rating">
        <box-icon color="#a18907" type="solid" name="star"></box-icon>
        <span>{rating}</span>
      </h3>
      <h3>{cusine.join(", ")}</h3>
      <h4>{address}</h4>
    </div>
  );
};
const RestrauntList = () => {
  return (
    <div className="restraunt-list">
      {restrauntListArray.map((r, index) => {
        return <RestrauntItem restraurant={r} key={index} />;
      })}
    </div>
  );
};
const Footer = () => {
  return <>Footer</>;
};
const AppLayout = () => (
  <>
    <NavBar />
    <Body />
    <Footer />
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element in root
// root.render(divC);
root.render(<AppLayout />);
