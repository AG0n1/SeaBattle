import React from 'react';

function YatchukAndrey() {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const columns = Array.from({ length: 10 }, (_, index) => index + 1);
  let box = document.getElementById('box')

  return (
    <div className="gamezone" id="currentPlayer">
      <div className='displayNone' id="box"></div>
      <div className="cell"></div>
      {columns.map((col) => (
        <div draggable="false" key={col} className="cell cord">
          {col}
        </div>
      ))}
      {rows.map((row, rowIndex) => (
        <React.Fragment key={row}>
          <div draggable="false" className="cell cord">{row}</div>
          {columns.map((col, colIndex) => (
            <div 
              key={`${rowIndex}${colIndex}`} 
              onDragOver={(e) => {
                e.target.style.boxShadow = "0px 0px 5px green inset"
              }}
              onDragLeave={(e) => {
                // box.classList.add("displayNone")
                e.target.style.boxShadow = "0px 0px 5px rgb(23, 23, 23) inset"
              }}
              className="hov cell" 
              id={`${rowIndex + 1}${col}`}
            >

              {

              }

            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export default YatchukAndrey;
