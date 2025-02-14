import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Sidebar_products from '../../sidebar/Sidebar_products'; 
import '../general.css';

// Import Images
import main_image from '../../../assets/images/Special/passenger.png';

import abstract_icon from '../../../assets/images/MMSH/certificates/abstract.png';

import first_news_image from '../../../assets/images/Special/passenger_luxury.png';
import second_news_image from '../../../assets/images/Special/passenger_ai.png';
import third_news_image from '../../../assets/images/Special/passenger_logis.png';
import fourth_news_image from '../../../assets/images/Special/passenger_sustainable.png';

import first_projects_image from '../../../assets/images/Special/passenger_global.png';
import second_projects_image from '../../../assets/images/Special/passenger_gps.png';

import vehicle_types from '../../../assets/images/for_pages/truck_table.png';

import cmr_1 from '../../../assets/images/for_pages/Trains/document_1.png';
import cmr_2 from '../../../assets/images/for_pages/Trains/document_2.png';
import cmr_3 from '../../../assets/images/for_pages/Trains/document_3.png';

// Import Components
import Geography from '../../objects/Geography_1'; 
import CompletedProjects from '../../objects/CompletedProjects';
import CargoTypes from '../../objects/CargoTypes';
import VehicleTypes from '../../objects/VehicleTypes';
import Capabilities from '../../objects/Capabilities';
import Advantages from '../../objects/Advantages';
import RegulationsDocumentation from '../../objects/RegulationsDocumentation';
// Import Expert image
import expert from '../../../assets/images/experts/expert_8.png';
// Import Expert image
const Passenger = () => {
  const { t } = useTranslation();

  // Data
  const projects = [
    { title: t('projects_19.items.0.title'), imgSrc: first_news_image },
    { title: t('projects_19.items.1.title'), imgSrc: second_news_image },
    { title: t('projects_19.items.2.title'), imgSrc: third_news_image },
    { title: t('projects_19.items.3.title'), imgSrc: fourth_news_image },
  ];

  const completedProjectsData = {
    title: t('completed_projects_19.title'),
    projects: [
      { title: t('completed_projects_19.items.0.title'), imgSrc: first_projects_image },
      { title: t('completed_projects_19.items.1.title'), imgSrc: second_projects_image },
    ]
  };

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

  // Card Animations
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const renderCard = (title, imgSrc) => (
    <motion.div 
      className="col-3" 
      key={title} 
      variants={cardVariants} 
      whileHover={{ scale: 1.05 }}
    >
      <div className="card shadow-sm rounded-lg overflow-hidden transform transition duration-300 hover:shadow-2xl">
        <img src={imgSrc} className="card-img-top" alt={title} width="250px" height="200px" />
        <div className="card-body bg-white text-center">
          <a href='#' style={{textDecoration: 'none', color: 'black'}}><p className="card-text font-semibold text-lg">{title}</p></a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div 
      className="page-container d-flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="main-content flex-grow-1">
        <motion.h3 className="text-2xl font-bold text-center mb-6">{t('title_19')}</motion.h3>

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
            <div className="card-body bg-gray-100 p-6">
              <h3 className="text-xl font-bold text-center">{t('intro_19.main_text_19')}</h3>
              
              <div className="text-gray-900 font-large leading-relaxed tracking-wide space-y-5 mt-5">
                <p>{t('intro_19.text_1')}</p>
              </div>


              {/* Animated Projects Section */}
              <motion.div 
                className="mt-6" 
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
              >
                <div className="row">{projects.map((project) => renderCard(project.title, project.imgSrc))}</div>
              </motion.div>

              {/* More Information */}
              <motion.h5 
                className="card-title mt-6 flex items-center justify-center text-lg font-semibold"
                whileHover={{ scale: 1 }}
                style={{marginTop: "20px"}}
              >
                <img src={abstract_icon} alt="indicator" className="w-8 mr-2" style={{height: '30px', marginLeft: '50px', marginRight: "10px"}}/>
                {t('more_info')}
              </motion.h5>

              {/* Sections */}
              <CompletedProjects projectsData={completedProjectsData} />
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
      <Sidebar_products name="Baxodir" 
                        image={expert}/>
    </motion.div>
  );
};

export default Passenger;

