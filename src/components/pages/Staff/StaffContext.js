import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a Context
const StaffContext = createContext();

// Create a Provider component
export const StaffProvider = ({ children }) => {
  const [isStaff, setIsStaff] = useState(false);

  useEffect(() => {
    const storedStaffStatus = localStorage.getItem("isStaff");
    if (storedStaffStatus) {
      setIsStaff(storedStaffStatus === "true");
    }
  }, []);

  // Function to update staff status and save to localStorage
  const updateStaffStatus = (status) => {
    setIsStaff(status);
    localStorage.setItem("isStaff", status ? "true" : "false");
  };

  return (
    <StaffContext.Provider value={{ isStaff, updateStaffStatus }}>
      {children}
    </StaffContext.Provider>
  );
};

// Custom hook to use the StaffContext
export const useStaff = () => {
  return useContext(StaffContext);
};
