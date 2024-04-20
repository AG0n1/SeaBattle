import React from 'react';
import { DragProvider } from './DragContext';
import YatchukAndrey from './gamescreen/gamezone/YatchukAndrey';
import BazevichDavid from './gamescreen/gamezone/BazevichDavid';
function App() {
    return (
        <DragProvider>
            <div className="setShips">
                <YatchukAndrey />
                <BazevichDavid />
            </div>
        </DragProvider>
    );
}

export default App;
