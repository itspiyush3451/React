import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
<link rel="style" src="../public/styles.css"></link>;
// import App from "./App.jsx";
import App from "./components/App.jsx";
createRoot(document.getElementById("root")).render(<App />);
