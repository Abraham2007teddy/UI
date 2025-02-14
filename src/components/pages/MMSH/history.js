import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HTMLFlipBook from 'react-pageflip';
import indicator from '../../../assets/images/MMSH/history/indicator.png';
import logo from '../../../assets/images/MMSH/history/logo-rm.png';
import './history.css';  

function History() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);

  const onFlip = (e) => {
    setCurrentPage(e.data);
  };

  return (
    <div className="make_margin_book">
      <div className="leftText">
        <h3>{t('click_text')}</h3>
        <img src={indicator} alt="indicator" style={{ width: '70px', marginLeft: '70px' }} />
      </div> 

      <HTMLFlipBook 
        width={600} 
        height={500} 
        startPage={currentPage}
        onFlip={onFlip}
        showCover={true}
      >
        <div className="CoverBook">
          <img src={logo} alt="MMSH Logo" style={{ width: '300px', marginLeft: '150px' }} />
          <h1>MMSH LOGISTICS HISTORY</h1>
        </div>

        <div className="demoPage">
          <h2>{t('birth_title')}</h2><br/>
          <p>{t('birth_text')}</p>
        </div>

        <div className="demoPage">
          <h2>{t('challenges_title')}</h2><br/>
          <p>{t('challenges_text')}</p>
        </div>

        <div className="demoPage">
          <h2>{t('expand_title')}</h2><br/>
          <p>{t('expand_text')}</p>
        </div>

        <div className="demoPage">
          <h2>{t('global_title')}</h2><br/>
          <p>{t('global_text')}</p>
        </div>

        <div className="demoPage">
          <h2>{t('career_title')}</h2><br/>
          <p>{t('career_text')}</p>
        </div>

        <div className="demoPage">
          <h2>{t('future_title')}</h2><br/>
          <p>{t('future_text')}</p>
        </div>

        <div className="CoverBook"><p>Made with 🤍 by Ibo</p></div>
      </HTMLFlipBook>
    </div>
  );
}

export default History;
