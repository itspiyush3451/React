// Just a simple Greeting based on the time i.e Morning , Afternoon and Evening
// A dynamic Change in color based on the greeting

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const hr = new Date().getHours();
let greeting;

const customColor = {
  color: "",
};
if (hr < 12) {
  greeting = "Good Morning!";
  customColor.color = "red";
} else if (hr < 18) {
  greeting = "Good Afternoon!";
  customColor.color = "green";
} else {
  greeting = "Good Evening!";
  customColor.color = "blue";
}
createRoot(document.getElementById("root")).render(
  <div>
    <h1 className="heading" style={customColor}>
      {greeting}
    </h1>
  </div>
);
