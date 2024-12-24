import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* <div className="footer-section">
          <h3 className="footer-title">About Me</h3>
          <p>
            Hi, I'm Anuj Kumar Yadav, a passionate software engineer and open-source contributor. I love building interactive and user-friendly applications.
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div> */}
        {/* <div className="footer-section">
          <h3 className="footer-title">Connect With Me</h3>
          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div> */}
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Anuj Kumar Yadav. All rights reserved.</p>
      </div>
    </footer>
  );
};
