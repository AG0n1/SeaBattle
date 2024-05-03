import React from 'react';
import logo from "../img/spaceships/single.png";

export const Ship = React.createContext();

function YadlovskayaYulia() {

    const handleOnDragStart = (e) => {
        e.dataTransfer.setData("ship", "single");
        e.dataTransfer.setData("singleID", e.target.id);
    };

    return (
        <div className="ship-section">
            <Ship.Provider value={<img src={logo} alt="Spaceship" />}>
                <div className="single">
                    <img draggable onDragStart={handleOnDragStart} src={logo} alt="Spaceship" id="single0"/>
                </div>
            </Ship.Provider>

            <Ship.Provider value={<img src={logo} alt="Spaceship" />}>
                <div className="single">
                    <img draggable onDragStart={handleOnDragStart} src={logo} alt="Spaceship" id="single1"/>
                </div>
            </Ship.Provider>

            <Ship.Provider value={<img src={logo} alt="Spaceship" />}>
                <div className="single">
                    <img draggable onDragStart={handleOnDragStart} src={logo} alt="Spaceship" id="single2"/>
                </div>
            </Ship.Provider>

            <Ship.Provider value={<img src={logo} alt="Spaceship" />}>
                <div className="single" >
                    <img draggable onDragStart={handleOnDragStart} src={logo} alt="Spaceship" id="single3"/>
                </div>
            </Ship.Provider>        
        </div>
    );
}

export default YadlovskayaYulia;
