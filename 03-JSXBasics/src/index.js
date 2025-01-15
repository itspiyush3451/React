import React from "react";
import ReactDOM from "react-dom";

// Jsx : HTML inside a javascript body
//Babel : is a compiler for javascript , which converts the program into a universal understandable code by all browsers

//Vanilla Js
// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello world!";
// document.getElementById("root").appendChild(h1);

//Using JSX
ReactDOM.render(
  <div>
    <h1>Hello Guys</h1>
    <p>shcvoiashfgioencancghasioufghasohcv</p>
  </div>,
  document.getElementById("root")
);
//Note: .render can only take one element
