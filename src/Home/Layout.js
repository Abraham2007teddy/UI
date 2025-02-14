import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom'; // Use Outlet to display dynamic content
import { useStaff } from '../components/pages/Staff/StaffContext';
import Chatbot from './ChatBot';

const Layout = () => {
  const { isStaff } = useStaff();

  return (
    <div>
      <Header />
      {isStaff && <Sidebar />} {/* Conditionally render Sidebar for staff */}
      {/* Chatbot with API key and title customization */}
      <Chatbot 
        apiKey="AIzaSyCQQFQq_VO36Dl1GbuE4lPp9ERhVKmZfwY"
        title="MMSH Chat"
        themeColor="bg-purple-800"
      />
      <Outlet /> {/* This will render the page content dynamically */}
      <Footer />          
    </div>
  );
};

export default Layout;
