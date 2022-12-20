import React, { useState } from "react";
import Header from "./Header";
import Login from "./Login";
import { Link } from "react-router-dom";
import "./resetpassword.css";


const ResetPassword = () => {
   
  const [modalOpen, setModalOpen] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleChange = (event) => {
    if (event.target.value === '') {
      setHasError(true);
    } else {
      setHasError(false);
    }
  };


  return (
    <div style={{ backgroundColor: "#f1f1f1" }}>
      <Header onButtonClick={() => setModalOpen(!modalOpen)} />
      {modalOpen && <Login onClose={() => setModalOpen(false)} />}

      <div style={{ width: "80%", margin: "auto", padding: "20px" }}>
        <h1 style={{ fontSize: "22px" }}> Reset Password</h1>
        <form  >
          <div style={{ backgroundColor: "white", padding: "20px" }}>
            <label
              for="email"
              style={{ display: "block", whiteSpace: "normal", fontSize: "12px", lineHeight: "1.25", marginTop: "10px" }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              style={{
                width: "30%",
                maxWidth: "100%",
                padding: "8px 8px",
                background: "#fff",
                boxShadow: "inset 0 2px 3px rgb(0 0 0 / 10%), 0 0 5px 2px rgb(212 212 212 / 0%)",
                borderRadius: "2px",
                transition: " box-shadow 0.25s, border-color 0.25s, background-color 0.15s",
                color: "#333"
              }}
              onChange={handleChange}
              id="email"
              required

              className={hasError ? 'error': null }

            />


            <div className="cancelsubmit">
              <Link to="/"> Cancel</Link>
              <input type="submit" value="Submit" className="resetSubmit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
