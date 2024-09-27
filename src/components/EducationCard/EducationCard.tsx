import React from "react";
import "./EducationCard.css";

interface EducationCardProps {
  title: string;
  description: string[];
  items?: string[];
  certificate?: string;
  certificateLink?: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  title,
  description,
  items,
  certificate,
  certificateLink,
}) => {
  return (
    <div className="education-card">
      <div className="title">
        <h6>{title}</h6>
        {!!certificate && !!certificateLink && (
          <a
            href={certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {certificate}
          </a>
        )}
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
      {items && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EducationCard;
