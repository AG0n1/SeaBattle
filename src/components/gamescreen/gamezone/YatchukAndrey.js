import React from 'react';

function YatchukAndrey() {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const columns = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className="gamezone" id="currentPlayer">
      <div className="cell"></div>
      {columns.map((col) => (
        <div key={col} className="cell cord">
          {col}
        </div>
      ))}
      {rows.map((row, rowIndex) => (
        <React.Fragment key={row}>
          <div className="cell cord">{row}</div>
          {columns.map((col, colIndex) => (
            <div key={`${rowIndex}${colIndex}`} onClick={(e) => {
              e.target.style.background = "green"
            }} className="hov cell" id={`${rowIndex + 1}${col}`}>
              {/* You can add content here if needed */}
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export default YatchukAndrey;
