import React from "react";
import { Carousel } from "react-bootstrap";
import './ProjectsCard.css';

interface ProjectsCardProps {
  title: string;
  description: string[];
  items: string[];
  technologies: string[];
  images: string[];
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({
  title,
  description,
  items,
  technologies,
  images,
}) => {
  return (
    <div className="project-card">
      <div className="title">
        <h6>{title}</h6>
      </div>
      <div className="description">
        {/* Carrusel de imágenes pasado por parámetro */}
        <Carousel>
          {images.map((imageSrc, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block project-image"
                src={imageSrc}
                alt={`Slide ${index}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <p>
          {description.map((text, index) => (
            <React.Fragment key={index}>
              <span>{text}</span>
              <br />
            </React.Fragment>
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

export default ProjectsCard;
