import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Sidebar from '../../sidebar/Sidebar'; 
import '../general.css';

// Import Images
import main_image from '../../../assets/images/Drivers/salary_3.png';
import abstract_icon from '../../../assets/images/MMSH/certificates/abstract.png';
import vehicle_types from '../../../assets/images/for_pages/truck_table.png';
import cmr_1 from '../../../assets/images/for_pages/Trains/document_1.png';
import cmr_2 from '../../../assets/images/for_pages/Trains/document_2.png';
import cmr_3 from '../../../assets/images/for_pages/Trains/document_3.png';

// Import Components
import Geography from '../../objects/Geography_1'; 
import CargoTypes from '../../objects/CargoTypes';
import VehicleTypes from '../../objects/VehicleTypes';
import Capabilities from '../../objects/Capabilities';
import Advantages from '../../objects/Advantages';
import RegulationsDocumentation from '../../objects/RegulationsDocumentation';

const Payments = () => {
  const { t } = useTranslation();
  
  const data = t('locations.data', { returnObjects: true });
  const data2 = t('locations.data2', { returnObjects: true });

  const cargoData = {
    title: t('cargo_types.title'),
    description: t('cargo_types.description'),
    items: t('cargo_types.items', { returnObjects: true })
  };

  const vehicleData = {
    title: t('vehicle_types.title'),
    image: vehicle_types,
    description: t('vehicle_types.description'),
    items: t('vehicle_types.items', { returnObjects: true })
  };

  const capabilitiesData = {
    title: t('capabilities.title'),
    description: t('capabilities.description'),
    items: t('capabilities.items', { returnObjects: true }),
    finalNote: t('capabilities.final_note')
  };

  const regulationsData = {
    title: t('regulations.title'),
    images: [
      { src: cmr_1, alt: 'CMR Document' },
      { src: cmr_2, alt: 'CMR Document 2' },
      { src: cmr_3, alt: 'CMR Document 3' }
    ],
    description: t('regulations.description'),
    regulationsList: t('regulations.list', { returnObjects: true }),
    conclusion: t('regulations.conclusion')
  };

  return (
    <motion.div 
      className="page-container d-flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="main-content flex-grow-1">
        <motion.h3 className="text-2xl font-bold text-center mb-6">{t('title_22')}</motion.h3>

        <motion.div 
          className="col-sm-6 col-lg-4 mb-4 mx-auto" 
          style={{ width: '1230px' }}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="card rounded-xl shadow-xl overflow-hidden">
            <img 
              src={main_image} 
              className="bd-placeholder-img card-img-top" 
              width="100%" 
              height="300" 
              alt="Truck"
            />

            <h3 className="text-xl font-bold text-center mt-2">{t('intro_22.main_text_22')}</h3>
            <p className='m-3'>{t('intro_22.text_1')}</p>

            <div className="card-body bg-gray-100">
              <table className="border-collapse border border-gray-300"
                style={{ margin: "20px", padding: "10px", width: "95%" }}>
                <thead>
                  <tr className="bg-dark text-white">
                    <th className="border border-gray-300 px-4 py-2">{t('locations.city')}</th>
                    <th className="border border-gray-300 px-4 py-2">{t('locations.phone_number')}</th>
                    <th className="border border-gray-300 px-4 py-2">{t('locations.city')}</th>
                    <th className="border border-gray-300 px-4 py-2">{t('locations.phone_number')}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => {
                    const secondRow = data2[index] || { country: "", city: "", phone: "" }; // Placeholder if missing
                    return (
                      <tr key={index} className="border border-gray-300">
                        {/* First Column (City + Flag) */}
                        <td className="border border-gray-300 px-4 py-2 flex items-center">
                          {row.country && (
                            <img 
                              src={`https://flagcdn.com/w40/${row.country}.png`} 
                              alt={row.city} 
                              className="w-6 h-4 mr-2"
                              style={{ marginRight: "10px" }}
                            />
                          )}
                          {row.city}
                        </td>
                        {/* First Column (Phone) */}
                        <td className="border border-gray-300 px-4 py-2">{row.phone}</td>

                        {/* Second Column (City + Flag) */}
                        <td className="border border-gray-300 px-4 py-2 flex items-center">
                          {secondRow.country && (
                            <img 
                              src={`https://flagcdn.com/w40/${secondRow.country}.png`} 
                              alt={secondRow.city} 
                              className="w-6 h-4 mr-2"
                              style={{ marginRight: "10px" }}
                            />
                          )}
                          {secondRow.city}
                        </td>
                        {/* Second Column (Phone) */}
                        <td className="border border-gray-300 px-4 py-2">{secondRow.phone}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>



              <motion.h5 
                  className="card-title mt-6 flex items-center justify-center text-lg font-semibold"
                  whileHover={{ scale: 1 }}
                  style={{marginTop: "20px"}}
                >
                <img src={abstract_icon} alt="indicator" className="w-8 mr-2" style={{height: '30px', marginLeft: '50px', marginRight: "10px"}}/>
                  {t('more_info')}
              </motion.h5>
              {/* Sections */}
              <CargoTypes cargoData={cargoData} />
              <VehicleTypes vehicleData={vehicleData} />
              <Geography />
              <Capabilities capabilitiesData={capabilitiesData} />
              <Advantages />
              <RegulationsDocumentation regulationsData={regulationsData} />
            </div>
          </div>
        </motion.div>
      </div>
      <Sidebar />
    </motion.div>
  );
};

export default Payments;
