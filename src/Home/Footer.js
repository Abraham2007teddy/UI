import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaHome, FaInfoCircle, FaEnvelope, FaNewspaper, FaCertificate, FaBlog, FaBriefcase, FaLifeRing, FaBalanceScale, FaWhatsapp, FaInstagram, FaTelegram, FaMailBulk } from 'react-icons/fa';
import Wave from 'react-wavify';
import styled from '@emotion/styled';

const WaveContainer = styled.div`
  position: relative;
  width: 100%;
  height: 15vh;
  overflow: hidden;
  background-color: white;
  @media (max-width: 768px) {
    height: 10vh;
  }
`;

const StyledButton = styled.button`
  width: 300px;
  background: white;
  color: black;
  font-weight: bold;
  border: 2px solid black;
  border-radius: 50px;
  padding: 12px 20px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
  }
`;

const AnimatedLink = styled.a`
  color: white;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  &:hover {
    color: #ddd;
    transform: scale(1.1);
  }
`;

const AnimatedIcon = styled.a`
  color: white;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #ddd;
    transform: scale(1.2);
  }
`;

const AnimatedHeading = styled.h5`
  display: inline-block;
  position: relative;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #ddd;
  }
`;

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleStaffClick = () => {
    navigate('/register');
  };

  return (
    <div style={{ marginTop: '200px', backgroundColor: 'black', color: 'white' }}>
      <WaveContainer>
        <Wave fill="black" opacity="1" paused={false} options={{ height: 50, amplitude: 30, speed: 0.2, points: 2 }} />
      </WaveContainer>

      <div className="container">
        <footer className="py-4">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <AnimatedHeading>{t('quick_links')}</AnimatedHeading>
              <ul className="nav flex-column">
                <li className="nav-item"><AnimatedLink href="#"><FaHome /> {t('home')}</AnimatedLink></li>
                <li className="nav-item"><AnimatedLink href="about"><FaInfoCircle /> {t('about')}</AnimatedLink></li>
                <li className="nav-item"><AnimatedLink href="contact_experts"><FaEnvelope /> {t('contact')}</AnimatedLink></li>
                <li className="nav-item"><AnimatedLink href="#"><FaNewspaper /> {t('news')}</AnimatedLink></li>
                <li className="nav-item"><AnimatedLink href="certificates"><FaCertificate /> {t('certificates')}</AnimatedLink></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <AnimatedHeading>{t('resources')}</AnimatedHeading>
              <ul className="nav flex-column">
                <li className="nav-item"><AnimatedLink href="#"><FaBlog /> {t('blog')}</AnimatedLink></li>
                <li className="nav-item"><AnimatedLink href="career"><FaBriefcase /> {t('careers')}</AnimatedLink></li>
                <li className="nav-item"><AnimatedLink href="Consulting"><FaLifeRing /> {t('support')}</AnimatedLink></li>
                <li className="nav-item"><AnimatedLink href="business_ethics"><FaBalanceScale /> {t('business_ethics')}</AnimatedLink></li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <AnimatedHeading>{t('register_as_staff')}</AnimatedHeading>
                <p>{t('staff_only')}</p>
                <StyledButton onClick={handleStaffClick}>{t('staff')}</StyledButton>
              </form>
            </div>
          </div>

          <div className="text-center py-3">
            <p className="mb-0">© 2025 MMSH Company, Inc. {t('all_rights_reserved')}</p>
            <ul className="list-unstyled d-flex justify-content-center mt-2">
              <li className="ms-2">
                <AnimatedIcon href="https://t.me/logistikammsh">
                  <FaTelegram size={24} />
                </AnimatedIcon>
              </li>
              
              <li className="ms-2">
                <AnimatedIcon href="https://www.instagram.com/mmshlogistics?igsh=MW9mbjd0aXB0Y2xpdw==" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={24} />
                </AnimatedIcon>
              </li>

              <li className="ms-2">
                <AnimatedIcon href="https://mail.google.com/mail/?view=cm&fs=1&to=info@mmshlogistics.com" target="_blank" rel="noopener noreferrer">
                  <FaMailBulk size={24} />
                </AnimatedIcon>
              </li>

              <li className="ms-2">
                <AnimatedIcon href="https://wa.me/998945624282">
                  <FaWhatsapp size={24} />
                </AnimatedIcon>
              </li>
            </ul>
            <h6>Powered by MMSH Digital Team</h6>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
