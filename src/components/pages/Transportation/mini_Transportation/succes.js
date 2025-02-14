import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaCheckCircle } from 'react-icons/fa';  // Import React icon for success

const CodeVerify = () => {
  const navigate = useNavigate();  // Create navigate function

  const handleStaffClick = () => {
    navigate('/');
  };

  return (
    <div className="bg-white text-dark" style={{marginTop: "50px", marginBottom: "300px"}}>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-5 offset-md-1 mb-2">
            <form>
              <div className="d-flex flex-column align-items-center">
                <FaCheckCircle size={50} color="green" />  {/* Green success icon */}
                <h5 className="mt-3" style={{ color: 'green' }}>Success</h5>
                <p>
                  You successfully requested for cargo transportation.
                   <br/>
                  Soon, dispatcher will contant with you. 
                </p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <button
                    className="btn btn-outline-dark"
                    type="button"
                    style={{ width: '300px', marginLeft: "112px" }}
                    onClick={handleStaffClick}  // Attach click handler to the button
                  >
                    Return
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeVerify;
