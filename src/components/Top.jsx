import React, { useEffect, useState } from "react";
import "./Top.css";
import image1 from "../images/desktop-image-hero-1.jpg";
import image2 from "../images/desktop-image-hero-2.jpg";
import image3 from "../images/desktop-image-hero-3.jpg";
import Logo from "../images/logo.svg";
import Arrow from "../images/icon-arrow.svg";
import Left from "../images/icon-angle-left.svg";
import Right from "../images/icon-angle-right.svg";
import Hamburger from "../images/icon-hamburger.svg";
import Close from "../images/icon-close.svg";

const Top = () => {
  const data = [
    {
      heading: "Discover innovative ways to decorate",
      text: "We provide unmatched quality, comfort, and style for property owners across the country  Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
      image: image1,
    },
    {
      heading: "We are available all across the globe",
      text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
      image: image2,
    },
    {
      heading: "Manufactured with the best materials",
      text: " Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of     experience in this industry, we understand what customers want for their home and office.",
      image: image3,
    },
  ];
  const [dataIndex, setDataIndex] = useState(0);
  const [shownData, setShownData] = useState(data[0]);

  const handleChangeImage = (direction) => {
    if (direction === "left" && dataIndex > 0) {
      setDataIndex((prevIndex) => prevIndex - 1);
    }
    if (direction === "right" && dataIndex < data.length - 1) {
      setDataIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    setShownData(data[dataIndex]);
  }, [dataIndex]);

  const [smallScreen, setSmallScreen] = useState(false);

  return (
    <div className="top-section flex">
      <div className="top-section-left">
        {smallScreen === true ? (
          <div className="small-screen">
            <div className="small-screen-menu flex">
              <img
                src={Close}
                alt="Close"
                onClick={() => {
                  setSmallScreen((prevState) => !prevState);
                }}
              />
              <ul className="small-screen-nav-links flex">
                <li>home</li>
                <li>shop</li>
                <li>about</li>
                <li>contact</li>
              </ul>
            </div>
            <div className="smallScreen-overlay" />
          </div>
        ) : null}
        <img src={shownData.image} alt="Room" className="main-image" />
        <nav className="flex">
          <img
            src={Hamburger}
            alt=""
            className="hamburger"
            onClick={() => {
              setSmallScreen((prevState) => !prevState);
            }}
          />
          <img src={Logo} alt="Logo" className="logo" />
          <ul className="nav-links flex">
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </nav>
      </div>
      <div className="top-section-right">
        <h2>{shownData.heading}</h2>
        <p>{shownData.text}</p>
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
