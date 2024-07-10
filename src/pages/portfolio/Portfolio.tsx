import React from "react";
import "./Portfolio.scss";
import ExperienceManager from "../../components/ExperienceList";

const Portfolio = () => {
  return (
    <div className="external d-flex justify-content-center align-items-center min-vh-100">
      {/* <div className="internal bg-primary text-white p-4 rounded shadow-lg"></div> */}
      <div className="internal p-4 rounded">
        {/*  */}
        <div className="profile_container">
          <img
            src="./assets/cv/profile_photo.png"
            alt="Profile photo"
            className="profile_photo"
          />
          <div className="profile_text">
            <h1>Alvaro Crespi Liut</h1>
            <p>
              <span>
                Full-Stack Developer | Delivering Quality Software Solutions.
              </span>
            </p>
            {/* <button className="btn btn-success bttn">GitHub</button>
            <button className="btn btn-primary bttn">LinkedIn</button>
            <button className="btn btn-secondary bttn">Curriculum</button>
            <button className="btn btn-danger bttn">Curriculum</button>
            <button className="btn btn-warning bttn">Curriculum</button>
            <button className="btn btn-info bttn">Curriculum</button>
            <button className="btn btn-light bttn">Curriculum</button>
            <button className="btn btn-dark bttn">Curriculum</button> */}
          </div>
        </div>
        <hr />
        {/*  */}
        <h3>Experience</h3>
        <ExperienceManager />
        <hr />
        {/*  */}
        <h3>Projects</h3>
        <hr />
        {/*  */}
        <h3>Social</h3>
        <hr />
        {/*  */}
      </div>
    </div>
  );
};

export default Portfolio;
