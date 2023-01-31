import React from "react";
import { useNavigate } from "react-router-dom";
import "./popup.css";

const Popup = () => {
  let navigate = useNavigate();
  const popupSubmit = () => {
    navigate("/login");
  };
  return (
    <div className="popup-background">
      <div className="popup-content">
        <p>You have successfully registered</p>
        <button onClick={popupSubmit}>OK</button>
      </div>
    </div>
  );
};

export default Popup;
