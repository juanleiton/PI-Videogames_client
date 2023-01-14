import React from "react";
import { useHistory } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const history = useHistory();
  const goHome = () => {
    history.push("/home/page-1");
  };
  return(
    <div className="not-found">
      <div className="not-found-image-container">
        <img className="not-found-image" src="Warning-sign.png" alt="Warning sign"/>
      </div>
        <h1 className="not-found-title">Sorry, this page does not exist.</h1>
        <h4>Please, check the entered address and try again... or</h4>
        <div className="not-found-button-container">
          <button className="not-found-button" type="button" onClick={goHome}>go back to homepage</button>
        </div>
    </div>
  );
};

export default NotFound;