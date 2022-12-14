import React, { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import flags from "react-phone-number-input/flags";
import Footer from "./Footer";
import LoginHeader from "./LoginHeader";
import "./about.css";

const Createshipment = () => {
  const [value, setValue] = useState();

  return (
    <>
    <LoginHeader/>
    <div onClick={()=> {setManagedown(false); setShipDropdown(false);setTrackDropdown(false); }} style={{ width: "100%", backgroundColor: "#f1f1f1", fontSize: "14px" }} >
      <div
        style={{
          margin: "auto",
          width: "86%",
          padding: "1.5em",
          backgroundColor: "#f1f1f1",
          fontSize: "14px"
        }}
      >
        <div>
          <ul
            style={{
              display: "inline-block",
              height: "20px",
              margin: "0px 0 20px -10px",
              padding: "0",
              listStyle: "none",
              borderBottom: "1px solid #7a7a7a",
              fontSize: "14px"
            }}
          >
            <li
              style={{
                display: "inline-block",
                marginTop: "0",
                padding: "10px",
                color: "#333",
                background: "#f1f1f1",
                fontWeight: "bold"
              }}
            >
              Create Shipment
            </li>
            <li
              style={{
                display: "inline-block",
                marginTop: "0",
                marginLeft: "40px",
                padding: "10px",
                color: "#a1a1a1",
                background: "#f1f1f1"
              }}
            >
              Pay
            </li>
            <li
              style={{
                display: "inline-block",
                marginTop: "0",
                marginLeft: "40px",
                padding: "10px",
                color: "#a1a1a1",
                background: "#f1f1f1"
              }}
            >
              Print
            </li>
          </ul>
       <br></br>
       <br/>
            <div
              style={{
                background: "white",
                display: "flex",
                justifyContent: "space-between",
                padding: "30px",
                marginBottom: "7rem"
              }}
            >
              <form>
                {/* From Form */}
                <div className="create_shipment_form" style={{ marginLeft:'30px' }}>
                  <h3 style={{ marginBottom: "15px" }}>From </h3>
                  <label>
                    <h6 style={{ fontSize: "13px", fontWeight: "normal" }}>Name</h6>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="First Name and Last Name"
                    style={{ width: "120%", padding: "6px 5px", marginBottom: "17px" }}
                  />
                  <br />
                  <input type="checkbox" />
                  <label style={{ fontSize: "15px", marginLeft: "5px", marginBottom: "170px" }}>Business Contact</label>
                  <label>
                    <h6 style={{ fontSize: "13px", fontWeight: "normal", marginTop: "13px" }}>Company</h6>
                  </label>

                  <input
                    type="text"
                    name="company"
                    placeholder=""
                    style={{ width: "120%", padding: "6px 5px", marginBottom: "17px" }}
                  />

                  <div>
                    <label>
                      <h6 style={{ fontSize: "13px", fontWeight: "normal" }}>Country/Territory</h6>
                    </label>
                    <select
                      id="country"
                      name="country"
                      style={{
                        width: "120%",
                        padding: "6px 5px",
                        marginBottom: "13px",
                        webkitAppearance: "none",
                        mozAppearance: "none"
                      }}
                    >
                      <option value="" disabled selected />
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Åland Islands">Åland Islands</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="American Samoa">American Samoa</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Anguilla">Anguilla</option>
                      <option value="Antarctica">Antarctica</option>
                      <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Aruba">Aruba</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bermuda">Bermuda</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                      <option value="Botswana">Botswana</option>
                      <option value="Bouvet Island">Bouvet Island</option>
                      <option value="Brazil">Brazil</option>
                      <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                      <option value="Brunei Darussalam">Brunei Darussalam</option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Cape Verde">Cape Verde</option>
                      <option value="Cayman Islands">Cayman Islands</option>
                      <option value="Central African Republic">Central African Republic</option>
                      <option value="Chad">Chad</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Christmas Island">Christmas Island</option>
                      <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo">Congo</option>
                      <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                      <option value="Cook Islands">Cook Islands</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Cote D'ivoire">Cote D'ivoire</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">Dominican Republic</option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">Equatorial Guinea</option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                      <option value="Faroe Islands">Faroe Islands</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="French Guiana">French Guiana</option>
                      <option value="French Polynesia">French Polynesia</option>
                      <option value="French Southern Territories">French Southern Territories</option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Gibraltar">Gibraltar</option>
                      <option value="Greece">Greece</option>
                      <option value="Greenland">Greenland</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guadeloupe">Guadeloupe</option>
                      <option value="Guam">Guam</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guernsey">Guernsey</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guinea-bissau">Guinea-bissau</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                      <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Isle of Man">Isle of Man</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jersey">Jersey</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                      <option value="Korea, Republic of">Korea, Republic of</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Macao">Macao</option>
                      <option value="Macedonia, The Former Yugoslav Republic of">
                        Macedonia, The Former Yugoslav Republic of
                      </option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Martinique">Martinique</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mayotte">Mayotte</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                      <option value="Moldova, Republic of">Moldova, Republic of</option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montenegro">Montenegro</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Netherlands Antilles">Netherlands Antilles</option>
                      <option value="New Caledonia">New Caledonia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Niue">Niue</option>
                      <option value="Norfolk Island">Norfolk Island</option>
                      <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau">Palau</option>
                      <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Pitcairn">Pitcairn</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Reunion">Reunion</option>
                      <option value="Romania">Romania</option>
                      <option value="Russian Federation">Russian Federation</option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Saint Helena">Saint Helena</option>
                      <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                      <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                      <option value="Samoa">Samoa</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Serbia">Serbia</option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="South Georgia and The South Sandwich Islands">
                        South Georgia and The South Sandwich Islands
                      </option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                      <option value="Swaziland">Swaziland</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Timor-leste">Timor-leste</option>
                      <option value="Togo">Togo</option>
                      <option value="Tokelau">Tokelau</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Viet Nam">Viet Nam</option>
                      <option value="Virgin Islands, British">Virgin Islands, British</option>
                      <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                      <option value="Wallis and Futuna">Wallis and Futuna</option>
                      <option value="Western Sahara">Western Sahara</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                  </div>
                  <br />
                  <label>
                    <h6 style={{ fontSize: "13px", fontWeight: "normal" }}>Address 1</h6>
                  </label>

                  <input
                    type="text"
                    name="company"
                    placeholder=""
                    style={{ width: "120%", padding: "6px 5px", marginBottom: "17px" }}
                  />
                  <label>
                    <h6 style={{ fontSize: "13px", fontWeight: "normal", marginTop: "13px" }}>Address 2</h6>
                  </label>

                  <input
                    type="text"
                    name="company"
                    placeholder=""
                    style={{ width: "120%", padding: "6px 5px", marginBottom: "17px" }}
                  />
                  <label>
                    <h6 style={{ fontSize: "13px", fontWeight: "normal", marginTop: "13px" }}>Address 3</h6>
                  </label>

                  <input
                    type="text"
                    name="company"
                    placeholder=""
                    style={{ width: "120%", padding: "6px 5px", marginBottom: "17px" }}
                  />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ marginRight: "20px" }}>
                      <label>
                        <p>Suburb</p>
                      </label>
                      <input type="text" name="suburb" style={{padding:'6px 0px', width:'90px'}} />
                    </div>
                    <div style={{ marginRight: "20px" }}>
                      <label>
                        <p>City</p>
                      </label>
                      <input type="text" name="city" style={{padding:'6px 0px', width:'120px'}} />
                    </div>
                    <div >
                      {" "}
                      <label>
                        <p>State</p>
                      </label>
                      <input type="text" name="state" style={{padding:'6px 0px', width:'140px'}}/>
                    </div>
                  </div>
                  <br />
                  <input type="checkbox" />
                  <label style={{ fontSize: "15px", marginLeft: "5px", marginBottom: "170px" }}>Residential Address</label>

                  <label>
                    <h6 style={{ fontSize: "13px", fontWeight: "normal", marginTop: "13px" }}>Email Address</h6>
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Hobort will send shipment notifications to this email address"
                    style={{ width: "120%", padding: "6px 5px", marginBottom: "17px" }}
                  />

                  <div className="creat">
                    <div style={{ margin: "0px 30px 0px 0px" }}>
                      {" "}
                      <label>Phone Type</label>
                      <br />
                      <select id="title" required style={{ padding: "5px 9px" }}>
                        <option class="none" value="Mobile" selected />
                        <option value="mobile">Mobile</option>
                        <option value="office">Office</option>
                        <option value="other">Other</option>
                      </select>
                      {/* {formik.errors.phone ? <p>{formik.errors.phone}</p> : null} */}
                    </div>
                    <PhoneInput
                      defaultCountry=""
                      placeholder="+ country code"
                      name="phone"
                      value={value}
                      onChange={setValue}
                      style={{ border: "0", width: "100%", padding: "0px 0px" }}
                      flags={flags}
                      // error={value ? (isValidPhoneNumber(value) ? undefined : "Invalid phone number") : "Phone number required"}
                    />
                    {/* {value && isValidPhoneNumber(value) ? (
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
                  )} */}
                  </div>
                  <input type="checkbox" style={{ marginTop: "16px" }} />
                  <label style={{ fontSize: "15px", marginLeft: "5px", marginBottom: "170px" }}>SMS Enabled</label>
                  <p style={{ marginTop: "30px", fontSize: "13px" }}>VAT/Tax ID</p>
                  <input
                    type="text"
                    name="company"
                    placeholder=""
                    style={{ width: "120%", padding: "6px 5px", marginBottom: "17px" }}
                  />
                  <p style={{ marginTop: "30px", fontSize: "13px" }}>EORI Number</p>
                  <input
                    type="text"
                    name="company"
                    placeholder=""
                    style={{ width: "120%", padding: "6px 5px", marginBottom: "17px" }}
                  />

                  <input
                    type="submit"
                    name="save"
                    value="Save as New Contact"
                    style={{
                      width: "50%",
                      padding: "6px 5px",
                      marginBottom: "17px",
                      backgroundColor: "transparent",
                      border: "1px solid #ccc",
                      color: "gray",
                      fontWeight: "bold",
                    }}
                  />
                  <br />
                  <a href="#" style={{ textDecoration: "none" }}>
                    {" "}
                    Clear Address
                  </a>
                </div>
              </form>

              <div style={{ borderRight: "1px solid black" , marginLeft:'80px'}} />

              {/* //To Forms */}
              <form>
              
                <div className="create_shipment_form" style={{ marginRight: "120px" }}>
                  <h3 style={{ marginBottom: "15px" }}>To</h3>
                  <label>
                    <h6 style={{ fontSize: "13px", fontWeight: "normal" }}>Name</h6>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="First Name and Last Name"
                    style={{ width: "120%", padding: "6px 5px", marginBottom: "17px" }}
                  />
                  <br />
                  <input type="checkbox" />
                  <label style={{ fontSize: "15px", marginLeft: "5px", marginBottom: "170px" }}>Business Contact</label>
                  <label>
                    <h6 style={{ fontSize: "13px", fontWeight: "normal", marginTop: "13px" }}>Company</h6>
                  </label>

                  <input
                    type="text"
                    name="company"
                    placeholder=""
                    style={{ width: "120%", padding: "6px 5px", marginBottom: "17px" }}
                  />

                  <div>
                    <label>
                      <h6 style={{ fontSize: "13px", fontWeight: "normal" }}>Country/Territory</h6>
                    </label>
                    <select
                      id="country"
                      name="country"
                      style={{
                        width: "120%",
                        padding: "6px 5px",
                        marginBottom: "13px",
                        webkitAppearance: "none",
                        mozAppearance: "none"
                      }}
                    >
                      <option value="" disabled selected />
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Åland Islands">Åland Islands</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="American Samoa">American Samoa</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Anguilla">Anguilla</option>
                      <option value="Antarctica">Antarctica</option>
                      <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Aruba">Aruba</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bermuda">Bermuda</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                      <option value="Botswana">Botswana</option>
                      <option value="Bouvet Island">Bouvet Island</option>
                      <option value="Brazil">Brazil</option>
                      <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                      <option value="Brunei Darussalam">Brunei Darussalam</option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Cape Verde">Cape Verde</option>
                      <option value="Cayman Islands">Cayman Islands</option>
                      <option value="Central African Republic">Central African Republic</option>
                      <option value="Chad">Chad</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Christmas Island">Christmas Island</option>
                      <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo">Congo</option>
                      <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                      <option value="Cook Islands">Cook Islands</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Cote D'ivoire">Cote D'ivoire</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">Dominican Republic</option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">Equatorial Guinea</option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                      <option value="Faroe Islands">Faroe Islands</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="French Guiana">French Guiana</option>
                      <option value="French Polynesia">French Polynesia</option>
                      <option value="French Southern Territories">French Southern Territories</option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Gibraltar">Gibraltar</option>
                      <option value="Greece">Greece</option>
                      <option value="Greenland">Greenland</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guadeloupe">Guadeloupe</option>
                      <option value="Guam">Guam</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guernsey">Guernsey</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guinea-bissau">Guinea-bissau</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                      <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Isle of Man">Isle of Man</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jersey">Jersey</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                      <option value="Korea, Republic of">Korea, Republic of</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Macao">Macao</option>
                      <option value="Macedonia, The Former Yugoslav Republic of">
                        Macedonia, The Former Yugoslav Republic of
                      </option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Martinique">Martinique</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mayotte">Mayotte</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                      <option value="Moldova, Republic of">Moldova, Republic of</option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montenegro">Montenegro</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Netherlands Antilles">Netherlands Antilles</option>
                      <option value="New Caledonia">New Caledonia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Niue">Niue</option>
                      <option value="Norfolk Island">Norfolk Island</option>
                      <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau">Palau</option>
                      <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Pitcairn">Pitcairn</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Reunion">Reunion</option>
                      <option value="Romania">Romania</option>
                      <option value="Russian Federation">Russian Federation</option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Saint Helena">Saint Helena</option>
                      <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                      <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                      <option value="Samoa">Samoa</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Serbia">Serbia</option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="South Georgia and The South Sandwich Islands">
                        South Georgia and The South Sandwich Islands
                      </option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                      <option value="Swaziland">Swaziland</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Timor-leste">Timor-leste</option>
                      <option value="Togo">Togo</option>
                      <option value="Tokelau">Tokelau</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Viet Nam">Viet Nam</option>
                      <option value="Virgin Islands, British">Virgin Islands, British</option>
                      <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                      <option value="Wallis and Futuna">Wallis and Futuna</option>
                      <option value="Western Sahara">Western Sahara</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                  </div>
                  <br />
                  {/* <label>
                    <h6 style={{ fontSize: "13px", fontWeight: "normal" }}>Address 1</h6>
                  </label>

                  <input
                    type="text"
                    name="company"
                    placeholder=""
                    style={{ width: "120%", padding: "6px 5px", marginBottom: "17px" }}
                  />
                  <label>
                    <h6 style={{ fontSize: "13px", fontWeight: "normal", marginTop: "13px" }}>Address 2</h6>
                  </label>

                  <input
                    type="text"
                    name="company"
                    placeholder=""
                    style={{ width: "120%", padding: "6px 5px", marginBottom: "17px" }}
                  />
                  <label>
                    <h6 style={{ fontSize: "13px", fontWeight: "normal", marginTop: "13px" }}>Address 3</h6>
                  </label>

                  <input
                    type="text"
                    name="company"
                    placeholder=""
                    style={{ width: "120%", padding: "6px 5px", marginBottom: "17px" }}
                  /> */}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ marginRight: "20px" }}>
                      <label>
                        <p>Suburb</p>
                      </label>
                      <input type="text" name="suburb" style={{padding:'6px 0px', width:'90px'}} />
                    </div>
                    <div style={{ marginRight: "20px" }}>
                      <label>
                        <p>City</p>
                      </label>
                      <input type="text" name="city" style={{padding:'6px 0px', width:'100px'}} />
                    </div>
                    <div >
                      {" "}
                      <label>
                        <p>State</p>
                      </label>
                      <input type="text" name="state" style={{padding:'6px 0px', width:'140px'}}/>
                    </div>
                  </div>
                  <br />
                  <input type="checkbox" />
                  <label style={{ fontSize: "15px", marginLeft: "5px", marginBottom: "170px" }}>Residential Address</label>

                  <label>
                    <h6 style={{ fontSize: "13px", fontWeight: "normal", marginTop: "13px" }}>Email Address</h6>
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Hobort will send shipment notifications to this email address"
                    style={{ width: "120%", padding: "6px 5px", marginBottom: "17px" }}
                  />

                  <div className="creat">
                    <div style={{ margin: "0px 30px 0px 0px" }}>
                      {" "}
                      <label>Phone Type</label>
                      <br />
                      <select id="title" required style={{ padding: "5px 9px" }}>
                        <option class="none" value="Mobile" selected />
                        <option value="mobile">Mobile</option>
                        <option value="office">Office</option>
                        <option value="other">Other</option>
                      </select>
                      {/* {formik.errors.phone ? <p>{formik.errors.phone}</p> : null} */}
                    </div>
                    <PhoneInput
                      defaultCountry=""
                      placeholder="+ country code"
                      name="phone"
                      value={value}
                      onChange={setValue}
                      style={{ border: "0", width: "100%", padding: "0px 0px" }}
                      flags={flags}
                      // error={value ? (isValidPhoneNumber(value) ? undefined : "Invalid phone number") : "Phone number required"}
                    />
                    {/* {value && isValidPhoneNumber(value) ? (
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
                  )} */}
                  </div>
                  <input type="checkbox" style={{ marginTop: "16px" }} />
                  <label style={{ fontSize: "15px", marginLeft: "5px", marginBottom: "170px" }}>SMS Enabled</label>
                  <p style={{ marginTop: "30px", fontSize: "13px" }}>VAT/Tax ID</p>
                  <input
                    type="text"
                    name="company"
                    placeholder=""
                    style={{ width: "120%", padding: "6px 5px", marginBottom: "17px" }}
                  />
                  <p style={{ marginTop: "30px", fontSize: "13px" }}>EORI Number</p>
                  <input
                    type="text"
                    name="company"
                    placeholder=""
                    style={{ width: "120%", padding: "6px 5px", marginBottom: "17px" }}
                  />

                  <input
                    type="submit"
                    name="save"
                    value="Save as New Contact"
                    style={{
                      width: "50%",
                      padding: "6px 5px",
                      marginBottom: "17px",
                      backgroundColor: "transparent",
                      border: "1px solid #ccc",
                      color: "gray",
                      fontWeight: "bold",
                    }}
                  />
                  <br />
                  <a href="#" style={{ textDecoration: "none" }}>
                    {" "}
                   Notes about this contact
                  </a>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <div style={{display:'flex', justifyContent:'flex-end', marginTop:'5rem'}}><button style={{padding:'10px 20px', color:'white',backgroundColor:'green', border:'0'}}>Next</button></div>
                </div>
              </form>
            </div>
   <Footer />
        </div>
      </div>
    </div>
    </>
  );
};

export default Createshipment;
