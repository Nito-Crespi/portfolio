import React, { useState } from "react";
import "./Portfolio.scss";
import ExperienceManager from "../../components/ExperiencesList";
import StudiesList from "../../components/StudiesList";
import CertificationsList from "../../components/CertificationsList";
import ProjectsList from "../../components/ProjectsList";
import useLanguage from "../../hook/useLanguage";
import PresentationsList from "../../components/PresentationList";
import HeaderInfo from "../../components/HeaderInfo/HeaderInfo";

const Portfolio = () => {
  const { isSpanish, setSpanish } = useLanguage();

  return (
    <div className="external d-flex justify-content-center align-items-center min-vh-100">
      <div className="internal p-4 rounded">
        <div className="custom-div">
          <button
            onClick={() => setSpanish(!isSpanish)}
            className="btn btn-primary change-language"
          >
            {isSpanish ? "Switch to English" : "Cambiar a Español"}
          </button>
        </div>
        {/*  */}
        <HeaderInfo />
        <hr />
        {/*  */}
        <h3>{isSpanish ? "Perfil personal" : "Personal profile"}</h3>
        <PresentationsList />
        <hr />
        {/*  */}
        <h3>{isSpanish ? "Experiencia" : "Experience"}</h3>
        <ExperienceManager />
        <hr />
        {/*  */}
        <h3>{isSpanish ? "Estudios" : "Studies"}</h3>
        <StudiesList />
        <hr />
        {/*  */}
        <h3>{isSpanish ? "Certificaciones" : "Certifications"}</h3>
        <CertificationsList />
        <hr />
        {/*  */}
        <h3>{isSpanish ? "Proyectos" : "Projects"}</h3>
        <ProjectsList />
        <hr />
        {/*  */}
      </div>
    </div>
  );
};

export default Portfolio;
