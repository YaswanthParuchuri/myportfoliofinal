import React from "react";
import "../styles/footer.css"
import instagram from "../assets/instagram.png"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"

const Footer = () => {
  return (
    <div id="footer">  
    <div className="icons">
    <a href="https://github.com/YaswanthParuchuri"><img src={github} alt="github logo"/></a>
    <a href="https://www.linkedin.com/in/s1thparuchuri/"><img src={linkedin} alt="linkedin logo" /></a>
    <a href="https://www.instagram.com/yash.paruchuri/?utm_source=qr"><img src={instagram} alt="instagram logo"/></a>      
      
      </div> 
      <p> &copy; YASWANTH PARUCHURI</p>
    </div>
  );
};

export default Footer;
