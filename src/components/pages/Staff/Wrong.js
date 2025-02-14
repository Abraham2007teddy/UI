import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimesCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Import i18n hook

const CodeVerifyError = () => {
  const { t } = useTranslation(); // Hook for translations
  const navigate = useNavigate();

  const handleRetryClick = () => {
    navigate('/'); // Navigate back to login
  };

  return (
    <div className="bg-white text-dark" style={{ marginTop: "50px", marginBottom: "300px", marginRight: "100px" }}>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-5 offset-md-1 mb-2">
            <form>
              <div className="d-flex flex-column align-items-center">
                <FaTimesCircle size={50} color="red" />
                <h5 className="mt-3" style={{ color: 'red' }}>{t('error')}</h5>
                <p>{t('error_message')}</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <button
                    className="btn btn-outline-dark"
                    type="button"
                    style={{ width: '300px', marginLeft: "112px" }}
                    onClick={handleRetryClick}
                  >
                    {t('retry_btn')} {/* Translated Button */}
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

export default CodeVerifyError;
