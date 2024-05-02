import React from 'react';
import logo from "../img/spaceships/tripple.png"

export const Ship = React.createContext();

function PavlushkoPolina() {

    const handleOnDragStart = (e) => {
        e.dataTransfer.setData("ship", "triple");
        e.dataTransfer.setData("tripleID", e.target.id);
    };

    return (
        <div className="ship-section">
            <Ship.Provider value={<img src={logo} alt="Spaceship" />}>
                <div className="triple">
                    <img draggable onDragStart={handleOnDragStart} src={logo} alt="Spaceship" id="triple0" />
                </div>
            </Ship.Provider>

            <Ship.Provider value={<img src={logo} alt="Spaceship" />}>
                <div className="triple">
                    <img draggable onDragStart={handleOnDragStart} src={logo} alt="Spaceship" id="triple1" />
                </div>
            </Ship.Provider>
        </div>
    )
}

export default PavlushkoPolina