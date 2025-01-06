import React from "react";
import ReactDOM from "react-dom";
const d = new Date(2025, 1, 5, 16);
const hours = d.getHours();
var s;
if (hours >= 0 && hours < 12) {
  s = "Morning";
} else if (hours >= 12 && hours <= 18) {
  s = "Afternoon";
} else {
  s = "Evening";
}
const customStyle = {
  color: "black",
};
if (s === "Morning") {
  customStyle.color = "red";
} else if (s === "Afternoon") {
  customStyle.color = "green";
} else {
  customStyle.color = "blue";
}
ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {" "}
    Good {s}
  </h1>,
  document.getElementById("root")
);
