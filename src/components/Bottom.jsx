import React from "react";
import "./Bottom.css";
import DarkRoom from "../images/image-about-dark.jpg";
import LightRoom from "../images/image-about-light.jpg";

const Bottom = () => {
  return (
    <section className="flex bottom">
      <img src={DarkRoom} alt="Room" />
      <div>
        <h4 className="shop-now">ABOUT OUR FURNITURE</h4>
        <p className="about-text">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <img src={LightRoom} alt="Chair" />
    </section>
  );
};

export default Bottom;
