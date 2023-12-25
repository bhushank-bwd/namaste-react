import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import UserContext from "../utils/UserContext";

class AboutMain extends React.Component {
  constructor(props) {
    super(props); // study why it is
    // console.log("parent constructor");
  }
  componentDidMount() {
    // console.log("Parent componentDidMount ");
  }
  render() {
    // console.log("parent render");
    return (
      <div className="text-center m-1 p-1">
        <UserContext.Consumer>
          {({ user }) => (
            <h1 className="font-bold">
              {user.name} && {user.email}
            </h1>
          )}
        </UserContext.Consumer>
        <Profile name="Bhushan" count="1" />
        {/* <Profile name="Manish" count="2" /> */}
      </div>
    );
  }
}
export default AboutMain;
