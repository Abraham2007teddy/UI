import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaChalkboardTeacher, FaChartLine, FaUsers, FaLightbulb, FaUserGraduate } from 'react-icons/fa';
import Additional from '../../sidebar/additional'; 
import '../general.css';

// Import Images
import main_image from '../../../assets/images/for_pages/internship_2.png';

const Internship = () => {
  const { t } = useTranslation();

  return (
    <motion.div 
      className="page-container d-flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="main-content flex-grow-1">
        <motion.h3 
          className="text-4xl font-extrabold text-center mb-8 text-blue-600"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {t('title_28')}
        </motion.h3>

        <motion.div 
          className="col-sm-6 col-lg-4 mb-6 mx-auto" 
          style={{ width: '1230px' }}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="card rounded-2xl shadow-2xl overflow-hidden bg-white">
            <motion.img 
              src={main_image} 
              className="bd-placeholder-img card-img-top rounded-t-2xl" 
              width="100%" 
              height="350" 
              alt="Truck"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <div className="card-body bg-gray-100 p-8 rounded-b-2xl">
              <motion.h3 
                className="text-3xl font-bold text-center mb-6 text-gray-800"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {t('internship_benefits.main_title')}
              </motion.h3>
              
              <motion.p 
                className="text-gray-700 font-medium leading-relaxed tracking-wide text-lg mt-5 text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t('internship_benefits.description')}
              </motion.p>

              <ul className="mt-6 space-y-6 text-lg">
                {[
                  { icon: FaGraduationCap, key: 'experience' },
                  { icon: FaChalkboardTeacher, key: 'mentorship' },
                  { icon: FaChartLine, key: 'career_growth' },
                  { icon: FaUsers, key: 'networking' },
                  { icon: FaLightbulb, key: 'innovation' },
                  { icon: FaUserGraduate, key: 'personal_growth' },
                ].map(({ icon: Icon, key }, index) => (
                  <li 
                    key={key} 
                    className="flex items-center gap-4 text-xl cursor-pointer hover:bg-blue-200 p-4 rounded-lg transition duration-300 shadow-sm"
                  >
                    <div className="text-blue-600" style={{ fontSize: '50px' }}>
                      <Icon />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900 block">{t(`internship_benefits.benefits.${key}.title`)}</span>
                      <span className="text-gray-700">{t(`internship_benefits.benefits.${key}.description`)}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <motion.p 
                className="text-gray-800 font-bold leading-relaxed tracking-wide mt-6 text-center text-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {t('internship_benefits.conclusion')}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
      <Additional />
    </motion.div>
  );
};

export default Internship;