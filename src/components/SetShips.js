import React, {useState} from 'react';
import YatchukAndrey from './gamescreen/gamezone/YatchukAndrey';
import BazevichDavid from './gamescreen/gamezone/BazevichDavid';


function App() {
    return (
        <div className="setShips">
            <div></div>

            <YatchukAndrey ongame="false" />

            <BazevichDavid />
        </div>
    );
}

export default App