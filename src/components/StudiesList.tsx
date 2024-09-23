import useLanguage from "../hook/useLanguage";
import EducationCard from "./EducationCard/EducationCard";

const StudiesList: React.FC = () => {
  const { isSpanish, setSpanish } = useLanguage();
  const Educations = [
    {
      title: isSpanish
        ? "2020 - Actualidad | Ingeniería en Sistemas de Información | UTN FRSF"
        : "2020 - Current | Information Systems Engineering | UTN FRSF",
      description: [
        isSpanish
          ? "Actualmente, estoy cursando la carrera de Ingeniería en Sistemas de Información en la Universidad " +
            "Tecnológica Nacional (UTN) Facultad Regional Santa Fe (FRSF). "
          : "Currently, I am studying Information Systems Engineering at the National Technological University " +
            "(UTN) Santa Fe Regional Faculty (FRSF).",
        "",
        isSpanish
          ? "Con una duración de 5 años, me proporciona una formación analítica, capacitando para el diseño, " +
            "desarrollo y dirección de sistemas de información y proyectos tecnológicos. "
          : "With a duration of 5 years, it provides me with analytical training, enabling me to design, develop " +
            "and manage information systems and technological projects.",
        "",
        isSpanish
          ? "Esta carrera me prepara para liderar iniciativas en inteligencia artificial, ciencia de datos, y " +
            "seguridad informática, y para integrar equipos interdisciplinarios en el desarrollo de soluciones innovadoras."
          : "This degree prepares me to lead initiatives in artificial intelligence, data science, and computer " +
            "security, and to integrate interdisciplinary teams in the development of innovative solutions.",
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
