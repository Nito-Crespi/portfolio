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
        `${process.env.PUBLIC_URL}/assets/images/aesf/01.png`,
        "https://drive.google.com/file/d/1VNsRLX62tZk7WSclq_7lTRueA4pkl99N/view?usp=sharing",
        "https://drive.google.com/file/d/197ojGTb6IjDxMUdYbv4Pbu022-xv18it/view?usp=sharing",
        "https://drive.google.com/file/d/1KvStBkhj29RQ26SDzqQfBTo6suwhp0ha/view?usp=sharing",
        "https://drive.google.com/file/d/1pApkBKf9bh_n2ynrceTztMEqoCV8m53N/view?usp=sharing",
        "https://drive.google.com/file/d/1ynfUxuCCwd3ufRglGtqs-ggwUrYQOs2K/view?usp=sharing",
        "https://drive.google.com/file/d/1u5FmgGwtPd20fzdvvypXu3QpxnifjDw0/view?usp=sharing",
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
