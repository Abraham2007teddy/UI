import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.05, delayChildren: 0.3 },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } },
  hover: { y: -5, rotate: 5, color: "#ff5733", transition: { type: "spring", stiffness: 200 } },
};

const PlayfulText = ({ text }) => {
  return (
    <motion.p 
      className="margin-bottom-make text-center fw-bold"
      style={{ fontSize: "1.4rem", lineHeight: "2.5rem", wordSpacing: "5px" }} // Increased font size & spacing
      variants={textVariants}
      initial="hidden"
      animate="visible"
    >
      {text.split(" ").map((word, index) => (
        <span key={index} style={{ display: "inline-block", marginRight: "8px" }}> {/* Ensuring word spacing */}
          {word.split("").map((char, charIndex) => (
            <motion.span 
              key={charIndex} 
              variants={letterVariants} 
              whileHover="hover"
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.p>
  );
};

export default PlayfulText;
