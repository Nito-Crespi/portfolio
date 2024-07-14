import React, { useState } from "react";
import "./Portfolio.scss";
import ExperienceManager from "../../components/ExperienceList";
import StudiesList from "../../components/StudiesList";
import CertificationsList from "../../components/CertificationsList";

const Portfolio = () => {
  const [isSpanish, setSpanish] = useState(true);

  return (
    <div className="external d-flex justify-content-center align-items-center min-vh-100">
      {/* <div className="internal bg-primary text-white p-4 rounded shadow-lg"></div> */}
      <div className="internal p-4 rounded">
        {/*  */}
        <div className="profile_container">
          <img
            src="./assets/cv/profile_photo.png"
            alt="Profile photo"
            className="profile_photo"
          />
          <div className="profile_text">
            <h1>Alvaro Crespi Liut</h1>
            <p>
              <span>
                {isSpanish
                  ? "Desarrollador Full-Stack | Ofreciendo soluciones de software de calidad."
                  : "Full-Stack Developer | Delivering Quality Software Solutions."}
              </span>
            </p>
          </div>
        </div>
        <hr />
        {/*  */}
        <h3>{isSpanish ? "Experiencia" : "Experience"}</h3>
        <ExperienceManager />
        <hr />
        {/*  */}
        <h3>
          {isSpanish
            ? "Estudios"
            : "Studies"}
        </h3>
        <StudiesList />
        <hr />
        {/*  */}
        <h3>
          {isSpanish
            ? "Certificaciones"
            : "Certifications"}
        </h3>
        <CertificationsList />
        {/*  */}
        {/* TODO: Quitar <h3>{isSpanish ? "Proyectos" : "Projects"}</h3> */}
        {/* TODO: Quitar <hr /> */}
        {/*  */}
        {/* TODO: Quitar <h3>Social</h3> */}
        {/* TODO: Quitar <hr /> */}
        {/*  */}
      </div>
    </div>
  );
};

export default Portfolio;
