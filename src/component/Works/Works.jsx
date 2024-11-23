import { PortfolioWork } from "../../common/Card/Card";
import "./Works.css";
export const Works = () => {
  return (
    <div className="container">
      <div className="row">
        <h3 className="heading">
          Recent <span className="text-gradient">Works</span>
        </h3>
        <p className="sub-heading">
          Here are some of the projects I’ve worked on recently, showcasing my
          skills in design, development, and problem-solving. Each project
          represents a step forward in my journey as a developer.
        </p>
      </div>
      <PortfolioWork />
    </div>
  );
};
