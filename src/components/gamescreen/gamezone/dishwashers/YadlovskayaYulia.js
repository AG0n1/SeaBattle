import React from 'react';
import logo from "../img/spaceships/single.png";

export const Ship = React.createContext();

function YadlovskayaYulia() {

    const handleOnDragStart = (e) => {
        e.dataTransfer.setData("ship", "single");
    };

    return (
        <div className="ship-section">
            <Ship.Provider value={<img src={logo} alt="Spaceship" />}>
                <div className="single" draggable onDragStart={handleOnDragStart}>
                    <img src={logo} alt="Spaceship" />
                </div>
            </Ship.Provider>

            <Ship.Provider value={<img src={logo} alt="Spaceship" />}>
                <div className="single" draggable onDragStart={handleOnDragStart}>
                    <img src={logo} alt="Spaceship" />
                </div>
            </Ship.Provider>

            <Ship.Provider value={<img src={logo} alt="Spaceship" />}>
                <div className="single" draggable onDragStart={handleOnDragStart}>
                    <img src={logo} alt="Spaceship" />
                </div>
            </Ship.Provider>

            <Ship.Provider value={<img src={logo} alt="Spaceship" />}>
                <div className="single" draggable onDragStart={handleOnDragStart}>
                    <img src={logo} alt="Spaceship" />
                </div>
            </Ship.Provider>        
        </div>
    );
}

export default YadlovskayaYulia;
