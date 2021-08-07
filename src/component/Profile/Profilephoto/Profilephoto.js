import photoprof from "../../../fire.jpg";
import "./style.css";
import React from "react";

const Profilephoto = (props) => {
  return (
    <div className="Foto">
      <img
        onClick={() => {
          alert("message");
        }}
        src={photoprof}
        className="photo"
      />
    </div>
  );
};

export default Profilephoto;
