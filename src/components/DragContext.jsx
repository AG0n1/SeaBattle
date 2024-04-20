import React, { createContext, useState } from 'react';

export const DragContext = createContext();

export const DragProvider = ({ children }) => {
    const [draggedItem, setDraggedItem] = useState(null);

    const handleSetDraggedItem = (item) => {
        setDraggedItem(item);
    };

    return (
        <DragContext.Provider value={{ draggedItem, handleSetDraggedItem }}>
            {children}
        </DragContext.Provider>
    );
};
