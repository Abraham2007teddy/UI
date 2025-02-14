import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Home/Layout'; // Layout component for header, sidebar, and dynamic content
import Content from './Home/Content'; // Main content page

// Import MMSH pages
import About from './components/pages/MMSH/about';
import History from './components/pages/MMSH/history';
import Certificates from './components/pages/MMSH/certificates';
// Import MMSH pages

// Import Transport and Services pages
import Air from './components/pages/Transport/Air';
import Boats from './components/pages/Transport/Boats';
import Multimodal from './components/pages/Transport/Multimodal';
import Trains from './components/pages/Transport/Trains';
import Trucks from './components/pages/Transport/Trucks';
// Import Transport and Services pages

// Import Indsutry Solutions pages
import Chemicals from './components/pages/Industry/Chemicals';
import Agricultural from './components/pages/Industry/Agricultural';
import Construction from './components/pages/Industry/Construction';
import Fashion from './components/pages/Industry/Fashion';
import Groceries from './components/pages/Industry/Groceries';
import Pharmaceuticals from './components/pages/Industry/Pharmaceuticals';
import Technology from './components/pages/Industry/Technology';
// Import Indsutry Solutions pages

// Special Loads
import Bulk from './components/pages/Special/Bulk';
import Expensive from './components/pages/Special/Expensive';
import Heavy from './components/pages/Special/Heavy';
import Liquid from './components/pages/Special/Liquid';
import Passenger from './components/pages/Special/Passenger';
import Reefer from './components/pages/Special/Reefer';
// Special Loads

// For Drivers
import Fuel from './components/pages/Drivers/Fuel';
import Movement from './components/pages/Drivers/Movement';
import Office from './components/pages/Drivers/Office';
import Payments from './components/pages/Drivers/Payments';
// For Drivers

// Contacts
import BusinessEthics from './components/pages/Contacts/Business_ethics';
import ContactExperts from './components/pages/Contacts/Contact_experts';
import MMSHoffices from './components/pages/Contacts/MMSH_offices';
// Contacts

// Career
import Career from './components/pages/Career/Career';
import Internship from './components/pages/Career/Internship';
import Vacancies from './components/pages/Career/Vacancies';
// Career

// Request_for_cargo
import RequestForCargo from './components/pages/Transportation/Request_for_cargo';
import CargoList from './components/pages/Transportation/Check_list_requests';
import CargoDetail from './components/pages/Transportation/Check_cargo_detail';
import Succes from './components/pages/Transportation/succes';
// Request_for_cargo

// For Staff
import Login from './components/pages/Staff/Register';
import CodeVerify from './components/pages/Staff/Code_verify';
import CodeVerifyError from './components/pages/Staff/Wrong'
import { StaffProvider } from './components/pages/Staff/StaffContext';
import Profile from './components/pages/Staff/Profile';
// For Staff

//Phone numbers and contacts
import Contacts from './components/pages/Numbers/Contacts';
//Phone numbers and contacts

// Messages
import Messages from './components/pages/Messages/Messages';
// Messages

// Additional
import Consulting from './components/additional/Consulting';
import CustomsServices from './components/additional/Customs_Services';
import Insurance from './components/additional/Insurance';
import ProjectLogistics from './components/additional/Project_Logistics';
import WarehouseServices from './components/additional/Warehouse_Services';
// Additional 


// Language Translation
import { LanguageProvider } from '../src/Home/context/LanguageContext';
// Language Translation

const App = () => {
  return (
    <StaffProvider>
    <LanguageProvider>
    <Router>
      <Routes>
        {/* Define the layout for all pages */}
        <Route path="/" element={<Layout />}>
          {/* Define individual page routes */}
          <Route index element={<Content />} /> {/* Default page */}
          {/* MMSH */}
            <Route path="about" element={<About />} />
            <Route path="history" element={<History />} />
            <Route path="certificates" element={<Certificates />} />
          {/* MMSH */}
          {/* Transport and Services  */}
            <Route path="air" element={<Air />} />
            <Route path="boats" element={<Boats />} />
            <Route path="multimodal" element={<Multimodal />} />
            <Route path="trains" element={<Trains />} />
            <Route path="trucks" element={<Trucks />} />
          {/* Transport and Services  */}

          {/* Industry solutions */}
            <Route path="chemicals" element={<Chemicals />} />
            <Route path="agricultural" element={<Agricultural />} />
            <Route path="construction" element={<Construction/>} />
            <Route path="technology" element={<Technology />} />
            <Route path="Pharmaceuticals" element={<Pharmaceuticals />} />
            <Route path="fashion" element={<Fashion />} />
            <Route path="groceries" element={<Groceries />} />
          {/* Industry solutions */}

          {/* Special Loads */}
            <Route path="bulk" element={<Bulk />} />
            <Route path="Expensive" element={<Expensive />} />
            <Route path="heavy" element={<Heavy />} />
            <Route path="liquid" element={<Liquid />} />
            <Route path="passenger" element={<Passenger />} />
            <Route path="reefer" element={<Reefer />} />
          {/* Special Loads */}

          {/* For Drivers */}
            <Route path="fuel" element={<Fuel />} />
            <Route path="movement" element={<Movement />} />
            <Route path="office" element={<Office />} />
            <Route path="payments" element={<Payments />} />
          {/* For Drivers */}

          {/* Contacts */}
            <Route path="business_ethics" element={<BusinessEthics />} />
            <Route path="contact_experts" element={<ContactExperts />} />
            <Route path="MMSH_offices" element={<MMSHoffices />} />
          {/* Contacts */}

          {/* Career */}
            <Route path="career" element={<Career />} />
            <Route path="internship" element={<Internship />} />
            <Route path="vacancies" element={<Vacancies />} />
          {/* Career */}

          {/* Request for cargo */}
            <Route path="request_for_cargo" element={<RequestForCargo />} />
            <Route path="Succes" element={<Succes />} />
            <Route path="cargo" element={<CargoList />} />
            <Route path="cargo/:id" element={<CargoDetail />} />

          {/* Request for cargo */}

          {/* For Staff */}
            <Route path="register" element={<Login />} />
            <Route path="codeVerify" element={<CodeVerify />} />
            <Route path="codeVerifyError" element={<CodeVerifyError />} />
            <Route path="profile" element={<Profile/>} />
          {/* For Staff */}

          {/* Phone number and contacts */}
            <Route path="contacts_number" element={<Contacts/>} />
          {/* Phone number and contacts */}

          {/* Messages */}
            <Route path="messages" element={<Messages/>} />
          {/* Messages */}

          {/* additional */}
            <Route path="Consulting" element={<Consulting/>} />
            <Route path="Customs_Services" element={<CustomsServices/>} />
            <Route path="Insurance" element={<Insurance/>} />
            <Route path="Project_Logistics" element={<ProjectLogistics/>} />
            <Route path="Warehouse_Services" element={<WarehouseServices/>} />
          {/* additional */}
      
        </Route>
      </Routes>
    </Router>
    </LanguageProvider>
    </StaffProvider>
  );
};

export default App;
