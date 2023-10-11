import React from "react";
import "../styles/background.css";
import video from "../assets/bg-universe.mp4";
import fallbackImage from "../assets/fallback-image.jpg";



const Background = () => {
  return (
    <>
     
      <video
      playsInline
      autoPlay
      muted
      loop
      preload="auto"
      poster={fallbackImage}
      >
      <source src={video} type="video/mp4"/>
      </video>
    </>
  );
};

export default Background;
