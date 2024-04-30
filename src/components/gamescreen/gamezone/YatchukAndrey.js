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
  const [pos, setPos] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
    setShowBox(true);
  };

  const singleFunc = (e, imgElement, id) => {
    imgElement.src = single;
    e.target.innerHTML = '';
    e.target.appendChild(imgElement);
    setPos((prevPos) => [...prevPos, { type: 'single', x: id[0], y: id[1] }]);
    console.log(pos)
  }

  const doubleFunc = (e, imgElement, id) => {
    imgElement.src = double;
    e.target.innerHTML = '';
    e.target.appendChild(imgElement);
    setPos((prevPos) => [...prevPos, { type: 'double', x: id[0], y: id[1] }]);
    console.log(pos)
  }

  const tripleFunc = (e, imgElement, id) => {
    imgElement.src = triple;
    e.target.innerHTML = '';
    e.target.appendChild(imgElement);
    setPos((prevPos) => [...prevPos, { type: 'triple', x: id[0], y: id[1] }]);
    console.log(pos)
  }

  const ultimateFunc = (e, imgElement, id) => {
    imgElement.src = ultimate;
    e.target.innerHTML = '';
    e.target.appendChild(imgElement);
    setPos((prevPos) => [...prevPos, { type: 'ultimate', x: id[0], y: id[1] }]);
    console.log(pos)
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
      case "single":
        singleFunc(e, imgElement, e.target.id);
        break;
      case "double":
        doubleFunc(e, imgElement, e.target.id);
        break;
      case "triple":
        tripleFunc(e, imgElement, e.target.id);
        break;
      case "ultimate":
        ultimateFunc(e, imgElement, e.target.id);
        break;
      default:
        imgElement.src = '';
        break;
    }
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
