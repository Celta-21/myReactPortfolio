import { Link } from "react-router-dom";

function About() {
  return (
    <>
      {/* About Me Section */}
      <section className="row g-0" style={{ minHeight: "600px" }}>
        {/* Left Column: Text */}
        <div
          className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center"
          style={{
            backgroundColor: "#fd0782",
            color: "white",
            padding: "20px",
            minHeight: "600px",
          }}
        >
          <h1 className="fw-bold mb-3" style={{ fontSize: "3.5rem", color:"whitesmoke" }}>
            Get to Know Me
          </h1>
          <p style={{ maxWidth: "90%", fontSize: "1.5rem" }}>
            I’m <b>Cynthia Taula</b>, a passionate Frontend Developer who loves
            crafting elegant, responsive, and user-friendly web interfaces. My
            design philosophy is rooted in simplicity, beauty, and functionality
            — I believe a website should not only look great but also feel
            effortless to use. When I’m not coding, I enjoy exploring creative
            hobbies, connecting with nature, and learning new ways to express
            myself through technology and art.
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="col-md-6" style={{ minHeight: "600px" }}>
          <img
            src="/images/20230511_170853.jpg"
            alt="Cynthia Taula"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </section>

      {/* Career Goal Section */}
      <section
        className="py-5"
        style={{ backgroundColor: "#ffd1e0", margin: "80px 0" }}
      >
        <div
          className="container-fluid text-center"
          style={{ padding: "10px 20px" }}
        >
          <h2
            className="fw-bold"
            style={{
              color: "#fd0782",
              margin: "25px 0",
              fontSize: "2.8rem",
            }}
          >
            My Career Goal
          </h2>
          <p
            className="mt-3"
            style={{
              fontSize: "1.5rem",
              maxWidth: "1200px",
              margin: "auto",
              minHeight: "200px",
            }}
          >
            My dream is to grow into a{" "}
            <b>Full-Stack Developer and UX Enthusiast</b>. I want to build
            products that are intuitive, beautiful, and emotionally resonant.
            Design is my language; code is my expression. Every project is a
            story I tell through functionality, aesthetics, and empathy for the
            user.
          </p>
        </div>
      </section>

      {/* All About Me Heading */}
      <section className="container text-center my-5">
        <h2
          className="fw-bold"
          style={{ color: "#fd0782", fontSize: "3.5rem" }}
        >
          All About Me
        </h2>
      </section>

      {/* Cards Section */}
      <section className="container my-4">
        <div className="row g-4 text-center">
          {/* Services Card */}
          <div className="col-md-3">
            <div
              className="card shadow"
              style={{ height: "400px", transition: "transform 0.3s" }}
            >
              <img
                src="/images/network.jpg"
                className="card-img-top"
                alt="Services"
                style={{ height: "360px", objectFit: "cover" }}
              />
              <div className="card-body text-start">
                <h5 className="card-title fw-bold">
                  <Link
                    to="/services"
                    className="card-link"
                    style={{ fontSize: "2rem" }}
                  >
                    Services &gt;
                  </Link>
                </h5>
              </div>
            </div>
          </div>

          {/* Contact Me Card */}
          <div className="col-md-3">
            <div
              className="card shadow"
              style={{ height: "400px", transition: "transform 0.3s" }}
            >
              <img
                src="/images/contact.jpg"
                className="card-img-top"
                alt="Contact Me"
                style={{ height: "360px", objectFit: "cover" }}
              />
              <div className="card-body text-start">
                <h5 className="card-title fw-bold">
                  <Link
                    to="/contact"
                    className="card-link"
                    style={{ fontSize: "2rem" }}
                  >
                    Contact Me &gt;
                  </Link>
                </h5>
              </div>
            </div>
          </div>

          {/* Projects Card */}
          <div className="col-md-3">
            <div
              className="card shadow"
              style={{ height: "400px", transition: "transform 0.3s" }}
            >
              <img
                src="/images/projects.jpg"
                className="card-img-top"
                alt="Projects"
                style={{ height: "360px", objectFit: "cover" }}
              />
              <div className="card-body text-start">
                <h5 className="card-title fw-bold">
                  <Link
                    to="/projects"
                    className="card-link"
                    style={{ fontSize: "2rem" }}
                  >
                    Projects &gt;
                  </Link>
                </h5>
              </div>
            </div>
          </div>

          {/* Skills Card */}
          <div className="col-md-3">
            <div
              className="card shadow"
              style={{ height: "400px", transition: "transform 0.3s" }}
            >
              <img
                src="/images/skills.jpg"
                className="card-img-top"
                alt="Skills"
                style={{ height: "360px", objectFit: "cover" }}
              />
              <div className="card-body text-start">
                <h5 className="card-title fw-bold">
                  <Link
                    to="/skills"
                    className="card-link"
                    style={{ fontSize: "2rem" }}
                  >
                    Skills &gt;
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
