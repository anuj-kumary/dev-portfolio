import "./Card.css";

export const Card = ({
  image,
  title,
  languages,
  github,
  live
}: {
  image: string,
  title: string,
  languages: any,
  github: string
  live: string
}) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <ul className="card-languages">
          {languages.map((lang: string, index: number) => (
            <li key={index} className="card-language-item">
              {lang}
            </li>
          ))}
        </ul>
        <div className="card-links">
          <a href={github} target="_blank" rel="noopener noreferrer" className="link">
            GitHub
          </a>
          <a href={live} target="_blank" rel="noopener noreferrer" className="link">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};
