import { useState } from "react";
import PresentationCard from "./PresentationCard/PresentationCard";
import useLanguage from "../hook/useLanguage";

const PresentationsList: React.FC = () => {
  const { isSpanish, setSpanish } = useLanguage();
  const presentation = [
    {
      description: [
        isSpanish
          ? "Con más de 5 años de experiencia como desarrollador de software profesional, poseo una sólida formación tanto en desarrollo backend como en " +
            "fullstack. Tengo experiencia trabajando en procesos de desarrollo ágiles y estoy profundamente interesado en descubrir y posibilitar mejores " +
            "formas de trabajar y comunicarse dentro del campo de la ingeniería de software."
          : "With more than 5 years of experience as a professional software developer, I have a solid background in both backend and fullstack development. " +
            "I have experience working in agile development processes and I am deeply interested in discovering and enabling better ways of working and " +
            "communicating within the field of software engineering.",
        " ",
        isSpanish
          ? "Soy un apasionado por el desarrollo de software y siempre intento aplicar todos mis conocimientos adquiridos, así como también las nuevas " +
            "prácticas. Siempre estoy dispuesto a aprender nuevas tecnologías y buenas prácticas."
          : "I am passionate about software development and I always try to apply all my acquired knowledge, as well as new practices. I am always " +
            "willing to learn new technologies and good practices.",
        " ",
        isSpanish
          ? "Actualmente, estoy estudiando Ingeniería en Sistemas de Información en la UTN FRSF. Cuento con certificaciones en lenguajes de programación, " +
            "frameworks, desarrollo frontend y backend, bases de datos, entre otros."
          : "Currently, I am studying Information Systems Engineering at UTN FRSF. I have certifications in programming languages, frameworks, " +
            "frontend and backend development, databases, among others.",
      ],
    },
    // agregar mas experiencias aca:
  ];

  return (
    <div>
      {presentation.map((experience, index) => (
        <PresentationCard key={index} description={experience.description} />
      ))}
    </div>
  );
};

export default PresentationsList;
