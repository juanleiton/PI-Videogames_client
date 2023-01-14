import React, { useEffect } from "react";
import "./About.css";
import { useDispatch } from "react-redux";
import { switchViews } from "../../redux/actions.js";

const About = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(switchViews("ABOUT"));
    window.scrollTo(0, 0);
  }, [dispatch]);
  return(
    <div className="about-container">
      <div className="about">
        <h2 className="about-title">About</h2>
        <div className="about-text-container">
          <p>
            I'm a newbie developer, and this is my first app ever. It's loosely based in a movie
            website which I visit very often -I'm a retro cinema fan-. I'm looking forward to your
            feedback...
          </p>
          <p>Juan.</p>
        </div>
      </div>
    </div>
  );
};

export default About;