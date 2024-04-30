import React from "react"
import logo from "../img/spaceships/double.png"

export const Ship = React.createContext()

function EletsDarya() {

    const handleOnDragStart = (e) => {
        e.dataTransfer.setData("ship", "single");
    };

    return (
        <div className="ship-section">
            <Ship.Provider value={<img src={logo} alt="Spaceship" />}>
                <div className="double">
                    <img src = {logo} />
                </div>
            </Ship.Provider>
            
            <div className="double">
                <img src = {logo} />
            </div>
            <div className="double">
                <img src = {logo} />
            </div>
            
        </div>
    )
}

export default EletsDarya