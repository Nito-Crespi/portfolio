import { useState } from "react";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import useLanguage from "../hook/useLanguage";

const ExperiencesList: React.FC = () => {
  const { isSpanish, setSpanish } = useLanguage();
  const experiences = [
    {
      title: isSpanish
        ? "GDP - Gestión Documental para Proveedores - EPE"
        : "GDP - Document Management for Suppliers - EPE",
      description: [
        isSpanish
          ? "He trabajado en el desarrollo de un incremento de software para el sistema web de EPE (Empresa Provincial de la Energía de Santa Fe). "
          : "I have worked on the development of a software upgrade for the EPE (Santa Fe Provincial Energy Company) web system. ",
        isSpanish
          ? "El objetivo principal era lograr la gestión digital de la documentación relacionada con las compras de suministros realizadas por la empresa."
          : "The main objective was to achieve digital management of the documentation related to the purchases of supplies made by the company.",
      ],
      items: [
        isSpanish
          ? "Componentes reutilizables, e interfaces dinámicas con Vue."
          : "Reusable components, and dynamic interfaces with Vue.",
        isSpanish
          ? "APIs RESTful y Back End con Express.js y TypeScript"
          : "RESTful APIs and Back End with Express.js and TypeScript",
        isSpanish
          ? "Node.js para gestión de paquetes en el Back End, escalabilidad y eficiencia."
          : "Node.js for Back End package management, scalability and efficiency.",
        isSpanish
          ? "SQL y Oracle SQL para gestionar datos, consultas en la base de datos del sistema y corporativa, respectivamente."
          : "SQL and Oracle SQL to manage data, queries in the system and corporate database, respectively.",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JS",
        "TS",
        "Vue",
        "Node",
        "MySQL",
        "Oracle",
      ],
    },
    // agregar mas experiencias aca:
  ];

  return (
    <div>
      {experiences.map((experience, index) => (
        <ExperienceCard
          key={index}
          title={experience.title}
          description={experience.description}
          items={experience.items}
          technologies={experience.technologies}
        />
      ))}
    </div>
  );
};

export default ExperiencesList;
