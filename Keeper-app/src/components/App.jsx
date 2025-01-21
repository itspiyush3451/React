import React from "react";
import Header from "./Header";
import Foot from "./Foot";
import Note from "./Note";
function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="note">
        <Note />
      </div>
      <footer>
        <Foot />
      </footer>
    </div>
  );
}

export default App;
