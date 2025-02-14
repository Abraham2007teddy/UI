// RegulationsDocumentation.js
import React, { useState } from 'react';
import add_icon from '../../assets/images/MMSH/certificates/add.png';
import minus_icon from '../../assets/images/MMSH/certificates/minus.png';
import file_icon from '../../assets/images/for_pages/file.png';

const RegulationsDocumentation = ({ regulationsData }) => {
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
                src={file_icon}
                className="mb-2"
                width="25px"
                height="25px"
                alt="regulations icon"
                style={{ marginRight: '10px', marginTop: '5px' }}
              />
              {regulationsData.title}
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
              <div className="images mt-4 mb-4">
                {regulationsData.images.map((img, index) => (
                  <img
                    key={index}
                    src={img.src}
                    alt={img.alt}
                    style={{ width: '25%', height: 'auto', marginLeft: '10px' }}
                  />
                ))}
              </div>
              <div className="container">
                <p>{regulationsData.description}</p>
                <ul>
                  {regulationsData.regulationsList.map((item, index) => (
                    <li key={index}>
                      <strong>{item.title}:</strong> {item.content}
                    </li>
                  ))}
                </ul>
                <p>{regulationsData.conclusion}</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default RegulationsDocumentation;
