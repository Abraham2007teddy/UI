import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import "./Sidebar.css"; // Import the CSS for Sidebar

// Sidebar Images
import boat from "../../assets/images/Header_assets/HeaderSections_assets/boat.png";
import plane from "../../assets/images/Header_assets/HeaderSections_assets/plane.png";
import train from "../../assets/images/Header_assets/HeaderSections_assets/train.png";
import truck from "../../assets/images/Header_assets/HeaderSections_assets/truck.png";
import world from "../../assets/images/Header_assets/HeaderSections_assets/world.png";

const SidebarButton = ({ href, text, icon }) => {
  return (
    <a href={href} className="sidebar-btn">
      {icon && <img src={icon} alt={text} className="sidebar-btn-icon" />}
      {text}
    </a>
  );
};

SidebarButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string, // Optional prop for icon image path
};

const Sidebar = () => {
  const { t } = useTranslation();
  
  return (
    <div className="sidebar">
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

export default Sidebar;
