import "./Experience.css";
import { CircleChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Deuex Solutions",
      year: "2023 - Present",
      role: "Software Engineer",
      description:
        "Contributed to Uber’s core data workflow platform, enhancing  scalability, reliability, and data-driven decision-making through optimized data pipeline orchestration. Designed secure authentication with Node.js and PostgreSQL, enabling private API access for authenticated users.",
    },
    {
      company: "Deuex Solutions",
      year: "2022 - 2023",
      role: "Frontend Developer",
      description:
        "Enhanced StarTree’s data platform with a minimalist UI, improving user engagement and satisfaction.Led the development of an HRMS app with MERN stack, integrating document uploads and seamless type-checker flow.Built GiverBox, a React Native app for hosting contests, with features like filtering and saving contests, and successfully launched it on the Play Store within three months.Actively contributed to open-source projects by improving code, reviewing features, and driving innovation.",
    }
  ];

  return (
    <section className="experience-section">
      <h1 className="experience-title">My <span className="text-gradient">Experience</span></h1>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-left">
              <p className="experience-year">{exp.year}</p>
              <div className="experience-icon-line">
                <div className="experience-line"></div>
                <span className="experience-icon"><CircleChevronRight size={"20px"} /></span>
              </div>
              <p className="experience-company">{exp.company}</p>
            </div>
            <div className="experience-right">
              <h3 className="experience-role">{exp.role}</h3>
              <p className="experience-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
