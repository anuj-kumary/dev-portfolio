import { useEffect, useRef } from "react";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      company: "Deuex Solutions",
      year: "2023 - Present",
      role: "Software Engineer",
      description:
        "Developed scalable web applications and enhanced user experiences with modern frameworks and tools.",
    },
    {
      company: "Deuex Solutions",
      year: "2022 - 2023",
      role: "Frontend Developer",
      description:
        "Built responsive and dynamic user interfaces for various client projects using React and Tailwind CSS.",
    }
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = containerRef.current!.querySelectorAll(".roadmap-item");

      const windowHeight = window.innerHeight;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= windowHeight - 100) {
          el.classList.add("visible");
        } else {
          el.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" className="experience-roadmap">
      <h3 className="heading">
        Work <span className="text-gradient">Experience</span>
      </h3>
      <div className="roadmap-container" ref={containerRef}>
        {experiences.map((exp, index) => (
          <div
            className={`roadmap-item ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <div className="roadmap-content">
              <h3 className="company-name">{exp.company}</h3>
              <p className="experience-year">{exp.year}</p>
              <h4 className="job-role">{exp.role}</h4>
              <p className="job-description">{exp.description}</p>
            </div>
            <div className="roadmap-dot"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
