import EducationCard from "./EducationCard/EducationCard";

const CertificationsList: React.FC = () => {

  const Educations = [
    {
      title: "2023 - Actualidad | ONE (Oracle Next Education) + Alura | Alura Latam",
      description: [
        "Lógica de Programación: Adquirí habilidades en la creación de programas simples mediante la Ingeniería de Prompts con IA.",
        "Desarrollo Personal: Fomenté un cambio de mentalidad hacia el alto rendimiento y mejoré mis habilidades de comunicación pública.",
        "Front-End (React y JavaScript): Aprendí a desarrollar páginas web utilizando JavaScript y la biblioteca React y Vite, enfocándome en la creación de interfaces de usuario interactivas.",
        "Habilidades Blandas: Mejora de relaciones interpersonales y habilidades de emprendimiento, incluyendo temas como agilidad empresarial y desarrollo profesional.",
      ],
    },
    {
      title: "2019 | Programa “PLAN 111 MIL” | UTN FRSF",
      description: [
        "Desarrollo de Software / Relaciones Laborales y Orientación Profesional:",
        "Formación en gestión y soporte de proyectos de desarrollo de software, así como en temas generales de derecho y relaciones laborales.",
        "Ingeniería de software, calidad del software, control de calidad, derecho del trabajo y relaciones laborales.",
        "(24 horas reloj)",
        "",
        "Técnicas de Programación:",
        "Formación en la construcción de habilidades técnicas en lógica de programación, elementos informáticos, desarrollo de algoritmos y programas.",
        "(Teóricas: 120 horas reloj. Prácticas profesionales: 80 horas reloj)",
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

export default CertificationsList;
