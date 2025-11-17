import React from "react";


function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-5" style={{ backgroundColor: "#ffd1e0" }}>
        <h1 className="fw-bold" style={{ color: "#fd0782" }}>
          My Services
        </h1>
        <p
          className="mt-3"
          style={{
            maxWidth: "900px",
            margin: "auto",
            fontSize: "1.3rem",
          }}
        >
          I specialize in creating elegant, modern, and efficient digital solutions.  
          Below are the services I offer to help bring your ideas to life — with passion, precision, and creativity.
        </p>
      </section>

      {/* Services Cards */}
      <section className="container my-5">
        <div className="row g-4">
          {/* Web Development */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0" style={{ backgroundColor: "#ffb6c1" }}>
              <div className="card-body text-center">
                <i className="fas fa-code fa-3x mb-3" style={{ color: "#fd0782" }}></i>
                <h4 className="fw-bold" style={{ color: "#af055a", fontSize: "1.5rem" }}>
                  Web Development
                </h4>
                <p style={{ fontSize: "1.2rem", color: "#8f0248" }}>
                  Building responsive, user-friendly, and performance-optimized websites using HTML, CSS, JS, React, and Node.js.  
                  Your brand deserves a stunning online presence that works on all devices.
                </p>
              </div>
            </div>
          </div>

          {/* App Development */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0" style={{ backgroundColor: "#ffb6c1" }}>
              <div className="card-body text-center">
                <i className="fas fa-mobile-alt fa-3x mb-3" style={{ color: "#fd0782" }}></i>
                <h4 className="fw-bold" style={{ color: "#af055a", fontSize: "1.5rem" }}>
                  App Development
                </h4>
                <p style={{ fontSize: "1.2rem", color: "#8f0248" }}>
                  Creating mobile and web apps that are smooth, interactive, and tailored to user needs — combining beautiful UI with smart functionality.
                </p>
              </div>
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0" style={{ backgroundColor: "#ffb6c1" }}>
              <div className="card-body text-center">
                <i className="fas fa-pencil-ruler fa-3x mb-3" style={{ color: "#fd0782" }}></i>
                <h4 className="fw-bold" style={{ color: "#af055a", fontSize: "1.5rem" }}>
                  UI / UX Design
                </h4>
                <p style={{ fontSize: "1.2rem", color: "#8f0248" }}>
                  Designing seamless, intuitive user interfaces and experiences that make every interaction feel natural.
                </p>
              </div>
            </div>
          </div>

          {/* SEO Optimization */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0" style={{ backgroundColor: "#ffb6c1" }}>
              <div className="card-body text-center">
                <i className="fas fa-chart-line fa-3x mb-3" style={{ color: "#fd0782" }}></i>
                <h4 className="fw-bold" style={{ color: "#af055a", fontSize: "1.5rem" }}>
                  SEO Optimization
                </h4>
                <p style={{ fontSize: "1.2rem", color: "#8f0248" }}>
                  Improving website visibility through performance tuning, metadata, and content structure.
                </p>
              </div>
            </div>
          </div>

          {/* Database & Backend */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0" style={{ backgroundColor: "#ffb6c1" }}>
              <div className="card-body text-center">
                <i className="fas fa-database fa-3x mb-3" style={{ color: "#fd0782" }}></i>
                <h4 className="fw-bold" style={{ color: "#af055a", fontSize: "1.5rem" }}>
                  Database & Backend
                </h4>
                <p style={{ fontSize: "1.2rem", color: "#8f0248" }}>
                  Managing and structuring data efficiently using SQL and MongoDB, and developing secure backend logic with Node.js.
                </p>
              </div>
            </div>
          </div>

          {/* Networking & AI Integration */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0" style={{ backgroundColor: "#ffb6c1" }}>
              <div className="card-body text-center">
                <i className="fas fa-network-wired fa-3x mb-3" style={{ color: "#fd0782" }}></i>
                <h4 className="fw-bold" style={{ color: "#af055a", fontSize: "1.5rem" }}>
                  Networking & AI Integration
                </h4>
                <p style={{ fontSize: "1.2rem", color: "#8f0248" }}>
                  Setting up secure network environments and integrating AI features to create intelligent and connected systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-5" style={{ backgroundColor: "#ffb6c1" }}>
        <h2 className="fw-bold" style={{ color: "#fd0782" }}>
          Let’s Work Together
        </h2>
        <p
          className="mt-3"
          style={{
            maxWidth: "1000px",
            margin: "auto",
            color: "#af055a",
            fontSize: "1.5rem",
            lineHeight: "1.6",
          }}
        >
          Whether you need a website redesign, a web app, or help improving your digital presence — I’m here to collaborate and bring your ideas to life.
        </p>
        <a
          href="/contact"
          className="btn mt-4"
          style={{
            backgroundColor: "#fd0782",
            color: "white",
            fontSize: "1.3rem",
            padding: "12px 30px",
            borderRadius: "10px",
            textDecoration: "none",
            transition: "all 0.3s ease",
          }}
        >
          Contact Me
        </a>
      </section>
    </>
  );
}

export default Services;
