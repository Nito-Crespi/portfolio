import React from "react";
import EducationCard from "./EducationCard/EducationCard";
import useLanguage from "../hook/useLanguage";

const CertificationsList: React.FC = () => {
  const { isSpanish, setSpanish } = useLanguage();
  const educations = [
    {
      title: "2023 - 2024 | ONE - ORACLE NEXT EDUCATION | Alura Latam",
      description: [
        isSpanish
          ? "En este programa completé formaciones en desarrollo de software, iniciando con JavaScript, HTML5 y CSS3, y el uso de Git/GitHub para control de versiones. "
          : "In this program, I completed training in software development, starting with JavaScript, HTML5, and CSS3, as well as the use of Git/GitHub for version control. ",
        "",
        isSpanish
          ? "Me especialicé en técnicas avanzadas de frontend como Flexbox para diseños responsivos, manipulación del DOM y validación de formularios. "
          : "I specialized in advanced frontend techniques such as Flexbox for responsive designs, DOM manipulation, and form validation. ",
        "",
        isSpanish
          ? "En React, profundicé en el desarrollo de componentes, navegación con React Router, uso de Styled Components y Hooks, así como en la creación y consumo de APIs. "
          : "In React, I delved into component development, navigation with React Router, the use of Styled Components and Hooks, as well as APIs creation and consumption. ",
        "",
        isSpanish
          ? "Realicé proyectos completos y desafíos que consolidaron mis conocimientos en estas áreas."
          : "I completed full projects and challenges that solidified my knowledge in these areas.",
      ],
      certificate: isSpanish ? "[Certificado]" : "[Certificate]",
      certificateLink:
        "https://app.aluracursos.com/program/certificate/f9f6a2cb-047b-4444-83d5-cbeca9b8f7b7?lang",
    },
    {
      title: isSpanish
        ? "2023 | Programa De Lenguas Extranjeras – Inglés | Universidad Nacional de Córdoba"
        : "Foreign Language Program – English | National University of Cordoba",
      description: [
        isSpanish
          ? "Este curso me ha permitido fortalecer mis habilidades en el idioma inglés, abarcando aspectos clave como la gramática, la comprensión auditiva, la expresión oral y escrita. "
          : "This course has allowed me to strengthen my English language skills, covering key aspects such as grammar, listening comprehension, and oral and written expression. ",
        "",
        isSpanish
          ? "La formación recibida ha sido fundamental para mejorar mi competencia en el idioma y aplicarla en contextos profesionales y académicos."
          : "The training I received has been essential in improving my proficiency in the language and applying it in professional and academic contexts.",
      ],
      certificate: isSpanish ? "[Certificado]" : "[Certificate]",
      certificateLink:
        "https://drive.google.com/file/d/1Ywb2CJGK_nbOM6hsdFCvajGaIJjzggzk/view?usp=sharing",
    },
    {
      title: isSpanish
        ? "2019 | Programa “PLAN 111 MIL” | UTN FRSF"
        : "2019 | “PLAN 111 MIL” Program | UTN FRSF",
      description: [
        isSpanish
          ? "En este programa, aprendí Java +11 y MySQL, lo que me ha proporcionado una sólida base en desarrollo de aplicaciones y gestión de bases de datos. "
          : "With this program, I learned Java +11 and MySQL, which provided me with a solid foundation in application development and database management. ",
        isSpanish
          ? "Estos conocimientos han fortalecido mis habilidades en programación orientada a objetos y manejo de datos. "
          : "These skills have strengthened my abilities in object-oriented programming and data management.",
        "",
        isSpanish
          ? "En el curso de Técnicas de Programación, desarrollé habilidades en lógica de programación, construcción de algoritmos y desarrollo de programas. "
          : "In the Programming Techniques course, I developed skills in programming logic, algorithm construction, and program development. ",
        isSpanish
          ? "Este curso incluyó 120 horas de teoría y 80 horas de prácticas profesionales, lo que me permitió consolidar mis conocimientos y habilidades técnicas en programación."
          : "This course included 120 hours of theory and 80 hours of professional practice, which allowed me to consolidate my technical knowledge and programming skills.",
        "",
        isSpanish
          ? "Además, en el curso de Desarrollo de Software / Relaciones Laborales y Orientación Profesional, adquirí conocimientos esenciales en la gestión y soporte de proyectos de software. "
          : "Additionally, in the Software Development / Labor Relations and Professional Guidance course, I acquired essential knowledge in software project management and support. ",
        isSpanish
          ? "Este curso abarcó temas de ingeniería de software, calidad del software, control de calidad, así como derecho del trabajo y relaciones laborales."
          : "This course covered topics such as software engineering, software quality, quality control, as well as labor law and labor relations.",
      ],
      certificate: isSpanish ? "[Certificado]" : "[Certificate]",
      certificateLink:
        "https://drive.google.com/file/d/1sCqW1VOFgQEt4XFRpXdqmFFsWnytIeMJ/view?usp=sharing",
    },
    // agregar mas experiencias aca:
  ];

  return (
    <div>
      {educations.map((Education, index) => (
        <React.Fragment key={index}>
          <EducationCard
            title={Education.title}
            description={Education.description}
            certificate={Education.certificate}
            certificateLink={Education.certificateLink}
          />
          {index < educations.length - 1 && <hr className="hr-gray" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CertificationsList;
