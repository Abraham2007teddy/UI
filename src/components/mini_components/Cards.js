import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Start off-screen
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Animate in
  hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }, // Hover effect
};

const Cards = ({ photos, start_words, big_words, links }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      {[...Array(6)].map((_, index) => (
        <motion.div 
          className="col"
          key={index}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={cardVariants}
        >
          <motion.div 
            className="card shadow-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              className="bd-placeholder-img card-img-top"
              src={photos[index]}
              alt="Thumbnail"
              width="100%"
              height="225"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />

            <div className="card-body">
              <h3>{start_words[index]}</h3>
              <p className="card-text">{big_words[index]}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <motion.button
                    type="button"
                    className="btn btn-dark btn-md"
                    whileHover={{ scale: 1.1 }}
                    onClick={() => {
                      window.scrollTo(0, 0); // Scroll to top
                      navigate(`/${links[index]}`);
                    }}
                  >
                    {t('Details')}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Cards;
