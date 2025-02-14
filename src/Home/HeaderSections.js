import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './HeaderSections.css';

// Import individual assets (same as before)
import building from '../assets/images/Header_assets/HeaderSections_assets/building.png';
import history from '../assets/images/Header_assets/HeaderSections_assets/history.png';
import target from '../assets/images/Header_assets/HeaderSections_assets/diploma.png';

import boat from '../assets/images/Header_assets/HeaderSections_assets/boat.png';
import plane from '../assets/images/Header_assets/HeaderSections_assets/plane.png';
import train from '../assets/images/Header_assets/HeaderSections_assets/train.png';
import truck from '../assets/images/Header_assets/HeaderSections_assets/truck.png';
import world from '../assets/images/Header_assets/HeaderSections_assets/world.png';

import bread from '../assets/images/Header_assets/HeaderSections_assets/bread.png';
import doctors from '../assets/images/Header_assets/HeaderSections_assets/doctors.png';
import experiment from '../assets/images/Header_assets/HeaderSections_assets/experiment.png';
import groceries from '../assets/images/Header_assets/HeaderSections_assets/groceries.png';
import tech from '../assets/images/Header_assets/HeaderSections_assets/tech.png';
import trainers from '../assets/images/Header_assets/HeaderSections_assets/trainers.png';
import tools from '../assets/images/Header_assets/HeaderSections_assets/tools.png';

import car from '../assets/images/Header_assets/HeaderSections_assets/car.png';
import fridge from '../assets/images/Header_assets/HeaderSections_assets/fridge.png';
import kg from '../assets/images/Header_assets/HeaderSections_assets/kg.png';
import money from '../assets/images/Header_assets/HeaderSections_assets/money.png';
import container from '../assets/images/Header_assets/HeaderSections_assets/container.png';
import bottle from '../assets/images/Header_assets/HeaderSections_assets/bottle.png';

import cards from '../assets/images/Header_assets/HeaderSections_assets/cards.png';
import driver from '../assets/images/Header_assets/HeaderSections_assets/driver.png';
import stop from '../assets/images/Header_assets/HeaderSections_assets/stop.png';
import cash from '../assets/images/Header_assets/HeaderSections_assets/cash.png';

import ethics from '../assets/images/Header_assets/HeaderSections_assets/ethics.png';
import location from '../assets/images/Header_assets/HeaderSections_assets/location.png';
import expert from '../assets/images/Header_assets/HeaderSections_assets/expert.png';

import career from '../assets/images/Header_assets/HeaderSections_assets/career_2.png';
import vacancies from '../assets/images/Header_assets/HeaderSections_assets/vacancies.png';
import internship from '../assets/images/Header_assets/HeaderSections_assets/internship.png';

const HeaderSections = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const sections = [
    {
      title: t('sections.mmsh'),
      links: [
        { name: t('links.about_company'), path: '/about', icon: building },
        { name: t('links.history_mission'), path: '/history', icon: history },
        { name: t('links.certificates'), path: '/certificates', icon: target },
      ],
    },
    {
      title: t('sections.transport'),
      links: [
        { name: t('links.trucks'), path: '/trucks', icon: truck },
        { name: t('links.trains'), path: '/trains', icon: train },
        { name: t('links.ships'), path: '/boats', icon: boat },
        { name: t('links.air'), path: '/air', icon: plane },
        { name: t('links.multimodal'), path: '/multimodal', icon: world },
      ],
    },
    {
      title: t('sections.industry_solutions'),
      links: [
        { name: t('links.chemicals'), path: '/chemicals', icon: experiment },
        { name: t('links.technology'), path: '/technology', icon: tech },
        { name: t('links.groceries'), path: '/groceries', icon: groceries },
        { name: t('links.agriculture'), path: '/agricultural', icon: bread },
        { name: t('links.construction'), path: '/construction', icon: tools },
        { name: t('links.pharmaceuticals'), path: '/pharmaceuticals', icon: doctors },
        { name: t('links.fashion'), path: '/fashion', icon: trainers },
      ],
    },
    {
      title: t('sections.special_loads'),
      links: [
        { name: t('links.expensive'), path: '/expensive', icon: money },
        { name: t('links.passenger_cars'), path: '/passenger', icon: car },
        { name: t('links.liquid_cargo'), path: '/liquid', icon: bottle },
        { name: t('links.bulk_cargo'), path: '/bulk', icon: container },
        { name: t('links.heavy_cargo'), path: '/heavy', icon: kg },
        { name: t('links.reefer_cargo'), path: '/reefer', icon: fridge },
      ],
    },
    {
      title: t('sections.for_drivers'),
      links: [
        { name: t('links.carriers_office'), path: '/office', icon: driver },
        { name: t('links.payments'), path: '/payments', icon: cash },
        { name: t('links.movement_restrictions'), path: '/movement', icon: stop },
        { name: t('links.fuel_cards'), path: '/fuel', icon: cards },
      ],
    },
    {
      title: t('sections.contacts'),
      links: [
        { name: t('links.mmsh_offices'), path: '/MMSH_offices', icon: location },
        { name: t('links.contact_experts'), path: '/contact_experts', icon: expert },
        { name: t('links.business_ethics'), path: '/business_ethics', icon: ethics },
      ],
    },
    {
      title: t('sections.career'),
      links: [
        { name: t('links.career'), path: '/career', icon: career },
        { name: t('links.vacancies'), path: '/vacancies', icon: vacancies },
        { name: t('links.internship'), path: '/internship', icon: internship },
      ],
    },
  ];

  return (
    <div className="header-sections btns">
      <div className="header-row">
        {sections.map((section, index) => (
          <div 
            key={index} 
            className="header-item"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <button className="dropdown-toggle btn_custom stylish-btn">{section.title}</button>
            {section.links.length > 0 ? (
              <ul className={`dropdown-menu ${activeIndex === index ? 'show' : ''}`}>
                {section.links.map((link, idx) => (
                  <li key={idx} className="dropdown-item-container">
                    <a className="dropdown-item_make stylish-btn" href={link.path}>
                      {link.icon && (
                        <img src={link.icon} alt={link.name} className="me-2 icon" />
                      )}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="btns">
                <button 
                  className="mt-1 btn btn-dark btn_custom stylish-btn" 
                  onClick={() => navigate(section.button.path)}
                >
                  {section.button.name}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSections;
