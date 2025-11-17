import React from "react";


const Contact = () => {
  return (
    <div id="ContactMe" style={{ textAlign: "center" }}>
      <h1 style={{ textAlign: "center", color: "#fd0782" }}>Contact Me!</h1>

      <input
        type="text"
        placeholder="Full Name"
        className="txtB"
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Email Address"
        className="txtB"
        style={styles.input}
      />
      <br />

      <input
        type="number"
        placeholder="Mobile Number"
        className="txtB"
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Email Subject"
        className="txtB"
        style={styles.input}
      />
      <br />

      <textarea
        name="emailSub"
        id="EmSub"
        className="txtB"
        placeholder="Your Message"
        style={styles.textarea}
      ></textarea>
      <br />

      <button id="CBSubmit" style={styles.button}>
        Submit
      </button>
    </div>
  );
};

// Inline styles for better organization
const styles = {
  input: {
    width: "30%",
    padding: "10px",
    margin: "10px",
    borderRadius: "8px",
    border: "2px solid #fd0782",
    outline: "none",
    fontSize: "1rem",
  },
  textarea: {
    width: "62%",
    height: "300px",
    padding: "10px",
    margin: "10px",
    borderRadius: "8px",
    border: "2px solid #fd0782",
    outline: "none",
    fontSize: "1rem",
  },
  button: {
    backgroundColor: "#fd0782",
    color: "#fff",
    border: "none",
    padding: "12px 40px",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
  },
};

export default Contact;
