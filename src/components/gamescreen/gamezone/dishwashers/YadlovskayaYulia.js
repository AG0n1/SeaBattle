import React, { useContext } from 'react';
import logo from "../img/spaceships/single.png";
import { DragContext } from '../../../DragContext';

function YadlovskayaYulia() {
    const { handleSetDraggedItem } = useContext(DragContext);

    const handleOnDragStart = (e) => {
        handleSetDraggedItem('single');
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
