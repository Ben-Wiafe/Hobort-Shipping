import React, { useState,useEffect } from "react";
import "./login.css";
import "./register.css";
import { Link} from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = (props) => {
  const [show, setShow] = useState(true);

  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: values => {
      alert("Login successfully:");
      setDisable(true);
      onClose();
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("johndoe@xxx.xxx")
        .required("Required"),
      password: Yup.string().required("Required")
    })
  });


  return (
    <>
    {
      show && 
      <div>
      <div className="overall">
        <div className="loginheader">
          <h3>Login</h3>
          <p onClick={props.onClose}>x</p>
        </div>
        <hr />
 
        <form className="loginForm" onSubmit={formik.handleSubmit}>
          <div className="loginInput">
            <input
              type="name"
              placeholder="Email"
              required
              name="email"
              className={
                formik.errors.email && formik.touched.email
                  ? "error"
                  : !formik.errors.email && formik.touched.email
                  ? "success"
                  : null
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p style={{ color: "red", fontSize: "13px", position: "relative", top: "-13px" }}>{formik.errors.email}</p>
            ) : null}
 
            <input
              type="name"
              placeholder="Password"
              name="password"
              required
              className={
                formik.errors.password && formik.touched.password
                  ? "error"
                  : !formik.errors.password && formik.touched.password
                  ? "success"
                  : null
              }
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <p style={{ color: "red", fontSize: "13px", position: "relative", top: "-13px" }}>{formik.errors.password}</p>
            ) : null}
          </div>
          <p>
            <Link to="/forgot-password" >
              {" "}
              Forgot/Reset Password{" "}
            </Link>{" "}
          </p>
          <div className="remember">
            {" "}
            <input type="checkbox" className="check" id="remember" required />
            <label> Remember me</label>{" "}
            <label>
              <i className="fa-solid fa-circle-exclamation fa-sm" />
            </label>
          </div>
          <center>
            <button className="loginButton" >
            
                <Link to="/shipment"><i className="fa-solid fa-circle-exclamation fa-sm" /> Login{" "}</Link>
            
            </button>
          </center>
          <div className="notregistered" onClick={props.onClose}> 
            {" "}
            <h6>
              Not Registered?{" "}
              <Link to="/register">
                Register Now
              </Link>
            </h6>
          </div>
        </form>
      </div>
    </div> 
    }
    </>
   
  );
};

export default Login;
