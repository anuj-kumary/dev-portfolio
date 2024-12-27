import { Twitter, Github, Linkedin } from 'lucide-react';
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
            <button className='resume-btn'>Download Resume</button>
            <h5 className="bio-title">Skills</h5>
            <div className="skills-list">
              <li className="skill-menu">Web development</li>
              <li className="skill-menu">App development</li>
            </div>
            <h5 className="bio-title">Connect</h5>
            <div className="social-media-list">
              <a target='_blank' href='https://x.com/TheRealAnujK' className="list social-menu"><Twitter /></a>
              <a target='_blank' href='https://github.com/anuj-kumary' className="list social-menu"><Github /></a>
              <a target='_blank' href='https://www.linkedin.com/in/anujkumaryadav05/' className="list social-menu"><Linkedin /></a>
            </div>
          </div>
          <div className="hero-avatar">
            <img src="https://res.cloudinary.com/anujy0510/image/upload/v1734767060/IMG_3418_o5zciz.jpg" />
          </div>
        </div>
        <div className="hero-stats">
          <h6 className="title">Project Done</h6>
          <h2 className="sub-title">10+</h2>
          <h6 className="title">Years of Experience</h6>
          <h2 className="sub-title">2+</h2>
        </div>
      </div>
    </div>
  );
};