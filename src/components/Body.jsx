import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import { restrauntList } from "./config";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // add debugger in body.jsx

  let searchTxt = "abc"; // this is one binding that react uses, if this normal var uses react will not known when it is changed and re-render will no happen

  // onchange react re-renders component so hard coded value remains same for input value, this local variable is not prefered to input, it will difficult to use JS

  // what & why state,hooks,useState usestate creates react variable is like variable, state is just normal function which is returns array of var name , functions to change variable

  // [....] array destructuring also possible for use state. e.g. const state = useState(""); cosnt [a,setA] = state;

  const [searchText, setSearchText] = useState(""); // this changed then react reconsilation & react rerender just part of jsx where this state is used
  const [list, setList] = useState([]);
  const [filteredlist, setfilteredList] = useState([]);

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
    if (res) {
      setList(
        res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setfilteredList(
        res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      // console.log(
      //   res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants[2]?.info
      // );
    }
  };
  // console.log("This is rendering console will print first befor useEffect Console", filteredlist.length); // add debugger here
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-btn" onClick={searchHotel}>
          Search
        </button>
      </div>
      {filteredlist.length !== 0 ? (
        <div className="restraunt-list">
          {filteredlist.map((r, index) => {
            return (
              <Link to={`/resturant/${r.info.id}`}>
                <RestrauntCard restraurant={r.info} key={r.info.id} />
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
