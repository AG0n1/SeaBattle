import React from 'react';
import logo from "../img/spaceships/single.png";

function YadlovskayaYulia() {

    const handleOnDragStart = (e) => {
        // handleSetDraggedItem('single');
    }

    return (
        <div className="ship-section">
            <div className="single" draggable onDragStart={handleOnDragStart}>
                <img src={logo} alt="Spaceship" />
            </div>
            <div className="single" draggable onDragStart={handleOnDragStart}>
                <img src={logo} alt="Spaceship" />
            </div>
            <div className="single" draggable onDragStart={handleOnDragStart}>
                <img src={logo} alt="Spaceship" />
            </div>
            <div className="single" draggable onDragStart={handleOnDragStart}>
                <img src={logo} alt="Spaceship" />
            </div>
        </div>
    );
}

export default YadlovskayaYulia;
