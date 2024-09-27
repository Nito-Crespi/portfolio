import { useState } from "react";
import ProjectsCard from "./ProjectsCard/ProjectsCard";
import useLanguage from "../hook/useLanguage";
import React from "react";

const ProjectsList: React.FC = () => {
  const { isSpanish, setSpanish } = useLanguage();
  const projects = [
    {
      title: isSpanish ? "AutoEscuela Santa Fe" : "Driving School Santa Fe",
      description: [
        isSpanish
          ? "Proporciona una solución integral diseñada para gestionar de manera eficiente una autoescuela. El sistema organiza el "
          + "calendario de clases filtrando por instructores y permite el seguimiento detallado de cada alumno, incluyendo "
          + "historial de pagos y cursos tomados. Además, maneja la administración financiera, incluyendo ingresos, egresos "
          + "y control de caja chica, proporcionando reportes detallados en PDF. AESF Manager permite gestionar usuarios con "
          + "distintos privilegios, asignar instructores a vehículos y administrar cursos. También ofrece almacenamiento en la "
          + "nube y un sistema de notificaciones personalizable."
          : "Provide a comprehensive solution designed to efficiently manage a driving school. The system organizes the class calendar "
          + "by filtering by instructors and allows detailed tracking of each student, including payment history and courses taken. "
          + "Additionally, it handles financial administration, including income, expenses, and petty cash control, providing detailed "
          + "reports in PDF format. AESF Manager allows managing users with different privileges, assigning instructors to vehicles, and "
          + "administering courses. It also offers cloud storage and a customizable notification system.",
      ],
      items: [
        isSpanish
          ? "Gestión de calendario: Organización de clases por mes, semana y día, filtrado por instructor."
          : "Calendar Management: Organization of classes by month, week, and day, filtered by instructor.",
        isSpanish
          ? "Base de datos centralizada: Seguimiento detallado de alumnos, cursos, pagos e historial financiero."
          : "Centralized Database: Detailed tracking of students, courses, payments, and financial history.",
        isSpanish
          ? "Generación de reportes: Reportes en PDF sobre clases y pagos, automatizados y personalizables."
          : "Report Generation: Automated and customizable PDF reports on classes and payments.",
        isSpanish
          ? "Control financiero completo: Manejo de ingresos, egresos, control de caja chica y estadísticas financieras."
          : "Comprehensive Financial Control: Management of income, expenses, petty cash control, and financial statistics.",
        isSpanish
          ? "Sistema de roles y privilegios: Gestión de usuarios con acceso basado en su rol (instructor, administrador, etc.)."
          : "Role and Privilege System: User management with access based on their role (instructor, administrator, etc.).",
      ],
      technologies: [
        "HTML",
        "CSS",
        "Java",
        "Bootstrap",
        "Spring",
        "Maven",
        "PostgreSQL",
        "Docker",
        "Supabase",
      ],
      imageSrc: [
        `${process.env.PUBLIC_URL}/assets/images/aesf/01.png`,
        `${process.env.PUBLIC_URL}/assets/images/aesf/02.png`,
        `${process.env.PUBLIC_URL}/assets/images/aesf/03.png`,
        `${process.env.PUBLIC_URL}/assets/images/aesf/04.png`,
        `${process.env.PUBLIC_URL}/assets/images/aesf/05.png`,
        `${process.env.PUBLIC_URL}/assets/images/aesf/06.png`,
        `${process.env.PUBLIC_URL}/assets/images/aesf/07.png`,
      ],
    },
    {
      title: isSpanish
        ? "Gestión de Centro de Estudiantes Universitarios Tecnológicos"
        : "Management of the Technological University Student Center",
      description: [
        isSpanish
          ? "Es una herramienta de gestión desarrollada para el Centro de Estudiantes de la Universidad Tecnológica Nacional, " +
            "Facultad Regional Santa Fe (UTN FRSF). El sistema administra el inventario de la casilla del centro, facilitando " +
            "el préstamo y devolución de materiales y libros, al estilo de una biblioteca. Además, realiza un seguimiento " +
            "detallado de los becarios, contabilizando y monetizando las horas trabajadas. También maneja las finanzas del " +
            "centro, incluyendo ventas de menús estudiantiles, generando reportes de ventas en PDF por rangos de fechas. " +
            "Gestion CEUT cuenta con un sistema de control de stock y una base de datos de estudiantes."
          : "It is a management tool developed for the Student Center of the National Technological University, Santa Fe Regional "
          + "Faculty (UTN FRSF). The system manages the inventory of the center's locker, facilitating the borrowing and returning "
          + "of materials and books, library-style. Additionally, it provides detailed tracking of scholarship holders, accounting "
          + "for and monetizing the hours worked. It also manages the center's finances, including sales of student menus, generating "
          + "sales reports in PDF format by date ranges. Management TUSC has an inventory control system and a centralized student database.",
      ],
      items: [
        isSpanish
          ? "Gestión de inventario: Facilita el préstamo y devolución de materiales del centro y libros, con control de stock."
          : "Inventory Management: Facilitates the borrowing and returning of center materials and books, with stock control.",
        isSpanish
          ? "Control de becarios: Contabiliza horas trabajadas y las monetiza según parámetros predefinidos, con filtros por día, mes o año."
          : "Scholarship Holder Control: Accounts for worked hours and monetizes them according to predefined parameters, with filters by day, month, or year.",
        isSpanish
          ? "Gestión financiera: Control de la caja chica y ventas de menús estudiantiles, generando reportes de ventas en PDF."
          : "Financial Management: Controls petty cash and sales of student menus, generating sales reports in PDF format.",
        isSpanish
          ? "Módulo de reportes: Generación automática de reportes financieros y de inventario en PDF, segmentados por fechas."
          : "Reporting Module: Automatic generation of financial and inventory reports in PDF, segmented by dates.",
        isSpanish
          ? "Base de datos centralizada: Mantiene un registro detallado de estudiantes, becarios y transacciones relacionadas con el centro."
          : "Centralized Database: Maintains a detailed record of students, scholarship holders, and transactions related to the center.",
      ],
      technologies: [
        "Java",
        "JavaFX",
        "Spring",
        "Maven",
        "MySQL"
      ],
      imageSrc: [
        `${process.env.PUBLIC_URL}/assets/images/ceut/01.png`,
        `${process.env.PUBLIC_URL}/assets/images/ceut/02.png`,
        `${process.env.PUBLIC_URL}/assets/images/ceut/03.png`,
        `${process.env.PUBLIC_URL}/assets/images/ceut/04.png`,
        `${process.env.PUBLIC_URL}/assets/images/ceut/05.png`,
        `${process.env.PUBLIC_URL}/assets/images/ceut/06.png`,
        `${process.env.PUBLIC_URL}/assets/images/ceut/07.png`,
      ],
    },
    // agregar mas experiencias aca:
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <ProjectsCard
            key={index}
            title={project.title}
            description={project.description}
            items={project.items}
            technologies={project.technologies}
            images={project.imageSrc}
          />
          {index < projects.length - 1 && <hr className="hr-gray" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProjectsList;
