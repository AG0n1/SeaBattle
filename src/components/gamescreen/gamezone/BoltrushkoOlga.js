import React from 'react';

function BoltrushkoOlga() {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const columns = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className="gamezone" id="currentPlayer">
      <div className="cell"></div>
      {columns.map((col) => (
        <div key={col} className="cell">
          {col}
        </div>
      ))}
      {rows.map((row) => (
        <React.Fragment key={row}>
          <div className="cell">{row}</div>
          {columns.map((col) => (
            <div key={`${row}${col}`} className="cell hov" id={`${row}${col}`}></div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export default BoltrushkoOlga;
