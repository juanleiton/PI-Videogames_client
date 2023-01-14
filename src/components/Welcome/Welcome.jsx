import React from "react";
import { useHistory } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  const history = useHistory();
  const goHome = () => {
    history.push("/home/page-1");
  };
  return(
    <div className="welcome">
      <div className="welcome-button-container">
        <button className="welcome-button" type="button" onClick={goHome}>Press to continue...</button>
      </div>
    </div>
  );
};

export default Welcome;