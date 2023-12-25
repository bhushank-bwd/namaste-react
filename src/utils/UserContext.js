const { createContext } = require("react");

const UserContext = createContext({
  user: {
    name: "John doe",
    email: "john@gmail.com",
  },
});
UserContext.displayName = "UserContext";
export default UserContext;
