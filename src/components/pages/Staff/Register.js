import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useStaff } from './StaffContext';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Import i18n
import logo from '../../../assets/images/Header_assets/logo.png';

const Login = () => {
  const { t } = useTranslation(); // Hook for translations
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { updateStaffStatus } = useStaff();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError(t('error_required')); // Use translated error message
      return;
    }

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api1/check-user/',
        { username, password },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.data.message === "Yes") {
        updateStaffStatus(true);
        localStorage.setItem('username', response.data.name);
        navigate('/codeVerify');
      } else {
        updateStaffStatus(false);
        navigate('/codeVerifyError');
      }
    } catch (err) {
      updateStaffStatus(false);
      navigate('/codeVerifyError');
    }
  };

  return (
    <motion.main
      className="d-flex justify-content-center align-items-center vh-100 bg-light"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.form
        onSubmit={handleSubmit}
        className="p-4 border rounded shadow bg-white"
        style={{ maxWidth: '400px', width: '100%' }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.img
          src={logo}
          alt="Your Logo"
          width="160px"
          height="auto"
          className="d-block mx-auto mb-3 rounded"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        <h1 className="h4 mb-3 text-center">{t('login_title')}</h1> {/* Translated Title */}

        {error && <p className="text-danger text-center fw-bold">{error}</p>}

        <motion.div className="form-floating mb-3" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <input
            type="text"
            className="form-control rounded-pill"
            id="floatingUsername"
            placeholder={t('username')} // Translated Placeholder
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="floatingUsername">{t('username')}</label> {/* Translated Label */}
        </motion.div>

        <motion.div className="form-floating mb-3" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <input
            type="password"
            className="form-control rounded-pill"
            id="floatingPassword"
            placeholder={t('password')} // Translated Placeholder
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="floatingPassword">{t('password')}</label> {/* Translated Label */}
        </motion.div>

        <motion.button
          type="submit"
          className="w-100 btn btn-lg btn-dark rounded-pill"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('login_btn')} {/* Translated Button */}
        </motion.button>

        <p className="mt-4 text-muted text-center">{t('footer_text')}</p> {/* Translated Footer */}
      </motion.form>
    </motion.main>
  );
};

export default Login;
