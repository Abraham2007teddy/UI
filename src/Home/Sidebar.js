import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBars, FaClipboardList, FaComments, FaUser, FaHome, FaAddressBook } from 'react-icons/fa';
import { Tooltip } from 'bootstrap';

const Sidebar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(window.location.pathname);
  const [isTop, setIsTop] = useState(true);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipInstances = [...tooltipTriggerList].map(el => new Tooltip(el));

    return () => {
      tooltipInstances.forEach(instance => instance.dispose());
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className="d-flex flex-column text-dark shadow"
        style={{
          position: 'fixed',
          top: 80,
          left: 0,
          marginTop: isTop ? '68px' : '0px',
          height: '100vh',
          width: isOpen ? '150px' : '0px',
          transition: 'width 0.1s ease',
          overflow: 'hidden',
          borderRight: isOpen ? '2px solid #ddd' : 'none',
          zIndex: 1040,
          paddingTop: '110px',
          backgroundColor: 'white',
        }}
      >
        {isOpen && (
          <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
            {[
              { path: "/", icon: <FaHome size={30} />, title: t('home'), description: t('home_desc') },
              { path: "/cargo", icon: <FaClipboardList size={30} />, title: t('orders'), description: t('orders_desc') },
              { path: "/messages", icon: <FaComments size={30} />, title: t('messages'), description: t('messages_desc') },
              { path: "/profile", icon: <FaUser size={30} />, title: t('profile'), description: t('profile_desc') },
              { path: "/contacts_number", icon: <FaAddressBook size={30} />, title: t('contacts'), description: t('contacts_desc') },
            ].map(({ path, icon, title, description }) => (
              <li key={path} className="nav-item position-relative">
                <a
                  href={path}
                  className={`nav-link py-3 border-bottom ${selected === path ? 'bg-dark text-white' : 'text-dark'}`}
                  title={title}
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  onClick={() => setSelected(path)}
                  style={{ position: "relative", transition: "background 0.3s ease-in-out" }}
                >
                  {icon}
                </a>
                {/* Hover Text */}
                <span
                  className="position-absolute bg-dark text-white rounded px-2 py-1"
                  style={{
                    fontSize: "12px",
                    top: "50%",
                    left: "100%",
                    whiteSpace: "nowrap",
                    opacity: 0,
                    transform: "translateY(-50%) translateX(5px)",
                    transition: "opacity 0.3s ease-in-out",
                    visibility: "hidden",
                  }}
                >
                  {description}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Toggle Button */}
      <button
        className="btn btn-dark"
        style={{
          position: 'fixed',
          width: "55px",
          top: '90px',
          left: '22px',
          zIndex: 1050,
          padding: '10px',
          transition: 'margin 0.3s ease',
          marginTop: isTop ? '80px' : '0',
          marginBottom: isTop ? '0' : '20px',
        }}
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <FaBars size={30} color="white" />
      </button>
    </div>
  );
};

export default Sidebar;
