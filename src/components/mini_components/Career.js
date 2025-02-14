import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import work_1 from '../../assets/images/mini_components_assets/career_3.png';
import work_2 from '../../assets/images/mini_components_assets/career_5.png';
import { useTranslation } from 'react-i18next';

const Career = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goToCareer = () => {
    navigate('career');
  };

  return (
    <motion.div 
      className="card mt-5 shadow-lg border-0" 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      style={{ borderRadius: '15px', overflow: 'hidden' }}
    >
      <div className="card-body p-4">
        {/* Image Container */}
        <div className="image-container d-flex justify-content-center gap-3">
          <motion.img
            src={work_1}
            alt="Career Image 1"
            className="rounded"
            style={{ width: "500px", height: "auto", cursor: "pointer", transition: "transform 0.3s ease" }}
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src={work_2}
            alt="Career Image 2"
            className="rounded"
            style={{ width: "500px", height: "auto", cursor: "pointer", transition: "transform 0.3s ease" }}
            whileHover={{ scale: 1.05 }}
          />
        </div>

        {/* Text Content */}
        <motion.h5 
          className="card-title mt-4 text-center fw-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {t('Career.make_career')}
        </motion.h5>

        <motion.p 
          className="card-text text-center px-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
         {t('Career.text')} 
        </motion.p>

        {/* Learn More Button */}
        <div className="text-center mt-3">
          <motion.a 
            href="#" 
            className="btn btn-dark px-4 py-2 rounded-pill"
            whileHover={{ scale: 1.1, backgroundColor: "#333" }}
            transition={{ duration: 0.3 }}
            onClick={goToCareer}
          >
            {t('Career.learn_more')}
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Career;
