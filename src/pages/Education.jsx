import React from "react";


function Education() {
  return (
    <div style={{ backgroundColor: "#fff0f5" }}>
      <div className="container py-5">
        <h1
          className="text-center fw-bold mb-5"
          style={{ color: "#fd0782", fontSize: "3.5em" }}
        >
          Learning Path
        </h1>

        <div className="journey-container">
          {/* Left Column - Education */}
          <div className="journey-column">
            <h2
              style={{
                fontSize: "3rem",
                textDecoration: "underline",
              }}
            >
              Education
            </h2>

            <div className="mb-4">
              <h5>2007 - 2018</h5>
              <h4 style={{ textDecoration: "underline", color: "#fd0782" }}>
                KCPE – Lubinu Primary School
              </h4>
              <p>
                Completed my KCPE at Lubinu, where I built a strong foundation
                in mathematics, science, and creative writing. My early passion
                for technology began here through participation in computer
                literacy programs.
              </p>
            </div>

            <div className="mb-4">
              <h5>2019 - 2022</h5>
              <h4 style={{ textDecoration: "underline", color: "#fd0782" }}>
                KCSE – Moi Girls High School
              </h4>
              <p>
                Earned my KCSE certificate with a focus on sciences and computer
                studies. I developed teamwork, problem-solving, and leadership
                skills through ICT club projects and academic competitions.
              </p>
            </div>

            <div>
              <h5>2023 - 2027</h5>
              <h4 style={{ textDecoration: "underline", color: "#fd0782" }}>
                Bachelor’s in IT – Kenyatta University
              </h4>
              <p>
                Pursuing a degree in Information Technology, specializing in
                software development, web design, and networking. I have gained
                practical experience in full-stack web development, database
                design, and emerging technologies such as AI and app
                development.
              </p>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="divider"></div>

          {/* Right Column - Experience */}
          <div className="journey-column">
            <h2
              style={{
                fontSize: "3rem",
                textDecoration: "underline",
              }}
            >
              Experience
            </h2>

            <div className="mb-4">
              <h5>2023 - 2024</h5>
              <h4 style={{ textDecoration: "underline", color: "#fd0782" }}>
                Web Development Intern
              </h4>
              <p>
                Worked on front-end projects using HTML, CSS, JavaScript, and
                React. Assisted in improving user interfaces for client
                websites, optimizing page performance, and ensuring responsive
                design across all devices.
              </p>
            </div>

            <div className="mb-4">
              <h5>2024 - 2025</h5>
              <h4 style={{ textDecoration: "underline", color: "#fd0782" }}>
                Freelance App Developer
              </h4>
              <p>
                Developed several Android apps using Kotlin and Jetpack Compose.
                Collaborated with small businesses to build mobile solutions
                that enhance customer engagement and streamline operations.
              </p>
            </div>

            <div>
              <h5>2025 - 2026</h5>
              <h4 style={{ textDecoration: "underline", color: "#fd0782" }}>
                Networking Administrator Intern
              </h4>
              <p>
                Managed network configurations, improved security measures, and
                supported troubleshooting activities for local and cloud-based
                systems. Gained valuable experience in IT infrastructure and
                system administration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
