import React from 'react';
import logo from "../img/spaceships/tripple.png"

export const Ship = React.createContext();

function PavlushkoPolina() {

    const handleOnDragStart = (e) => {
        e.dataTransfer.setData("ship", "triple");
    };

    return (
        <div className="ship-section">
            <Ship.Provider value={<img src={logo} alt="Spaceship" />}>
                <div className="triple">
                    <img draggable onDragStart={handleOnDragStart} src={logo} alt="Spaceship" />
                </div>
            </Ship.Provider>

            <Ship.Provider value={<img src={logo} alt="Spaceship" />}>
                <div className="triple">
                    <img draggable onDragStart={handleOnDragStart} src={logo} alt="Spaceship" />
                </div>
            </Ship.Provider>
        </div>
    )
}

export default PavlushkoPolina