import React, { useEffect, useState } from "react";
import "./Top.css";
import image1 from "../images/desktop-image-hero-1.jpg";
import image2 from "../images/desktop-image-hero-2.jpg";
import image3 from "../images/desktop-image-hero-3.jpg";
import Logo from "../images/logo.svg";
import Arrow from "../images/icon-arrow.svg";
import Left from "../images/icon-angle-left.svg";
import Right from "../images/icon-angle-right.svg";

const Top = () => {
  const images = [image1, image2, image3];
  const [imageIndex, setImageIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState();

  const handleChangeImage = (direction) => {
    if (direction === "left" && imageIndex > 0) {
      setImageIndex((prevIndex) => prevIndex - 1);
    }
    if (direction === "right" && imageIndex < images.length - 1) {
      setImageIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    setBackgroundImage(images[imageIndex]);
  }, [[], imageIndex]);

  return (
    <div className="top-section flex">
      <div className="top-section-left">
        <img src={backgroundImage} alt="Room" className="main-image" />
        <nav className="flex">
          <img src={Logo} alt="Logo" />
          <ul className="nav-links flex">
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </nav>
      </div>
      <div className="top-section-right">
        <h2>Discover innovative ways to decorate</h2>
        <p>
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <div className="flex">
          <p className="shop-now">SHOP NOW</p>
          <img src={Arrow} alt="Arrow" />
        </div>
        <div className="img-switchers flex">
          <div
            className="img-switcher-left flex"
            onClick={() => {
              handleChangeImage("left");
            }}
          >
            <img src={Left} alt="left" />
          </div>
          <div
            className="img-switcher-right flex"
            onClick={() => {
              handleChangeImage("right");
            }}
          >
            <img src={Right} alt="right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
