import React, { createContext, useState, useEffect } from 'react';
import i18n from '../../components/Controls/TableControls/i18n';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage') || 'en');

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  const changeLanguage = (lng) => {
    setSelectedLanguage(lng);
    localStorage.setItem('selectedLanguage', lng);
    i18n.changeLanguage(lng);
  };

  return (
    <LanguageContext.Provider value={{ selectedLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
