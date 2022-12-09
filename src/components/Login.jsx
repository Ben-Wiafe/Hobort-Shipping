import React, { useState,useEffect } from "react";
import "./login.css";
import "./register.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const [display, setDisplay] = useState(false);
  function displayModal() {
    setDisplay(display => !display);
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: values => {
      alert("Login successfully:");
      setDisplay(!display);
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("johndoe@xxx.xxx")
        .required("Required"),
      password: Yup.string().required("Required")
    })
  });
  useEffect(() => {
    // Here, we update the state using the setCount method
    setDisplay(false);
  }, []); 
  return (
    <>
   {
    !display &&
     <div>
     <div className="overall">
       <div className="loginheader">
         <h3>Login</h3>
         <p onClick={displayModal}>x</p>
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
           <a href="/#" onClick={displayModal}>
             {" "}
             Forgot/Reset Password{" "}
           </a>{" "}
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
           <button className="loginButton" onClick={displayModal}>
             {" "}
             <Link to="/">
               {" "}
               <i className="fa-solid fa-circle-exclamation fa-sm" /> Login{" "}
             </Link>
           </button>
         </center>
         <div className="notregistered">
           {" "}
           <h6>
             Not Registered?{" "}
             <Link to="/register" onClick={displayModal}>
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
