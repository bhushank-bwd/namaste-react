import React from "react";
import ReactDOM from "react-dom/client";

const headings = React.createElement(
  "h1",
  {
    key: "1",
    style: { color: "red" },
  },
  "Hello new heading Parcel"
);
const headings2 = <h1 key={2}>Second heading</h1>;
const Headings3 = () => <h2 key={3}>Third heading</h2>;
const heading4 = () => {
  return <h4 key={3}>Fourth heading</h4>;
};
const DivC = () => (
  <>
    <div>
      {headings}
      {headings2}
      {Headings3()}
      <Headings3 />
      <Headings4 />
    </div>
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element in root
// root.render(divC);
root.render(<DivC />);
