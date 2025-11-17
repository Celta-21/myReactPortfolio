function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-custom w-100 mt-5">
      <div className="d-flex justify-content-start align-items-center py-4 ps-4">
        <div className="social-icon-frame me-3">
          <i className="fab fa-facebook-f"></i>
        </div>
        <div className="social-icon-frame me-3">
          <i className="fab fa-linkedin-in"></i>
        </div>
        <div className="social-icon-frame">
          <i className="fab fa-x-twitter"></i>
        </div>
      </div>
      <p id="copyright">
        &copy; {currentYear} Cynthia Taula | All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
