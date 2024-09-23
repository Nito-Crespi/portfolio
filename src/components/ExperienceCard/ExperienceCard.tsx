import React from "react";
import "./ExperienceCard.css";

interface ExperienceCardProps {
  title: string;
  description: string[];
  items: string[];
  technologies: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  description,
  items,
  technologies,
}) => {
  return (
    <div className="experience-card">
      <div className="title">
        <h6>{title}</h6>
      </div>
      <div className="description">
        <p>
          {description.map((text, index) => (
            <span key={index}>{text}</span>
          ))}
        </p>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="icons">
        {technologies.map((tech, index) => (
          <img
            key={index}
            src={`./assets/icons/${tech.toLowerCase()}.svg`}
            alt={tech}
            className="icon"
          />
        ))}
      </div>
      <div className="technologies-names">
        <span>[{technologies.map((tech) => tech).join(", ")}]</span>
      </div>
    </div>
  );
};

export default ExperienceCard;
