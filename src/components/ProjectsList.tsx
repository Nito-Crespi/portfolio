import { useState } from "react";
import ProjectsCard from "./ProjectsCard/ProjectsCard";
import useLanguage from "../hook/useLanguage";

const ProjectsList: React.FC = () => {
  const { isSpanish, setSpanish } = useLanguage();
  const projects = [
    {
      title: isSpanish ? "AutoEscuela Santa Fe" : "Driving School Santa Fe",
      description: [
        isSpanish
          ? "Permite organizar horarios, registrar agendas de instructores, programar " + 
          "clases, mantener datos de alumnos e instructores, gestionar pagos, generar reportes " + 
          "estadísticos, llevar registros financieros y administrar el calendario de la autoescuela."
          : "It allows you to organize schedules, record instructor agendas, schedule classes, " + 
          "maintain student and instructor data, manage payments, generate statistical reports, keep " + 
          "financial records and manage the driving school calendar.",
      ],
      items: [
        isSpanish ? "Agenda inteligente" : "Smart agenda",
        isSpanish
          ? "Calendario y control de clases"
          : "Calendar and class control",
        isSpanish ? "Historias y estadísticas" : "Stories and statistics",
        isSpanish
          ? "Finanzas y control de pagos"
          : "Finance and payment control",
      ],
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Spring",
        "Java",
        "Maven",
        "PostgreSQL",
      ],
      imageSrc: [
        "/assets/images/aesf/01.png",
        "/assets/images/aesf/02.png",
        "/assets/images/aesf/03.png",
        "/assets/images/aesf/04.png",
        "/assets/images/aesf/05.png",
        "/assets/images/aesf/06.png",
        "/assets/images/aesf/07.png",
      ],
    },
    // agregar mas experiencias aca:
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <ProjectsCard
          key={index}
          title={project.title}
          description={project.description}
          items={project.items}
          technologies={project.technologies}
          images={project.imageSrc}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
