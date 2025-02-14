import React, { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import indicator from '../../../assets/images/MMSH/history/indicator.png';
import logo from '../../../assets/images/MMSH/history/logo-rm.png';
import './history.css';  // For additional styling

function History() {
  const [currentPage, setCurrentPage] = useState(0);  // Track current page

  const onFlip = (e) => {
    setCurrentPage(e.data);  // Update current page when flipped
  };

  return (
    <div className="make_margin_book">
      <div className="leftText">
        <h3>Click this book to learn more about MMSH's history</h3>
        <img src={indicator} alt="indicator" style={{ width: '70px', marginLeft: '70px' }} />
      </div> {/* Left text */}
      <HTMLFlipBook 
        width={600} 
        height={500} 
        startPage={currentPage}
        onFlip={onFlip}
        showCover={true}
      >
        <div className="CoverBook ">
            
            <img src={logo} alt="indicator" style={{ width: '300px', marginLeft: '150px' }} />
            <h1>MMSH LOGISTICS HISTORY</h1>
        </div>
        <div className="demoPage">1</div>
        <div className="demoPage">2</div>
        <div className="demoPage">3</div>
        <div className="demoPage">4</div>
        <div className="demoPage">5</div>
        <div className="demoPage">6</div>
        <div className="CoverBook"><p>Made with 🤍 by Ibo</p></div>
      </HTMLFlipBook>
    </div>
  );
}

export default History;
