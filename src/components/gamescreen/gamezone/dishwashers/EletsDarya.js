import React from "react"
import logo from "../img/spaceships/double.png"

export const Ship = React.createContext()

function EletsDarya() {

    const handleOnDragStart = (e) => {
        e.dataTransfer.setData("ship", "double");
    };

    return (
        <div className="ship-section">
            <Ship.Provider value={<img src={logo} alt="Spaceship" />}>
                <div className="double">
                    <img draggable onDragStart={handleOnDragStart} src = {logo} />
                </div>
            </Ship.Provider>
            
            <Ship.Provider value={<img src={logo} alt="Spaceship" />}>
                <div className="double">
                    <img draggable onDragStart={handleOnDragStart} src = {logo} />
                </div>
            </Ship.Provider>
            

            <Ship.Provider value={<img src={logo} alt="Spaceship" />}>
                <div className="double">
                    <img draggable onDragStart={handleOnDragStart} src = {logo} />
                </div>
            </Ship.Provider>
            
        </div>
    )
}

export default EletsDarya