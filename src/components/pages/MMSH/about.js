import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './about.css'; // Include your CSS for styling

import quality from '../../../assets/images/MMSH/about/quality.png';
import innovation from '../../../assets/images/MMSH/about/innovation.png';
import good from '../../../assets/images/MMSH/about/good.png';
import help from '../../../assets/images/MMSH/about/help.png';
import ambitious from '../../../assets/images/MMSH/about/ambitious.png';
import association from '../../../assets/images/MMSH/about/association.png';

const About = () => {
  const { t } = useTranslation();
  const [expandedBlog, setExpandedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: t('quality', 'Quality'),
      shortDescription: t('quality_short', 'MMSH Logistics ensures top-quality, safe, and efficient shipments.'),
      fullDescription: t('quality_full', 'At MMSH Logistics, quality control is at the heart of everything we do...'),
      image: quality,
    },
    {
      id: 2,
      title: t('caring_nature', 'Caring Nature'),
      shortDescription: t('caring_nature_short', 'We prioritize sustainability and eco-friendly practices in every aspect of our operations.'),
      fullDescription: t('caring_nature_full', 'At MMSH Logistics, we are committed to sustainability...'),
      image: good,
    },
    {
      id: 3,
      title: t('assistance', 'Assistance'),
      shortDescription: t('assistance_short', 'A brief overview of this blog post.'),
      fullDescription: t('assistance_full', 'At MMSH Logistics, we pride ourselves on being a helpful partner to our clients...'),
      image: help,
    },
    {
      id: 4,
      title: t('innovations', 'Innovations'),
      shortDescription: t('innovations_short', 'Our company is open to new ideas.'),
      fullDescription: t('innovations_full', 'At MMSH Logistics, we embrace innovation as a core element of our operations...'),
      image: innovation,
    },
    {
      id: 5,
      title: t('associations_about', 'Associations'),
      shortDescription: t('associations_short', 'MMSH Logistics partners with globally recognized companies to offer top-tier logistics solutions.'),
      fullDescription: t('associations_full', 'MMSH Logistics works closely with world-renowned companies to deliver superior logistics solutions...'),
      image: association,
    },
    {
      id: 6,
      title: t('forward_thinking', 'Forward-thinking'),
      shortDescription: t('forward_thinking_short', 'Our company focuses on growth, innovation, and global expansion.'),
      fullDescription: t('forward_thinking_full', 'Our company is focused on long-term growth and continuous improvement...'),
      image: ambitious,
    },
  ];

  const toggleExpand = (id) => {
    setExpandedBlog(expandedBlog === id ? null : id);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 fst-italic">{t('header_title', 'Safe, ambitious, and efficient shipping company.')}</h1>
          <p className="lead my-3">{t('header_description', 'MMSH Logistics is a reliable and efficient shipping company, dedicated to providing safe and innovative transportation solutions.')}</p>
        </div>
      </div>

      {/* Blog Posts */}
      <h1 className="margin_left_make">{t('about_company', 'About Company')}</h1>
      <div className="row">
        {blogs.map((blog) => (
          <div key={blog.id} className="col-md-6 mb-0">
            <div className="row g-0 border rounded overflow-hidden shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h3 className="mb-0">{blog.title}</h3>
                <p className="mb-auto mt-2 mb-2">
                  {expandedBlog === blog.id ? blog.fullDescription : blog.shortDescription}
                </p>
                <button
                  onClick={() => toggleExpand(blog.id)}
                  className="btn btn-outline-dark p-0 mt-2"
                  style={{height: "30px", fontWeight: "bold"}}
                >
                  {expandedBlog === blog.id ? t('read_less', 'Read Less') : t('read_more', 'Read More')}
                </button>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="bd-placeholder-img"
                  width="300"
                  height="200"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
