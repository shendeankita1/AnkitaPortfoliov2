import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern1.svg";
import profile_image from "../../assets/fullprofile.png";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_image} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a skilled Full Stack Developer with over 4 years of
              professional experience in building scalable and efficient web
              applications. I have hands-on expertise in technologies such as
              JSP, Servlets, React, Spring Boot, HTML, and CSS.
            </p>
            <p>
              Throughout my career, I have contributed to developing robust
              backend systems and dynamic frontend interfaces, ensuring seamless
              user experiences. I am passionate about writing clean code,
              solving complex problems, and continuously learning new
              technologies to enhance my development skills.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Java Script</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>4+</h1>
          <p>Years of experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Project Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>Happy clients</p>
        </div>
      </div>
    </div>
  );
};
export default About;
