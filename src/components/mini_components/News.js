import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import trucks_new from '../../assets/images/mini_components_assets/truck_4.png';
import career from '../../assets/images/mini_components_assets/career.png';

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  hover: { scale: 1.05, transition: { duration: 0.3 } }
};

const buttonVariant = {
  hover: { scale: 1.1, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)", transition: { duration: 0.3 } }
};

const News = () => {
  const { t } = useTranslation();
  
  const newsData = [
    {
      id: 1,
      title: t('News.Growth_in_MMSH'),
      date: "1.20.2025",
      text: t('News.text_1'),
      fullText: t('News.full_text_1'),
      image: trucks_new,
    },
    {
      id: 2,
      title: t('News.MMSH_is'),
      date: "1.24.2025",
      text: t('News.text_2'),
      fullText: t('News.full_text_2'),
      image: career,
    },
  ];

  // State to track expanded text for each news item
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (id) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the expanded state for the specific news item
    }));
  };

  return (
    <div className="container my-5">
      <motion.h2
        className="fw-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t('News.News_in_Company')}
      </motion.h2>

      {newsData.map((news) => (
        <motion.div
          key={news.id}
          className="row my-5 align-items-center"
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="col-md-4">
            <motion.img
              src={news.image}
              className="img-fluid rounded fix_image"
              alt={news.title}
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            />
          </div>
          <div className="col-md-8">
            <h3>
              <span className="text-decoration-none color_give">{news.title}</span>
            </h3>
            <p className="text-muted mb-2">{t('News.News_of_MMSH')}</p>
            <p className="text-muted">{news.date}</p>
            <p>{news.text}</p>

            {/* Conditionally render the full text with an animation when expanded */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: expandedItems[news.id] ? 1 : 0,
                height: expandedItems[news.id] ? 'auto' : 0
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{
                overflow: 'hidden',
                marginTop: '0', // Ensuring no gap between texts
              }}
            >
              <p>{news.fullText}</p>
            </motion.div>


            {/* Button to toggle the expanded view */}
            <motion.button
              className="btn btn-outline-dark"
              variants={buttonVariant}
              whileHover="hover"
              onClick={() => toggleExpand(news.id)} // Pass the specific news item ID to toggle its state
            >
              {expandedItems[news.id] ? t('News.show_less') : t('News.learn_more')} &#8250;
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default News;
