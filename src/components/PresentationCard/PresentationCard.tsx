import React from "react";
import "./PresentationCard.css";

interface PresentationCardProps {
  description: string[];
}

const PresentationCard: React.FC<PresentationCardProps> = ({ description }) => {
  return (
    <div className="Presentation-card">
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

export default PresentationCard;
