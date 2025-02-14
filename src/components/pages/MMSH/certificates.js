import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Import assets
import abstract from '../../../assets/images/MMSH/certificates/abstract.png';
import addIcon from '../../../assets/images/MMSH/certificates/add.png';
import minusIcon from '../../../assets/images/MMSH/certificates/minus.png';
import business from '../../../assets/images/MMSH/certificates/certificate.png';

// Import certificate-specific images
import official from '../../../assets/images/MMSH/certificates/doc_1.png';
import proof from '../../../assets/images/MMSH/certificates/doc_2.png';
import insurance from '../../../assets/images/MMSH/certificates/doc_3.png';
import license from '../../../assets/images/MMSH/certificates/doc_4.png';
import ati_1 from '../../../assets/images/MMSH/certificates/ati_1.png';
import ati_2 from '../../../assets/images/MMSH/certificates/ati_2.png';


function Certificates() {
  const { t } = useTranslation();

  // Ensure certificatesData is always an array
  const certificatesData = t('certificates_list', { returnObjects: true }) || [];

  // Ensure associationsList is always an array
  const associationsList = t('associations_list', { returnObjects: true }) || [];

  // Fixed list of images (automatically cycles if there are more certificates)
  const certificateImages = [official, proof, insurance, license, ati_1, ati_2];

  console.log("Certifications Data:", certificatesData); // Debugging Log

  // Reusable Toggle Section Component
  const ToggleSection = ({ titleKey, contentKey, isCertificateSection = false, isList = false, listItems = [] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="container mt-3 bg-light p-4 rounded">
        <div className="d-flex justify-content-between align-items-center">
          <h4>{t(titleKey)}</h4>
          <button 
            className="btn"
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <img src={isOpen ? minusIcon : addIcon} alt="toggle" style={{ width: '30px' }} />
          </button>
        </div>

        {isOpen && (
          <div style={{ marginTop: '15px' }}>
            {isCertificateSection ? (
              certificatesData.length > 0 ? (
                certificatesData.map((cert, index) => {
                  const imageSrc = certificateImages[index % certificateImages.length]; // Automatically cycle images

                  return (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '15px',
                      padding: '10px',
                      backgroundColor: '#f9f9f9',
                      borderRadius: '8px'
                    }}>
                      <img 
                        src={imageSrc} 
                        alt={cert.title}
                        style={{ width: '30%', height: 'auto', marginRight: '15px', borderRadius: '8px' }}
                      />
                      <div>
                        <h2 style={{ fontSize: '16px', color: 'grey', margin: 0 }}>
                          {cert.title}
                        </h2>
                        <p style={{ fontSize: '16px', color: '#333', marginTop: '5px' }}>
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>{t('no_certificates')}</p> // Message if no certificates exist
              )
            ) : isList ? (
              <>
                {/* Description above the list */}
                <p>{t(contentKey)}</p>
                
                {/* Association List */}
                <ul>
                  {listItems.length > 0 ? (
                    listItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  ) : (
                    <p>{t('no_associations')}</p>
                  )}
                </ul>
              </>
            ) : (
              <p>{t(contentKey)}</p>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="col-sm-6 col-lg-4 mb-5" style={{ position: 'relative', marginTop: '20px', width: '100%', maxWidth: '1200px', margin: 'auto' }}>
      <div className="card">
        <img className="bd-placeholder-img card-img-top" width="100%" height="300" src={business} alt="business" role="img" />

        <div className="card-body">
          <p className="card-text" style={{ margin: '10px 13px' }}>{t('business_description')}</p>

          <h5 className="card-title" style={{ marginTop: '30px', marginBottom: '20px' }}>
            <img src={abstract} alt="indicator" style={{ width: '30px', marginRight: '10px', marginLeft: '12px' }} />
            {t('more_info')}
          </h5>

          {/* 🔹 Certifications First */}
          <ToggleSection titleKey="certifications" contentKey="certificate_description" isCertificateSection={true} />

          {/* 🔹 Associations Second (With <p> Above <ul>) */}
          <ToggleSection titleKey="associations" contentKey="associations_description" isList={true} listItems={associationsList} />
        </div>
      </div>
    </div>
  );
}

export default Certificates;
