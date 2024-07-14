import React from "react";
import './EducationCard.css';

interface EducationCardProps {
  title: string;
  description: string[];
}

const EducationCard: React.FC<EducationCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="education-card">
      <div className="title">
        <h6>{title}</h6>
      </div>
      <div className="description">
        <p>
          {description.map((text, index) => (
            <React.Fragment key={index}>
              <span>{text}</span>
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default EducationCard;
