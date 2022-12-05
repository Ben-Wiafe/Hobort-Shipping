import React, {useState} from 'react';
import "./styles.css";


const RegisterpopUp = () => {
  const [show, setShow] = useState(false);

  const handleshow = () => setShow(!show);
  return (
    <div className="App">
      <div className="regContainer">
        <div className="register">
          <h2>Register for Hobort+</h2>
        </div>

        <div className="benefit">
          <h3>Enjoy the Benefits of Hobort+ </h3>
          <p>
            You'll see how shipping online can be fast and easy! Experience
            time-saving features for creating, managing and monitoring shipment,
            plus much more- all in one <br /> convenient place!
          </p>

          <br />
          <h2> Do you have Hobort Express account number? </h2>
          <br />
          <div className="buttons">
            <div className="buttop">
              <button>Yes</button>
              <p>
                You'll see able to view your preferential rates and bill
                shipments to Hobort account.{" "}
              </p>
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
  );
}

export default RegisterpopUp
