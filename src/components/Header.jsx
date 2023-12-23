import { useEffect, useState } from "react";
import logo from "../assets/img/the-food-villa-5873411.webp";
import { Link } from "react-router-dom";

export const Title = () => {
  //  this is named export, should be imported using same name
  return (
    <a href="/">
      <img alt="logo" src={logo} />
    </a>
  );
};
const Header = () => {
  useEffect(() => {
    console.log("This is called without denedancy array");
  });
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="nav-bar">
      <Title />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
      <button
        onClick={() => {
          setIsLogin(!isLogin);
        }}
      >
        {isLogin ? "Logout" : "Login"}
      </button>
    </div>
  );
};
export default Header; // only one element is default export & use it using any name. default export and file name should be same is good practice
