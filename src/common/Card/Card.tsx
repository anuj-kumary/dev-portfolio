import React from "react";
import "./Card.css";

export const Card = ({
  image,
  title,
  languages,
}: {
  image: string,
  title: string,
  languages: any,
}) => {
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
