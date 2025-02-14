import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import "./Sidebar_products.css"; // Import the CSS for Sidebar

import boat from "../../assets/images/Header_assets/HeaderSections_assets/boat.png";
import plane from "../../assets/images/Header_assets/HeaderSections_assets/plane.png";
import train from "../../assets/images/Header_assets/HeaderSections_assets/train.png";
import truck from "../../assets/images/Header_assets/HeaderSections_assets/truck.png";
import world from "../../assets/images/Header_assets/HeaderSections_assets/world.png";
import personImage from "../../assets/images/Header_assets/HeaderSections_assets/person.png"; // Default image

// Sidebar Button Component
const SidebarButton = ({ href, text, icon }) => (
  <a href={href} className="sidebar-btn">
    {icon && <img src={icon} alt={text} className="sidebar-btn-icon" />}
    {text}
  </a>
);

SidebarButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

// Specialist Component
const Specialist = ({ name, image }) => (
  <div className="circle-image-container">
    <img src={image} alt={name} className="circle-image" />
    <h5 className="mt-3">{name}</h5>
  </div>
);

Specialist.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const Sidebar_products = ({ name = "Gordon Ramsey", image = personImage }) => {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNextStep = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8003/api/send-message/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error(t("submission_failed"));
      setSubmitted(true);
      setTimeout(() => setStep(3), 1000);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sidebar">
      <div className="form-container">
        <Specialist name={name} image={image}/>
        <p>{t("fill_form_specialist")}</p>

        <div className="progress">
          <div className="progress-bar bg-dark" style={{ width: `${(step / 3) * 100}%` }}></div>
        </div>

        {!submitted ? (
          <div>
            {step === 0 && (
              <div>
                <label>{t("your_question")}</label>
                <input type="text" name="question" value={formData.question} onChange={handleChange} className="form-control" />
                <button onClick={handleNextStep} className="btn btn-dark mt-2">{t("next")}</button>
              </div>
            )}
            {step === 1 && (
              <div>
                <label>{t("your_name")}</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" />
                <button onClick={handleNextStep} className="btn btn-dark mt-2">{t("next")}</button>
              </div>
            )}
            {step === 2 && (
              <div>
                <label>{t("your_email")}</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
                <button onClick={handleSubmit} className="btn btn-dark mt-2" disabled={loading}>
                  {loading ? t("submitting") : t("submit")}
                </button>
              </div>
            )}
          </div>
        ) : (
          <p>{t("thank_you")}</p>
        )}
      </div>

      <h5>{t("logistics_solutions")}</h5>
      <SidebarButton href="trucks" text={t("trucks")} icon={truck} />
      <SidebarButton href="trains" text={t("trains")} icon={train} />
      <SidebarButton href="boats" text={t("ships")} icon={boat} />
      <SidebarButton href="air" text={t("air")} icon={plane} />
      <SidebarButton href="multimodal" text={t("multimodal")} icon={world} />

      <h5 className="mt-5">{t("additional_services")}</h5>
      <SidebarButton href="Consulting" text={t("consulting")} />
      <SidebarButton href="Customs_Services" text={t("customs_services")} />
      <SidebarButton href="Insurance" text={t("insurance")} />
      <SidebarButton href="Project_Logistics" text={t("project_logistics")} />
      <SidebarButton href="Warehouse_Services" text={t("warehouse_services")} />
    </div>
  );
};

export default Sidebar_products;