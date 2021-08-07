import React from "react";
import "./style.css";
const Fullname = (props) => {
  return (
    <div className="asm">
      <p className="asmi">{props.FirstName}</p>
      <p className="lakb">{props.LastName}</p>
    </div>
  );
};

export default Fullname;
