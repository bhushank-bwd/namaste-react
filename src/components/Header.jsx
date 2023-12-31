import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Title = () => {
  //  this is named export, should be imported using same name
  return (
    <a href="/">
      <img
        className=" w-24 m-3"
        alt="logo"
        src="https://files.yappe.in/place/full/the-food-villa-5873411.webp"
      />
    </a>
  );
};
const Header = () => {
  const { items } = useSelector((store) => store.cart);
  // console.log(items);
  useEffect(() => {
    console.log("This is called without denedancy array");
  });
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="nav-bar flex justify-between bg-pink-100 shadow-lg m-1">
      <Title />
      <ul className="list-none flex mr-3 my-auto">
        <li className="p-1 text-lg font-semibold">
          <Link to="/">Home</Link>
        </li>
        <li className="p-1 text-lg font-semibold">
          <Link to="/about">About us</Link>
        </li>
        <li className="p-1 text-lg font-semibold">
          <Link to="/">Blog</Link>
        </li>
        <li className="p-1 text-lg font-semibold">
          <Link to="/contact">Contact us</Link>
        </li>
        <li className="p-1 text-lg font-semibold">
          <Link to="/instamart">Instamart</Link>
        </li>
        <li className="p-1 text-lg font-semibold">
          <Link to="/cart">
            Cart {items.length > 0 ? items.length + " items " : " 0 "}
          </Link>
        </li>
      </ul>
      <button
        className="text-white bg-blue-600 outline-none h-12 p-2 rounded-md mx-1 my-auto hover:cursor-pointer align-middle w-20"
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
