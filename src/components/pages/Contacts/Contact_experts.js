import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Phone, Mail } from "lucide-react";
import "../general.css";

import main_image from "../../../assets/images/experts/experts_3.png";

import expert1 from "../../../assets/images/experts/expert_1.png";
import expert2 from "../../../assets/images/experts/expert_7.png";
import expert3 from "../../../assets/images/experts/expert_3.png";
import expert4 from "../../../assets/images/experts/expert_4.png";
import expert5 from "../../../assets/images/experts/expert_2.png";
import expert6 from "../../../assets/images/experts/expert_3_2.png";
import expert7 from "../../../assets/images/experts/expert_8.png";
import expert8 from "../../../assets/images/experts/expert_9.png";
import expert9 from "../../../assets/images/experts/expert_10.png";
import expert10 from "../../../assets/images/experts/expert_11.png";
import expert11 from "../../../assets/images/experts/expert_12.png";
import expert12 from "../../../assets/images/experts/expert_13.png";
import expert13 from "../../../assets/images/experts/expert_5.png";
import expert14 from "../../../assets/images/experts/expert_15.png";
import expert15 from "../../../assets/images/experts/expert_1111.png";


const ExpertCard = ({ expert }) => {
  const [showContact, setShowContact] = useState(false);
  const { t } = useTranslation();

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="col-lg-4 col-md-4 col-sm-6 d-flex flex-column align-items-center mb-4"
    >
      <motion.img 
        src={expert.photo} 
        alt={expert.name} 
        className="rounded-circle mb-3 shadow" 
        width="200" 
        height="200" 
        style={{ objectFit: "cover" }}
        whileHover={{ rotate: 5 }}
      />
      <h5 className="mb-1 text-center">{expert.name}</h5>
      <p className="text-muted mb-1 text-center" style={{ fontSize: "1rem", fontWeight: "bold" }}>{expert.expertise}</p>

      {showContact ? (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <p className="mb-1 d-flex align-items-center">
            <Phone size={18} className="me-2 text-dark" /> {expert.phone}
          </p>
          <p className="mb-1 d-flex align-items-center">
            <Mail size={18} className="me-2 text-dark" /> {expert.email}
          </p>
          <button className="btn btn-outline-dark btn-sm mt-2" onClick={() => setShowContact(false)}>{t('experts.Hide_Contact')}</button>
        </motion.div>
      ) : (
        <button className="btn btn-dark btn-sm mt-2" onClick={() => setShowContact(true)}>{t('experts.Contact')}</button>
      )}
    </motion.div>
  );
};

const ContactExperts = () => {
  const { t } = useTranslation();
  const expertsData = [
    { name: t('experts.john_doe.name'), expertise: t('experts.john_doe.expertise'), phone: "+998-90-766-1333", email: "sariko1986@mail.ru", photo: expert1 },
    { name: t('experts.jane_smith.name'), expertise: t('experts.jane_smith.expertise'), phone: "+998-93-278-8882", email: "hamidjanov1k@gmail.com", photo: expert2 },
    { name: t('experts.michael_lee.name'), expertise: t('experts.michael_lee.expertise'), phone: "+998-93-176-4838", email: "bekzod@mmsh-logistics@gmail.com", photo: expert3 },
    { name: t('experts.sophia_brown.name'), expertise: t('experts.sophia_brown.expertise'), phone: "+998-91-288-8484", email: "oynur0307@gmail.com", photo: expert4 },
    { name: t('experts.liam_garcia.name'), expertise: t('experts.liam_garcia.expertise'), phone: "+998-94-664-2788", email: "@gulchehraadhamjonova017@gmail.com", photo: expert5 },
    { name: t('experts.olivia_martinez.name'), expertise: t('experts.olivia_martinez.expertise'), phone: "+998-88-000-6515", email: "zuhraqudratillayeva3@gmail.com", photo: expert6 },
    { name: t('experts.william_harris.name'), expertise: t('experts.william_harris.expertise'), phone: "+998-88-838-5212", email: "kuldashevjon@mail.ru", photo: expert7 },
    { name: t('experts.emma_wilson.name'), expertise: t('experts.emma_wilson.expertise'), phone: "+998-99-600-7974", email: "khusanboyev_lead65@gmail.com", photo: expert8 },
    { name: t('experts.ethan_carter.name'), expertise: t('experts.ethan_carter.expertise'), phone: "+998-50-072-6038", email: "mmsh.uzb@gmail.com", photo: expert9 },
    { name: t('experts.ava_robinson.name'), expertise: t('experts.ava_robinson.expertise'), phone: "+998-94-017-0701", email: "munavvarrov_mmsh89@gmail.com", photo: expert10 },
    { name: t('experts.noah_adams.name'), expertise: t('experts.noah_adams.expertise'), phone: "+998-99-789-5077", email: "ismailovasilbek5@gmail.com", photo: expert11 },
    { name: t('experts.isabella_thompson.name'), expertise: t('experts.isabella_thompson.expertise'), phone: "+998-88-802-7788", email: "ibrohim.mavloniv@gmail.com", photo: expert12 },
    { name: t('experts.lucas_white.name'), expertise: t('experts.lucas_white.expertise'), phone: "+998-94-562-4282", email: "mmshlux@gmail.com", photo: expert13 },
    { name: t('experts.mia_johnson.name'), expertise: t('experts.mia_johnson.expertise'), phone: "+998-91-080-9988", email: "farux@mmshlogistics.com", photo: expert14 },
    { name: t('experts.benjamin_hall.name'), expertise: t('experts.benjamin_hall.expertise'), phone: "+998-93-838-0200", email: "kamoldinovziko5@gmail.com", photo: expert15 },
  ];

  return (
    <div className="container" style={{ maxWidth: "1600px", paddingLeft: "25px", paddingRight: "25px" }}>
      <h2 className="text-center" style={{ fontSize: "2rem", fontWeight: "bold" }}>{t('experts.Contact_with_Experts')}</h2>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="card shadow-lg border-0 rounded-3 overflow-hidden"
      >
        <motion.img 
          src={main_image} 
          className="card-img-top" 
          alt="Truck" 
          style={{ height: "450px", objectFit: "cover" }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="card-body">
          <div className="row text-center justify-content-center">
            {expertsData.map((expert, index) => (
              <ExpertCard key={index} expert={expert} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactExperts;