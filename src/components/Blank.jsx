import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

export const Blank = () => {
  const { user } = useContext(UserContext);
  return <h1>{user.name}</h1>;
};
