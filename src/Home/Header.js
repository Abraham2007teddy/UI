import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTelegram, FaInstagram, FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';
import mmshIcon from '../assets/images/Header_assets/logo.png';
import { useTranslation } from 'react-i18next';
import LanguageContext from './context/LanguageContext'; // Import Language Context
import HeaderSections from './HeaderSections';

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: "0px 4px 12px rgba(255, 255, 255, 0.6)", transition: { duration: 0.3 } },
};

const Header = () => {
  const { t } = useTranslation();
  const { selectedLanguage, changeLanguage } = useContext(LanguageContext); // Use global language state

  const [selectedOffice, setSelectedOffice] = useState(localStorage.getItem('selectedOffice') || 'office1');

  const [showOfficeDropdown, setShowOfficeDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const officeDropdownRef = useRef(null);
  const languageDropdownRef = useRef(null);

  const offices = {
    office1: { name: t('header.Andijon'), phone: '998-98-000-8866' },
    office2: { name: t('header.Alashankou'), phone: '998-98-000-8866' },
    office3: { name: t('header.Tashkent'), phone: '998-88-838-8886' },
  };

  const languages = {
    en: 'English',
    ru: 'Русский',
    uz: "O'zbek",
    chn: "普通话",
  };

  const changeOffice = (office) => {
    setSelectedOffice(office);
    localStorage.setItem('selectedOffice', office);
    setShowOfficeDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (officeDropdownRef.current && !officeDropdownRef.current.contains(event.target)) {
        setShowOfficeDropdown(false);
      }
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setShowLanguageDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="fixed-top border-bottom shadow-sm" style={{ height: '80px', backgroundColor: 'black', color: 'white' }}>
        <div className="d-flex justify-content-between align-items-center w-100 py-2 px-4">
          
          {/* Left Side - Logo with Glow */}
          <div className="d-flex align-items-center">
            <Link to="/" className="d-flex align-items-center" style={{ textDecoration: 'none', color: 'white' }}>
              <img 
                src={mmshIcon} 
                alt="MMSH Logo" 
                className="rounded-circle me-2"
                style={{
                  marginTop: "2px",
                  width: '60px',
                  height: '60px',
                  border: '2px solid white',
                  boxShadow: '0px 0px 12px rgba(255, 255, 255, 0.8)',
                  borderRadius: '50%'
                }}
              />
              <span className="fw-bold" style={{ fontSize: "25px" }}>MMSH</span>
            </Link>
          </div>

          {/* Center - Social Media Icons */}
          <div className="d-flex justify-content-center align-items-center flex-grow-1" style={{ gap: '15px', marginLeft: "310px" }}>
            {[
              { href: "https://telegram.me/logistikammsh", icon: <FaTelegram /> },
              { href: "https://www.instagram.com/mmshlogistics?igsh=MW9mbjd0aXB0Y2xpdw==", icon: <FaInstagram /> },
              { href: "https://mail.google.com/mail/?view=cm&fs=1&to=info@mmshlogistics.com", icon: <FaEnvelope /> },
              { href: "https://wa.me/998945624282", icon: <FaWhatsapp /> }
            ].map((item, index) => (
              <motion.a 
                key={index} 
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ fontSize: '27px', color: 'white', transition: 'all 0.3s ease-in-out' }}
                whileHover={{ scale: 1.3, color: "#f8f9fa" }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          {/* Right Side - Phone Number, Office & Language Dropdowns */}
          <div className="d-flex align-items-center gap-3">
            
            {/* Phone Number & Icon */}
            {offices[selectedOffice] && (
              <span className="fw-bold d-flex align-items-center" style={{ color: "white", fontSize: "18px" }}>
                <FaPhone className="me-2" style={{ fontSize: '18px', color: 'white' }} />
                +{offices[selectedOffice].phone}
              </span>
            )}

            {/* Office Dropdown (Restored) */}
            <div className="position-relative" ref={officeDropdownRef}>
              <motion.button
                className="btn btn-light fw-bold"
                type="button"
                onClick={() => setShowOfficeDropdown(!showOfficeDropdown)}
                variants={buttonVariants}
                whileHover="hover"
                style={{ width: '120px', height: '40px', borderRadius: '10px', color: 'black' }}
              >
                {offices[selectedOffice]?.name}
              </motion.button>
              {showOfficeDropdown && (
                <ul className="dropdown-menu show position-absolute shadow-sm"
                    style={{ backgroundColor: "#222", borderRadius: "10px", top: "50px", zIndex: 10 }}>
                  {Object.keys(offices).map((key) => (
                    <li key={key}>
                      <button className="dropdown-item text-white bg-transparent border-0" onClick={() => changeOffice(key)}>
                        {offices[key].name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Language Dropdown */}
            <div className="position-relative" ref={languageDropdownRef}>
              <motion.button
                className="btn btn-light fw-bold"
                type="button"
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                variants={buttonVariants}
                whileHover="hover"
                style={{ width: '120px', height: '40px', borderRadius: '10px', color: 'black' }}
              >
                {languages[selectedLanguage]}
              </motion.button>
              {showLanguageDropdown && (
                <ul className="dropdown-menu show position-absolute shadow-sm"
                    style={{ backgroundColor: "#222", borderRadius: "10px", top: "50px", zIndex: 10 }}>
                  {Object.keys(languages).map((key) => (
                    <li key={key}>
                      <button className="dropdown-item text-white bg-transparent border-0" onClick={() => changeLanguage(key)}>
                        {languages[key]}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

          </div>
        </div>
      </header>
      <HeaderSections />
    </>
  );
};

export default Header;
