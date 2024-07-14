import ExperienceCard from "./ExperienceCard/ExperienceCard";

const ExperienceList: React.FC = () => {
  // Datos para cada instancia de ExperienceCard
  const experiences = [
    {
      title: "GDP - Gestión Documental para Proveedores EPE",
      description: [
        "He trabajado en el desarrollo de un incremento de software para el sistema web de EPE (Empresa Provincial de la Energía de Santa Fe). ",
        "El objetivo principal era lograr la gestión digital de la documentación relacionada con las compras de suministros realizadas por la empresa.",
      ],
      items: [
        "Componentes reutilizables, e interfaces dinámicas con Vue.",
        "APIs RESTful y Back End con Express.js y TypeScript",
        "Node.js para gestión de paquetes en el Back End, escalabilidad y eficiencia.",
        "SQL y Oracle SQL para gestionar datos, consultas en la base de datos del sistema y corporativa, respectivamente.",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JS",
        "TS",
        "Vue",
        "Node",
        "SQL_DB",
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

export default ExperienceList;
