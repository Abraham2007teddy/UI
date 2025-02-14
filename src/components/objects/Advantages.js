import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Import Icons
import add_icon from '../../assets/images/MMSH/certificates/add.png';
import minus_icon from '../../assets/images/MMSH/certificates/minus.png';
import advantage_icon from '../../assets/images/for_pages/advantage.png';
import high_quality_icon from '../../assets/images/for_pages/high-quality.png';
import shield_icon from '../../assets/images/for_pages/shield.png';
import project_icon from '../../assets/images/for_pages/project-management.png';
import insurance_icon from '../../assets/images/for_pages/insurance.png';

const Advantages = () => {
  const { t } = useTranslation();
  const [showContent, setShowContent] = useState(false);
  const toggleContent = () => setShowContent(prev => !prev);

  // Advantages Data
  const advantagesData = {
    title: t('advantages.title'),
    advantagesList: [
      {
        title: t('advantages.experience.title'),
        description: t('advantages.experience.description'),
        icon: high_quality_icon,
      },
      {
        title: t('advantages.safety.title'),
        description: t('advantages.safety.description'),
        icon: shield_icon,
      },
      {
        title: t('advantages.comprehensiveness.title'),
        description: t('advantages.comprehensiveness.description'),
        icon: project_icon,
      },
      {
        title: t('advantages.insurance.title'),
        description: t('advantages.insurance.description'),
        icon: insurance_icon,
      },
    ],
  };

  return (
    <div>
      <main className="container mt-3">
        <div className="bg-light p-5 rounded">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '15px',
            }}
          >
            <h4 style={{ margin: 0, display: 'flex', alignItems: 'center' }}>
              <img
                src={advantage_icon}
                className="mb-2"
                width="25px"
                height="25px"
                alt="advantages icon"
                style={{ marginRight: '10px', marginTop: '5px' }}
              />
              {advantagesData.title}
            </h4>
            <button
              className="btn"
              onClick={toggleContent}
              style={{
                background: 'none',
                border: 'none',
                padding: '0',
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              <img
                src={showContent ? minus_icon : add_icon}
                alt="indicator"
                style={{ width: '30px', marginRight: '10px', marginLeft: '12px' }}
              />
            </button>
          </div>

          {showContent && (
            <div className="additional-info mt-4">
              {advantagesData.advantagesList.map((advantage, index) => (
                <div key={index} style={{ display: 'flex', marginBottom: '15px' }}>
                  <img
                    src={advantage.icon}
                    alt={advantage.title}
                    style={{ width: '50px', height: '50px', marginTop: '0px' }}
                  />
                  <div style={{ marginLeft: '10px' }}>
                    <strong style={{ fontSize: '23px' }}>{advantage.title}</strong>
                    <br />
                    {advantage.description}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Advantages;
