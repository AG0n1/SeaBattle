import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Ship } from './dishwashers/YadlovskayaYulia';
import single from './img/spaceships/single.png'
import double from './img/spaceships/double.png'
import triple from './img/spaceships/tripple.png'
import ultimate from './img/spaceships/ultimate.png'
import start from "./img/Start.png"

function YatchukAndrey(settings) {
  
  const apiURL = 'http://46.56.192.83:3001/api'; 

  const ShipValue = React.useContext(Ship)
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const columns = Array.from({ length: 10 }, (_, index) => index);
  const [showBox, setShowBox] = useState(false);
  const [pos, setPos] = useState([]);

  const [shipData, setShipData] = useState([]);
  const addShip = (type, x, y) => {
    setShipData([...shipData, { type, x, y }]);
  }

  const [singleCounter, setSingle] = useState(0)
  const [doubleCounter, setDouble] = useState(0)
  const [tripleCounter, setTriple] = useState(0)
  const [ultimateCounter, setUltimate] = useState(0)

  let singleHide = document.getElementsByClassName('singlePlace')
  let doubleHide = document.getElementsByClassName('doublePlace')
  let tripleHide = document.getElementsByClassName('triplePlace')
  let ultimateHide = document.getElementsByClassName('ultimatePlace')

  const makeFetch = (e) => {
      
      e.dataTransfer.setData("positions", {
        x: 100, y: 100
      });
      fetch('http://localhost:3001/getPositions', {

          method: 'POST',
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem('token')}` 
          },
          body: JSON.stringify({
            0: {type: 'double', x: 2, y: 8},
            1: {type: 'single', x: '1', y: '8'},
            2: {type: 'single', x: '0', y: '8'},
            3: {type: 'single', x: '1', y: '9'},
            4: {type: 'single', x: '0', y: '9'},
            5: {type: 'double', x: 5, y: 5},
            6: {type: 'double', x: 3, y: 5},
            7: {type: 'triple', x: 5, y: 1},
            8: {type: 'triple', x: 5, y: 1},
            9: {type: 'ultimate', x: 5, y: 1},
            name: localStorage.getItem("name"),
            gameId: localStorage.getItem("gameId")
        })
      })

  }

  const handleDragOver = (e) => {
    e.preventDefault();
    e.target.style.boxShadow = "0px 0px 5px #ffcf10 inset";
    let numberCell = document.getElementById(`N${e.target.id[1]}`)
    numberCell.style.backgroundColor = 'white'
    let letterCell = document.getElementById(`L${parseInt(e.target.id[0]) + 1}`)
    letterCell.style.backgroundColor = 'white'
  };

  const singleFunc = (e, imgElement, id) => {
    if (singleCounter === 4) {
      return
    }
    setPos((prevPos) => [...prevPos, { type: 'single', x: parseInt(id[0]), y: parseInt(id[1])}]);
    addShip( 'single', parseInt(id[0]), parseInt(id[1]))
 
    singleHide[singleCounter].classList.remove('displayNone')
    singleHide[singleCounter].style.top = `${(parseInt(id[0]) * 50) + 50}px`
    singleHide[singleCounter].style.left = `${(parseInt(id[1]) * 50) + 50}px`
    setSingle(singleCounter + 1)

    let targetCell = document.getElementById(`${parseInt(e.target.id[0])}${parseInt(e.target.id[1])}`)
    targetCell.classList.add('notFree')

    const targetID = e.dataTransfer.getData("singleID")
    let targetElement = document.getElementById(targetID)
    targetElement.style.display = 'none'
  }

  const doubleFunc = (e, imgElement, id) => {
    if (doubleCounter == 3) {
      console.log('Неа')
      return
    }
    let cell = document.getElementById(`${parseInt(e.target.id[0])}${parseInt(e.target.id[1])}`)
    if (parseInt(id[1]) <= 8) {
      cell = document.getElementById(`${parseInt(e.target.id[0])}${parseInt(e.target.id[1])+1}`)
      if (cell.className.includes('notFree')) {
        e.target.style.boxShadow = 'none';
      } else {
        doubleHide[doubleCounter].classList.remove('displayNone')
        if (id[1] !== "9") {
          setPos((prevPos) => [...prevPos, {type: 'double', x: parseInt(id[0]), y: parseInt(id[1])}]);
          addShip( 'double', parseInt(id[0]), parseInt(id[1]))
          doubleHide[doubleCounter].style.top = `${(parseInt(id[0]) * 50) + 50}px`
          doubleHide[doubleCounter].style.left = `${(parseInt(id[1]) * 50) + 50}px`
        } else {
          setPos((prevPos) => [...prevPos, {type: 'double', x: (parseInt(id[0])), y: (parseInt(id[1]) - 1)}]);
          addShip( 'double', parseInt(id[0]), (parseInt(id[1]) - 1))
          doubleHide[doubleCounter].style.top = `${(parseInt(id[0]) * 50) + 50}px`
          doubleHide[doubleCounter].style.left = `${(parseInt(id[1]) * 50)}px`
        }
        setDouble(doubleCounter + 1)

        let targetCell = document.getElementById(`${parseInt(e.target.id[0])}${parseInt(e.target.id[1])}`)
        targetCell.classList.add('notFree')

        const targetID = e.dataTransfer.getData("doubleID")
        let targetElement = document.getElementById(targetID)
        targetElement.style.display = 'none'
      }
    } else {
      doubleHide[doubleCounter].classList.remove('displayNone')
      setPos((prevPos) => [...prevPos, {type: 'double', x: (parseInt(id[0])), y: (parseInt(id[1]) - 1)}]);
      addShip( 'double', parseInt(id[0]), (parseInt(id[1]) - 1))

      doubleHide[doubleCounter].style.top = `${(parseInt(id[0]) * 50) + 50}px`
      doubleHide[doubleCounter].style.left = `${(parseInt(id[1]) * 50)}px`
      setDouble(doubleCounter + 1)

      let targetCell = document.getElementById(`${parseInt(e.target.id[0])}${parseInt(e.target.id[1])-1}`)
      targetCell.classList.add('notFree')

      const targetID = e.dataTransfer.getData("doubleID")
      let targetElement = document.getElementById(targetID)
      targetElement.style.display = 'none'
    }
  }

  const tripleFunc = (e, imgElement, id) => {
    if (tripleCounter == 2) {
      console.log('Неа')
      return
    }
    let cell1 = document.getElementById(`${parseInt(e.target.id[0])}${parseInt(e.target.id[1])}`)
    let cell2 = document.getElementById(`${parseInt(e.target.id[0])}${parseInt(e.target.id[1])}`)

    if (parseInt(id[1]) <= 7) {
      cell1 = document.getElementById(`${parseInt(e.target.id[0])}${parseInt(e.target.id[1]) + 1}`)
      cell2 = document.getElementById(`${parseInt(e.target.id[0])}${parseInt(e.target.id[1]) + 2}`)

      if (cell1.className.includes('notFree') || cell2.className.includes('notFree')) {
        e.target.style.boxShadow = 'none';
      } else {
        tripleHide[tripleCounter].classList.remove('displayNone')
        if (parseInt(id[1]) >= 8) {
          setPos((prevPos) => [...prevPos, {type: 'triple', x: parseInt(id[0]), y: parseInt('7')}]);
          addShip( 'triple', parseInt(id[0]), parseInt('7'))
          tripleHide[tripleCounter].style.top = `${(parseInt(id[0]) * 50) + 50}px`
          tripleHide[tripleCounter].style.left = `${(7 * 50) + 50}px`
        } else {
          setPos((prevPos) => [...prevPos, {type: 'triple', x: (parseInt(id[0])), y: (parseInt(id[1]) - 1)}]);
          addShip( 'triple', parseInt(id[0]), (parseInt(id[1]) - 1))
          tripleHide[tripleCounter].style.top = `${(parseInt(id[0]) * 50) + 50}px`
          tripleHide[tripleCounter].style.left = `${(parseInt(id[1]) * 50) + 50}px`
        }
        setTriple(tripleCounter + 1)

        let targetCell = document.getElementById(`${parseInt(e.target.id[0])}${parseInt(e.target.id[1])}`)
        targetCell.classList.add('notFree')

        const targetID = e.dataTransfer.getData("tripleID")
        let targetElement = document.getElementById(targetID)
        targetElement.style.display = 'none'
      }
    } else {
      tripleHide[tripleCounter].classList.remove('displayNone')
      setPos((prevPos) => [...prevPos, {type: 'triple', x: parseInt(id[0]), y: parseInt('7')}]);
      addShip( 'triple', parseInt(id[0]), parseInt('7'))
      tripleHide[tripleCounter].style.top = `${(parseInt(id[0]) * 50) + 50}px`
      tripleHide[tripleCounter].style.left = `${(7 * 50) + 50}px`
      setTriple(tripleCounter + 1)

      let targetCell = document.getElementById(`${parseInt(e.target.id[0])}${parseInt(e.target.id[1])-1}`)
      targetCell.classList.add('notFree')

      const targetID = e.dataTransfer.getData("tripleID")
      let targetElement = document.getElementById(targetID)
      targetElement.style.display = 'none'
    }
  }

  const ultimateFunc = (e, imgElement, id) => {
    if (ultimateCounter == 1) {
      console.log('Неа')
      return
    }
    let cell11 = document.getElementById(`${parseInt(e.target.id[0])}${parseInt(e.target.id[1])}`)
    let cell12 = document.getElementById(`${parseInt(e.target.id[0])}${parseInt(e.target.id[1])}`)
    let cell13 = document.getElementById(`${parseInt(e.target.id[0])}${parseInt(e.target.id[1])}`)
    let cell20 = document.getElementById(`${parseInt(e.target.id[0])}${parseInt(e.target.id[1])}`)
    let cell21 = document.getElementById(`${parseInt(e.target.id[0])}${parseInt(e.target.id[1])}`)
    let cell22 = document.getElementById(`${parseInt(e.target.id[0])}${parseInt(e.target.id[1])}`)
    let cell23 = document.getElementById(`${parseInt(e.target.id[0])}${parseInt(e.target.id[1])}`)
    let cell30 = document.getElementById(`${parseInt(e.target.id[0])}${parseInt(e.target.id[1])}`)
    let cell31 = document.getElementById(`${parseInt(e.target.id[0])}${parseInt(e.target.id[1])}`)
    let cell32 = document.getElementById(`${parseInt(e.target.id[0])}${parseInt(e.target.id[1])}`)
    let cell33 = document.getElementById(`${parseInt(e.target.id[0])}${parseInt(e.target.id[1])}`)

    if (parseInt(id[0]) > 8 && parseInt(id[1]) > 7) {
      cell11 = document.getElementById(`${parseInt(e.target.id[0])}${parseInt(e.target.id[1])+1}`)
      cell12 = document.getElementById(`${parseInt(e.target.id[0])}${parseInt(e.target.id[1])+2}`)
      cell13 = document.getElementById(`${parseInt(e.target.id[0])}${parseInt(e.target.id[1])+3}`)
      cell20 = document.getElementById(`${parseInt(e.target.id[0])+1}${parseInt(e.target.id[1])}`)
      cell21 = document.getElementById(`${parseInt(e.target.id[0])+1}${parseInt(e.target.id[1])+1}`)
      cell22 = document.getElementById(`${parseInt(e.target.id[0])+1}${parseInt(e.target.id[1])+2}`)
      cell23 = document.getElementById(`${parseInt(e.target.id[0])+1}${parseInt(e.target.id[1])+3}`)
      cell30 = document.getElementById(`${parseInt(e.target.id[0])+2}${parseInt(e.target.id[1])}`)
      cell31 = document.getElementById(`${parseInt(e.target.id[0])+2}${parseInt(e.target.id[1])+1}`)
      cell32 = document.getElementById(`${parseInt(e.target.id[0])+2}${parseInt(e.target.id[1])+2}`)
    } else {
      if (parseInt(id[0]) >= 8) {
        ultimateHide[ultimateCounter].style.top = `${(7 * 50) + 50}px`
        setPos((prevPos) => [...prevPos, {type: 'ultimate', x: parseInt(id[0]), y: parseInt(id[1])}]);
        addShip( 'ultimate', parseInt(id[0]), parseInt(id[1]))
      } else {
        ultimateHide[ultimateCounter].style.top = `${(parseInt(id[0]) * 50) + 50}px`
        setPos((prevPos) => [...prevPos, {type: 'ultimate', x: parseInt('8'), y: parseInt(id[1])}]);
        addShip( 'ultimate', parseInt('8'), parseInt(id[1]))
      }
      if (parseInt(id[1]) >= 7) {
        ultimateHide[ultimateCounter].style.left = `${(6 * 50) + 50}px`
        setPos((prevPos) => [...prevPos, {type: 'ultimate', x: parseInt(id[0]), y: parseInt(id[1])}]);
        addShip( 'ultimate', parseInt(id[0]), parseInt(id[1]))
      } else {
        ultimateHide[ultimateCounter].style.left = `${(parseInt(id[1]) * 50) + 50}px`
        setPos((prevPos) => [...prevPos, {type: 'ultimate', x: parseInt(id[0]), y: parseInt('6')}]);
        addShip( 'ultimate', parseInt(id[0]), parseInt('6'))
      }
      setUltimate(ultimateCounter + 1)

      const targetID = e.dataTransfer.getData("ultimateID")
      let targetElement = document.getElementById(targetID)
      targetElement.style.display = 'none'
    }
    if (cell11.className.includes('notFree') ||
        cell12.className.includes('notFree') ||
        cell13.className.includes('notFree') ||
        cell20.className.includes('notFree') ||
        cell21.className.includes('notFree') ||
        cell22.className.includes('notFree') ||
        cell23.className.includes('notFree') ||
        cell30.className.includes('notFree') ||
        cell31.className.includes('notFree') ||
        cell32.className.includes('notFree') ||
        cell33.className.includes('notFree')) {
      e.target.style.boxShadow = 'none';
    } else {
      ultimateHide[ultimateCounter].classList.remove('displayNone')

      if (parseInt(id[0]) >= 8) {
        ultimateHide[ultimateCounter].style.top = `${(7 * 50) + 50}px`
        setPos((prevPos) => [...prevPos, {type: 'ultimate', x: parseInt(id[0]), y: parseInt(id[1])}]);
        addShip( 'ultimate', parseInt(id[0]), parseInt(id[1]))
      } else {
        ultimateHide[ultimateCounter].style.top = `${(parseInt(id[0]) * 50) + 50}px`
        setPos((prevPos) => [...prevPos, {type: 'ultimate', x: parseInt('8'), y: parseInt(id[1])}]);
        addShip( 'ultimate', parseInt('8'), parseInt(id[1]))
      }
      if (parseInt(id[1]) >= 7) {
        ultimateHide[ultimateCounter].style.left = `${(6 * 50) + 50}px`
        setPos((prevPos) => [...prevPos, {type: 'ultimate', x: parseInt(id[0]), y: parseInt(id[1])}]);
        addShip( 'ultimate', parseInt(id[0]), parseInt(id[1]))
      } else {
        ultimateHide[ultimateCounter].style.left = `${(parseInt(id[1]) * 50) + 50}px`
        setPos((prevPos) => [...prevPos, {type: 'ultimate', x: parseInt(id[0]), y: parseInt('6')}]);
        addShip( 'ultimate', parseInt(id[0]), parseInt('6'))
      }
      setUltimate(ultimateCounter + 1)

      const targetID = e.dataTransfer.getData("ultimateID")
      let targetElement = document.getElementById(targetID)
      targetElement.style.display = 'none'
    }
  }

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.target.style.boxShadow = "0px 0px 5px rgb(23, 23, 23) inset";

    let numberCell = document.getElementById(`N${e.target.id[1]}`)
    numberCell.style.backgroundColor = '#f5da70'
    let letterCell = document.getElementById(`L${parseInt(e.target.id[0]) + 1}`)
    letterCell.style.backgroundColor = '#f5da70'
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setShowBox(false);
    const shipType = e.dataTransfer.getData("ship");

    const imgElement = document.createElement("img");
    imgElement.className = shipType;

    let numberCell = document.getElementById(`N${e.target.id[1]}`)
    numberCell.style.backgroundColor = '#f5da70'
    let letterCell = document.getElementById(`L${parseInt(e.target.id[0]) + 1}`)
    letterCell.style.backgroundColor = '#f5da70'

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
  
  return (
    <div className="makeSpace">
            <div
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
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className="hov cell" 
                        id={`${rowIndex}${col}`}
                      >
                        {
                        
                        }
                      </div>
                    ))}
                  </React.Fragment>
                ))}
                <div className='displayNone hide singlePlace ship'>
                  <img src={single} />
                </div>
                <div className='displayNone hide singlePlace ship'>
                  <img src={single} />
                </div>
                <div className='displayNone hide singlePlace ship'>
                  <img src={single} />
                </div>
                <div className='displayNone hide singlePlace ship'>
                  <img src={single} />
                </div>
                
                <div className='displayNone hide doublePlace'>
                  <img src={double} />
                </div>
                <div className='displayNone hide doublePlace'>
                  <img src={double} />
                </div>
                <div className='displayNone hide doublePlace'>
                  <img src={double} />
                </div>

                <div className='displayNone hide triplePlace'>
                  <img src={triple} />
                </div>
                <div className='displayNone hide triplePlace'>
                  <img src={triple} />
                </div>

                <div className='displayNone hide ultimatePlace'>
                  <img src={ultimate} />
                </div>
            </div>
                    
              <div style={{display: settings.display}} className='link' id = "makeLinkDNone">
                  <Link onClick={makeFetch} className='linkToPlay' to="../../play">
                      <img src={start} className="linkToPlayImg" />
                  </Link>
              </div>
    </div>      
  );
}

export default YatchukAndrey;