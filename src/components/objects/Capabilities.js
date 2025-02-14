// Capabilities.js
import React, { useState } from 'react';
import add_icon from '../../assets/images/MMSH/certificates/add.png';
import minus_icon from '../../assets/images/MMSH/certificates/minus.png';
import people_icon from '../../assets/images/for_pages/people.png';

const Capabilities = ({ capabilitiesData }) => {
  const [showContent, setShowContent] = useState(false);
  const toggleContent = () => setShowContent(prev => !prev);

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
                src={people_icon}
                className="mb-2"
                width="25px"
                height="25px"
                alt="capabilities icon"
                style={{ marginRight: '10px', marginTop: '5px' }}
              />
              {capabilitiesData.title}
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
              <div className="container">
                <p>{capabilitiesData.description}</p>
                <ul>
                  {capabilitiesData.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>{capabilitiesData.finalNote}</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Capabilities;
