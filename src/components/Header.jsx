export const Title = () => {
  //  this is named export, should be imported using same name
  return (
    <a href="/">
      <img
        alt="logo"
        src="https://files.yappe.in/place/full/the-food-villa-5873411.webp"
      />
    </a>
  );
};

const Header = () => {
  return (
    <div className="nav-bar">
      <Title />
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Blog</li>
        <li>Contact us</li>
      </ul>
    </div>
  );
};
export default Header; // only one element is default export & use it using any name. default export and file name should be same is good practice
