const headings = React.createElement(
  "h1",
  {
    key: "1",
    style: { color: "red" },
  },
  "Hello new heading 1"
);
const headings2 = React.createElement(
  "h1",
  {
    key: "2",
    style: { color: "green" },
  },
  "Hello new heading 2"
);
const divC = React.createElement(
  "div",
  {
    id: "container",
    style: { color: "green" },
  },
  [headings, headings2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element in root
root.render(divC);
