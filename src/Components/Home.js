import React from "react";

import BannerImage from "../Assets/home-banner-image.jpg";

import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">Welcome to official Account of Student Council NIT Patna</h1>
          <p className="primary-text">
            Ignite Your Senses: Prepare for a New Era of voting with the
            Futuristic Tech
          </p>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
