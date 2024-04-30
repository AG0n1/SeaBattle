import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Ship } from './dishwashers/YadlovskayaYulia';
import single from './img/spaceships/single.png'
import double from './img/spaceships/double.png'
import triple from './img/spaceships/tripple.png'
import ultimate from './img/spaceships/ultimate.png'

function YatchukAndrey() {
  const ShipValue = React.useContext(Ship)
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const columns = Array.from({ length: 10 }, (_, index) => index);
  const [showBox, setShowBox] = useState(false);

  const [pos, setPos] = useState(
    [
      
    ]
  )

  const handleDragOver = (e) => {
    e.preventDefault();
    setShowBox(true);
  };

  const singleFunc = (imgElement, id) => {
    console.log(id)
    setPos({type: 'single'})
    imgElement.src = single;
  }

  const handleDragLeave = (e) => {
    e.preventDefault();
    setShowBox(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setShowBox(false);
    const shipType = e.dataTransfer.getData("ship");

    const imgElement = document.createElement("img");
    imgElement.className = shipType; 
    switch (shipType) {
        case "single": singleFunc(imgElement, e.target.id);
        break;

        case "double": imgElement.src = double; break;
        case "triple": imgElement.src = triple; break;
        case "ultimate": imgElement.src = ultimate; break;
        default: imgElement.src = ''; break;
    }

    e.target.innerHTML = '';
    e.target.appendChild(imgElement);

    console.log(shipType);
  };

  const handleCellDrop = (e) => {
    e.preventDefault();
    e.target.style.boxShadow = "0px 0px 50px rgb(23, 23, 23) inset";

    let numberCell = document.getElementById(`N${e.target.id[1]}`)
    numberCell.style.backgroundColor = 'rgb(175, 175, 255)'
    let letterCell = document.getElementById(`L${e.target.id[0]}`)
    letterCell.style.backgroundColor = 'rgb(175, 175, 255)'
    
  };
  
  return (
        <div 
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className="gamezone"
            id="currentPlayer"
        >
            {showBox && <div className="box" id="box"></div>}
            <div className="cell"></div>
            {columns.map((col) => (
                <div draggable="false" key={col} className="cell cord" id={`N${col}`}>
                {col}
                </div>
            ))}
            {rows.map((row, rowIndex) => (
                <React.Fragment key={row}>
                <div draggable="false" className="cell cord" id={`L${rowIndex + 1}`}>{row}</div>
                {columns.map((col, colIndex) => (
                    <div 
                    key={`${rowIndex}${colIndex}`} 
                    onDragOver={(e) => {
                        e.preventDefault();
                        e.target.style.boxShadow = "0px 0px 5px rgb(175, 175, 255) inset";

                        let numberCell = document.getElementById(`N${e.target.id[1]}`)
                        numberCell.style.backgroundColor = 'white'
                        let letterCell = document.getElementById(`L${e.target.id[0]}`)
                        letterCell.style.backgroundColor = 'white'
                    }}
                    onDragLeave={(e) => {
                        e.preventDefault();
                        e.target.style.boxShadow = "0px 0px 5px rgb(23, 23, 23) inset";

                        let numberCell = document.getElementById(`N${e.target.id[1]}`)
                        numberCell.style.backgroundColor = 'rgb(175, 175, 255)'
                        let letterCell = document.getElementById(`L${e.target.id[0]}`)
                        letterCell.style.backgroundColor = 'rgb(175, 175, 255)'
                    }}
                    onDrop={handleCellDrop}
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