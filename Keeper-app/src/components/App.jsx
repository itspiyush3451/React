import React from "react";
import Header from "./Header";
import Foot from "./Foot";
import Note from "./Note";
import notes from "./notes";

function createNotes(noteItem) {
  return (
    <Note key={noteItem.key} title={noteItem.title} body={noteItem.content} />
  );
}
function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      {notes.map(createNotes)}
      <footer>
        <Foot />
      </footer>
    </div>
  );
}

export default App;
