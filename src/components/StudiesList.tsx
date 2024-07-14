import EducationCard from "./EducationCard/EducationCard";

const StudiesList: React.FC = () => {

  const Educations = [
    {
      title: "2020 - Actualidad | Ingeniería en Sistemas de Información | UTN FRSF",
      description: [
        "Actualmente estoy cursando Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional (UTN) Facultad Regional Santa Fe (FRSF).",
        "Esta carrera se enfoca en la aplicación de principios de ingeniería para el diseño, desarrollo, implementación y gestión de sistemas de información complejos.",
        "A través de una combinación de teoría y práctica, el plan de estudios abarca áreas fundamentales como programación, bases de datos, redes, seguridad informática, inteligencia artificial y gestión de proyectos tecnológicos.",
      ],
    },
    // agregar mas experiencias aca:
  ];

  return (
    <div>
      {Educations.map((Education, index) => (
        <EducationCard
          key={index}
          title={Education.title}
          description={Education.description}
        />
      ))}
    </div>
  );
};

export default StudiesList;
