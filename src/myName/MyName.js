import React from "react";
import "../styles/myName.css";
import Typewriter from 'typewriter-effect';


const MyName = () => {
  return (
    <div id="myName">
      <h1>YASWANTH PARUCHURI</h1>
      {/* <div className="container">
      <div className="typed-out">Fullstack Developer</div>
      </div> */}
      <div className="container">
      <Typewriter
        options={{
        strings: ['Full Stack Developer', 'Front End Developer', 'Software Engineer'],
        autoStart: true,
        loop: true,
        }
      }/>
    </div>
  </div>
  );
};

export default MyName;
