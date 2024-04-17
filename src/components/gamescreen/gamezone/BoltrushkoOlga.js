import React, { useState } from 'react';
import logo0 from "./img/0.png"
import logo1 from "./img/1.png"
import logo2 from "./img/2.png"

function BoltrushkoOlga() {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const columns = Array.from({ length: 10 }, (_, index) => index + 1);
  const logoArr = [logo0, logo1, logo2]
  const [showLogo, setShowLogo] = useState(true)
  const generateRandomPicture = () => {
    let res = Math.floor(Math.random() * 3);
    console.log(res);
    return res;
  };

  return (
    <div className="gamezone" id="enemyPlayer">
      <div className="cell"></div>
      {columns.map((col) => (
        <div key={col} className="cell cord">
          {col}
        </div>
      ))}
      {rows.map((row) => (
        <React.Fragment key={row}>
          <div className="cell cord">{row}</div>
          {columns.map((col) => (
            <div
              key={`${row}${col}`}
              style={{
                background: `url(${logoArr[Math.floor(Math.random() * 3)]})`,
              }}
              onClick={(e) => {
                e.target.style.background = "none"
              }}
              className="cell"
              id={`${row}${col}`
              }
            ></div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export default BoltrushkoOlga;
