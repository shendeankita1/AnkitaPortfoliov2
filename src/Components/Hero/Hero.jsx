import React from "react";
import "./Hero.css";
import profile_image from "../../assets/profile-pic.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
const resumepdf = "http://localhost:5173/Resume.pdf";
const Hero = () => {
  const downloadFileAtURL = (url) => {
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", "Resume.pdf");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div id="home" className="hero">
      <img src={profile_image} alt="" />
      <h1>
        <span>I am Ankita Shende,</span>Senior Software Engineer.
      </h1>
      <p>
        I am a software developer with 4+ years of
        experience in Vegayan Systems.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div
          onClick={() => {
            downloadFileAtURL(resumepdf);
          }}
          className="hero-resume"
        >
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
