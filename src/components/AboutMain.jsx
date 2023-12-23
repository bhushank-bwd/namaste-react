import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";

class AboutMain extends React.Component {
  constructor(props) {
    super(props); // study why it is
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("Parent componentDidMount ");
  }
  render() {
    console.log("parent render");
    return (
      <>
        <Profile name="Bhushan" count="1" />
        {/* <Profile name="Manish" count="2" /> */}
      </>
    );
  }
}
export default AboutMain;
