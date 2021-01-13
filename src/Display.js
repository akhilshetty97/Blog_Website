import React from "react";
import "./Display.css";
function Display({ data }) {
  //   console.log(data.title);

  const removeTag = (s) => {
    s = s.toString();
    return s.replace(/(<([^>]+)>)/gi, "");
  };
  return (
    <div className="display">
      <h5>{removeTag(data.body)}</h5>
    </div>
  );
}

export default Display;
