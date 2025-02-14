import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useStaff } from "./StaffContext";
import { useTranslation } from "react-i18next"; // Import i18n hook

const Profile = () => {
  const { t } = useTranslation(); // Hook for translations
  const username = localStorage.getItem("username") || "Guest";
  const navigate = useNavigate();
  const { updateStaffStatus } = useStaff();

  const handleLogout = () => {
    localStorage.removeItem("username");
    updateStaffStatus(false);
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <motion.div
        className="bg-white p-4 rounded-5 shadow-lg text-center"
        style={{ maxWidth: "500px", width: "100%" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Avatar - Centered */}
        <motion.div
          className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 shadow"
          style={{
            width: "130px",
            height: "130px",
            background: "radial-gradient(circle, rgb(86, 83, 83), rgb(0, 0, 0))",
            color: "white",
            fontSize: "3rem",
            fontWeight: "bold",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {username.charAt(0).toUpperCase()}
        </motion.div>

        {/* Username */}
        <motion.h1
          className="h4 text-dark"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          {t('welcome', { username })} {/* i18n Applied */}
        </motion.h1>
        
        <p className="text-muted">{t('profile_message')}</p> {/* i18n Applied */}

        {/* Logout Button */}
        <motion.button
          className="btn btn-dark btn-lg mt-3 w-100 rounded-pill shadow-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogout}
        >
          {t('logout')} {/* i18n Applied */}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Profile;
