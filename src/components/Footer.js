import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="text-center">
      <h6>
        This site is created by {user.name} Contact: {user.email}{" "}
      </h6>
    </div>
  );
};
export default Footer;
