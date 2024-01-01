import { useContext, useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  // add debugger in body.jsx

  let searchTxt = "abc"; // this is one binding that react uses, if this normal var uses react will not known when it is changed and re-render will no happen

  // onchange react re-renders component so hard coded value remains same for input value, this local variable is not prefered to input, it will difficult to use JS

  // what & why state,hooks,useState usestate creates react variable is like variable, state is just normal function which is returns array of var name , functions to change variable

  // [....] array destructuring also possible for use state. e.g. const state = useState(""); cosnt [a,setA] = state;

  const [searchText, setSearchText] = useState(""); // this changed then react reconsilation & react rerender just part of jsx where this state is used
  const [list, setList] = useState([]);
  const [filteredlist, setfilteredList] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const searchHotel = () => {
    let tempList = list.filter((element) =>
      element.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setfilteredList(tempList);
  };
  useEffect(() => {
    // console.log("This is useEffect console"); // add debugger here
    getRestaurantList();
  }, []);
  const getRestaurantList = async () => {
    let res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.7035291&lng=74.2432304&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    res = await res.json();
    console.log(res?.data?.cards[4]);
    if (res) {
      setList(
        res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setfilteredList(
        res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      // console.log(
      //   res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants[2]?.info
      // );
    }
  };
  // console.log("This is rendering console will print first befor useEffect Console", filteredlist.length); // add debugger here

  const isOnline = useOnline();

  if (!isOnline) return <div>Internet is off</div>;

  return (
    <>
      <div className="m-2">
        <input
          type="text"
          className="h-12 bg-slate-50 rounded m-1 px-2 focus:bg-pink-100 text-[grey] focus:outline-pink-200"
          value={searchText}
          placeholder="restaurant name"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-blue-500 font-medium outline-none text-md text-white rounded p-2 h-12 w-24 m-1"
          onClick={searchHotel}
        >
          Search
        </button>
        <input
          type="text"
          className="h-12 bg-slate-50 rounded m-1 px-2 focus:bg-pink-100 text-[grey] focus:outline-pink-200"
          value={user.name}
          placeholder="restaurant name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </div>
      {filteredlist?.length !== 0 ? (
        <div className="restraunt-list flex overflow-x-auto m-2">
          {filteredlist?.map((r, index) => {
            return (
              <Link to={`/resturant/${r.info.id}`}>
                <RestrauntCard restraurant={r.info} key={r.info.id + index} />
              </Link>
            );
          })}
        </div>
      ) : (
        <Shimmer />
      )}
    </>
  );
};

export default Body;
