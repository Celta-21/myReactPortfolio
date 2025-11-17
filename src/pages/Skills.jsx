import React from "react";


function Skills() {
  return (
    <div style={{ backgroundColor: "#fff0f5" }}>
      {/* Hero Section */}
      <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1
              className="fw-bold"
              style={{
                color: "#fd0782",
                fontSize: "3.5rem",
                textDecoration: "underline",
              }}
            >
              My Skills
            </h1>
            <p style={{ fontSize: "1.5rem" }}>
              These are the technical skills I’ve mastered and continue to
              improve in my journey as a Frontend and Backend Developer. I focus
              on web development, app development, and emerging technologies
              like AI and SEO optimization.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="./images/skills.jpg"
              alt="Skills"
              className="img-fluid rounded"
              style={{ maxHeight: "300px" }}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container my-5">
        <h1
          className="text-center"
          style={{
            fontSize: "3.5rem",
            textDecoration: "underline",
            marginTop: "150px",
            marginBottom: "50px",
            color: "#fd0782",
          }}
        >
          My Technical Skills
        </h1>

        <div className="row">
          {/* Left Column */}
          <div className="col-md-6 pe-6">
            {[
              ["HTML", 95],
              ["CSS", 90],
              ["JavaScript", 85],
              ["Bootstrap", 90],
              ["React", 80],
              ["NodeJS", 75],
              ["Python", 85],
            ].map(([skill, value]) => (
              <div key={skill}>
                <label style={{ fontSize: "1.8rem" }}>{skill}</label>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${value}%`,
                      backgroundColor: "#fd0782",
                    }}
                  >
                    {value}%
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="col-md-6 ps-5">
            {[
              ["SQL", 80],
              ["MongoDB", 75],
              ["Web Development", 90],
              ["Networking", 70],
              ["AI & Machine Learning", 65],
              ["App Development", 80],
              ["SEO Optimization", 75],
            ].map(([skill, value]) => (
              <div key={skill}>
                <label style={{ fontSize: "1.8rem" }}>{skill}</label>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${value}%`,
                      backgroundColor: "#fd0782",
                    }}
                  >
                    {value}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
