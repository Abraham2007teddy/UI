import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Import i18n hook

const CodeVerify = () => {
  const { t } = useTranslation(); // Hook for translations
  const navigate = useNavigate();

  const handleStaffClick = () => {
    navigate('/');
  };

  return (
    <div className="bg-white text-dark" style={{ marginTop: "50px", marginBottom: "300px", marginRight: "100px" }}>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-5 offset-md-1 mb-2">
            <form>
              <div className="d-flex flex-column align-items-center">
                <FaCheckCircle size={50} color="green" />
                <h5 className="mt-3" style={{ color: 'green' }}>{t('success')}</h5>
                <p>{t('success_message')}</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <button
                    className="btn btn-outline-dark"
                    type="button"
                    style={{ width: '300px', marginLeft: "112px" }}
                    onClick={handleStaffClick}
                  >
                    {t('return_btn')} {/* Translated Button */}
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
