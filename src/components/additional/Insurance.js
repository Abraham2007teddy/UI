import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Additional from "../sidebar/additional"; 
import "../pages/general.css";

// Import Images
import main_image from "../../assets/images/for_pages/insurance_2.png";

const Insurance = () => {
  const { t } = useTranslation(); // Hook for translations

  return (
    <motion.div 
      className="page-container d-flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="main-content flex-grow-1">
        {/* Page Title */}
        <motion.h3 
          className="text-5xl font-extrabold text-center mb-8 text-blue-600"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {t("insurance_services_title")}
        </motion.h3>

        {/* Image Section */}
        <motion.div 
          className="col-sm-6 col-lg-4 mb-6 mx-auto" 
          style={{ width: "1200px" }}
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
              alt="MMSH Logistics Cargo Insurance"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />

            <div className="card-body bg-gray-100 p-8 rounded-b-2xl">
              {/* Insurance Heading */}
              <motion.h3 
                className="text-3xl font-bold text-center mb-6 text-gray-800"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {t("insurance_services_heading")}
              </motion.h3>

              {/* Insurance Description */}
              <motion.p 
                className="text-gray-700 font-medium leading-relaxed tracking-wide text-lg text-center mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t("insurance_services_description")}
              </motion.p>

              {/* Insurance Benefits Section */}
              <motion.div 
                className="bg-white shadow-md p-6 rounded-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">{t("insurance_services_benefits_heading")}</h3>
                <ul className="list-disc ml-6 text-gray-700 text-lg">
                  {t("insurance_services_benefits").split(". ").map((item, index) => (
                    <li key={index} className="mb-2">{item}.</li>
                  ))}
                </ul>
              </motion.div>

              {/* Coverage Options Section */}
              <motion.div 
                className="bg-white shadow-md p-6 rounded-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">{t("insurance_services_coverage_heading")}</h3>
                <p className="text-gray-700 text-lg">{t("insurance_services_coverage")}</p>
              </motion.div>

              {/* Rates Section */}
              <motion.div 
                className="bg-white shadow-md p-6 rounded-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">{t("insurance_services_rates_heading")}</h3>
                <p className="text-gray-700 text-lg">{t("insurance_services_rates")}</p>
              </motion.div>

              {/* Contact Section */}
              <motion.div 
                className="flex flex-col items-center space-y-6 mt-6 text-lg font-medium text-gray-700"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="flex items-center space-x-4 bg-white shadow-md p-4 rounded-lg">
                  <FaEnvelope className="text-blue-600 text-2xl" style={{marginRight: "10px"}}/>
                  <span className="text-lg font-semibold text-gray-800">{t("contact_email")}</span>
                </div>
                <div className="flex items-center space-x-4 bg-white shadow-md p-4 rounded-lg">
                  <FaPhoneAlt className="text-blue-600 text-2xl" style={{marginRight: "10px"}} />
                  <span className="text-lg font-semibold text-gray-800">{t("contact_phone")}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      <Additional />
    </motion.div>
  );
};

export default Insurance;
