import "./Card.css";

import  { useState } from "react";


const Card = ({ image, title, languages }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <ul className="card-languages">
          {languages.map((lang, index) => (
            <li key={index} className="card-language-item">
              {lang}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const PortfolioWork = () => {
  const projects = [
    { image: "https://via.placeholder.com/300", title: "Project 1", languages: ["JavaScript", "React", "CSS"] },
    { image: "https://via.placeholder.com/300", title: "Project 2", languages: ["HTML", "CSS", "TypeScript"] },
    { image: "https://via.placeholder.com/300", title: "Project 3", languages: ["Python", "Flask", "SQL"] },
    { image: "https://via.placeholder.com/300", title: "Project 4", languages: ["C++", "Data Structures"] },
    { image: "https://via.placeholder.com/300", title: "Project 5", languages: ["Java", "Spring Boot"] },
    { image: "https://via.placeholder.com/300", title: "Project 6", languages: ["Kotlin", "Android"] },
    { image: "https://via.placeholder.com/300", title: "Project 7", languages: ["Ruby", "Rails"] },
    { image: "https://via.placeholder.com/300", title: "Project 8", languages: ["PHP", "Laravel"] },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3;

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
      <button onClick={handlePrev} className="nav-button" disabled={currentIndex === 0}>
        Prev
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
            />
          ))}
        </div>
      </div>
      <button onClick={handleNext} className="nav-button" disabled={currentIndex + cardsPerView >= projects.length}>
        Next
      </button>
    </div>
  );
};


