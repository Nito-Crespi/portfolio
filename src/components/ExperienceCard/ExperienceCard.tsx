import React from "react";
import "./ExperienceCard.css";

interface ExperienceCardProps {
  title: string;
  description: string[];
  items: string[];
  technologies?: string[];
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
            <React.Fragment key={index}>{text}</React.Fragment>
          ))}
        </p>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {technologies && technologies.length > 0 && (
        <div className="icons">
          {technologies.map((tech, index) => (
            <img
              key={tech}
              src={`${process.env.PUBLIC_URL}/assets/icons/technologies/${tech.toLowerCase()}.svg`}
              alt={tech}
              className="icon"
              role="img"
              aria-label={tech}
            />
          ))}
        </div>
      )}
      {technologies && technologies.length > 0 && (
        <div className="technologies-names">
          <span>[{technologies.join(", ")}]</span>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
