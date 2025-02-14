import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; // Import icons
import Additional from '../../sidebar/additional'; 
import '../general.css';

// Import Images
import main_image from '../../../assets/images/for_pages/vacancy_make.png';

// Dummy Vacancies Data
const vacanciesData = [
  { vacancy: "Logistics Manager", audience: "Manager", jobCategory: "Logistics", location: "Milan", active: true },
  { vacancy: "IT Specialist", audience: "Professional", jobCategory: "IT", location: "Kyoto", active: false },
  { vacancy: "Dispatcher", audience: "Professional", jobCategory: "Transportation", location: "Andijon", active: true },
  { vacancy: "Marketing Executive", audience: "Professional", jobCategory: "Marketing", location: "Moscow", active: false },
  { vacancy: "Senior Logistics Expert", audience: "Professional", jobCategory: "Logistics", location: "Ohio", active: true },
  { vacancy: "Freight Dispatcher", audience: "Professional", jobCategory: "Transportation", location: "Alashankou", active: true },
  { vacancy: "Logistics Coordinator", audience: "Professional", jobCategory: "Logistics", location: "Kyoto", active: true },
  { vacancy: "Full-stack Developer", audience: "Professional", jobCategory: "IT", location: "Milan", active: true },
  { vacancy: "Head of Marketing", audience: "Manager", jobCategory: "Marketing", location: "Moscow", active: false },
  { vacancy: "Operations Manager", audience: "Professional", jobCategory: "Logistics", location: "Andijon", active: true },
  { vacancy: "Supply Chain Head", audience: "Manager", jobCategory: "Logistics", location: "Ohio", active: false },
];

const Vacancies = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVacancies = vacanciesData.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <motion.div 
      className="page-container d-flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="main-content flex-grow-1">
        <motion.h3 className="text-2xl font-bold text-center mb-6">{t('title_27', 'Career Opportunities at MMSH')}</motion.h3>

        <motion.div 
          className="col-sm-6 col-lg-4 mb-4 mx-auto" 
          style={{ width: '1230px' }}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="card rounded-xl shadow-xl overflow-hidden bg-white">
            <img 
              src={main_image} 
              className="bd-placeholder-img card-img-top" 
              width="100%" 
              height="300" 
              alt="Vacancies"
            />
            <div className="card-body p-6">
              <h3 className="text-xl font-bold text-center">{t('intro_27.main_text_27', 'Join Our Team')}</h3>
              
              <div className="text-gray-900 font-large leading-relaxed tracking-wide space-y-5 mt-5">
                <p>{t('intro_27.text_1', 'Explore exciting opportunities with us.')}</p>
              </div>

              {/* Search Bar */}
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control shadow-sm"
                  placeholder={t('search_vacancies')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Job Vacancies Table */}
              <div className="table-responsive">
                <motion.table 
                  className="table table-striped table-hover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <thead className="text-light" style={{ background: '#333' }}>
                    <tr>
                      <th className="p-3">{t('vacancy', 'Vacancy')}</th>
                      <th className="p-3">{t('audience', 'Audience')}</th>
                      <th className="p-3">{t('job_category', 'Job Category')}</th>
                      <th className="p-3">{t('location', 'Location')}</th>
                      <th className="p-3">{t('active', 'Active')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredVacancies.length > 0 ? (
                      filteredVacancies.map((item, index) => (
                        <motion.tr 
                          key={index}
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <td className="text-dark fw-bold p-3">{item.vacancy}</td>
                          <td className="p-3">{item.audience}</td>
                          <td className="p-3">{item.jobCategory}</td>
                          <td className="p-3">{item.location}</td>
                          <td>
                            {item.active ? 
                              <FaCheckCircle className="text-dark fs-5" title="Active" /> : 
                              <FaTimesCircle className="text-dark fs-5" title="Not Active" />
                            }
                          </td>
                        </motion.tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-center text-muted">{t('no_vacancies_found', 'No vacancies found')}</td>
                      </tr>
                    )}
                  </tbody>
                </motion.table>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Additional />
    </motion.div>
  );
};

export default Vacancies;
