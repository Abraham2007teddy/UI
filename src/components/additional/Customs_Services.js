import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Additional from "../sidebar/additional"; 
import "../pages/general.css";

// Import Images
import main_image from "../../assets/images/for_pages/service.png";

const Customs_Services = () => {
  const { t } = useTranslation(); // Hook for translations

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
          {t("customs_services_title")}
        </motion.h3>

        <motion.div 
          className="col-sm-6 col-lg-4 mb-6 mx-auto" 
          style={{ width: "1230px" }}
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
              alt="Logistics Truck"
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
                {t("customs_services_heading")}
              </motion.h3>
              
              <motion.p 
                className="text-gray-700 font-medium leading-relaxed tracking-wide text-lg mt-5 text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t("customs_services_description")}
              </motion.p>

              <motion.div 
                className="flex justify-center items-center space-x-6 mt-6 text-lg font-medium text-gray-700"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                style={{ marginLeft: "500px" }}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex items-center space-x-2">
                    <FaEnvelope style={{ fontSize: "20px", width: "20px", color: "black", marginRight: "10px", marginBottom: "5px" }} />
                    <span style={{ fontSize: "17px", fontWeight: "bold", color: "#333" }}>
                      {t("contact_email")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaPhoneAlt style={{ fontSize: "20px", width: "20px", color: "black", marginRight: "10px", marginBottom: "5px" }} />
                    <span style={{ fontSize: "17px", fontWeight: "bold", color: "#333" }}>
                      {t("contact_phone")}
                    </span>
                  </div>
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

export default Customs_Services;
