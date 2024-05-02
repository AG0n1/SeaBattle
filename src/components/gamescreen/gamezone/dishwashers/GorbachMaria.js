import React from "react"
import logo from "../img/spaceships/ultimate.png"

export const Ship = React.createContext();

function GorbachMaria() {

    const handleOnDragStart = (e) => {
        e.dataTransfer.setData("ship", "ultimate");
    };

    return (
        <div className="ship-section">
            <Ship.Provider value={<img src={logo} alt="Spaceship" />}>
                <div className="ultimate">
                    <img draggable onDragStart={handleOnDragStart} src={logo} alt="Spaceship" />
                </div>
            </Ship.Provider>
        </div>
    )
}

export default GorbachMaria