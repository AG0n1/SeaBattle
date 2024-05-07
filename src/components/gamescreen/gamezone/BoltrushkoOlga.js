import React from 'react';

function BoltrushkoOlga() {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const columns = Array.from({ length: 10 }, (_, index) => index + 1);

  const check = (id) => {
    fetch('http://localhost:3001/shoot', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}` 
      },
      body: JSON.stringify({ id: id })
    })
    .then(res => res.json())
    .then(data => {
      if (data.isHitted) {
        alert("Попал")
      } else {
        alert("Не попал")
      }
    })
  }
  
  return (
    <div className="gamezone" id="enemyPlayer">
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
            <div
              key={`${row}${col}`}
              style={{
                background: `rgb(0,0,0,0)`,
              }}
              
              onClick={check}

              className="cell hov"
              id={`${row}${col}`}
            >

            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export default BoltrushkoOlga;
