import React from 'react';
import { motion } from 'framer-motion';
import './FirstCarousel.css';

const FirstCarousel = ({ slides }) => {
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            {slide.type === 'video' ? (
              <video className="d-block w-100" autoPlay loop muted>
                <source src={slide.media} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={slide.media} className="d-block w-100" alt={`Slide ${index}`} />
            )}
            <div className="container">
              <div className="carousel-caption">
                <h1>{slide.heading}</h1>
                <p>{slide.text}</p>
                <p>
                  <motion.a
                    className="btn-dark-custom"
                    href="request_for_cargo"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#222",
                      boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.8)",
                      y: -2, // Slight upward lift
                    }}
                    whileTap={{
                      scale: 0.95,
                      backgroundColor: "#111",
                    }}
                    animate={{
                      scale: [1, 1.05, 1], // Pulse effect
                      y: [0, -2, 0], // Floating effect
                      boxShadow: [
                        "0px 0px 8px rgba(255, 255, 255, 0.3)",
                        "0px 0px 15px rgba(255, 255, 255, 0.8)",
                        "0px 0px 8px rgba(255, 255, 255, 0.3)",
                      ],
                      transition: { repeat: Infinity, duration: 3 },
                    }}
                    style={{
                      display: "inline-block",
                      padding: "14px 30px",
                      fontSize: "18px",
                      fontWeight: "bold",
                      borderRadius: "10px",
                      backgroundColor: "#000",
                      color: "#fff",
                      textDecoration: "none",
                      border: "2px solid white",
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    {slide.button}
                  </motion.a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default FirstCarousel;
