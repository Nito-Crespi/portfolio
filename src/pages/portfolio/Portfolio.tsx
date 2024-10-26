import React, { useRef } from "react";
import "./Portfolio.css";
import ExperienceManager from "../../components/ExperiencesList";
import StudiesList from "../../components/StudiesList";
import CertificationsList from "../../components/CertificationsList";
import ProjectsList from "../../components/ProjectsList";
import useLanguage from "../../hook/useLanguage";
import PresentationsList from "../../components/PresentationList";
import HeaderInfo from "../../components/HeaderInfo/HeaderInfo";
import HeaderItems from "../../components/HeaderItems/HeaderItems";

const Portfolio = () => {
  const { isSpanish, setSpanish } = useLanguage();

  const personalProfileRef = useRef<HTMLHeadingElement | null>(null);
  const experienceRef = useRef<HTMLHeadingElement | null>(null);
  const studiesRef = useRef<HTMLHeadingElement | null>(null);
  const certificationsRef = useRef<HTMLHeadingElement | null>(null);
  const projectsRef = useRef<HTMLHeadingElement | null>(null);

  const itemRefs = [
    {
      name: isSpanish ? "Perfil personal" : "Personal profile",
      ref: personalProfileRef,
    },
    { name: isSpanish ? "Experiencia" : "Experience", ref: experienceRef },
    { name: isSpanish ? "Estudios" : "Studies", ref: studiesRef },
    {
      name: isSpanish ? "Certificaciones" : "Certifications",
      ref: certificationsRef,
    },
    { name: isSpanish ? "Proyectos" : "Projects", ref: projectsRef },
  ];

  const scrollToSection = (ref: React.RefObject<HTMLHeadingElement>) => {
    if (ref.current) {
      const offset = 70;
      const top =
        ref.current.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <HeaderItems items={itemRefs} scrollToSection={scrollToSection} />
      <div className="external d-flex justify-content-center align-items-center min-vh-100">
        <div className="internal p-4 rounded">
          <HeaderInfo />
          <hr />
          <h3 ref={personalProfileRef}>
            {isSpanish ? "Perfil personal" : "Personal profile"}
          </h3>
          <PresentationsList />
          <hr />
          <h3 ref={experienceRef}>
            {isSpanish ? "Experiencia" : "Experience"}
          </h3>
          <ExperienceManager />
          <hr />
          <h3 ref={studiesRef}>{isSpanish ? "Estudios" : "Studies"}</h3>
          <StudiesList />
          <hr />
          <h3 ref={certificationsRef}>
            {isSpanish ? "Certificaciones" : "Certifications"}
          </h3>
          <CertificationsList />
          <hr />
          <h3 ref={projectsRef}>{isSpanish ? "Proyectos" : "Projects"}</h3>
          <ProjectsList />
          <hr />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
