import React from "react";
import sly from "./images/sly.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={sly} alt="Sly Culture" className="sly-image" />
      <div className="nav-links">
        <a className="custom-btn btn-5" href="racedata">
          RACE STATS
        </a>
        <a className="custom-btn btn-5" href="points">
          POINT LEADERS
        </a>
        <a
          className="custom-btn btn-5"
          href="https://www.youtube.com/playlist?list=PLe6z2Vg8fjqOC7fhA38OSArCA1aB37GTs"
          target="_blank"
        >
          RACE PLAYLIST
        </a>
      </div>
    </div>
  );
};

export default Hero;
