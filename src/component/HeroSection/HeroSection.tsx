import React from "react";
import "../HeroSection/HeroSection.css";
export const HeroSection = () => {
  return (
    <div>
      <h1 className="name">Anujkumar Yadav</h1>
      <div className="about-me">
        <div className="about-container">
          <div>
            <p className="bio">
              I&apos;m a software developer and open-source contributor.
              I&apos;m a passionate learner who&apos;s always willing to learn
              and work across technologies. I have keen interest in exploring
              different Javascript framework and libraries. I have hands-on
              experience of working with industrial projects in different
              domains.
            </p>
            <h5 className="bio-title">Skills</h5>
            <div className="skills-list">
              <li className="skill-menu">Web development</li>
              <li className="skill-menu">App development</li>
            </div>
            <h5 className="bio-title">Connect</h5>
            <div className="social-media-list">
              <li className="list social-menu">Twitter</li>
              <li className="list social-menu">Github</li>
              <li className="list social-menu">Linkedin</li>
            </div>
          </div>
          <div className="hero-avatar">
            <img src="https://mone.flatheme.net/assets/images/hero-avatar@2x.jpg" />
          </div>
        </div>
        <div>
          <h6 className="title">Project Done</h6>
          <h2 className="sub-title">20+</h2>
          <h6 className="title">Years of Experience</h6>
          <h2 className="sub-title">2+</h2>
        </div>
      </div>
    </div>
  );
};