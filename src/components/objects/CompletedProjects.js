// CompletedProjects.js
import React, { useState } from 'react';
import add_icon from '../../assets/images/MMSH/certificates/add.png';
import minus_icon from '../../assets/images/MMSH/certificates/minus.png';
import like_icon from '../../assets/images/for_pages/like.png';

const CompletedProjects = ({ projectsData }) => {
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
                src={like_icon}
                className="mb-2"
                width="25px"
                height="25px"
                alt="project icon"
                style={{ marginRight: '10px', marginTop: '5px' }}
              />
              {projectsData.title}
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
            <div className="row">
              {projectsData.projects.map((project, index) => (
                <div className="col-6" key={index}>
                  <div className="card shadow-sm p-2 mt-4">
                    <img
                      src={project.imgSrc}
                      alt="Project"
                      style={{
                        width: '510px',
                        height: '400px',
                        borderRadius: '3%',
                      }}
                    />
                    <div className="card-body">
                      <a href="#" style={{textDecoration: "none", color: "black"}}><h6 className="card-text">{project.title}</h6></a>
                    </div>
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

export default CompletedProjects;
