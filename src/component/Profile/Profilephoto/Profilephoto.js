import photoprof from "../../../fire.jpg";
import "./style.css";
import React from "react";

const Profilephoto = (image) => {
  return (
    <div className="Foto">
      <img src={photoprof} className="photo" />
    </div>
  );
};

export default Profilephoto;
