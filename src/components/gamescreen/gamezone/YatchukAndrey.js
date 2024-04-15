import React from 'react';

function YatchukAndrey() {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const columns = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className="gamezone" id="enemyPlayer">
      <div className="cell"></div>
      {columns.map((col) => (
        <div key={col} className="cell">
          {col}
        </div>
      ))}
      {rows.map((row, rowIndex) => (
        <React.Fragment key={row}>
          <div className="cell">{row}</div>
          {columns.map((col, colIndex) => (
            <div key={`${rowIndex}${colIndex}`} className="cell" id={`${rowIndex + 1}${col}`}>
              {/* You can add content here if needed */}
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export default YatchukAndrey;
