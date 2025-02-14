import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import "./Sidebar.css"; // Import the CSS for Sidebar

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

const Additional = () => {
  const { t } = useTranslation();

  return (
    <div className="sidebar">
      <h5 className="m-2">{t("additional_services")}</h5>
      <SidebarButton href="Consulting" text={t("consulting")} />
      <SidebarButton href="Customs_Services" text={t("customs_services")} />
      <SidebarButton href="Insurance" text={t("insurance")} />
      <SidebarButton href="Project_Logistics" text={t("project_logistics")} />
      <SidebarButton href="Warehouse_Services" text={t("warehouse_services")} />
    </div>
  );
};

export default Additional;
