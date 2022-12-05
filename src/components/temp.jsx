import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
// import * as yup from "yup";
import { Formik } from "formik";

const Login = () => {
  const [display, setDisplay] = useState(false);
  function displayModal() {
    setDisplay(display => !display);
  }

  return (
    <div className={`baack ${display ? "display-none" : "display-block"}`}>
      <div className="overall">
        <div className="loginheader">
          <h3>Login</h3>
          <p onClick={displayModal}>x</p>
        </div>
        <hr />

        <Formik
          initialValues={{ email: "", password: "" }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = "Invalid email address";
            } else if (!values.password) {
              errors.passwword = "Required";
            }

            return errors;

          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className="loginForm">
              <input
                type="email"
                placeholder="Email"
                className="emailInput"
                onBlur={handleBlur}
                value={values.email}
                onChange={handleChange}
                name="email"
              />

              {errors.email && touched.email && errors.email ? <span>{errors.email}</span> : null}

              <input
                type="name"
                placeholder="Password"
                className="passwordInput"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />

              {errors.password && touched.password && errors.password ? <span>{errors.password}</span> : null }
              <p>
                <a href="/#"> Forgot/Reset Password </a>{" "}
              </p>
              <div className="remember">
                {" "}
                <input type="checkbox" className="check" />
                <label> Remember me</label>{" "}
                <label>
                  <i className="fa-solid fa-circle-exclamation fa-sm" />
                </label>
              </div>
              <center>
                <button className="loginButton" type="submit" disabled={isSubmitting}>
                  {" "}
                  <Link to="/section">
                    {" "}
                    <i className="fa-solid fa-circle-exclamation fa-sm" /> Login{" "}
                  </Link>
                </button>
              </center>
              <div className="notregistered">
                {" "}
                <h6>
                  Not Registered? <Link to="/register">Register Now</Link>
                </h6>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
