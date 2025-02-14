import React from 'react';
import { motion } from 'framer-motion';
import techs from '../../assets/images/Content_assets/tools.png';
import special from '../../assets/images/mini_components_assets/special_load.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, rotate: -2 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, ease: "easeOut" } },
  hover: { scale: 1.05, rotate: 2, transition: { duration: 0.3 } },
};

const buttonVariants = {
  hover: { 
    scale: 1.1, 
    boxShadow: "0px 5px 15px rgba(0,0,0,0.3)", 
    backgroundColor: "grey", 
    transition: { duration: 0.3 } 
  }
};

const Special = ({ special_links }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <motion.div 
      className="container fix_margins"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="row">
        {/* Industry Solutions Card */}
        <motion.div 
          className="col-12 col-md-6 mb-3"
          variants={cardVariants}
        >
          <div className="card border-0 shadow-sm" style={{ borderRadius: "15px" }}>
            <motion.img
              className="bd-placeholder-img card-img-top"
              src={techs}
              alt="Industry Solutions"
              width="100%"
              height="230"
              variants={imageVariants}
              whileHover="hover"
            />
            <div className="card-body text-center">
              <h3 className="card-title">{t('Special.Industry_Solutions')}</h3>
              <motion.a 
                href="#" 
                className="btn btn-dark"
                variants={buttonVariants}
                whileHover="hover"
                style={{ borderRadius: "20px", padding: "10px 20px", color: 'white' }}
                onClick={() => {
                  window.scrollTo(0, 0); // Scroll to top
                  navigate(`/${special_links[0]}`);
                }}
              >
                {t('Special.Learn_more')}
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Special Loads Card */}
        <motion.div 
          className="col-12 col-md-6 mb-3"
          variants={cardVariants}
        >
          <div className="card border-0 shadow-sm" style={{ borderRadius: "15px" }}>
            <motion.img
              className="bd-placeholder-img card-img-top"
              src={special}
              alt="Special Loads"
              width="100%"
              height="230"
              variants={imageVariants}
              whileHover="hover"
            />
            <div className="card-body text-center">
              <h3 className="card-title">{t('Special.Special_Loads')}</h3>
              <motion.a 
                href="#" 
                className="btn btn-dark"
                variants={buttonVariants}
                whileHover="hover"
                style={{ borderRadius: "20px", padding: "10px 20px", color: 'white' }}
                onClick={() => {
                  window.scrollTo(0, 0); // Scroll to top
                  navigate(`/${special_links[1]}`);
                }}
              >
                {t('Special.Learn_more')}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Special;
