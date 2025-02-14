import React, { useState } from 'react';
import './TableRow.css';

const TableRow = ({ indexof, rowData, onRowSelect, isSelected }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Handle row click to select/deselect
  const handleRowClick = () => {
    onRowSelect(indexof); // Notify parent about the selection
  };

  return (
    <tr 
      className={`${indexof % 2 === 0 ? 'even-table-row' : 'odd-table-row'} 
                  ${isSelected ? 'selected-row' : ''} 
                  ${isHovered ? 'hovered-row' : ''}`} 
      onClick={handleRowClick}
      onMouseEnter={() => setIsHovered(true)} // Set hovered state to true
      onMouseLeave={() => setIsHovered(false)} // Set hovered state to false
    >
      {rowData.map((data, index) => (
        <td className='table-cell' key={index}>{data}</td>
      ))}
    </tr>
  );
};

export default TableRow;