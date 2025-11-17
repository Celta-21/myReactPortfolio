import React from "react";


function Projects() {
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-5" style={{ color: "#fd0782" }}>
        My Projects
      </h1>

      <p className="text-center mb-5" style={{ fontSize: "1.3rem", color: "#555" }}>
        A showcase of some of my best work — blending creativity, design, and technology
        to craft impactful digital experiences.
      </p>

      <div className="row g-4">
        {/* Project 1 */}
        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100">
            <img
              src="./images/cake.jpg"
              className="card-img-top"
              alt="Bake & Bloom Bakery Website"
              style={{ minWidth: "200px", minHeight: "250px" }}
            />
            <div className="card-body">
              <h4 className="card-title" style={{ color: "#af055a" }}>
                Bake & Bloom Bakery Website
              </h4>
              <p className="card-text" style={{ fontSize: "1.1rem" }}>
                A pastel-themed bakery website designed with HTML, CSS, and Bootstrap.
                It includes a gallery, order form, and responsive navigation.
              </p>
              <a href="#" className="btn btn-outline-dark btn-sm">
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100">
            <img
              src="./images/cars.jpg"
              className="card-img-top"
              alt="Car buy/sell website"
              style={{ minWidth: "200px", minHeight: "250px" }}
            />
            <div className="card-body">
              <h4 className="card-title" style={{ color: "#af055a" }}>
                Buy/Sell Car Website
              </h4>
              <p className="card-text" style={{ fontSize: "1.1rem" }}>
                A website that enables buying and selling of cars with ease, allowing buyers
                to bid and the highest bidder wins. Vendors can easily list cars for sale.
              </p>
              <a href="#" className="btn btn-outline-dark btn-sm">
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100">
            <img
              src="./images/mentalCare.jpg"
              className="card-img-top"
              alt="Mental Care App"
              style={{ minWidth: "200px", maxHeight: "250px" }}
            />
            <div className="card-body">
              <h4 className="card-title" style={{ color: "#af055a" }}>
                Mental Care App
              </h4>
              <p className="card-text" style={{ fontSize: "1.1rem" }}>
                A Kotlin-based Android app built using Jetpack Compose, helping users track
                emotional wellness through daily questionnaires.
              </p>
              <a href="#" className="btn btn-outline-dark btn-sm">
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100">
            <img
              src="./images/skill.jpg"
              className="card-img-top"
              alt="Portfolio Website"
            />
            <div className="card-body">
              <h4 className="card-title" style={{ color: "#af055a" }}>
                Personal Portfolio
              </h4>
              <p className="card-text" style={{ fontSize: "1.1rem" }}>
                A personal portfolio built using HTML, CSS, and Bootstrap — highlighting my
                skills, education, and achievements with an elegant layout.
              </p>
              <a href="#" className="btn btn-outline-dark btn-sm">
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Project 5 */}
        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100">
            <img
              src="./images/ecommerce.jpg"
              className="card-img-top"
              alt="E-Commerce Dashboard"
            />
            <div className="card-body">
              <h4 className="card-title" style={{ color: "#af055a" }}>
                E-Commerce Dashboard
              </h4>
              <p className="card-text" style={{ fontSize: "1.1rem" }}>
                A React and Node.js based admin dashboard with charts, order tracking, and
                analytics for small business owners.
              </p>
              <a href="#" className="btn btn-outline-dark btn-sm">
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Project 6 */}
        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100">
            <img
              src="./images/weather.jpg"
              className="card-img-top"
              alt="Weather Forecast Web App"
            />
            <div className="card-body">
              <h4 className="card-title" style={{ color: "#af055a" }}>
                Weather Forecast Web App
              </h4>
              <p className="card-text" style={{ fontSize: "1.1rem" }}>
                A weather application using OpenWeather API, built with JavaScript and
                Bootstrap to display real-time weather updates.
              </p>
              <a href="#" className="btn btn-outline-dark btn-sm">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
