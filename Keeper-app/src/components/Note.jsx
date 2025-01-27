import React from "react";
import notes from "./notes";
function Note(props) {
  return (
    <div className="note">
      <div>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
      </div>
    </div>
  );
}

export default Note;
