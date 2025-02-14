import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Carousel = ({ images, write, write_2, write_3 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div 
      ref={ref}
      className="row"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      {[1, 2, 3, 4, 5].map((col) => (
        <motion.div 
          key={col} 
          className="col-5-cols"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: col * 0.2 }}
        >
          <motion.img
            src={images[col - 1]}
            className="bd-placeholder-img rounded-circle"
            width="100"
            height="100"
            alt={`Column ${col}`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: col * 0.3 }}
          >
            {write[col - 1]}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: col * 0.4 }}
          >
            {write_2[col - 1]}
          </motion.p>
          <motion.p 
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a className="btn btn-outline-dark" href="#">
              {write_3[col - 1]} &raquo;
            </a>
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Carousel;