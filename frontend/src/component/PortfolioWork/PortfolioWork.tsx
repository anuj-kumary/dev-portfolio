import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card } from "../../common/Card/Card";
import "./PortfolioWork.css"
import { useWindowWidth } from "../../hooks/useWindowWidth";

const projects = [
  {
    image: "https://res.cloudinary.com/anujy0510/image/upload/v1734767126/code-snippet_zuhsbg.png",
    title: "Code Snippets Builder",
    languages: ["Typescript", "Open Source Contribution"],
    github: "https://github.com/anuj-kumary/Code-Snippets-Builder",
    live: "https://snippetbuilder.com/"
  },
  {
    image: "https://res.cloudinary.com/anujy0510/image/upload/v1734767138/react-play_jr2zdc.png",
    title: "ReactPlay",
    languages: ["React", "Open Source Contribution"],
    github: "https://github.com/anuj-kumary/react-play",
    live: "https://reactplay.io/"
  },
  {
    image: "https://res.cloudinary.com/anujy0510/image/upload/v1734767145/ygc_kvpd8v.png",
    title: "Your GitHub Contributions",
    languages: ["Open Source Contribution", "github"],
    github: "https://github.com/anuj-kumary/Your-Github-Contributions",
    live: "https://ygc.sachinchaurasiya.dev/"
  },
  {
    image: "https://res.cloudinary.com/anujy0510/image/upload/v1734767158/eagle-store_pgkki0.png",
    title: "Eagle Store",
    languages: ["React", "React Context API "],
    github: "https://github.com/anuj-kumary/Eagle-stores",
    live: "https://eaglestores-react.netlify.app/"
  },
  {
    image: "https://res.cloudinary.com/anujy0510/image/upload/v1734767150/techhub_i20ocy.png",
    title: "TechHub",
    languages: ["React", "React Context API "],
    github: "https://github.com/anuj-kumary/TechHub",
    live: "https://techhub-react.netlify.app/"
  },
  {
    image: "https://res.cloudinary.com/anujy0510/image/upload/v1734767131/eagle-ui_y7zsua.png",
    title: "Eagle UI",
    languages: ["HTML", "CSS ", "Javascript"],
    github: "https://github.com/anuj-kumary/EagleUI",
    live: "https://eagleui.netlify.app/"
  },
];

export const PortfolioWork = () => {
  const width = useWindowWidth();
  const [currentIndex, setCurrentIndex] = useState(0);
  // Dynamically set the number of cards per view
  const cardsPerView =
    width >= 1024 ? 3 : width >= 768 ? 2 : 1;

  const handleNext = () => {
    if (currentIndex + cardsPerView < projects.length) {
      setCurrentIndex(currentIndex + cardsPerView);
    }
  };

  const handlePrev = () => {
    if (currentIndex - cardsPerView >= 0) {
      setCurrentIndex(currentIndex - cardsPerView);
    }
  };

  return (
    <div className="portfolio-container">
      <button
        onClick={handlePrev}
        className="nav-button"
        disabled={currentIndex === 0}
      >
        <ArrowLeft />
      </button>
      <div className="portfolio">
        <div
          className="cards-wrapper"
          style={{
            transform: `translateX(-${(currentIndex / cardsPerView) * 100}%)`,
          }}
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              image={project.image}
              title={project.title}
              languages={project.languages}
              github={project.github}
              live={project.live}
            />
          ))}
        </div>
      </div>
      <button
        onClick={handleNext}
        className="nav-button"
        disabled={currentIndex + cardsPerView >= projects.length}
      >
        <ArrowRight />
      </button>
    </div>
  );
};