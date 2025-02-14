import './Content.css';
import React from 'react';
import Career from '../components/mini_components/Career';
import News from '../components/mini_components/News';
import Special from '../components/mini_components/Special';
import Cards from '../components/mini_components/Cards';
import Carousel from '../components/mini_components/Carousel';
import FirstCarousel from '../components/mini_components/FirstCarousel';

// Here
import group from '../assets/images/Content_assets/logistics_ships.mp4';
import truck from '../assets/images/Content_assets/trucks.mp4';
import team from '../assets/images/Content_assets/responsible.mp4';
// Here

import right from '../assets/images/Content_assets/right.png';

import trains from '../assets/images/Content_assets/train_3.jpeg';
import trucks from '../assets/images/Content_assets/truck_3.jpeg';
import boats from '../assets/images/Content_assets/ship_3.png';
import air from '../assets/images/Content_assets/plane_3.png';
import multimodal from '../assets/images/Content_assets/logistics.png';
import collective from '../assets/images/Content_assets/collective.png';

import globe from '../assets/images/Content_assets/earth.png';
import completed from '../assets/images/Content_assets/check.png';
import directions from '../assets/images/Content_assets/directions.png';
import customer from '../assets/images/Content_assets/customer-review.png';
import relation from '../assets/images/Content_assets/deal.png';

import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import PlayfulText from '../components/mini_components/animations';

const Content = () => {
  const { t } = useTranslation();
  
  const images = [globe, completed, directions, customer, relation];
  const photos = [trains, trucks, boats, air, multimodal, collective];
  
  const write = [
    t('write.km'),
    t('write.done'),
    t('write.routes'),
    t('write.loaders'),
    t('write.drivers')
  ];
  const write_2 = [
    t('write_2.km_text'),
    t('write_2.done_text'),
    t('write_2.routes_text'),
    t('write_2.loaders_text'),
    t('write_2.drivers_text')
  ];
  const write_3 = [
    t('write_3.more'),
    t('write_3.see_statistics'),
    t('write_3.learn_more'),
    t('write_3.see'),
    t('write_3.check')
  ];
  const start_words = [
    t('start.train'),
    t('start.trucks'),
    t('start.boats'),
    t('start.air'),
    t('start.multimodal'),
    t('start.collective'),
  ];
  const big_words = [
    t('big.train'),
    t('big.trucks'),
    t('big.boats'),
    t('big.air'),
    t('big.multimodal'),
    t('big.collective'),
  ];
  const links = [
    'trains',
    'trucks', 
    'boats',
    'air',
    'multimodal',
    'multimodal'
  ];
  const special_links = [
    'Expensive',
    'reefer'
  ]

  const slides = [
    {
      heading: t('Responsible'),
      text: t('responsible'),
      button: t('request'),
      type: 'video',
      media: team,
    },
    {
      heading: t('Supportive'),
      text: t('supportive'),
      button: t('request'),
      type: 'video',
      media: group,
    },
    {
      heading: t('Comfortable'),
      text: t('comfortable'),
      button: t('request'),
      type: 'video',
      media: truck,
    },
  ];

  return (
    <div>
      {/* Carousel */}
      <FirstCarousel slides={slides} />

      <div className="container marketing">
        <Carousel images={images} write={write} write_2={write_2} write_3={write_3} />

        <hr className="featurette-divider" />
        {/* Text */}
        <div className="mb-3">
          <div className="album py-5 bg-color">
            <div className="container">
              <h3 className="fix_sizes">
                <span>
                  <img
                    src={right}
                    className="bd-placeholder-img"
                    width="25"
                    height="25"
                    alt="icon of text"
                    style={{marginRight: "10px"}}
                  />
                </span>
                {t('logo_text')}
              </h3>
              <PlayfulText text={t('about_mmsh')} />

              <Cards photos={photos} start_words={start_words} big_words={big_words} links={links}/>

              <Special special_links={special_links}/>

              <hr />
              
              <News />

              <hr />
              
              <Career />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
