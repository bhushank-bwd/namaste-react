import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const Instamart = () => {
  const { user } = useContext(UserContext);
  return <div>Instamart by {user.name}</div>;
};
export default Instamart;
