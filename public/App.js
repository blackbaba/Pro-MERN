const continents = ["Africa", "America", "Asia", "Australia", "Europe"];
const helloContinents = Array.from(continents, c => `Hello ${c}`);
const message = helloContinents.join(" ");
const element = React.createElement("div", {
  title: "Outer Div"
}, React.createElement("h1", null, message));
ReactDOM.render(element, document.getElementById("contents"));