import { useState } from "react";
import RestrauntCard from "./RestrauntCard";
import { restrauntList } from "./config";

const Body = () => {
  let searchTxt = "abc"; // this is one binding that react uses, if this normal var uses react will not known when it is changed and re-render will no happen

  // onchange react re-renders component so hard coded value remains same for input value, this local variable is not prefered to input, it will difficult to use JS

  // what & why state,hooks,useState usestate creates react variable is like variable, state is just normal function which is returns array of var name , functions to change variable

  // [....] array destructuring also possible for use state. e.g. const state = useState(""); cosnt [a,setA] = state;

  const [searchText, setSearchText] = useState(""); // this changed then react reconsilation & react rerender just part of jsx where this state is used
  const [list, setList] = useState(restrauntList);

  const searchHotel = () => {
    let tempList = list.filter((element) => element.name.includes(searchText));
    setList(tempList);
  };

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
      <div className="restraunt-list">
        {list.map((r, index) => {
          return <RestrauntCard restraurant={r} key={index} />;
        })}
      </div>
    </>
  );
};

export default Body;
