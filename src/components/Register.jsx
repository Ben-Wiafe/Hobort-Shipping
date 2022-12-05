import React, { useState } from "react";
import "./register.css";
import flag from "../assets/ghana.png";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Footer from "./Footer";
import "./styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BsCheckAll } from "react-icons/Bs";

const Register = () => {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const handleshow = () => setShow(!show);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      password: "",
      confirmPassword:"",
      phone:""
    },
    onSubmit: values => {
      console.log(values);
    },

    validationSchema: Yup.object({
      firstName: Yup
        .string()
        .min(4, "At least 4 characters")
        .max(15, "Not more than 15 characters")
        .required("Required"),
      lastName: Yup
        .string()
        .min(4, "At least 4 characters")
        .max(15, "Not more than 15 characters")
        .required("Required"),
      company: Yup
        .string()
        .min(2, "At least 4 characters")
        .matches()
        .max(20, "Not more than 15 characters")
        .required("required"),
      email: Yup
        .string()
        .email("johndoe@xxx.xxx")
        .required("Required"),
      password: Yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .max(40)
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Must contain at least 1 Uppercase,Lowercase,Number and Special Case Character")
        .required("Please enter your password"),
      confirmPassword: Yup
        .string()
        .required('Confirm Password is required').oneOf([Yup.ref('password'),null], 'Confirm Password does not match'),
      
    })

    
  }); 
  return (
    <>
      <div className="regMain">
        <div>
          <div className="regContainer">
            <div className="register">
              <h2>Register for Hobort+</h2>
            </div>

            <div className="benefit">
              <h3>Enjoy the Benefits of Hobort+ </h3>
              <p>
                You'll see how shipping online can be fast and easy! Experience time-saving features for creating, managing and
                monitoring shipment, plus much more- all in one <br /> convenient place!
              </p>

              <br />
              <h2> Do you have Hobort Express account number? </h2>
              <br />
              <div className="buttons">
                <div className="buttop">
                  <button>Yes</button>
                  <p>You'll see able to view your preferential rates and bill shipments to Hobort account. </p>
                </div>
                <div className="buttop">
                  <button type="button" onClick={handleshow}>
                    No
                  </button>
                  <p>No account? No problem! Register and pay cash </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`completeregister ${show ? "display-block" : "display-none"}`}>
        <form onSubmit={formik.handleSubmit}>
          <div className="registerMain">
            <div className="regDetails">
              <h2>Your Details</h2>
              <div className="location">
                <img src={flag} alt="Ghana" />
                <p>GHANA </p>
                <button className="regbutton">
                  {" "}
                  <i class="fa-solid fa-earth-africa" /> Change Location
                </button>
              </div>

              <div>
                <div className="nameform">
                  <div className="labelselect">
                    <label>Title</label>
                    <select id="title" className="reginpu">
                      <option class="none" value="" disabled selected />
                      <option value="dr">Dr.</option>
                      <option value="mr">Mr.</option>
                      <option value="ms">Ms.</option>
                      <option value="mrs">Mrs. </option>
                      <option value="miss">Miss</option>
                    </select>
                  </div>
                  <div>
                    <label> First Name </label>
                    <input
                    required
                      type="text"
                      name="firstName"
                      className={formik.errors.firstName && formik.touched.firstName ? "error" : !formik.errors.firstName && formik.touched.first ? 'success' : null}

                      id="firstName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
                  </div>
                  <div className="reginput" >
                    {" "}
                    <label> Last Name </label>
                    <input
                      type="text"
                      className={formik.errors.lastName && formik.touched.lastName ? "error" : !formik.errors.lastName && formik.touched.lastName ? 'success' : null}

                      name="lastName"
                      id="lastName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
                  </div>
                  <div />
                </div>
              </div>
              <div>
                <div className="company">
                  <label htmlFor="company"> Company </label>
                  <input
                    type="text"
                    placeholder="Name of organisation"
                    name="company"
                    className={formik.errors.company && formik.touched.company ? "error" : !formik.errors.company && formik.touched.company ? 'success' : null}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.company}
                  />
                  {formik.touched.company && formik.errors.company ? <p>{formik.errors.company}</p> : null}
                </div>
                <div className="creat">
                  <div className="phonType">
                    {" "}
                    <label>Phone Type</label>
                    <br />
                    <select id="title" required className="reginpu">
                      <option class="none" value="" disabled selected />
                      <option value="mobile">Mobile</option>
                      <option value="office">Office</option>
                      <option value="other">Other</option>
                    </select>
                    {formik.errors.phone ? <p>{formik.errors.phone}</p> : null}
                  </div>
                  <PhoneInput
                    defaultCountry=""
                    placeholder="+ country code"
                    name = "phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    // error={value ? (isValidPhoneNumber(value) ? undefined : "Invalid phone number") : "Phone number required"}
                    className="phoneInput"
                  />
                  {value && isValidPhoneNumber(value) ? (
                    <BsCheckAll size="1.6rem" style={{ position: "relative", top: "20px", color: "green" }} />
                  ) : (
                    <p
                      style={{
                        color: "red",
                        position: "relative",
                        top: "18px",
                        left: "3px",
                        fontSize: "13px",
                        whiteSpace: "nowrap"
                      }}
                    >
                      {" "}
                      <i className="fa-solid fa-xmark" />
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="emailLogin">
              <h2>Create Your Login</h2>
              <label htmlFor="email"> Email Adress </label>
             
              <input
                type="email"
                autoComplete="true"
                // style={{ padding: '14px 20px', borderRadius: '5px',  width: '350px', border:'0px'}}
                className={formik.errors.email && formik.touched.email ? 
                  "error" : !formik.errors.email && formik.touched.email ? 'success' : null}
                required
                name="email"
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}

              <label> Password </label>
              <input
                required
                securityType="password"
                type="password"
                className={formik.errors.password && formik.touched.password ? 
                  "error" : !formik.errors.password && formik.touched.password ? 'success' : null}
                name="password"
                id="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null}

              <label> Confirm Password </label>
              <input
                required
                type="password"
                className={formik.errors.confirmPassword && formik.touched.confirmPassword ? 
                  "error" : !formik.errors.confirmPassword && formik.touched.confirmPassword ? 'success' : null}
                name="confirmPassword"
                id="confirmPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? <p>{formik.errors.confirmPassword}</p> : null}
         

            </div>
          </div>
          <div className="lastdown">
            <input type="checkbox" className="tickbox" />
            <label className="ticklabel">I would like to receive informational emails and promotional offers from Hobort</label>

            <h3>Would you like to apply for a Hobort account? </h3>
            <p>
              If your company ships regularly, having an account offers many benefits- preferential rates, regular billing,
              shipment monitoring- and more!
            </p>

            <br />

            <input type="checkbox" className="tickbox" />
            <label className="ticklabel">I'd like to apply for a Hobort account</label>
            <br />
            <h3>Accept Terms</h3>
                  <br/>
            <input type="checkbox" className="tickbox" required />
            <label className="ticklabel">
              I accept the Hobort Express <a href="#">Terms and Conditions</a> and{" "}
              <a href="#">Digital Customs Invoice Terms and Conditions</a>{" "}
            </label>
            <br />
            <br />
            <input type="checkbox" className="tickbox" required />
            <label className="ticklabel">
              I accept the Hobort Express <a href="#">Privacy and Cookies Policy</a>{" "}
            </label>
            <br />
            <div className="buttonright">
              {" "}
              <input type="submit" className="registerButton" required />
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};
export default Register;
