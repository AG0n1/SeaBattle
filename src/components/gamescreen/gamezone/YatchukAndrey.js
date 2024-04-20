import React, { useRef, useState, useContext } from 'react';
import { DragContext } from '../../DragContext';

function YatchukAndrey() {
    const { draggedItem } = useContext(DragContext);
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const columns = Array.from({ length: 10 }, (_, index) => index);
    const [showBox, setShowBox] = useState(false);
    const dropTargetRef = useRef(null);

    const handleDragOver = (e) => {
        e.preventDefault();
        setShowBox(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setShowBox(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setShowBox(false);
        console.log('Перетащенный элемент:', draggedItem);
    };

    return (
        <div
            ref={dropTargetRef}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
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
                            onDragOver={(e) => {
                                e.preventDefault();
                                e.target.style.boxShadow = "0px 0px 5px rgb(175, 175, 255) inset";
                            }}
                            onDragLeave={(e) => {
                                e.preventDefault();
                                e.target.style.boxShadow = "0px 0px 5px rgb(23, 23, 23) inset";
                            }}
                            onDrop={handleDrop}
                            className="hov cell"
                            id={`${rowIndex + 1}${col}`}
                        ></div>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
}

export default YatchukAndrey;
