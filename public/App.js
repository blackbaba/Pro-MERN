const element = React.createElement("div", {
  title: "Outer Div"
}, React.createElement("h1", null, "Hello World Babel"));
ReactDOM.render(element, document.getElementById("contents"));