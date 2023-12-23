import React from "react";
import { Outlet } from "react-router-dom";

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
        <Outlet />
      </>
    );
  }
}
export default AboutMain;
