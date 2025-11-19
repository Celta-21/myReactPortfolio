function Index() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Text */}
        <div className="col-md-7">
          <h1
            className="fw-bold"
            style={{ color: "#af055a", fontSize: "60px" }}
          >
            Hi, I'm Cynthia Taula.
          </h1>
          <h2
            className="outline-title animated-fill"
            data-text="Frontend Developer"
          >
            Frontend Developer
          </h2>

          <p style={{ fontSize: "21px" }}>
            Hi, I’m Cynthia, a passionate Frontend Developer who believes in the
            power of design and code to bring ideas to life. I specialize in
            creating intuitive and visually appealing websites that deliver
            seamless user experiences. With a strong foundation in HTML, CSS,
            JavaScript, and modern frontend frameworks, I enjoy transforming
            creative concepts into interactive, responsive designs. My goal is
            to blend functionality with aesthetic precision, ensuring that every
            project not only looks amazing but also performs flawlessly across
            all devices.
          </p>

          <div className="mt-4">
            <button className="btn custom-btn me-3">Hire Me</button>
            <button className="btn custom-btn-outline">Let's Talk</button>
          </div>
        </div>

        {/* Right Blended Spotlight Image */}
        <div className="col-md-5 d-flex justify-content-end pe-5">
          <div className="spotlight-img-container position-relative">
            <div className="spotlight-bg"></div>
            <img
              src="images/20230511_170853.jpg"
              alt="Cynthia Portrait"
              className="img-fluid spotlight-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
